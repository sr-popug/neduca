import { Difficult, issuesI, testCode } from '@/types/issuesTypes'
import { Dispatch, SetStateAction } from 'react'
import issuesJs, { issuesReact } from '../../public/data/issues'

class IssuesService {
  // перемешивание массива
  shuffle(array: Array<any>) {
    const cloneArray = array.slice()
    let currentIndex = cloneArray.length
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      ;[cloneArray[currentIndex], cloneArray[randomIndex]] = [
        cloneArray[randomIndex],
        cloneArray[currentIndex],
      ]
    }
    return cloneArray.splice(0, 5)
  }
  // получение массива по типу
  issuesType(type: string) {
    if (type == 'js') {
      return issuesJs
    }
    if (type == 'react') {
      return issuesReact
    }
  }
  // определение типа
  typeDeterminant(path: string) {
    return path.split('/')[2]
  }

  // выбор вопроса
  setIssue(
    difficult: Difficult,
    type: string,
    setIssue: Dispatch<SetStateAction<issuesI | undefined>>,
    prevId?: number
  ) {
    const arrayOfThisType =
      this.issuesType(type)
        ?.filter((el: issuesI) => el.difficulty == difficult)
        .filter((el: issuesI) => {
          if (el.id) return el.id !== prevId
          return true
        }) || []

    setIssue(
      arrayOfThisType[Math.floor(Math.random() * arrayOfThisType?.length)]
    )
  }
  // выбор вопроса на странице вопроса
  setPageIssue(id: number, type: string) {
    return this.issuesType(type)?.find((el: issuesI) => el.id == id)
  }

  // тест введенного пользователем кода
  testCode(
    setInstructionsActive: Dispatch<SetStateAction<boolean>>,
    output: React.RefObject<HTMLInputElement>,
    value: string,
    testText: string,
    testValues: Array<any>,
    setTrueValues: Dispatch<SetStateAction<testCode[]>>,
    setMiniModal: (str: string) => void
  ) {
    setTrueValues([])
    const localTrues: boolean[] = []
    try {
      new Function('return (' + value + `)(${testValues[0]})`)
    } catch (e) {
      return setMiniModal('Ошибка синтаксиса')
    }

    this.shuffle(testValues).forEach(testValue => {
      const parseOutput = new Function('return (' + value + `)(${testValue})`)
      const parseTestText = new Function(
        'return (' + testText + `)(${testValue})`
      )
      if (parseOutput(testValue) == parseTestText(testValue)) {
        localTrues.push(true)
        return setTrueValues(prev => [
          ...prev,
          {
            true: true,
            answers: [parseTestText(testValue), parseOutput(testValue)],
          },
        ])
      }
      localTrues.push(false)
      setTrueValues(prev => [
        ...prev,
        {
          true: false,
          answers: [parseTestText(testValue), parseOutput(testValue)],
        },
      ])
    })
    setInstructionsActive(false)
    if (localTrues.includes(false)) {
      setMiniModal('Неправильно')
    } else setMiniModal('Правильно')
    output.current && (output.current.checked = true)
  }
}
export default IssuesService
