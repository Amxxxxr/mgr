# SakhiAI — voice-first skill-training helper (hackathon prototype)

## Install & run
```
npm install
cp .env.example .env      # optional
npm run dev               # http://localhost:5173
```
## Environment variables
- `VITE_AI_API_KEY` (optional): enables LLM rewriting for "I don't understand". Empty = "Demo AI mode" (everything still works). A browser-side key is for demos only; proxy it via a backend in production.
- `VITE_OFFICIAL_URL`: target of "Open Official Resource" (default `#` shows a demo note).

## Test voice
Use Chrome or Edge on localhost/HTTPS, allow the microphone, press 🎤 and say "எனக்கு தையல் பயிற்சி வேண்டும்". If STT is unsupported or denied, the app shows "Try again" / "Type instead". Voice quality for ta/te/ml/kn depends on the browser's installed voices.

## Switch language
Language buttons are at the top of every screen (தமிழ் | हिंदी | English | తెలుగు | മലയാളം | ಕನ್ನಡ). Tamil is the default.

## Demo credentials
None. Nothing is stored or sent anywhere; the registration form is simulated.

## Architecture
- `App.tsx`: screen state machine + back history. One `S` state object (language, skill, age, district, program, step).
- `pages/`: Welcome → Assistant (one question at a time) → Recommendation → Guidance (one step at a time) → Registration (demo) → Success.
- `services/demoAI.ts`: keyword intent + age parsing (works offline, incl. Indic digits). `aiService.ts`: optional LLM simplifier. `recommendationService.ts`: dataset match. `speechService.ts`: SpeechRecognition + SpeechSynthesis.
- `utils/translations.ts`: all UI text; missing keys fall back to English. `data/skillPrograms.json`: demo programs.

## 2-minute demo script
1. Open app, Tamil selected. 2. Press 🎤: "எனக்கு தையல் பயிற்சி வேண்டும்". 3. Show "You said" → ✓ Send. 4. Answer "24", then "சென்னை". 5. Result card: eligibility, documents, duration, location. 6. Press ஆம், tap 🔊 on step 1, press ❓ on step 2. 7. Fill the demo form → success screen; point out the demo labels and OTP/password warning.

## Future improvements
Real LLM intent + slot filling via a backend proxy; real scheme data from official sources; full Telugu/Malayalam/Kannada copy review by native speakers; spoken-number parsing ("இருபத்து நான்கு"); offline PWA; WhatsApp/IVR channel; district-aware program search.
