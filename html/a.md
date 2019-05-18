http报文
http又哪些构成
http状态码 200 301 304 500
http缓存

http： 超文本传输协议  应用层协议 
浏览器-服务器  

URI 统一资源标识符
URL 统一资源定位符 

协议 端口号 域名
报文

对请求报文进行描述的起始行
包含属性的首部块
可选的包含数据的主体部门 

状态码 什么意思   200  202 301 304  403 404 500 503
http几种类型
报文哪几个构成
缓存机制
htpps原理
secsion cookie


1. var 可声明前置
a = 3
var a
var a = 4
2. let不可声明前置
a = 3 //报错
let a
3. let不可重复声明
let a = 3
let a = 4  //报错
var a = 5  //报错
4. 存在块级作用域
for(let i =0; i<3; i++){
  console.log(i)
}
console.log(i) //报错
IIFE的替换

(function(){
  var a = 1
}())
{
  let a = 1
}
暂时性死区（TDZ）：在let声明变量之前都是该变量的死区，在死区内该变量不可使用

5. const 声明的常量不可改变
const a = 1
a = 2 //报错

const obj = {a: 1}
obj.a = 2   //没问题
obj = {a: 2}  //报错

6. 适用于let的同样适用于const




解构赋值
1. 数组的解构
let [a,b,c] = [1,2,3]
console.log(a, b, c) 

let [a, [b], c] = [2, [3], 4]
a //2
b //3
c //4

let [a] = 1 //报错
2. 默认值
let [a, b = 2] = [3]
a // 3
b // 2

let [a, b = 2] = [3, 4]
a //3
b //4
数组对应对值有没有？如果没有（数组对没有指undefined）就使用默认值，如果有就使用对应值

let [a=2, b=3] = [undefined, null]
a //2
b //null
let [a=1, b=a] = [2]
a //2
b //2
3. 对象的解构赋值
前置知识

let [name, age] = ['hunger', 3]
let p1 = {name, age}
//等同于
let p2 = {name: name, age: age}
解构范例

let {name, age} = {name: 'jirengu', age: 4}
name //‘jirengu’
age //4
以上代码等同于

let name
let age
({name: name, age: age} = {name: 'jirengu', age: 4})
4. 默认值
let {x, y=5} = {x: 1}
x //1
y //5
5. 函数解构
function add([x=1, y=2]){
  return x+y
}
add() //Error
add([2]) //4
add([3,4]) //7

function sum({x, y}={x:0, y:0}, {a=1, b=1}){
    return [x+a, y+b]
}
sum({x:1, y:2}, {a:2}) //[3, 3]
6. 作用
let [x, y] = [1, 2];
[x, y] = [y, x]
x //2
y // 1
function ajax({url, type=‘GET’}){
}
ajax({url: ‘http://localhost:3000/getData’})


字符串、数组、函数、对象
字符串
多行字符串
let str =`
Hi,
This is jirengu.com.
You can study frontend here.
`
字符串模板
let website = 'jirengucom'
let who = 'You'
let str = `Hi
This is ${website}.
${who} can study frontend here
`
数组
扩展
var a = [1, 2]
console.log(...a)  // 1, 2
var b = [...a, 3]
b // [1, 2, 3]

var c = b.concat([4, 5])
var d = [...b, 4, 5]
函数参数的扩展
function sort(...arr){
  console.log(arr.sort())
}
sort(3, 1, 5)  //[1, 3, 5]
function max(arr){
  return Math.max(...arr)
}
max([3, 4, 1])  // 4
类数组对象转数组
let ps = document.querySelectorAll('p');
Array.from(ps).forEach(p=> {
  console.log(p.innerText);
});
[...ps].forEach(p=>{console.log(p.innerText)});
函数
默认值
function sayHi(name='jirengu') {
  console.log(`hi, ${name}`)
}
sayHi()
sayHi('ruoyu')
function fetch(url, { body='', method = 'GET', headers = {} } = {}) {
  console.log(method);
}

fetch('http://example.com')
以下两种写法的区别?

//ex1
function m1({x = 0, y = 0} = {}) {
  return [x, y];
}

//ex2 
function m2({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}

// 函数没有参数的情况
m1() // [0, 0]
m2() // [0, 0]

// x 和 y 都有值的情况
m1({x: 3, y: 8}) // [3, 8]
m2({x: 3, y: 8}) // [3, 8]

// x 有值，y 无值的情况
m1({x: 3}) // [3, 0]
m2({x: 3}) // [3, undefined]

// x 和 y 都无值的情况
m1({}) // [0, 0];
m2({}) // [undefined, undefined]

m1({z: 3}) // [0, 0]
m2({z: 3}) // [undefined, undefined]
ex1： 调用函数需要你传递一个对象，如果你没传对象就用默认值对象{}，默认值对象里面都是 undefined， 所以属性使用初始值

ex2：参数需要是一个对象，如果没传对象，就用默认值对象{ x: 0, y: 0 }如果传了对象，就使用你传递的对象

箭头函数
var f = v => v+1
//等价于
var f = function(v){return v+1}

var f = () => 5;
// 等同于
var f = function () { return 5 };

var sum = (num1, num2) => num1 + num2;
// 等同于
var sum = function(num1, num2) {
  return num1 + num2;
};

var arr = [1, 2, 3]
var arr2 = arr.map(v=>v*v)
arr2 //[1, 4, 9]

箭头函数里面的 this

// ES6
function foo() {
  setTimeout(() => {
    console.log('id:', this.id);
  }, 100);
}

//  等同于如下ES5
function foo() {
  var _this = this;
  setTimeout(function () {
    console.log('id:', _this.id);
  }, 100);
}
对象
var name = 'jirengu'
var age = 3
var people = {name, age} //{name:'jirengu', age:3}
`javascript
let app = {
selector: '#app',
init() {
},
bind() {
}
}
app.init()


类和继承
构造函数
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log( `hello, ${this.name}, i am ${this.age} years old`);
  }
}
等价于

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function () {
  console.log(  `hello, ${this.name}, i am ${this.age} years old`);
};

var p = new Person('hunger', 2);
静态方法
class EventCenter {
  static fire() {
    return 'fire';
  }
  static on(){
    return 'on'
  }
}
等同于

function EventCenter(){
}
EventCenter.fire = function(){}
EventCenter.on = function(){}

继承
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log( `hello, ${this.name}, i am ${this.age} years old`);
  }
}
class Student extends Person {
  constructor(name, age, score) {
    super(name, age); 
    this.score = score;
  }

  sayScore() {
     console.log(  `hello, ${this.name}, i am ${this.age} years old, i get ${this.score}`);
  }
}



模块化
写法1
// profile.js
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;
//useage.js
import {firstName, lastName, year} from './profile';
console.log(firstName)
写法2
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

export {firstName, lastName, year};
//useage.js
import {firstName, lastName, year} from './profile';
console.log(firstName)
写法3
//helper.js
export function getName(){}
export function getYear(){}
//main.js
import {getName, getYear} from './helper';
getName()
写法4
//helper.js
function getName(){}
function getYear(){}
export {getName, getYear}
//main.js
import {getName, getYear} from './helper';
getName()
写法5
// export-default.js
export default function () {
  console.log('foo');
}
// import-default.js
import getName from './export-default'
getName()

