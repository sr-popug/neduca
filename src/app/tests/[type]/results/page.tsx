'use client'
import CodeBlock from '@/components/common/CodeBlock/CodeBlock'
import TestsService from '@/services/tests.service'
import { answerI, variable } from '@/types/testTypes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import './result.scss'

export default function Results() {
  const testService = new TestsService()
  const type = usePathname().split('/')[2]
  const [answers, setAnswers] = useState<answerI[]>([])
  const [trueAnswers, setTrueAnswers] = useState<number>(0)
  useEffect(() => {
    setAnswers(JSON.parse(localStorage.getItem('answers') || ''))
    setTrueAnswers(
      testService.calcTrueAnswers(
        JSON.parse(localStorage.getItem('answers') || '')
      )
    )
  }, [])

  return (
    <article className='answers-page'>
      {!trueAnswers && (
        <article className='no-answers'>
          <header>
            <h3>Вы ещё не проходили этот тест</h3>
          </header>
          <Link href={`/tests/${type}`}>Решать тест!</Link>
        </article>
      )}
      {trueAnswers && (
        <>
          <header>
            <h3>{testService.phraseGen(trueAnswers)}</h3>
            <article className='quantity'>
              {trueAnswers + ''} / {answers.length} верных ответов
            </article>
          </header>
          <h2>Ваши Ответы:</h2>
          <ul>
            {answers.map((answer: answerI, i: number) => {
              return (
                <li key={i} className='answer'>
                  <article className='quest-block'>
                    <p
                      dangerouslySetInnerHTML={{ __html: answer.quest.quest }}
                    ></p>
                  </article>
                  {answer.quest.code && <CodeBlock node={answer.quest.code} />}
                  <article className='answers-flex'>
                    <div className={`my ${answer.true}`}>
                      <h4>Ваш ответ:</h4>
                      <p> {answer.yourAnswer}</p>
                    </div>
                    {!answer.true && (
                      <div className='true-answer'>
                        <h4>Правильный ответ:</h4>
                        <p>
                          {
                            answer.quest.variables.find(
                              (variable: variable) => {
                                return variable.true == true
                              }
                            )?.option
                          }
                        </p>
                      </div>
                    )}
                  </article>
                  <article className='explanation'>
                    <h3>Объяснение</h3>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: answer.quest.explanation,
                      }}
                    ></p>
                  </article>

                  {i !== 7 && <hr className='line'></hr>}
                </li>
              )
            })}
          </ul>
          <Link href={`/tests/${type}`}>Решать заново!</Link>
        </>
      )}
    </article>
  )
}
