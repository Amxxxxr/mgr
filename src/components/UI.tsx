import { Lang } from '../types'
import { speak } from '../services/speechService'
import { LANGS, t } from '../utils/translations'
export function Btn({ kind = 'primary', className = '', ...r }: any) {
  const k = kind === 'primary' ? 'bg-sakhi text-white' : kind === 'ghost' ? 'bg-white text-sakhi border-2 border-sakhi' : 'bg-gold/25 text-ink'
  return <button {...r} className={`w-full min-h-[64px] rounded-2xl px-5 py-3 text-xl font-semibold transition active:scale-95 ${k} ${className}`} />
}
export const SpeakBtn = ({ text, lang }: { text: string; lang: Lang }) => <Btn kind="soft" onClick={() => speak(text, lang)} aria-label={t(lang, 'listen')}>🔊 {t(lang, 'listen')}</Btn>
export const LanguageSelector = ({ lang, onChange }: { lang: Lang; onChange: (l: Lang) => void }) => (
  <div role="group" aria-label="Language" className="flex flex-wrap gap-2 justify-center">
    {LANGS.map(l => <button key={l.code} aria-pressed={lang === l.code} onClick={() => onChange(l.code)}
      className={`min-h-[48px] px-4 rounded-full text-lg font-semibold border-2 border-sakhi ${lang === l.code ? 'bg-sakhi text-white' : 'bg-white text-sakhi'}`}>{l.label}</button>)}
  </div>
)
export const Progress = ({ lang, done }: { lang: Lang; done: number }) => (
  <div className="flex items-center gap-1" aria-label={`${done}/6`}>
    {[1, 2, 3, 4, 5, 6].map(i => <span key={i} title={t(lang, 'p' + i)} className={`h-2 flex-1 rounded-full ${i <= done ? 'bg-sakhi' : 'bg-sakhi/20'}`} />)}
    <span className="text-sm pl-2 whitespace-nowrap">{done > 0 ? '✓ ' + t(lang, 'p' + done) : ''}</span>
  </div>
)
