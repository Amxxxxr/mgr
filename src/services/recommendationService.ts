import data from '../data/skillPrograms.json'
import { Program } from '../types'
export const programs = data as unknown as Program[]
export const matchProgram = (category?: string) => programs.find(p => p.category === category)
