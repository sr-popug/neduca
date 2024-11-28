'use client'
import CodeBlock from '@/components/common/CodeBlock/CodeBlock'
import TestsService from '@/services/tests.service'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { answerI } from '../page'
import './result.scss'

export default function Results() {
  const testService = new TestsService()
  const type = usePathname().split('/')[2]

  const answers = JSON.parse(window.localStorage.getItem('answers') || '')
  console.log(answers)
  const trueAnswers = testService.calcTrueAnswers(answers)
  return (
    <article className='answers-page'>
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
                <p>{answer.quest.quest}</p>
              </article>
              <div className='code-block'>
                <CodeBlock node={answer.quest.code} />
              </div>
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
                        answer.quest.variables.find(variable => {
                          return variable.true == true
                        })?.option
                      }
                    </p>
                  </div>
                )}
              </article>
              <article className='explanation'>
                <h3>Объяснение</h3>
                <p>{answer.quest.explanation}</p>
              </article>

              {i !== 7 && <hr className='line'></hr>}
            </li>
          )
        })}
      </ul>
      <Link href={`/tests/${type}`}>Решать заново!</Link>
    </article>
  )
}
