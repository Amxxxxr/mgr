import { useEffect, useRef, useState } from 'react'
import { Lang } from '../types'
import { listen } from '../services/speechService'
import { t } from '../utils/translations'
export default function VoiceButton({ lang, onText, onFail, autoStart }: { lang: Lang; onText: (s: string) => void; onFail: () => void; autoStart?: boolean }) {
  const [on, setOn] = useState(false)
  const ref = useRef<any>(null)
  const start = () => {
    if (on) return
    setOn(true)
    ref.current = listen(lang, onText, () => { setOn(false); onFail() }, () => setOn(false))
  }
  useEffect(() => { if (autoStart) start(); return () => ref.current?.abort?.() }, [])
  return (
    <div className="flex flex-col items-center gap-3">
      <button onClick={start} aria-label={t(lang, 'speak')} className={`w-32 h-32 rounded-full text-6xl text-white shadow-lg ${on ? 'bg-red-600 pulse' : 'bg-sakhi'}`}>🎤</button>
      <p className="text-2xl font-bold" aria-live="polite">{on ? '🔴 ' + t(lang, 'listening') : t(lang, 'speak')}</p>
    </div>
  )
}
