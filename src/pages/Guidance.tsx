import { useState } from 'react'
import { S } from '../types'
import { Btn, SpeakBtn } from '../components/UI'
import { t } from '../utils/translations'
import { simplify } from '../services/aiService'
import { speak } from '../services/speechService'
export default function Guidance({ s, set, go }: { s: S; set: (p: Partial<S>) => void; go: (x: any) => void }) {
  const lang = s.lang, n = s.step + 1
  const [simple, setSimple] = useState<string | null>(null)
  const body = t(lang, 's' + n)
  const move = (d: number) => { setSimple(null); set({ step: s.step + d }) }
  return (
    <div className="space-y-5">
      <p className="text-xl font-bold text-sakhi">{t(lang, 'stepOf', { a: n, b: 4 })}</p>
      <div className="bg-white rounded-3xl p-6 shadow min-h-[160px]"><p className="text-3xl font-semibold leading-snug">{body}</p></div>
      {simple && <p className="bg-gold/20 rounded-2xl p-4 text-xl">{simple}</p>}
      <div className="grid grid-cols-2 gap-2">
        <SpeakBtn text={body} lang={lang} />
        <Btn kind="soft" onClick={async () => { const o = await simplify(body, lang, t(lang, 's' + n + 's')); setSimple(o); speak(o, lang) }}>❓ {t(lang, 'dontUnderstand')}</Btn>
      </div>
      {n < 4 ? <Btn onClick={() => move(1)}>{t(lang, 'next')} →</Btn> : <Btn onClick={() => go('register')}>{t(lang, 'openForm')} →</Btn>}
      {n > 1 && <Btn kind="ghost" onClick={() => move(-1)}>← {t(lang, 'back')}</Btn>}
    </div>
  )
}
