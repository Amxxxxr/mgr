import "dotenv/config";
import express from "express";
import fs from "node:fs";

const app = express();
app.use(express.json());

const KEY = process.env.GEMINI_API_KEY;
const MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";
const resources = JSON.parse(fs.readFileSync(new URL("./resources.json", import.meta.url), "utf8"));
const sessions = new Map();

const SYSTEM = `You are SakhiAI (சகி), a warm, patient voice assistant helping a first-time woman user with no English or tech background reach government skill-training, job and scheme resources in India.
For EVERY message, read the session state and recent turns and infer MEANING. Never rely on keywords or fixed flows.
- Resolve references ("இதுக்கு", "அது", "next step", "அடுத்தது என்ன?") against state.currentItem and state.goal. Ask which thing she means only if truly ambiguous.
- If she changes her goal, switch goal and keep known facts (age, location, education, skill).
- If she says she did not understand, simplify your previous reply; do not restart.
- She may mix Tamil/English, make mistakes, repeat, correct earlier facts, or ask unrelated things. Handle it naturally.
- Intents are open-ended: label whatever she wants with a short snake_case intent.
- Reply in her language and register, in 1-3 short, simple, friendly sentences, one question at a time.
- Use "resources" for suggestions. Only claim a source is official if its domain is .gov.in or .nic.in or listed in resources. Never invent schemes, fees, phone numbers or dates; if unsure, say so and set searchRequired=true.
- If you cannot do something, say plainly what you can and cannot do.
Return JSON matching the schema.`;

const S = (type, extra = {}) => ({ type, ...extra });
const schema = S("OBJECT", {
  properties: {
    reply: S("STRING"), intent: S("STRING"), mode: S("STRING"), goal: S("STRING", { nullable: true }),
    currentItem: S("STRING", { nullable: true }), language: S("STRING"),
    entities: S("OBJECT", { properties: {
      age: S("INTEGER", { nullable: true }), location: S("STRING", { nullable: true }),
      education: S("STRING", { nullable: true }), skill: S("STRING", { nullable: true }), other: S("STRING", { nullable: true }) } }),
    knownInformation: S("ARRAY", { items: S("STRING") }), missingInformation: S("ARRAY", { items: S("STRING") }),
    searchRequired: S("BOOLEAN"), locationRequired: S("BOOLEAN"), nextAction: S("STRING"), shouldContinueCurrentTask: S("BOOLEAN"),
  },
  required: ["reply", "intent", "mode", "language", "searchRequired", "locationRequired", "nextAction", "shouldContinueCurrentTask", "knownInformation", "missingInformation"],
});

async function gemini(body) {
  const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`, {
    method: "POST", headers: { "Content-Type": "application/json", "x-goog-api-key": KEY }, body: JSON.stringify(body),
  });
  if (!r.ok) throw new Error(`Gemini ${r.status}: ${(await r.text()).slice(0, 300)}`);
  const d = await r.json();
  return d.candidates?.[0]?.content?.parts?.map((p) => p.text || "").join("") || "";
}

const analyze = async (state, history, text) =>
  JSON.parse(await gemini({
    systemInstruction: { parts: [{ text: SYSTEM }] },
    contents: [{ role: "user", parts: [{ text: JSON.stringify({ state, history, resources, message: text }) }] }],
    generationConfig: { responseMimeType: "application/json", responseSchema: schema, temperature: 0.4 },
  }));

// Second pass: grounded Google Search, then a short friendly answer.
const compose = (state, a, text) =>
  gemini({
    systemInstruction: { parts: [{ text: SYSTEM.split("Return JSON")[0] + "Now answer in plain text only, using search results. Prefer official .gov.in/.nic.in sources and say which source it is." }] },
    contents: [{ role: "user", parts: [{ text: JSON.stringify({ state, analysis: a, message: text, resources }) }] }],
    tools: [{ google_search: {} }],
  });

app.post("/api/turn", async (req, res) => {
  const { sessionId = "anon", text = "" } = req.body || {};
  const s = sessions.get(sessionId) ?? { goal: null, currentItem: null, entities: {}, turns: [] };
  try {
    if (!KEY) { // demo fallback so the UI works without a key
      const reply = "Demo mode: add GEMINI_API_KEY to .env to enable the AI. / டெமோ முறை: .env-ல் GEMINI_API_KEY சேர்க்கவும்.";
      return res.json({ reply, ui: { intent: "demo", language: "ta", known: [], missing: [], goal: null } });
    }
    const a = await analyze({ goal: s.goal, currentItem: s.currentItem, entities: s.entities }, s.turns.slice(-12), text);
    let reply = a.reply;
    if (a.searchRequired) { try { reply = (await compose(s, a, text)) || reply; } catch (e) { console.error("search", e.message); } }
    const clean = Object.fromEntries(Object.entries(a.entities || {}).filter(([, v]) => v != null));
    s.entities = { ...s.entities, ...clean };
    s.goal = a.goal ?? s.goal;
    s.currentItem = a.currentItem ?? s.currentItem;
    s.turns.push({ role: "user", text }, { role: "model", text: reply });
    sessions.set(sessionId, s);
    res.json({ reply, ui: { intent: a.intent, mode: a.mode, language: a.language, goal: s.goal, known: a.knownInformation, missing: a.missingInformation, next: a.nextAction, locationRequired: a.locationRequired } });
  } catch (e) {
    console.error(e.message);
    res.status(500).json({ reply: "மன்னிக்கவும், ஒரு சிறிய பிரச்சனை. மீண்டும் சொல்லுங்கள். 🙏", ui: {} });
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`SakhiAI API on :${port}${KEY ? "" : " (demo mode, no key)"}`));
