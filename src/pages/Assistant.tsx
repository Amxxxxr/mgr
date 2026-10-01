import { useEffect, useRef, useState } from 'react'
import { Msg, S } from '../types'
import { Btn, SpeakBtn } from '../components/UI'
import VoiceButton from '../components/VoiceButton'
import { t } from '../utils/translations'
import { detectSkill, parseAge } from '../services/demoAI'
import { matchProgram } from '../services/recommendationService'
import { simplify } from '../services/aiService'
import { speak } from '../services/speechService'

const need = (x: Partial<S>) => (!x.skill ? 'qSkill' : x.age == null ? 'qAge' : 'qDistrict')

export default function Assistant({ s, set, go }: { s: S; set: (p: Partial<S>) => void; go: (x: any) => void }) {
  const lang = s.lang
  const [msgs, setMsgs] = useState<Msg[]>([{ from: 'bot', keys: [need(s)] }])
  const [mode, setMode] = useState<'mic' | 'type'>(s.entry === 'type' ? 'type' : 'mic')
  const [heard, setHeard] = useState<string | null>(null)
  const [draft, setDraft] = useState('')
  const [fail, setFail] = useState(false)
  const [round, setRound] = useState(0)
  const end = useRef<HTMLDivElement>(null)
  const text = (m: Msg) => m.text ?? m.keys!.map(k => t(lang, k)).join('\n\n')
  useEffect(() => { end.current?.scrollIntoView({ behavior: 'smooth' }) }, [msgs, heard, fail])
  useEffect(() => { speak(text(msgs[0]), lang) }, [])

  const bot = (keys: string[]) => { setMsgs(m => [...m, { from: 'bot', keys }]); speak(keys.map(k => t(lang, k)).join(' '), lang) }

  function submit(raw: string) {
    const input = raw.trim()
    if (!input) return
    setMsgs(m => [...m, { from: 'me', text: input }]); setHeard(null); setDraft(''); setFail(false)
    const n: Partial<S> = { skill: s.skill, age: s.age, district: s.district }
    const nd = need(s); let pre = 'ok'
    if (nd === 'qSkill') { const k = detectSkill(input); if (!k) return bot(['aiFail', 'qSkill']); n.skill = k; pre = 'okHelp' }
    else if (nd === 'qAge') { const a = parseAge(input); if (a == null) return bot(['aiFail', 'qAge']); if (a < 18) return bot(['ageLow']); n.age = a }
    else n.district = input
    if (n.skill && n.age != null && n.district) {
      set({ ...n, program: matchProgram(n.skill) })
      bot([pre, 'found']); setTimeout(() => go('result'), 1800); return
    }
    set(n); bot([pre, need(n)])
  }
  async function simpler(m: Msg) {
    const last = m.keys?.[m.keys.length - 1] ?? 'qSkill'
    const fb = t(lang, 'simple' + last.slice(1))
    const out = await simplify(text(m), lang, fb)
    setMsgs(x => [...x, { from: 'bot', text: out }]); speak(out, lang)
  }
  const onFail = () => { setFail(true); speak(t(lang, 'speechFail'), lang) }

  return (
    <div className="flex flex-col gap-4">
      {msgs.map((m, i) => m.from === 'me'
        ? <div key={i} className="self-end bg-gold/30 rounded-2xl px-4 py-3 max-w-[85%] whitespace-pre-line">{m.text}</div>
        : <div key={i} className="bg-white rounded-2xl p-4 shadow space-y-3">
            <p className="text-2xl whitespace-pre-line">{text(m)}</p>
            {i === msgs.length - 1 && <div className="grid grid-cols-2 gap-2">
              <SpeakBtn text={text(m)} lang={lang} />
              <Btn kind="soft" onClick={() => simpler(m)}>❓ {t(lang, 'dontUnderstand')}</Btn>
            </div>}
          </div>)}
      <div ref={end} />
      {heard !== null ? (
        <div className="bg-white rounded-2xl p-4 shadow space-y-3">
          <p>{t(lang, 'youSaid')}</p><p className="text-2xl font-bold">“{heard}”</p>
          <div className="grid grid-cols-2 gap-2">
            <Btn onClick={() => submit(heard)}>✓ {t(lang, 'send')}</Btn>
            <Btn kind="ghost" onClick={() => { setDraft(heard); setHeard(null); setMode('type') }}>✏️ {t(lang, 'edit')}</Btn>
          </div>
        </div>
      ) : mode === 'mic' ? (
        <div className="space-y-3">
          {fail && <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-4 text-xl">{t(lang, 'speechFail')}</div>}
          <VoiceButton key={round} lang={lang} autoStart={round > 0 || s.entry === 'mic'} onText={x => { setFail(false); setHeard(x) }} onFail={onFail} />
          {fail && <Btn kind="soft" onClick={() => { setFail(false); setRound(r => r + 1) }}>🎤 {t(lang, 'tryAgain')}</Btn>}
          <Btn kind="ghost" onClick={() => setMode('type')}>⌨️ {t(lang, fail ? 'typeInstead' : 'type')}</Btn>
        </div>
      ) : (
        <div className="space-y-3">
          <textarea value={draft} onChange={e => setDraft(e.target.value)} rows={3} placeholder={t(lang, 'ph')} aria-label={t(lang, 'ph')}
            onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); submit(draft) } }}
            className="w-full rounded-2xl border-2 border-sakhi p-4 text-2xl" />
          <div className="grid grid-cols-2 gap-2">
            <Btn onClick={() => submit(draft)} disabled={!draft.trim()}>✓ {t(lang, 'send')}</Btn>
            <Btn kind="ghost" onClick={() => { setMode('mic'); setRound(r => r + 1) }}>🎤 {t(lang, 'speak')}</Btn>
          </div>
        </div>
      )}
    </div>
  )
}
