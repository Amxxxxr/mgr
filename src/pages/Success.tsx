import { useState } from 'react'
import { S } from '../types'
import { Btn, SpeakBtn } from '../components/UI'
import { t } from '../utils/translations'
const OFFICIAL = (import.meta.env.VITE_OFFICIAL_URL as string) || '#'
export default function Success({ s, reset }: { s: S; reset: () => void }) {
  const lang = s.lang
  const [note, setNote] = useState(false)
  const msg = `${t(lang, 'successTitle')} ${t(lang, 'regNext')}`
  return (
    <div className="text-center space-y-4">
      <div className="text-7xl">🎉</div>
      <h1 className="text-3xl font-bold">{t(lang, 'successTitle')}</h1>
      <div className="bg-white rounded-3xl p-5 shadow text-left space-y-2">
        <p className="font-bold text-xl">✅ {t(lang, 'regDone')}</p>
        <p>{t(lang, 'regDoneSub')}</p>
        {['c1', 'c2', 'c3', 'c4'].map(k => <p key={k}>✓ {t(lang, k)}</p>)}
        <p className="font-semibold pt-2">{t(lang, 'regNext')}</p>
      </div>
      <SpeakBtn text={msg} lang={lang} />
      <Btn onClick={() => (OFFICIAL === '#' ? setNote(true) : window.open(OFFICIAL, '_blank', 'noopener'))}>{t(lang, 'openOfficial')}</Btn>
      {note && <p className="bg-gold/20 rounded-2xl p-3 text-sm" role="status">{t(lang, 'officialNote')}</p>}
      <Btn kind="ghost" onClick={reset}>{t(lang, 'again')}</Btn>
      <p className="text-sm">{t(lang, 'verify')}</p>
    </div>
  )
}
