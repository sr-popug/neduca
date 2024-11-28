import { Dispatch, SetStateAction } from 'react'

class KeyboardService {
  // первичная генирация слов
  firstGenerateWords(
    array: string[],
    farther: React.RefObject<HTMLSpanElement>,
    now: React.RefObject<HTMLSpanElement>
  ) {
    if (farther.current && now.current) {
      farther.current.innerHTML += array
        .map(() => array[Math.floor(Math.random() * array.length)] + ' ')
        .join('')
      now.current.innerHTML = farther.current.innerHTML.charAt(0)
      farther.current.innerHTML = farther.current.innerHTML.slice(1)

      // добавление активных кнопок на клавиатуру
      document
        .getElementById(now.current.innerHTML.toLowerCase())
        ?.classList.add('active')

      // добавление активного shift
      if (now.current.innerHTML.toLowerCase() !== now.current.innerHTML) {
        document.getElementById('Shift')?.classList.add('active')
      }
    }
  }
  // Скорость печати
  speedTyping(nowLetter: number, time: string) {
    return (
      Number(time.split(':')[1]) &&
      nowLetter /
        Number(
          time
            .split(':')
            .reduce((a: string, b: string): any => Number(a) * 60 + Number(b))
        )
    ).toFixed(1)
  }
  //   При нажатии верной клавиши
  trueKey(
    now: React.RefObject<HTMLSpanElement>,
    first: { current: boolean },
    farther: React.RefObject<HTMLSpanElement>,
    made: React.RefObject<HTMLSpanElement>,
    setTranslate: Dispatch<SetStateAction<number>>,
    javaScriptWords: String[],
    setNowLetter: Dispatch<SetStateAction<number>>,
    nowLetter: number,
    setTime: Dispatch<SetStateAction<string>>
  ) {
    // запуск таймера по клику на верную кнопку
    if (first.current) {
      console.log(nowLetter === 0, nowLetter)
      setInterval(() => {
        setTime(
          (prev: string) =>
            Math.floor(
              (Number(prev.split(':')[0]) * 60 +
                Number(prev.split(':')[1]) +
                1) /
                60
            ) +
            ':' +
            ((Number(prev.split(':')[0]) * 60 +
              Number(prev.split(':')[1]) +
              1) %
              60)
        )
      }, 1000)
    }
    // удаление активных кнопок
    if (now.current && farther.current && made.current) {
      document
        .getElementById(now.current.innerHTML.toLowerCase())
        ?.classList.remove('active')
      document.getElementById('Shift')?.classList.remove('active')

      // изменение активного символа в строке
      made.current.innerHTML += now.current.innerHTML
      now.current.innerHTML = farther.current.innerHTML.charAt(0)
      farther.current.innerHTML = farther.current.innerHTML.slice(1)

      // добавление нового слова когда пользователь проходит одно слово (доделать чтобы добавляло слова не только JS)
      if (now.current.innerHTML == ' ') {
        farther.current.innerHTML +=
          '' +
          javaScriptWords[Math.floor(Math.random() * javaScriptWords.length)]
      }
      // добавление активных кнопок на клавиатуру
      document
        .getElementById(now.current.innerHTML.toLowerCase())
        ?.classList.add('active')

      if (now.current.innerHTML.toLowerCase() !== now.current.innerHTML) {
        document.getElementById('Shift')?.classList.add('active')
      }

      setTranslate(prev => (prev += 11))
      setNowLetter(prev => (prev += 1))
      first.current = false
    }
  }
  //   изменение активной кнопки
}
export default KeyboardService
