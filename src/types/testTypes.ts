export interface paginationI {
  done: number
  notDone: number
}
export interface answerI {
  true: boolean
  quest: question
  yourAnswer: string
}
export interface nowAnswerI {
  true: string
  answer: string
}
export interface question {
  quest: string
  code: string
  variables: variable[]
  explanation: string
}
export interface variable {
  true: boolean
  option: string
}
