import { S } from '../types'
import { Btn } from '../components/UI'
import { t } from '../utils/translations'
export default function Welcome({ s, set, go }: { s: S; set: (p: Partial<S>) => void; go: (x: any) => void }) {
  return (
    <div className="flex flex-col items-center text-center gap-6 pt-6">
      <h1 className="text-5xl font-bold">{t(s.lang, 'hello')}</h1>
      <p className="text-2xl">{t(s.lang, 'hereHelp')}</p>
      <p className="text-2xl font-semibold">{t(s.lang, 'whatNeed')}</p>
      <button onClick={() => { set({ entry: 'mic' }); go('assistant') }} aria-label={t(s.lang, 'speak')}
        className="w-44 h-44 rounded-full bg-sakhi text-white text-7xl shadow-xl flex flex-col items-center justify-center">🎤<span className="text-2xl font-bold">{t(s.lang, 'speak')}</span></button>
      <Btn kind="ghost" onClick={() => { set({ entry: 'type' }); go('assistant') }}>⌨️ {t(s.lang, 'type')}</Btn>
    </div>
  )
}
