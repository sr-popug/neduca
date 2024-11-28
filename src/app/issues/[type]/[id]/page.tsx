'use client'

import CodeBlock from '@/components/common/CodeBlock/CodeBlock'
import Loader from '@/components/common/Loader/Loader'
import IssuesService from '@/services/isssues.service'
import useMiniModalStore from '@/store/miniModalStore'
import { testCode } from '@/types/issuesTypes'
import { Editor } from '@monaco-editor/react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { ChangeEvent, useReducer, useRef, useState } from 'react'
import './issue.scss'

export default function Issue() {
  const id = Number(usePathname().split('/')[3])
  const type = usePathname().split('/')[2]
  const router = useRouter()
  const issueService = new IssuesService()
  const issue = issueService.setPageIssue(id, type)
  const setMiniModal = useMiniModalStore(state => state.setMiniModal)

  const [, forceUpdate] = useReducer(x => x + 1, 0)

  const instruction = useRef<HTMLInputElement>(null)
  const output = useRef<HTMLInputElement>(null)

  const [instructionsActive, setInstructionsActive] = useState(true)
  const [value, setValue] = useState(issue?.defaultCode || '')
  const [theme, setTheme] = useState('vs-dark')
  const [trueValues, setTrueValues] = useState<testCode[]>([])

  const handleEditorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    forceUpdate()
  }

  function sendDecision() {
    issue &&
      issueService.testCode(
        setInstructionsActive,
        output,
        value,
        issue?.testCode,
        issue?.testValues,
        setTrueValues,
        setMiniModal
      )
  }

  return (
    <article className='issue-page'>
      <article className='head'>
        {' '}
        <Image
          width={35}
          height={35}
          alt={`${type}-logo`}
          src={`/images/${type}-logo.svg`}
        />
        <div className='title'>
          <h2>{issue?.title}</h2>
          <p>Difficulty: {issue?.difficulty}</p>
        </div>
      </article>
      <article className='flex'>
        <section className='left'>
          <nav>
            <ul>
              <li>
                <input
                  onClick={() => setInstructionsActive(true)}
                  type='radio'
                  name='quest'
                  ref={instruction}
                  defaultChecked={true}
                  id='quest'
                />
                <label htmlFor='quest'>Инструкции</label>
              </li>
              <li>
                <input
                  onClick={() => setInstructionsActive(false)}
                  type='radio'
                  name='quest'
                  ref={output}
                  id='output'
                />
                <label htmlFor='output'>Вывод</label>
              </li>
            </ul>
          </nav>
          {instructionsActive && (
            <article className='instructions'>
              <section className='text'>
                {issue?.quest.map((text, i) => {
                  switch (text.type) {
                    case 'text':
                      return (
                        <p
                          key={i}
                          dangerouslySetInnerHTML={{ __html: text.text }}
                        ></p>
                      )
                    case 'code':
                      return <CodeBlock node={text.text} key={i} />
                  }
                })}
              </section>
              <section className='example'>
                {issue && <CodeBlock node={issue?.example} />}
              </section>
            </article>
          )}
          {!instructionsActive && (
            <article className='output'>
              <ul>
                {trueValues.map((value, i) => {
                  if (value.true) {
                    return (
                      <li key={i}>
                        Вернулось <span>{value.answers[1]}</span> - верно
                      </li>
                    )
                  }
                  return (
                    <li key={i} className={'error'}>
                      Вернулось <span>{value.answers[1]}</span>, но ожидалось{' '}
                      <span>{value.answers[0]}</span>
                    </li>
                  )
                })}
              </ul>
            </article>
          )}
        </section>
        <section className='right'>
          <article className='decision'>
            <div className='top'>
              <h3>Решение</h3>
              <button
                className='change-theme'
                onClick={() =>
                  setTheme(prev => (prev == 'default' ? 'vs-dark' : 'default'))
                }
              >
                {theme === 'default' ? 'Тёмная' : 'Светлая'} тема
              </button>
            </div>
            <form>
              <Editor
                height='500px'
                width={`100%`}
                language={'javascript'}
                value={value}
                options={{
                  minimap: { enabled: false },
                }}
                theme={theme}
                defaultValue='// Ваш ответ здесь'
                onChange={() => handleEditorChange(event as any)}
                loading={<Loader />}
              />
            </form>
          </article>
          <div className='bottom'>
            <button onClick={sendDecision} className='submit'>
              Проверить!
            </button>
            <button onClick={() => router.push('/')}>
              Вeрнуться на главную
            </button>
          </div>
        </section>
      </article>
    </article>
  )
}
