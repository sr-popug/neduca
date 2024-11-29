import {
  BadgeHelp,
  BookOpenCheck,
  FileCode2,
  Keyboard,
  LucideProps,
} from 'lucide-react'
import { Url } from 'next/dist/shared/lib/router/router'
import { ForwardRefExoticComponent } from 'react'

interface page {
  title: String
  name: String
  link: Url
  Img: ForwardRefExoticComponent<Omit<LucideProps, 'ref'>>
  description: String
  pages?: subpage[]
}
interface subpage {
  title: String
  name: String
  description?: String
  link: Url
}
interface group {
  groupName: String
  elements: page[]
}

const pagesConfig: group[] = [
  // {
  //   groupName: 'Сообщество',
  //   elements: [
  //     {
  //       name: 'news',
  //       title: 'Новости',
  //       description:
  //         'Новости нашего проекта, JavaScript, а также касающихся его фреймворков',
  //       link: '/news',
  //       Img: Newspaper,
  //     },
  //     {
  //       name: 'rating',
  //       title: 'Рейтинги',
  //       description:
  //         'Самые активные пользователи нашего сайта во всех категориях',
  //       link: '/rating',
  //       Img: Star,
  //     },
  //   ],
  // },
  {
    groupName: 'Обучение',
    elements: [
      {
        name: 'issues',
        title: 'Задачи',
        description:
          'Оттачивайте свои навыки в языке JavaScript и интересующих вас фреймворках',

        Img: FileCode2,
        link: '/issues',
        pages: [
          {
            name: 'js',
            title: 'Задачи по JavaScript',
            link: '/js',
          },
          {
            name: 'next',
            title: 'Задачи по NextJS',
            link: '/next',
          },
          {
            name: 'react',
            title: 'Задачи по ReactJS',
            link: '/react',
          },
        ],
      },
      {
        name: 'keyboard-training',
        title: 'Клавиатурные тренажёры',
        description:
          'Учитесь быстрой печати кода на интересующем вас фреймворке или на ванилиьной javaScript',
        link: '/keyboard-training',
        Img: Keyboard,
        pages: [
          {
            name: 'js',
            title: 'Тренажёр по JavaScript',
            description:
              'Здесь собраны слова и словосочетания которые помогут вам научиться быстро печатать с использованием базового JavaScript',
            link: '/js',
          },
          {
            name: 'next',
            title: 'Тренажёр по NextJS',
            description:
              'Здесь собраны слова и словосочетания которые помогут вам научиться быстро печатать с использованием фреймворка NextJS',
            link: '/next',
          },
          {
            name: 'react',
            title: 'Тренажёр по ReactJS',
            description:
              'Здесь собраны слова и словосочетания которые помогут вам научиться быстро печатать с использованием библиотеки ReactJS',
            link: '/react',
          },
        ],
      },
      {
        name: 'tests',
        title: 'Тесты',
        description:
          'Проходите тесты, похожие на собеседование и повышайте свою квалификацию.',
        link: '/tests',
        Img: BookOpenCheck,
        pages: [
          {
            name: 'js',
            title: 'Тесты JavaScript',
            link: '/js',
          },
          {
            name: 'next',
            title: 'Тесты NextJS',
            link: '/next',
          },
          {
            name: 'react',
            title: 'Тесты ReactJS',
            link: '/react',
          },
        ],
      },
    ],
  },
  {
    groupName: 'Другое',
    elements: [
      {
        name: 'support',
        title: 'Поддержка',
        description:
          ' Обратитесь к нам, если у вас возникли вопросы или вы хотите сообщить нам что-то важное',
        link: '/support',
        Img: BadgeHelp,
        pages: [],
      },
      // {
      // 	name: 'settings',
      // 	title: 'Настройки',
      // 	description: ' Изменение настроек видимости',
      // 	link: '/settings',
      // 	Img: '/images/settings-icon.svg',
      // }
    ],
  },
]
export default pagesConfig
