'use client'
import IssuesService from '@/services/isssues.service'
import { Difficult, issuesI } from '@/types/issuesTypes'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import './issues.scss'

export default function Page() {
  const path = usePathname()
  const router = useRouter()
  const issuesService = new IssuesService()
  const type = useRef(issuesService.typeDeterminant(path))
  const [difficult, setDifficult] = useState<Difficult>(Difficult.EASY)
  const [issue, setIssue] = useState<issuesI>()

  useEffect(() => {
    issuesService.setIssue(difficult, type.current, setIssue)
  }, [difficult])

  function letDifficult(e: React.FormEvent<HTMLInputElement>) {
    ;(e.currentTarget.id == Difficult.EASY ||
      e.currentTarget.id == Difficult.HARD ||
      e.currentTarget.id == Difficult.MEDIUM) &&
      setDifficult(e.currentTarget.id)
  }
  function goIssue(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(difficult, type.current)
    router.push(`/issues/${type.current}/${issue?.id}`)
  }
  function getNewIssue() {
    issuesService.setIssue(difficult, type.current, setIssue, issue?.id)
  }

  return (
    <article className='issues-page'>
      <article className='main'>
        <article className='go-block'>
          <form onSubmit={goIssue} className='difficult-choose'>
            <div className='input-block'>
              <input
                defaultChecked={true}
                type='radio'
                name='difficulty'
                id={Difficult.EASY}
                onChange={letDifficult}
              />
              <label htmlFor='easy'>Основы</label>
            </div>
            <div className='input-block'>
              <input
                type='radio'
                onChange={letDifficult}
                name='difficulty'
                id={Difficult.MEDIUM}
              />
              <label htmlFor='medium'>Средний уровень</label>
            </div>
            <div className='input-block'>
              <input
                type='radio'
                onChange={letDifficult}
                name='difficulty'
                id={Difficult.HARD}
              />
              <label htmlFor='hard'>Сложный уровень</label>
            </div>

            <button type='submit'>Решить задачу!</button>
          </form>
        </article>
        <article className='quest'>
          <header>
            <Image
              width={30}
              height={30}
              alt={`${type.current}-logo`}
              src={`/images/${type.current}-logo.svg`}
            />
            <h3>{issue?.title}</h3>
          </header>

          <article className='quest-texts'>
            {issue?.quest.map((el, i) => {
              return (
                <p
                  key={i}
                  dangerouslySetInnerHTML={{ __html: el.text }}
                  className='quest-text'
                ></p>
              )
            })}
            <div className='background'></div>
          </article>
          <article className='bottom'>
            <button onClick={getNewIssue} className='another-issue'>
              Другая задача
            </button>
          </article>
        </article>
      </article>
      <article className='types-choose'>
        <Link
          href='/issues/js'
          className={`type ${path == '/issues/js' ? 'active' : ''}`}
        >
          <Image
            width={30}
            height={30}
            alt='js-logo'
            src='/images/js-logo.svg'
          />
          <p>Задачи JavaScript</p>
        </Link>

        {/* <Link
          href='/issues/ts'
          className={`type ${path == '/issues/ts' ? 'active' : ''}`}
        >
          <Image
            width={30}
            height={30}
            alt='typescript-logo'
            src='/images/ts-logo.svg'
          />
          <p>Задачи TypeScript</p>
        </Link> */}

        <Link
          href='/issues/react'
          className={`type ${path == '/issues/react' ? 'active' : ''}`}
        >
          <Image
            width={30}
            height={30}
            alt='react-logo'
            src='/images/react-logo.svg'
          />
          <p>Задачи ReactJS</p>
        </Link>
      </article>
    </article>
  )
}
