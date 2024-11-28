'use client'
import TestsService from '@/services/tests.service'
import useMiniModalStore from '@/store/miniModalStore'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import './test.scss'

import CodeBlock from '@/components/common/CodeBlock/CodeBlock'
import Loading from '@/components/common/Loading/Loading'
import { answerI, nowAnswerI, paginationI, question } from '@/types/testTypes'

export default function Test() {
  const testService = new TestsService()
  const setMiniModal = useMiniModalStore(state => state.setMiniModal)
  const type = usePathname().split('/')[2]
  const { push } = useRouter()

  const [questions, setQuestions] = useState<question[] | []>([])

  const [pagination, setPagination] = useState<paginationI>({
    done: 0,
    notDone: questions.length,
  })
  const [nowQuestion, setNowQuestion] = useState<number>(0)
  const answers = useRef<answerI[] | []>([])
  const [nowAnswer, setNowAnswer] = useState<nowAnswerI>({
    true: 'false',
    answer: '',
  })
  useEffect(() => {
    testService.getQuestions(type, setQuestions)
  }, [])

  useEffect(() => {
    console.log(questions)

    if (questions.length !== 0) {
      setPagination({
        done: 0,
        notDone: questions.length - 1,
      })
    }
  }, [questions])

  function goAnswer(e: React.FormEvent<HTMLInputElement>) {
    setNowAnswer({
      true: e.currentTarget.classList[0],
      answer: e.currentTarget.id,
    })
    console.log(123)
  }
  function answerNext(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    e.currentTarget.reset()

    if (nowAnswer.answer) {
      answers.current = [
        ...answers.current,
        {
          true: nowAnswer.true == 'true' ? true : false,
          quest: questions[nowQuestion],
          yourAnswer: nowAnswer.answer,
        },
      ]
      setNowAnswer({
        true: 'false',
        answer: '',
      })
      document.querySelectorAll('input[type=radio]').forEach(el => {
        if (el instanceof HTMLInputElement) {
          el.checked = false
        }
      })
      if (pagination.done !== questions.length - 1) {
        console.log(pagination)
        setPagination(prev => {
          return {
            done: (prev.done += 1),
            notDone: (prev.notDone -= 1),
          }
        })
        setNowQuestion(prev => (prev += 1))
      } else {
        if (answers.current) {
          testService.setAnswers(answers.current)
        }
        push('/tests/js/results')
      }
    } else {
      setMiniModal('❌ Выберете вариант ответа!')
      console.log(nowAnswer)
    }
  }

  return (
    <article className='test-page'>
      {!questions.length && <Loading />}
      <article className='pagination'>
        {[...Array(pagination.done)].map((el, i) => (
          <div key={i} className='dote done'></div>
        ))}
        <div className='dote now'></div>
        {[...Array(pagination.notDone)].map((el, i) => (
          <div key={i} className='dote not-done'></div>
        ))}
      </article>
      <article className='question'>
        {questions[nowQuestion] && questions[nowQuestion].quest}
      </article>
      {questions[nowQuestion] && questions[nowQuestion].code && (
        <CodeBlock node={questions[nowQuestion].code} />
      )}

      <form onSubmit={answerNext}>
        <div className='variables'>
          {questions[nowQuestion] &&
            questions[nowQuestion].variables.map((variable, i) => {
              return (
                <div key={i} className={`var ${variable.true}`}>
                  <input
                    className={variable.true + ''}
                    onChange={goAnswer}
                    type='radio'
                    id={`${variable.option}`}
                    name='var'
                  ></input>
                  <label htmlFor={`${variable.option}`}>
                    {variable.option}
                  </label>
                </div>
              )
            })}
        </div>
        <button type='submit' className='complete'>
          Ответить
        </button>
      </form>
    </article>
  )
}
