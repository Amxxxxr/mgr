export type Lang = 'ta' | 'hi' | 'en' | 'te' | 'ml' | 'kn'
export type Screen = 'welcome' | 'assistant' | 'result' | 'guide' | 'register' | 'success'
export interface Program { id: string; category: string; months: number; mode: string; minAge: number; docs: string[]; location: string; registrationUrl: string; names: Record<Lang, string> }
export interface S { lang: Lang; screen: Screen; skill?: string; age?: number; district?: string; program?: Program; step: number; entry?: 'mic' | 'type' }
export interface Msg { from: 'bot' | 'me'; text?: string; keys?: string[] }
