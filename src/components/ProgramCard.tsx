import { Lang, Program } from '../types'
import { t } from '../utils/translations'
export default function ProgramCard({ p, lang }: { p: Program; lang: Lang }) {
  return (
    <div className="bg-white rounded-3xl p-5 shadow space-y-3">
      <p className="text-sakhi font-semibold">🎓 {t(lang, 'titleCard')}</p>
      <h2 className="text-3xl font-bold leading-snug">{p.names[lang]}</h2>
      <p>📍 {p.location} &nbsp; ⏱️ {t(lang, 'months', { n: p.months })} &nbsp; 💰 {t(lang, 'fee')}</p>
      <h3 className="font-bold pt-2">{t(lang, 'eligTitle')}</h3>
      <p>✅ {t(lang, 'minAge', { n: p.minAge })}</p>
      <h3 className="font-bold pt-2">{t(lang, 'docsTitle')}</h3>
      <ul>{p.docs.map(d => <li key={d}>✓ {t(lang, d)}</li>)}</ul>
      <p className="text-sm bg-gold/20 rounded-xl p-3">{t(lang, 'demoInfo')}</p>
    </div>
  )
}
