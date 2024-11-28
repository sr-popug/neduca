import Image from 'next/image'
import Link from 'next/link'
import './keyboard-home.scss'
export default function Page() {
  return (
    <article className='keyboard-home'>
      <h1>Выберете режим тренажёра</h1>
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
          <p className='description'>
            Здесь собраны слова и словосочетания которые помогут вам научиться
            быстро печатать с использованием базового JavaScript
          </p>
          <section className='bottom'>
            <Link href='/keyboard-training/js'>НАЧАТЬ!</Link>
            <p>832 слова | 987 словосочетаний </p>
          </section>
        </li>

        <li className='mode'>
          <h2>
            {' '}
            <Image
              width={30}
              height={30}
              alt='next'
              src='/images/next-logo.svg'
            />{' '}
            NextJS
          </h2>
          <p className='description'>
            Здесь собраны слова и словосочетания которые помогут вам научиться
            быстро печатать с использованием фреймворке NextJS
          </p>
          <section className='bottom'>
            <Link href='/keyboard-training/next'>НАЧАТЬ!</Link>
            <p>611 слов | 270 словосочетаний </p>
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
          <p className='description'>
            Здесь собраны слова и словосочетания которые помогут вам научиться
            быстро печатать с использованием библиотеки ReactJS
          </p>
          <section className='bottom'>
            <Link href='/keyboard-training/react'>НАЧАТЬ!</Link>
            <p>513 слов | 142 словосочетания </p>
          </section>
        </li>
      </ul>
      <article className='what-is'>
        <div className='left'>
          <h3>Почему важен тренажёр именно по вашему профилю?</h3>
          <p>
            И нет сомнений, что сделанные на базе интернет-аналитики выводы
            могут быть разоблачены. Для современного мира курс на
            социально-ориентированный национальный проект является качественно
            новой ступенью новых принципов формирования материально-технической
            и кадровой базы. Внезапно, явные признаки победы институционализации
            освещают чрезвычайно интересные особенности картины в целом, однако
            конкретные выводы, разумеется, описаны максимально подробно. В
            рамках спецификации современных стандартов, многие известные
            личности призваны к ответу.{' '}
          </p>
        </div>
        <Image
          alt='keyboard'
          src='/images/keyboard.png'
          height={350}
          width={460}
        />
      </article>
    </article>
  )
}
