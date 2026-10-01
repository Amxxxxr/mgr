// Deterministic fallback: works with no API key.
const K: Record<string, string[]> = {
  Tailoring: ['தையல்', 'tailor', 'stitch', 'sewing', 'garment', 'सिलाई', 'కుట్టు', 'തയ്യൽ', 'ಹೊಲಿಗೆ'],
  Digital: ['கணினி', 'கணிணி', 'கம்ப்யூட்டர்', 'computer', 'digital', 'कंप्यूटर', 'కంప్యూటర్', 'കമ്പ്യൂട്ടർ', 'ಕಂಪ್ಯೂಟರ್'],
  Beauty: ['அழகு', 'beauty', 'parlour', 'parlor', 'ब्यूटी', 'सौंदर्य', 'అందం', 'బ్యూటీ', 'സൗന്ദര്യ', 'ബ്യൂട്ടി', 'ಸೌಂದರ್ಯ', 'ಬ್ಯೂಟಿ'],
}
export function detectSkill(text: string): string | undefined {
  const s = text.toLowerCase()
  return Object.keys(K).find(k => K[k].some(w => s.includes(w)))
}
const ZEROS = [0x966, 0xBE6, 0xC66, 0xCE6, 0xD66]
export function parseAge(text: string): number | undefined {
  const ascii = [...text].map(c => { const n = c.charCodeAt(0); const z = ZEROS.find(z => n >= z && n <= z + 9); return z ? String(n - z) : c }).join('')
  const m = ascii.match(/\d{1,3}/)
  const a = m ? parseInt(m[0]) : NaN
  return a >= 1 && a <= 110 ? a : undefined
}
