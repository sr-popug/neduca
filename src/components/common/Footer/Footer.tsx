import Image from 'next/image'
import Link from 'next/link'
import './footer.scss'
export default function Footer() {
  return (
    <footer className='main-footer'>
      <div className='line'></div>

      <article className='background'>
        <div className='circle'></div>
      </article>
      <article className='content'>
        <section className='header'>
          <Image
            className='head-image'
            width={57}
            height={57}
            alt='main-logo'
            src='/images/logo-icon.svg'
          />
          <h2>О НАС</h2>
          <p>
            Уникальный проект созданный, чтобы помочь вам в изучении популярных
            фреймворков и библиотек экосистемы JS
          </p>
        </section>
        <nav>
          <article className='row'>
            <section className='group'>
              <h3>ПОДДЕРЖКА</h3>
              <ul>
                <li>
                  <Link href='/support'>Связаться с нами</Link>
                </li>
                <li>
                  <Link href='/policy'>Политика конфиденциальности</Link>
                </li>
              </ul>
            </section>
            <section className='group'>
              <h3>НОВОСТИ</h3>
              <ul>
                <li>
                  <Link href='/news?type=js'>Новости JavaScript</Link>
                </li>
                <li>
                  <Link href='/news?type=js'>Новости ReactJS</Link>
                </li>
                <li>
                  <Link href='/news?type=js'>Новости NextJS</Link>
                </li>
              </ul>
            </section>
          </article>
          <article className='row'>
            <section className='group'>
              <h3>РЕЙТИНГИ</h3>
              <ul>
                <li>
                  <Link href='/rating/lvl'>Уровень</Link>
                </li>
                <li>
                  <Link href='/rating/js_lvl'>Уровень JavaScript</Link>
                </li>
                <li>
                  <Link href='/rating/react_lvl'>Уровень React</Link>
                </li>
                <li>
                  <Link href='/rating/next_lvl'>Уровень NextJS</Link>
                </li>
                <li>
                  <Link href='/rating/points'>Очки</Link>
                </li>
              </ul>
            </section>
            <section className='group'>
              <h3>ЗАДАЧИ</h3>
              <ul>
                <li>
                  <Link href='/issues/react'>Задачи по React</Link>
                </li>
                <li>
                  <Link href='/issues/js'>Задачи по JavaScript</Link>
                </li>
                <li>
                  <Link href='/issues/next'>Задачи по NextJS</Link>
                </li>
              </ul>
            </section>
          </article>
          <article className='row'>
            <section className='group'>
              <h3>КЛАВИАТУРНЫЕ ТРЕНАЖЁРЫ</h3>
              <ul>
                <li>
                  <Link href='/keyboard-training/react'>Тренажёр по React</Link>
                </li>
                <li>
                  <Link href='/keyboard-training/js'>
                    Тренажёр по JavaScript
                  </Link>
                </li>
                <li>
                  <Link href='/keyboard-training/next'>Тренажёр по NextJS</Link>
                </li>
              </ul>
            </section>
          </article>
        </nav>
        <article className='bottom'>
          <p className='my-socials'>
            Сайт создал Цуканов Антон
            <Link href='https://www.youtube.com/@krendel42'>
              <Image
                className='head-image'
                width={20}
                height={20}
                alt='main-logo'
                src='/images/yt-icon.svg'
              />
            </Link>
            <Link href='https://t.me/Sr_pop'>
              <Image
                className='head-image'
                width={20}
                height={20}
                alt='main-logo'
                src='/images/tg-icon.svg'
              />
            </Link>
          </p>
          <p className='copyright'>Neduca - all rights reserved ©</p>
        </article>
      </article>
    </footer>
  )
}
