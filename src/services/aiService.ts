import { Lang } from '../types'
const KEY = import.meta.env.VITE_AI_API_KEY as string | undefined
export const hasKey = !!KEY
const NAMES: Record<Lang, string> = { ta: 'Tamil', hi: 'Hindi', en: 'English', te: 'Telugu', ml: 'Malayalam', kn: 'Kannada' }
// Rewrites text in simpler words. Falls back to a prepared simple text if no key / any error.
// NOTE: a key in the browser is for demos only; proxy through a backend in production.
export async function simplify(text: string, lang: Lang, fallback: string): Promise<string> {
  if (!KEY) return fallback
  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-api-key': KEY, 'anthropic-version': '2023-06-01', 'anthropic-dangerous-direct-browser-access': 'true' },
      body: JSON.stringify({ model: 'claude-haiku-4-5-20251001', max_tokens: 200, messages: [{ role: 'user', content: `Rewrite this in very simple ${NAMES[lang]} for someone with no education and no tech knowledge. Max 2 short sentences. Never ask for OTP, password or PIN. Output only the rewrite.\n\n${text}` }] }),
    })
    const d = await r.json()
    return d.content?.[0]?.text?.trim() || fallback
  } catch { return fallback }
}
