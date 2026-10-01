import { useState } from 'react'
import { S } from '../types'
import { Btn } from '../components/UI'
import { t } from '../utils/translations'
export default function Registration({ s, go }: { s: S; go: (x: any) => void }) {
  const lang = s.lang
  const [f, setF] = useState({ name: '', age: String(s.age ?? ''), mobile: '', district: s.district ?? '' })
  const [err, setErr] = useState(false)
  const field = (k: keyof typeof f, label: string, mode?: any) => (
    <label className="block"><span className="font-semibold">{label}</span>
      <input value={f[k]} inputMode={mode} onChange={e => setF({ ...f, [k]: e.target.value })} className="mt-1 w-full rounded-2xl border-2 border-sakhi p-4 text-2xl bg-white" /></label>)
  return (
    <div className="space-y-4">
      <p className="bg-gold/30 rounded-2xl p-4 font-bold">{t(lang, 'demoReg')}</p>
      {field('name', t(lang, 'lName'))}
      {field('age', t(lang, 'lAge'), 'numeric')}
      {field('mobile', t(lang, 'lMobile'), 'numeric')}
      {field('district', t(lang, 'lDistrict'))}
      <div><span className="font-semibold">{t(lang, 'lTraining')}</span><p className="rounded-2xl bg-white p-4 text-2xl">{s.program!.names[lang]}</p></div>
      <p className="text-sm">{t(lang, 'verify')}</p>
      {err && <p className="text-red-700 font-semibold" role="alert">{t(lang, 'fillAll')}</p>}
      <Btn onClick={() => (f.name.trim() && f.mobile.replace(/\D/g, '').length === 10 ? go('success') : setErr(true))}>{t(lang, 'submit')}</Btn>
    </div>
  )
}
