import { answerI, question } from '@/types/testTypes'
import { Dispatch, SetStateAction } from 'react'
import {
  testQuestionsJS,
  testQuestionsNext,
  testQuestionsReact,
} from '../../public/data/testQuestions'

class TestsService {
  shuffle(array: question[]) {
    let currentIndex = array.length
    while (currentIndex != 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      ;[array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ]
    }
    return array.splice(0, 9)
  }

  getQuestions(
    type: string,
    setQuestions: Dispatch<SetStateAction<question[] | []>>
  ) {
    if (type === 'js') {
      return setQuestions(this.shuffle(testQuestionsJS))
    }
    if (type === 'next') {
      return setQuestions(this.shuffle(testQuestionsNext))
    }
    if (type === 'react') {
      return setQuestions(this.shuffle(testQuestionsReact))
    }
  }
  setAnswers(answers: answerI[]) {
    window.localStorage.setItem('answers', JSON.stringify(answers))
  }

  calcTrueAnswers(answers: answerI[]): number {
    let trueAnswers = 0
    answers.map(answer => {
      if (answer.true) {
        trueAnswers++
      }
    })
    return trueAnswers
  }
  phraseGen(trueAnswers: number) {
    if (trueAnswers <= 3) {
      return 'Тебе стоит повторить базовые знания и вернутся позже.'
    }
    if (trueAnswers >= 4 && trueAnswers <= 6) {
      return 'Неплохо, Но есть куда стремиться!'
    }
    if (trueAnswers >= 7) {
      return 'Молодец! Продолжай в том же духе!'
    }
  }
}
export default TestsService
