import { Mail } from 'lucide-react'
import Image from 'next/image'
import './support.scss'

export default function SupportPage() {
  return (
    <article className='support-page'>
      <h1>Центр поддержки</h1>
      <section className='block'>
        <h2>Решение задач</h2>
        <p>
          Зачастую при решении задач у вас могуть появляется непредвиденные
          ошибки, для того чтобы их предотвратить настоятельно рекомендуем
          придерживаться следующих правил:
        </p>
        <ol>
          <li>
            Не следует изменять исходную функцию в{' '}
            <span>function declaration</span> на <span>array function</span> или{' '}
            <span>function expression</span> - это неизбежно приведёт к ошибкам
          </li>
          <li>Функция должна возвращать какое либо значение</li>
          <li>Весь ваш код должен быть внутри изначальной функции</li>
        </ol>
      </section>
      <section className='block'>
        <h2>Прохождение тестирования</h2>
        <p>
          Иногда, по не ясным нам причинам, при переходе на страницу теста
          пользователь видит только загрузку на протяжении более 10 секунд. В
          таком случае следует перезагрузить страницу.
        </p>
      </section>
      <section className='block-links block'>
        <h2>Служба поддержки</h2>
        <p>Если у вас еще остались вопросы, то вы можете написать нам:</p>
        <div className='links'>
          <a href='https://t.me/ant0njan' target='_blank' rel='noreferrer'>
            <Image
              src='/images/tg-logo.svg'
              alt='telegram'
              width={30}
              height={30}
            />
            <p>Telegram</p>
          </a>
          <a href='https://vk.com/artitosh' target='_blank' rel='noreferrer'>
            <Image
              src='/images/vk-logo.svg'
              alt='telegram'
              width={30}
              height={30}
            />
            <p>VK</p>
          </a>
          <a
            href='https://mailto:antonpower2101@gmail.com'
            target='_blank'
            rel='noreferrer'
          >
            <Mail width={30} height={30} color='#ffffff' />
            <p>Email</p>
          </a>
        </div>
      </section>
    </article>
  )
}
