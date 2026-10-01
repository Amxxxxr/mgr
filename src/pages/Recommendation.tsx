import { S } from '../types'
import { Btn, SpeakBtn } from '../components/UI'
import ProgramCard from '../components/ProgramCard'
import { t } from '../utils/translations'
import { simplify } from '../services/aiService'
import { speak } from '../services/speechService'
import { useState } from 'react'
export default function Recommendation({ s, set, go }: { s: S; set: (p: Partial<S>) => void; go: (x: any) => void }) {
  const lang = s.lang, p = s.program!
  const [extra, setExtra] = useState('')
  const summary = `${t(lang, 'found')} ${p.names[lang]}. ${t(lang, 'askNext')}`
  return (
    <div className="space-y-4">
      <p className="text-2xl font-semibold">{t(lang, 'found')}</p>
      <ProgramCard p={p} lang={lang} />
      {extra && <p className="bg-white rounded-2xl p-4 text-xl">{extra}</p>}
      <div className="grid grid-cols-2 gap-2">
        <SpeakBtn text={summary} lang={lang} />
        <Btn kind="soft" onClick={async () => { const o = await simplify(summary, lang, t(lang, 'simpleFound')); setExtra(o); speak(o, lang) }}>❓ {t(lang, 'dontUnderstand')}</Btn>
      </div>
      <p className="text-2xl font-semibold pt-2">{t(lang, 'askNext')}</p>
      <Btn onClick={() => { set({ step: 0 }); go('guide') }}>{t(lang, 'yes')} →</Btn>
      <Btn kind="ghost" onClick={() => { set({ skill: undefined, program: undefined }); go('assistant') }}>{t(lang, 'other')}</Btn>
    </div>
  )
}
