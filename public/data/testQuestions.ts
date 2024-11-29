import { question } from '@/types/testTypes'

const testQuestionsJS: question[] = [
  {
    quest:
      'Какой метод создаёт новую функцию, которая при вызове устанавливает в качестве this переданное значение?',
    code: `
function myFunction() {
  var x = document.getElementById("myAnchor").href;
  document.getElementById("demo").innerHTML = x;
}
    `,
    variables: [
      {
        true: false,
        option: 'Function.prototype.call()2',
      },
      {
        true: false,
        option: 'Function.prototype.toSource()2',
      },
      {
        true: true,
        option: 'Function.prototype.bind()2',
      },
      {
        true: false,
        option: 'Function.prototype.apply()2',
      },
    ],
    explanation:
      'Согласно актуальному стандарту JS, метод Function.prototype.bind() создает новую функцию, которая при вызове устанавливается в качестве контекста выполнения this заданного значения. В методе также передаётся набор аргументов, которые будут установлены перед переданными в аргументы аргументами аргументами при её вызове. ',
  },
  {
    quest: 'Какое будет выведено значение?',
    code: `let x = 5;
alert( x++ );`,
    variables: [
      {
        true: true,
        option: '5',
      },
      {
        true: false,
        option: '6',
      },
      {
        true: false,
        option: 'Другое.',
      },
    ],
    explanation:
      'В актуальном стандарте JavaScript при использовании оператора инкремента <span>++</span> в постфкисной форме (после операнда) - сначала возвращается исходное значение операнда, и только затем значение операнда увеличивается на единицу.',
  },
  {
    quest: 'Объявлена функция F. Чем является <span>F.prototype</span>?',
    code: `function F() {}`,
    variables: [
      {
        true: true,
        option: 'Обычным объектом.',
      },
      {
        true: false,
        option: 'Функцией.',
      },
      {
        true: false,
        option: 'Равен undefined.',
      },
    ],
    explanation: '',
  },
  {
    quest: 'Чему равно <span>2 && 1 && null && 0 && undefined</span> ?',
    code: ``,
    variables: [
      {
        true: false,
        option: '2',
      },
      {
        true: false,
        option: '1',
      },
      {
        true: true,
        option: 'null',
      },
      {
        true: false,
        option: '0',
      },
      {
        true: false,
        option: 'undefined',
      },
      {
        true: false,
        option: 'false',
      },
    ],
    explanation: '',
  },
  {
    quest:
      'Чему равен <span>typeof null</span> в режиме <span>use strict</span>?',
    code: ``,
    variables: [
      {
        true: false,
        option: 'null',
      },
      {
        true: true,
        option: 'object',
      },
      {
        true: false,
        option: 'undefined',
      },
      {
        true: false,
        option: 'string',
      },
    ],
    explanation:
      'Из-за особенностей интерпретатора JavaScript, в любом режиме  <span>typeof null</span>  равно <span>object</span>',
  },
  {
    quest: 'Что выведет этот код?',
    code: `alert( 20e-1['toString'](2) );`,
    variables: [
      {
        true: false,
        option: '2',
      },
      {
        true: true,
        option: '10',
      },
      {
        true: false,
        option: '20',
      },
      {
        true: false,
        option: 'NaN',
      },
      {
        true: false,
        option: 'В коде ошибка.',
      },
    ],
    explanation: '',
  },
  {
    quest: 'Внимательно посмотрите на синтаксис этого кода. Что он выведет?',
    code: `let f = function(x) {
  alert(x)
}

(function() {
  f(1)
}())`,
    variables: [
      {
        true: false,
        option: 'Никакого результата.',
      },
      {
        true: false,
        option: 'Выведет 1.',
      },
      {
        true: false,
        option: 'Выведет undefined.',
      },
      {
        true: true,
        option: 'Будет ошибка.',
      },
    ],
    explanation:
      'Из-за отсутствия ; после } интерпретатор считает приведенный код не двумя независимыми блоками, а одним <span>let f = (function (){...})(function(){...}())</span>. Таким образом самовызывающаяся функция считается параметром функции, которую присваивают в переменную f. И так как параметры вычисляются до вызова самой функции, выполнение самовызывающейся функции происходит до присвоения f какого либо значения.',
  },
  {
    quest: 'Сработает ли выполнение функции <span>sayHi</span>?',
    code: `sayHi();

function sayHi() {
  alert("Hello");
}`,
    variables: [
      {
        true: true,
        option: 'Да, сработает.',
      },
      {
        true: false,
        option: 'Нет, вызов должен стоять после объявления.',
      },
    ],
    explanation:
      'Так как функция объявлена в виде <span>function declaration</span>, то она может быть вызвана до её объявления из-за явления всплытия (<span>hoisting</span>).',
  },
  {
    quest: 'Что выведет этот код?',
    code: `function User() { }
User.prototype = { admin: false };

let user = new User();

User.prototype = { admin: true };

alert(user.admin);`,
    variables: [
      {
        true: false,
        option: 'undefined',
      },
      {
        true: true,
        option: 'false',
      },
      {
        true: false,
        option: 'true',
      },
    ],
    explanation:
      'экземпляр класса для свойств не примитивного типа присваивает ссылку, а для свойств примитивного присваивает само значение. Отсюда <span>user.admin = false</span>',
  },
]
//
//
//
//
//
//
//
//
//

const testQuestionsReact: question[] = [
  {
    quest: 'Как выполнить рендеринг элементов массива?',
    code: ``,
    variables: [
      {
        true: true,
        option: 'C помощью метода map()',
      },
      {
        true: false,
        option: 'C помощью метода map() или forEach()',
      },
      {
        true: false,
        option: 'C встроенного в React метода React.renderArray()',
      },
    ],
    explanation:
      'В React рендеринг элементов массива осуществляется только с помощью метода <span>map()</span>, так как он, в отличие от <span>forEach()</span>, не просто проходиться по массиву но и возвращает новый массив.',
  },
  {
    quest: 'Чем свойства отличаются от состояний?',
    code: ``,
    variables: [
      {
        true: false,
        option:
          'Состояния для работы со значениями, свойства для работы с функциями',
      },
      {
        true: true,
        option: 'Состояния можно изменять, свойства нельзя',
      },
      {
        true: false,
        option:
          'Свойства для работы со значениями, состояния для работы с функциями',
      },
      {
        true: false,
        option: 'Свойства можно изменять, состояния нельзя',
      },
    ],
    explanation:
      'Свойства в реакте призваны сохранять постоянное значение при изменении компонента и его состояния. Именно поэтому они не могут быть изменены, а состояния могут.',
  },
  {
    quest: 'Что делает хук <span>useMemo</span>?',
    code: ``,
    variables: [
      {
        true: false,
        option: 'Доступ к значению контекста React в функциональном компоненте',
      },

      {
        true: false,
        option:
          'Мемоизация функций для предотвращения ненужных повторных рендеров',
      },
      {
        true: true,
        option:
          'Запоминает значения вычислений с целью повышения производительности за счет кэширования ресурсоемких вычислений',
      },
    ],
    explanation:
      'Хук <span>useMemo</span> нужен для запоминания значений с целью повышения производительности за счет кэширования ресурсоемких вычислений. ',
  },
  {
    quest: 'Что такое управляемые компоненты?',
    code: ``,
    variables: [
      {
        true: false,
        option: 'Компоненты, состоянием которых управляют дочерние компоненты.',
      },
      {
        true: false,
        option:
          'Компоненты, которые управляют своим состоянием самостоятельно с помощью ссылок или других методов.',
      },
      {
        true: true,
        option: 'Это компоненты, состояние которых контролируется React.',
      },
      {
        true: false,
        option: 'Компоненты не имеющие реквизиты (<span>props</span>).',
      },
    ],
    explanation:
      '<strong>Управляемые компоненты</strong> – это компоненты, состояние которых контролируется React. Компонент получает свое текущее значение и обновляет его через реквизиты <span>props</span>. При изменении значения он также запускает функцию обратного вызова. Это означает, что компонент не хранит собственное внутреннее состояние – вместо этого родительский компонент управляет им и передает значение управляемому компоненту.',
  },
  {
    quest:
      ' Является ли методом жизненного цикла <span>shouldComponentUpdate</span>?',
    code: ``,
    variables: [
      {
        true: true,
        option: 'Да.',
      },
      {
        true: false,
        option: 'Нет.',
      },
      {
        true: false,
        option: 'Только в классовых компонентах.',
      },
      {
        true: false,
        option: 'Только в функциональных компонентах.',
      },
    ],
    explanation:
      '<span>shouldComponentUpdate</span> — отличное место для повышения производительности, поскольку оно позволяет предотвратить повторный рендеринг, если компонент получает новый <span>props</span>. <span>shouldComponentUpdate</span> всегда должен возвращать логическое значение, и на его основе будет определяться, будет ли компонент перерисован или нет.',
  },
  {
    quest: 'Что такое компоненты высшего порядка?',
    code: ``,
    variables: [
      {
        true: false,
        option: 'Родительский компонент всего приложения',
      },
      {
        true: true,
        option:
          'это компонент, который принимает компонент и возвращает новый компонент.',
      },
      {
        true: false,
        option:
          'Комоненты, которые управляют своим состоянием самостоятельно с помощью ссылок или других методов.',
      },
      {
        true: false,
        option: 'Компоненты, не имеющие реквизиты.',
      },
    ],
    explanation:
      '<strong>Компонент высшего порядка</strong> (Higher Order Component, HOC) — это компонент, который принимает компонент и возвращает новый компонент. HOC позволяют повторно использовать код и инициализировать компонент. ',
  },
  {
    quest: 'Что такое ReactFiber?',
    code: ``,
    variables: [
      {
        true: false,
        option: 'Механизм копирующий Shadow DOM, но в более легком виде',
      },
      {
        true: true,
        option:
          'Механизм согласования содержащий служебную информацию компонентов React',
      },
      {
        true: false,
        option:
          'Компонент, который управляет элементами ввода в формах при последующем вводе данных пользователем',
      },

      {
        true: false,
        option: 'Новый траспилятор JSX в React v16',
      },
    ],
    explanation:
      '<bold>Fiber</bold> — это новый механизм согласования или повторная реализация основного алгоритма в React v16. Цель <span>React Fiber</span — повысить его пригодность для таких областей, как анимация, макет, жесты, возможность приостанавливать, прерывать или повторно использовать работу и назначать приоритет различным типам обновлений; и новые примитивы параллелизма.',
  },
  {
    quest: 'Что такое контекст в React?',
    code: ``,
    variables: [
      {
        true: false,
        option: 'Область видимости пропсов компонента',
      },
      {
        true: false,
        option: 'Переменная содержащая все компоненты в дереве',
      },
      {
        true: true,
        option:
          'Способ передачи данных без необходимости вручную передавать свойства на каждом уровне',
      },
    ],
    explanation:
      'Контекст предоставляет способ передачи данных через дерево компонентов без необходимости вручную передавать свойства на каждом уровне.',
  },
]
//
//
//
//
//
//
//
//
//
//
//
const testQuestionsTS: question[] = [
  {
    quest: '',
    code: `class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};
console.log(point3d);`,
    variables: [
      {
        true: true,
        option:
          'Код не выполниться, так как интерфейс не соответствует объявлению класса.',
      },
      {
        true: false,
        option: '{z: 3}',
      },
      {
        true: true,
        option: '{x: 1, y: 2, z: 3}',
      },
      {
        true: false,
        option: '{x: 1, y: 2}',
      },
    ],
    explanation:
      'Ошибок в этом коде нет. Объявление класса создаёт две сущности: это тип данных, используемый для создания экземпляров класса, и функция-конструктор. Так как классы создают типы данных, использовать их можно там же, где можно использовать интерфейсы.',
  },
  {
    quest: 'Поддерживает ли TypeScript перегрузку функций?',
    code: ``,
    variables: [
      {
        true: true,
        option: 'Поддерживает, но реализация отличается от других ООП языков',
      },
      {
        true: false,
        option: 'Нет, не поддерживает',
      },
      {
        true: false,
        option: 'Поддерживает, реализация идентична другим ООП языкам',
      },
      {
        true: false,
        option: 'С версии 4.0 не поддерживается',
      },
    ],
    explanation:
      'TypeScript поддерживает перегрузку функций, но реализация этого механизма отличается от той, которую можно видеть в других объектно-ориентированных языках. А именно, в TS создают лишь одну функцию и некоторое количество объявлений. Когда такой код компилируется в JavaScript, видимой оказывается лишь одна конкретная функция. Этот механизм работает из-за того, что JS-функции можно вызывать, передавая им разное количество параметров.',
  },
  {
    quest: 'Будет ли работать следующий код?',
    code: `interface Fetcher {
    getObject(done: (data: any, elapsedTime?: number) => void): void;
}`,
    variables: [
      {
        true: false,
        option: 'Не будет из-за ошибки компиляции',
      },
      {
        true: false,
        option: 'Будет, с кодом всё хорошо',
      },
      {
        true: true,
        option: 'Будет, но вызовет ошибки во время компиляции',
      },
    ],
    explanation:
      'Рекомендуется использовать необязательные параметры в коллбэках только в том случае, если вы абсолютно точно понимаете последствия такого шага. Этот код имеет весьма специфический смысл: коллбэк <span>done</span> может быть вызван или с 1 или 2 аргументами. Автор кода, вероятно, намеревался сообщить нам, что коллбэк может не обращать внимания на параметр <span>elapsedTime</span>, но для того, чтобы этого достичь, всегда можно создать коллбэк, который принимает меньшее число аргументов.',
  },
  {
    quest: 'Для чего используется ключевое слово <span>declare</span>?',
    code: ``,
    variables: [
      {
        true: false,
        option: 'Для объявления неизменяемых полей класса',
      },
      {
        true: true,
        option:
          'Для объявления переменных, источником которых является не TS-файл.',
      },
      {
        true: false,
        option: 'Для защиты объекта от изменения полей',
      },
      {
        true: false,
        option: 'Для защиты преобразования переменных в другой тип.',
      },
    ],
    explanation:
      'Ключевое слово <span>declare</span> используется в TypeScript для объявления переменных, источником которых может служить некий файл, не являющийся TypeScript-файлом.',
  },
  {
    quest:
      'Можно ли автоматически генерировать файлы объявлений TypeScript из JS-библиотек?',
    code: ``,
    variables: [
      {
        true: true,
        option: 'Возможно с помощью специальных инструментов',
      },
      {
        true: false,
        option: 'Typescript не предоставляет такой возможности',
      },
      {
        true: false,
        option:
          'Возможно без использования дополнительных инструментов с помощью ключевого слова declare',
      },
    ],
    explanation:
      'JavaScript не всегда содержит достаточно информации, которая позволяет TypeScript автоматически выводить типы. Поэтому практически невозможно автоматически создавать объявления типов, основанные на JavaScript. Однако можно попытаться это сделать, воспользовавшись следующими инструментами: <span>Microsoft/dts-gen</span> и <span>dtsmake</span>.',
  },
  {
    quest: 'Разрешено ли в TypeScript преобразование переменных в другой тип?',
    code: ``,
    variables: [
      {
        true: true,
        option: 'Да.',
      },
      {
        true: false,
        option: 'Нет.',
      },
    ],
    explanation:
      'Подобно JavaScript, вы можете использовать функции <span>parseInt</span> или <span>parseFloat</span> для преобразования строки в целое число или число с плавающей точкой соответственно. Вы также можете использовать унарный оператор <span>+</span> для преобразования строки в наиболее подходящий числовой тип.',
  },
  {
    quest:
      'Можно ли с помощью псевдонима для литерала объектного типа <span>type</span> наследоваться классам (использовать <span>extends</span>)?',
    code: ``,
    variables: [
      {
        true: false,
        option: 'Да, можно.',
      },
      {
        true: true,
        option: 'Нет, нельзя.',
      },
    ],
    explanation:
      'Интерфейс может быть использован в выражении <span>extends</span> или <span>implements</span>, а псевдоним для литерала объектного типа — нет.',
  },
  {
    quest: 'Сколько существует типов в TypeScript ?',
    code: ``,
    variables: [
      {
        true: false,
        option: '10',
      },
      {
        true: false,
        option: '12',
      },
      {
        true: false,
        option: '9',
      },
      {
        true: true,
        option: '11',
      },
      {
        true: false,
        option: '13',
      },
    ],
    explanation:
      'В базавом TypeScript всего 11 типов: 8 типов JavaScript: <span>number</span>, <span>string</span>, <span>boolean</span>, <span>bigInt</span>, <span>null</span>, <span>undefined</span>, <span>symbol</span>, <span>object</span>, и 3 новые типа TypeScript: <span>any</span>, <span>unknown</span>, <span>never</span>. В современном стандарте TypeScript <span>void</span> не является типом.',
  },
]
export { testQuestionsJS, testQuestionsReact, testQuestionsTS }
