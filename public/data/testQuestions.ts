import { question } from '@/types/testTypes'

const testQuestionsJS: question[] = [
  {
    quest:
      '1 Какой метод создаёт новую функцию, которая при вызове устанавливает в качестве this переданное значение?',
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
    quest:
      '2 Какой метод создаёт новую функцию, которая при вызове устанавливает в качестве this переданное значение?',
    code: `
function myFunction() {
  var x = document.getElementById("myAnchor").href;
  document.getElementById("demo").innerHTML = x;
}
    `,
    variables: [
      {
        true: false,
        option: 'Function.prototype.call()3',
      },
      {
        true: false,
        option: 'Function.prototype.toSource()3',
      },
      {
        true: true,
        option: 'Function.prototype.bind()3',
      },
      {
        true: false,
        option: 'Function.prototype.apply()3',
      },
    ],
    explanation:
      'Согласно актуальному стандарту JS, метод Function.prototype.bind() создает новую функцию, которая при вызове устанавливается в качестве контекста выполнения this заданного значения. В методе также передаётся набор аргументов, которые будут установлены перед переданными в аргументы аргументами аргументами при её вызове. ',
  },
  {
    quest:
      '3 Какой метод создаёт новую функцию, которая при вызове устанавливает в качестве this переданное значение?',
    code: `
function myFunction() {
  var x = document.getElementById("myAnchor").href;
  document.getElementById("demo").innerHTML = x;
}
    `,
    variables: [
      {
        true: false,
        option: 'Function.prototype.call()4',
      },
      {
        true: false,
        option: 'Function.prototype.toSource()4',
      },
      {
        true: true,
        option: 'Function.prototype.bind()4',
      },
      {
        true: false,
        option: 'Function.prototype.apply()4',
      },
    ],
    explanation:
      'Согласно актуальному стандарту JS, метод Function.prototype.bind() создает новую функцию, которая при вызове устанавливается в качестве контекста выполнения this заданного значения. В методе также передаётся набор аргументов, которые будут установлены перед переданными в аргументы аргументами аргументами при её вызове. ',
  },
  {
    quest:
      '4 Какой метод создаёт новую функцию, которая при вызове устанавливает в качестве this переданное значение?',
    code: `
   function myFunction() {
  var x = document.getElementById("myAnchor").href;
  document.getElementById("demo").innerHTML = x;
}
    `,
    variables: [
      {
        true: false,
        option: 'Function.prototype.call()5',
      },
      {
        true: false,
        option: 'Function.prototype.toSource()5',
      },
      {
        true: true,
        option: 'Function.prototype.bind()5',
      },
      {
        true: false,
        option: 'Function.prototype.apply()5',
      },
    ],
    explanation:
      'Согласно актуальному стандарту JS, метод Function.prototype.bind() создает новую функцию, которая при вызове устанавливается в качестве контекста выполнения this заданного значения. В методе также передаётся набор аргументов, которые будут установлены перед переданными в аргументы аргументами аргументами при её вызове. ',
  },
  {
    quest:
      '5 Какой метод создаёт новую функцию, которая при вызове устанавливает в качестве this переданное значение?',
    code: `
   function myFunction() {
  var x = document.getElementById("myAnchor").href;
  document.getElementById("demo").innerHTML = x;
}
    `,
    variables: [
      {
        true: false,
        option: 'Function.prototype.call()6',
      },
      {
        true: false,
        option: 'Function.prototype.toSource()6',
      },
      {
        true: true,
        option: 'Function.prototype.bind()6',
      },
      {
        true: false,
        option: 'Function.prototype.apply()6',
      },
    ],
    explanation:
      '6 Согласно актуальному стандарту JS, метод Function.prototype.bind() создает новую функцию, которая при вызове устанавливается в качестве контекста выполнения this заданного значения. В методе также передаётся набор аргументов, которые будут установлены перед переданными в аргументы аргументами аргументами при её вызове. ',
  },
  {
    quest:
      '7 Какой метод создаёт новую функцию, которая при вызове устанавливает в качестве this переданное значение?',
    code: `
   function myFunction() {
  var x = document.getElementById("myAnchor").href;
  document.getElementById("demo").innerHTML = x;
}
    `,
    variables: [
      {
        true: false,
        option: 'Function.prototype.call()7',
      },
      {
        true: false,
        option: 'Function.prototype.toSource()7',
      },
      {
        true: true,
        option: 'Function.prototype.bind()7',
      },
      {
        true: false,
        option: 'Function.prototype.apply()7',
      },
    ],
    explanation:
      ' 8  Согласно актуальному стандарту JS, метод Function.prototype.bind() создает новую функцию, которая при вызове устанавливается в качестве контекста выполнения this заданного значения. В методе также передаётся набор аргументов, которые будут установлены перед переданными в аргументы аргументами аргументами при её вызове. ',
  },
  {
    quest:
      '8 Какой метод создаёт новую функцию, которая при вызове устанавливает в качестве this переданное значение?',
    code: `
   function myFunction() {
  var x = document.getElementById("myAnchor").href;
  document.getElementById("demo").innerHTML = x;
}
    `,
    variables: [
      {
        true: false,
        option: 'Function.prototype.call()8',
      },
      {
        true: false,
        option: 'Function.prototype.toSource()8',
      },
      {
        true: true,
        option: 'Function.prototype.bind()8',
      },
      {
        true: false,
        option: 'Function.prototype.apply()8',
      },
    ],
    explanation:
      'Согласно актуальному стандарту JS, метод Function.prototype.bind() создает новую функцию, которая при вызове устанавливается в качестве контекста выполнения this заданного значения. В методе также передаётся набор аргументов, которые будут установлены перед переданными в аргументы аргументами аргументами при её вызове. ',
  },
  {
    quest:
      '8 Какой метод создаёт новую функцию, которая при вызове устанавливает в качестве this переданное значение?',
    code: `
   function myFunction() {
  var x = document.getElementById("myAnchor").href;
  document.getElementById("demo").innerHTML = x;
}
    `,
    variables: [
      {
        true: false,
        option: 'Function.prototype.call()8',
      },
      {
        true: false,
        option: 'Function.prototype.toSource()8',
      },
      {
        true: true,
        option: 'Function.prototype.bind()8',
      },
      {
        true: false,
        option: 'Function.prototype.apply()8',
      },
    ],
    explanation:
      'Согласно актуальному стандарту JS, метод Function.prototype.bind() создает новую функцию, которая при вызове устанавливается в качестве контекста выполнения this заданного значения. В методе также передаётся набор аргументов, которые будут установлены перед переданными в аргументы аргументами аргументами при её вызове. ',
  },
]

const testQuestionsReact: question[] = [
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
        option: 'Function.prototype.call()',
      },
      {
        true: false,
        option: 'Function.prototype.toSource()',
      },
      {
        true: true,
        option: 'Function.prototype.bind()',
      },
      {
        true: false,
        option: 'Function.prototype.apply()',
      },
    ],
    explanation:
      'Согласно актуальному стандарту JS, метод Function.prototype.bind() создает новую функцию, которая при вызове устанавливается в качестве контекста выполнения this заданного значения. В методе также передаётся набор аргументов, которые будут установлены перед переданными в аргументы аргументами аргументами при её вызове. ',
  },
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
        option: 'Function.prototype.call()',
      },
      {
        true: false,
        option: 'Function.prototype.toSource()',
      },
      {
        true: true,
        option: 'Function.prototype.bind()',
      },
      {
        true: false,
        option: 'Function.prototype.apply()',
      },
    ],
    explanation:
      'Согласно актуальному стандарту JS, метод Function.prototype.bind() создает новую функцию, которая при вызове устанавливается в качестве контекста выполнения this заданного значения. В методе также передаётся набор аргументов, которые будут установлены перед переданными в аргументы аргументами аргументами при её вызове. ',
  },
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
        option: 'Function.prototype.call()',
      },
      {
        true: false,
        option: 'Function.prototype.toSource()',
      },
      {
        true: true,
        option: 'Function.prototype.bind()',
      },
      {
        true: false,
        option: 'Function.prototype.apply()',
      },
    ],
    explanation:
      'Согласно актуальному стандарту JS, метод Function.prototype.bind() создает новую функцию, которая при вызове устанавливается в качестве контекста выполнения this заданного значения. В методе также передаётся набор аргументов, которые будут установлены перед переданными в аргументы аргументами аргументами при её вызове. ',
  },
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
        option: 'Function.prototype.call()',
      },
      {
        true: false,
        option: 'Function.prototype.toSource()',
      },
      {
        true: true,
        option: 'Function.prototype.bind()',
      },
      {
        true: false,
        option: 'Function.prototype.apply()',
      },
    ],
    explanation:
      'Согласно актуальному стандарту JS, метод Function.prototype.bind() создает новую функцию, которая при вызове устанавливается в качестве контекста выполнения this заданного значения. В методе также передаётся набор аргументов, которые будут установлены перед переданными в аргументы аргументами аргументами при её вызове. ',
  },
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
        option: 'Function.prototype.call()',
      },
      {
        true: false,
        option: 'Function.prototype.toSource()',
      },
      {
        true: true,
        option: 'Function.prototype.bind()',
      },
      {
        true: false,
        option: 'Function.prototype.apply()',
      },
    ],
    explanation:
      'Согласно актуальному стандарту JS, метод Function.prototype.bind() создает новую функцию, которая при вызове устанавливается в качестве контекста выполнения this заданного значения. В методе также передаётся набор аргументов, которые будут установлены перед переданными в аргументы аргументами аргументами при её вызове. ',
  },
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
        option: 'Function.prototype.call()',
      },
      {
        true: false,
        option: 'Function.prototype.toSource()',
      },
      {
        true: true,
        option: 'Function.prototype.bind()',
      },
      {
        true: false,
        option: 'Function.prototype.apply()',
      },
    ],
    explanation:
      'Согласно актуальному стандарту JS, метод Function.prototype.bind() создает новую функцию, которая при вызове устанавливается в качестве контекста выполнения this заданного значения. В методе также передаётся набор аргументов, которые будут установлены перед переданными в аргументы аргументами аргументами при её вызове. ',
  },
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
        option: 'Function.prototype.call()',
      },
      {
        true: false,
        option: 'Function.prototype.toSource()',
      },
      {
        true: true,
        option: 'Function.prototype.bind()',
      },
      {
        true: false,
        option: 'Function.prototype.apply()',
      },
    ],
    explanation:
      'Согласно актуальному стандарту JS, метод Function.prototype.bind() создает новую функцию, которая при вызове устанавливается в качестве контекста выполнения this заданного значения. В методе также передаётся набор аргументов, которые будут установлены перед переданными в аргументы аргументами аргументами при её вызове. ',
  },
]

const testQuestionsNext: question[] = [
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
        option: 'Function.prototype.call()',
      },
      {
        true: false,
        option: 'Function.prototype.toSource()',
      },
      {
        true: true,
        option: 'Function.prototype.bind()',
      },
      {
        true: false,
        option: 'Function.prototype.apply()',
      },
    ],
    explanation:
      'Согласно актуальному стандарту JS, метод Function.prototype.bind() создает новую функцию, которая при вызове устанавливается в качестве контекста выполнения this заданного значения. В методе также передаётся набор аргументов, которые будут установлены перед переданными в аргументы аргументами аргументами при её вызове. ',
  },
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
        option: 'Function.prototype.call()',
      },
      {
        true: false,
        option: 'Function.prototype.toSource()',
      },
      {
        true: true,
        option: 'Function.prototype.bind()',
      },
      {
        true: false,
        option: 'Function.prototype.apply()',
      },
    ],
    explanation:
      'Согласно актуальному стандарту JS, метод Function.prototype.bind() создает новую функцию, которая при вызове устанавливается в качестве контекста выполнения this заданного значения. В методе также передаётся набор аргументов, которые будут установлены перед переданными в аргументы аргументами аргументами при её вызове. ',
  },
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
        option: 'Function.prototype.call()',
      },
      {
        true: false,
        option: 'Function.prototype.toSource()',
      },
      {
        true: true,
        option: 'Function.prototype.bind()',
      },
      {
        true: false,
        option: 'Function.prototype.apply()',
      },
    ],
    explanation:
      'Согласно актуальному стандарту JS, метод Function.prototype.bind() создает новую функцию, которая при вызове устанавливается в качестве контекста выполнения this заданного значения. В методе также передаётся набор аргументов, которые будут установлены перед переданными в аргументы аргументами аргументами при её вызове. ',
  },
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
        option: 'Function.prototype.call()',
      },
      {
        true: false,
        option: 'Function.prototype.toSource()',
      },
      {
        true: true,
        option: 'Function.prototype.bind()',
      },
      {
        true: false,
        option: 'Function.prototype.apply()',
      },
    ],
    explanation:
      'Согласно актуальному стандарту JS, метод Function.prototype.bind() создает новую функцию, которая при вызове устанавливается в качестве контекста выполнения this заданного значения. В методе также передаётся набор аргументов, которые будут установлены перед переданными в аргументы аргументами аргументами при её вызове. ',
  },
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
        option: 'Function.prototype.call()',
      },
      {
        true: false,
        option: 'Function.prototype.toSource()',
      },
      {
        true: true,
        option: 'Function.prototype.bind()',
      },
      {
        true: false,
        option: 'Function.prototype.apply()',
      },
    ],
    explanation:
      'Согласно актуальному стандарту JS, метод Function.prototype.bind() создает новую функцию, которая при вызове устанавливается в качестве контекста выполнения this заданного значения. В методе также передаётся набор аргументов, которые будут установлены перед переданными в аргументы аргументами аргументами при её вызове. ',
  },
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
        option: 'Function.prototype.call()',
      },
      {
        true: false,
        option: 'Function.prototype.toSource()',
      },
      {
        true: true,
        option: 'Function.prototype.bind()',
      },
      {
        true: false,
        option: 'Function.prototype.apply()',
      },
    ],
    explanation:
      'Согласно актуальному стандарту JS, метод Function.prototype.bind() создает новую функцию, которая при вызове устанавливается в качестве контекста выполнения this заданного значения. В методе также передаётся набор аргументов, которые будут установлены перед переданными в аргументы аргументами аргументами при её вызове. ',
  },
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
        option: 'Function.prototype.call()',
      },
      {
        true: false,
        option: 'Function.prototype.toSource()',
      },
      {
        true: true,
        option: 'Function.prototype.bind()',
      },
      {
        true: false,
        option: 'Function.prototype.apply()',
      },
    ],
    explanation:
      'Согласно актуальному стандарту JS, метод Function.prototype.bind() создает новую функцию, которая при вызове устанавливается в качестве контекста выполнения this заданного значения. В методе также передаётся набор аргументов, которые будут установлены перед переданными в аргументы аргументами аргументами при её вызове. ',
  },
]
export { testQuestionsJS, testQuestionsNext, testQuestionsReact }
