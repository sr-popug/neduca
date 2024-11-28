export enum Difficult {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}
export interface issuesI {
  id: number
  difficulty: string
  title: string
  quest: questI[]
  defaultCode: string
  testCode: string
  example: string
  testValues: Array<any>
}
export interface questI {
  type: string
  text: string
}
export interface themeI {
  value: string
  key: string
  label: string
}
export interface testCode {
  true: boolean
  answers: any[]
}
