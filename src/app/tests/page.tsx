import Image from 'next/image'
import Link from 'next/link'
import './tests.scss'
export default function Tests() {
  return (
    <article className='tests-page'>
      <h1>Выберете темы вопросов теста</h1>
      {/* <h2>Уровень сложности</h2>
      <form className='difficulty'>
        <div className='dif-mode'>
          <input
            defaultChecked={true}
            id='junior'
            name='js'
            type='radio'
            className='mode'
          ></input>
          <label htmlFor='junior'>Junior</label>
        </div>
        <div className='dif-mode'>
          <input id='middle' name='js' type='radio' className='mode'></input>
          <label htmlFor='middle'>Middle</label>
        </div>
        <div className='dif-mode'>
          <input id='senior' name='js' type='radio' className='mode'></input>
          <label htmlFor='senior'>Senior</label>
        </div>
      </form> */}
      <ul className='modes-list'>
        <li className='mode'>
          <h2>
            {' '}
            <Image
              width={30}
              height={30}
              alt='js'
              src='/images/js-logo.svg'
            />{' '}
            Базовый JavaScript
          </h2>

          <section className='bottom'>
            <Link href='/tests/js'>НАЧАТЬ!</Link>
            <p>
              <strong>205</strong> теоретических вопросов | <strong>110</strong>{' '}
              вопросов по коду
            </p>
          </section>
        </li>

        <li className='mode'>
          <h2>
            {' '}
            <Image
              width={30}
              height={30}
              alt='typescript'
              src='/images/ts-logo.svg'
            />{' '}
            TypeScript
          </h2>

          <section className='bottom'>
            <Link href='/tests/ts'>НАЧАТЬ!</Link>
            <p>
              <strong>134</strong> теоретических вопроса | <strong>31</strong>{' '}
              вопрос по коду{' '}
            </p>
          </section>
        </li>

        <li className='mode'>
          <h2>
            {' '}
            <Image
              width={30}
              height={30}
              alt='react'
              src='/images/react-logo.svg'
            />{' '}
            ReactJS
          </h2>

          <section className='bottom'>
            <Link href='/tests/react'>НАЧАТЬ!</Link>
            <p>
              <strong>121</strong> теоретический вопрос | <strong>21</strong>{' '}
              вопрос по коду{' '}
            </p>
          </section>
        </li>
      </ul>
    </article>
  )
}
