/**
  原始数据类型

  JavaScript 的类型分为两种：原始数据类型 和 对象类型。
  原始数据类型包括：布尔值、数值、字符串、null、undefined 以及 ES6 中的新类型 Symbol。
*/

// // 1. 布尔值
// let isDone: boolean = false;
// let isDoneByBoolean: boolean = Boolean(1)
// console.log('boolean', isDone, isDoneByBoolean) // false true

// new Boolean() 生成的是对象，回=会报错
// let isDoneByNewBoolean: boolean = new boolean(1)


// 2. 数值
// let number: number = 2
// console.log('nember', number) // 2

// 3. 字符串
// let username: string = '张三'
// console.log('string', username)

// 4. null 和 undefined
// undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
// 当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。
// let n: null = null
// let u: undefined = undefined

// let num: number = undefined // 开启strictNullChecks后报错
// let u: undefined = undefined
// let v: void = u
// console.log('null-undefined', u, v)


// 5. 空值
// let v: void;

// 6. 对象类型
let o: object = {}