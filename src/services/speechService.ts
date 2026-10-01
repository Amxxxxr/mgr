import { Lang } from '../types'
export const LOC: Record<Lang, string> = { ta: 'ta-IN', hi: 'hi-IN', en: 'en-IN', te: 'te-IN', ml: 'ml-IN', kn: 'kn-IN' }
export function listen(lang: Lang, onText: (t: string) => void, onErr: (e: string) => void, onEnd: () => void) {
  const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
  if (!SR) { onErr('unsupported'); return null }
  const r = new SR()
  r.lang = LOC[lang]; r.interimResults = false; r.maxAlternatives = 1
  r.onresult = (e: any) => onText(e.results[0][0].transcript)
  r.onerror = (e: any) => { if (e.error !== 'aborted') onErr(e.error) }
  r.onend = onEnd
  try { r.start() } catch { onErr('start-failed') }
  return r
}
export function speak(text: string, lang: Lang) {
  if (!('speechSynthesis' in window)) return
  speechSynthesis.cancel()
  const u = new SpeechSynthesisUtterance(text.replace(/[\u{1F300}-\u{1FAFF}\u2600-\u27BF]/gu, ''))
  u.lang = LOC[lang]; u.rate = 0.85
  const v = speechSynthesis.getVoices().find(v => v.lang === LOC[lang])
  if (v) u.voice = v
  speechSynthesis.speak(u)
}
