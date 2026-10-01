import { useRef, useState } from 'react'
import { S, Screen } from './types'
import { LanguageSelector, Progress } from './components/UI'
import { hasKey } from './services/aiService'
import { t } from './utils/translations'
import Welcome from './pages/Welcome'
import Assistant from './pages/Assistant'
import Recommendation from './pages/Recommendation'
import Guidance from './pages/Guidance'
import Registration from './pages/Registration'
import Success from './pages/Success'

export default function App() {
  const [s, setS] = useState<S>({ lang: 'ta', screen: 'welcome', step: 0 })
  const hist = useRef<Screen[]>([])
  const set = (p: Partial<S>) => setS(x => ({ ...x, ...p }))
  const go = (screen: Screen) => { hist.current.push(s.screen); setS(x => ({ ...x, screen })) }
  const back = () => {
    const prev = hist.current.pop(); if (!prev) return
    setS(x => ({ ...x, screen: prev, ...(x.screen === 'result' ? { district: undefined, program: undefined } : {}) }))
  }
  const reset = () => { hist.current = []; setS({ lang: s.lang, screen: 'welcome', step: 0 }) }
  const done = s.screen === 'welcome' ? 0 : s.screen === 'assistant' ? (s.skill ? 1 : 0) + (s.age != null && s.district ? 1 : 0) : s.screen === 'result' ? 5 : 6
  const P = { s, set, go }
  return (
    <div className="max-w-md mx-auto min-h-screen px-4 pb-10 pt-4 space-y-4">
      <header className="space-y-3">
        <LanguageSelector lang={s.lang} onChange={l => set({ lang: l })} />
        {s.screen !== 'welcome' && <>
          <div className="flex items-center justify-between">
            <button onClick={back} className="min-h-[48px] px-3 font-semibold text-sakhi">← {t(s.lang, 'back')}</button>
            {!hasKey && <span className="text-xs bg-gold/30 rounded-full px-3 py-1">{t(s.lang, 'demoAI')}</span>}
          </div>
          <Progress lang={s.lang} done={done} />
        </>}
      </header>
      <main>
        {s.screen === 'welcome' && <Welcome {...P} />}
        {s.screen === 'assistant' && <Assistant key={s.lang + (s.skill ?? '')} {...P} />}
        {s.screen === 'result' && s.program && <Recommendation {...P} />}
        {s.screen === 'guide' && s.program && <Guidance {...P} />}
        {s.screen === 'register' && s.program && <Registration s={s} go={go} />}
        {s.screen === 'success' && s.program && <Success s={s} reset={reset} />}
      </main>
      {s.screen === 'welcome' && <p className="text-sm text-center">{t(s.lang, 'verify')}</p>}
    </div>
  )
}
