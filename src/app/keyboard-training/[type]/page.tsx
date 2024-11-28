'use client'
import KeyboardService from '@/services/keyboard.service'
import { usePathname } from 'next/navigation'
import { useLayoutEffect, useRef, useState } from 'react'
import { keyboard } from '../../../../public/data/keyboards-ids'
import {
  javaScriptWords,
  nextWords,
  reactWords,
} from '../../../../public/data/words'
import './training.scss'

export default function Page() {
  const [nowLetter, setNowLetter] = useState(0)
  const [time, setTime] = useState('00:00')
  const [errors, setErrors] = useState(0)
  const [typeName, setTypeName] = useState('')
  const [translate, setTranslate] = useState(0)

  const first = useRef<boolean>(true)
  const made = useRef<HTMLSpanElement>(null)
  const now = useRef<HTMLSpanElement>(null)
  const farther = useRef(null)
  const keyboardDiv = useRef(null)
  const KeyService = new KeyboardService()
  const type = usePathname().split('/')[2]
  useLayoutEffect(() => {
    // первая генерация слов
    switch (type) {
      case 'react':
        setTypeName('React JS')
        KeyService.firstGenerateWords(reactWords, farther, now)
        break
      case 'next':
        setTypeName('NEXT JS')
        KeyService.firstGenerateWords(nextWords, farther, now)
        break
      case 'js':
        setTypeName('JavaScript')
        KeyService.firstGenerateWords(javaScriptWords, farther, now)
        break
    }
    document.addEventListener('keydown', e => {
      if (now.current) {
        if (e.key == now.current.innerHTML) {
          return KeyService.trueKey(
            now,
            first,
            farther,
            made,
            setTranslate,
            javaScriptWords,
            setNowLetter,
            nowLetter,
            setTime
          )
        } else if (e.key != 'Shift' && e.key != 'Control') {
          setErrors(prev => (prev += 1))
        }
      }
    })
  }, [])

  return (
    <article className='training'>
      <h1>клавиатурный Тренажёр по {typeName}</h1>
      <article className='top'>
        {/* Бегущая строка */}
        <section className='stroke'>
          <div
            className='text'
            style={{ transform: `translateX(-${translate}px)` }}
          >
            <span ref={made} className='made'></span>
            <span ref={now} className='now'></span>
            <span ref={farther} className='farther'></span>
          </div>
        </section>
        {/* скорость ввода, времяЮ ошибки ввода */}
        <section className='info'>
          <article className='text-info'>
            <article className='time'>{time} </article>
            <article className='simvols'>{nowLetter} символов</article>
            <article className='speed'>
              {KeyService.speedTyping(nowLetter, time)} символ / сек
            </article>
            <article className='errors'>{errors} ошибок</article>
          </article>
        </section>
      </article>
      {/* Клавиатура */}
      <article ref={keyboardDiv} className='keyboard'>
        {keyboard.map(letter => {
          return (
            <div
              key={letter.id}
              className={`button ${letter.code}`}
              id={letter.sim}
            >
              {letter.sim}
            </div>
          )
        })}
      </article>
    </article>
  )
}
window.addEventListener('keydown', e => {
  if (e.key == ' ' && e.target === document.body) {
    e.preventDefault()
  }
})
