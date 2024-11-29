import { answerI, question } from '@/types/testTypes'
import { Dispatch, SetStateAction } from 'react'
import {
  testQuestionsJS,
  testQuestionsReact,
  testQuestionsTS,
} from '../../public/data/testQuestions'

class TestsService {
  // перемешивание массива
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

  // Получение вопросов
  getQuestions(
    type: string,
    setQuestions: Dispatch<SetStateAction<question[] | []>>
  ) {
    if (type === 'js') {
      return setQuestions(this.shuffle(testQuestionsJS))
    }
    if (type === 'ts') {
      return setQuestions(this.shuffle(testQuestionsTS))
    }
    if (type === 'react') {
      return setQuestions(this.shuffle(testQuestionsReact))
    }
  }

  // сохранение ответов в локальное хранилище
  setAnswers(answers: answerI[]) {
    localStorage.setItem('answers', JSON.stringify(answers))
  }

  // подсчет верных ответов
  calcTrueAnswers(answers: answerI[]): number {
    let trueAnswers = 0
    answers.map(answer => {
      if (answer.true) {
        trueAnswers++
      }
    })
    return trueAnswers
  }

  // генерация фразы по количеству верных ответов
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
