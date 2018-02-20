# ES6
se6基础语法

#### let,const
 - 相同：
1. 不可以预处理，变量提升。
2. 不可重复声明。
3. 块级作用域内有效

 - 不同：
  - let可以改变值和类型，const定义常量不可改变。
  
  #### 解构赋值
   - 从数组或对象中提取数据，赋值给多个变量（用途：给多个形参赋值）
   
   ```
   let obj = {
   	userName = 'lee',
   	age:12
   }
   let {userName,age} = obj;
   console.log(userName,age)
   
   let arr = [1,2,3,'as',true]
   let [a,b] = arr;
   console.log(a,b)
   
   function foo({userName,age}) {
   	console.log(userName,age)
   }
   foo(obj)
 ```
#### 模版字符串
 - 简化字符串的拼接，模版字符串必须用``包含，变化的部分用${xxx}定义
 1. contains(str) : 判断是否包含指定的字符串
 2. startsWith(str) : 判断是否以指定字符串开头
 3. endsWith(str) : 判断是否以指定字符串结尾
 4. repeat(count) : 重复指定次数
 ```
 let obj1 = {
 	userName:'darker',
 	age:13
 }
 let str = `我的名字叫：${obj1.userName},今年我：${obj1.age}岁`;
 console.log(str)
 ```
 
 
  ####对象 简化的对象的写法
  - 省略同名的属性值，省略方法function
  - Object.assign(target,source1,source2..)：将源对象的属性复制到目标对象上
  - Object.is(v1,v2):判断2个数据是否完全相同
  - __proto__属性：隐式原型属性
  ```
  let userName = 'shaun';
  let age = 14;
  let obj2 = {
  	 userName,
  	 age,
  	 run(){
  	 	return this.userName;
  	 }
  }
  console.log(obj2) //Object { userName: "shaun", age: 14, run: run() }
  console.log(obj2.run()) //shaun
  ```
  #### 数组
  1. Array.from(v):将伪数组对象或可遍历对象转换为真数组
  2. Array.of(v1,v2,v3):将一系列值转换为数组 
  3. find(function(value, index, arr){return true}) : 找出第一个满足条件返回true的元素
  4. findIndex(function(value, index, arr){return true}) : 找出第一个满足条件返回true的元素下标
  
  #### 函数
  - 箭头函数 用来定义匿名函数
  1. 没有参数：() => console.log('a');
  2. 有一个参数：i =>i+1;
  3. 大于一个参数: (i,j) =>i+j
  4. 函数体不用大括号：默认返回结果
  5. 函数题如果有多个语句，需要用{}包围
  
  - 特点
  1. 简洁
  2. 箭头函数没有自己的this，箭头函数的this不是调用的时候决定的，而是在定义的时候处在的对象就是他的this
  3. 箭头函数的this要看外层是否有函数，有，指向外层函数，没有，指向window
  ```
  var obj = {
  	name:'dog',
  	run:() =>{
  	btn2.onclick =() =>{
  	console.log('a')
  		}
  	}
  }
  obj.run();
  //obj.run = () =>{}
  ```
  
  #### 三点运算符
  1. rest(可变)参数
  用来代替arguments但是比arguments灵活，只能在最后部分形参参数
  ```
function foo(...value) {
	console.log(arguments)
	/*
	arguments.forEach(function(item,index) {
		console.log(item,index)
	})
	*/
	console.log(value);
	value.forEach(function(item,index){
		console.log(item,index)
	}) 
}
foo(2,3,4,5)

let arr = [1,6];
let arr1 = [2,3,4,5];
arr = [1,...arr1,6]
console.log(arr);
console.log(...arr)
```
#### 形参默认值 当不传入参数的时候默认使用形参里面的默认值
```
function point(x=1,y=2) {
	this.x = x;
	this.y = y;
}
```
#### promise
 - 理解：promise对象代表了未来将要发生的事件，一个异步操作，可以将异步操作以同步的流程表达出来，避免了层层嵌套的回调函数。
 ```
 //创建promise对象
 let promise = new Promise(resolve,reject){ //初始化状态为pending
 //执行异步操作
 	if(异步操作成功) {
 	resolve(value); //修改promise状态为fullfilled
 	}else{
 	reject(errMsg);//修改promise的状态为rejected
 		}
 	}
 	
 	调用promise的then()
 	promise.then(function(
 	result =>console.log(result),
 	errorMsg => alert(errorMsg)
 	))
 	
 	let promise = new Promise((resolve,reject) =>{
 	//初始化promise状态pending：初始化
 		console.log(111);
 		//执行异步操作，通常是发送ajax请求，开启定时器
 		setTimeOut(()=>{
 		console.log(333)
 		//根据异步任务的返回结果去修改promise的状态
 		//成功，修改promise的状态为fullfilled：成功的状态
 			resolve('yes')
 		//失败，修改promise的状态为rejected：失败的状态
			reject('no ')
 		}，2000);
 	})
 	console.log(222)
 	
 	promise.then((data)=>{
 	//成功的回调
 	console.log(data,'成功了。。')
 	//失败的回调
 	},(error)=>{
 	console.log(error,'失败了。。')
 	})
 	
 	function getNews(url) {
 	var promise = new Promise(()=>{
 	//执行异步任务，创建xml实例对象
 	let xml = new xmlHttpRequest();
 	//绑定监听readystate
 	xml.onreadyStatechange = function() {
 	if(xml.readyState === 4 && xml.dtatus === 200) { //请求成功
 	//修改状态
 	resolve(xml.reponseText)
 	}else{
 	//失败
 	reject()
 	}
 		}
 		xmlHttp.open('GET',url)
 		//发送
 		xml.send()
 	})
 	return promise
 	}
 	getNews('http://licalhost:3000/news?id=2')
 	.then((data)=>{
 	let commentUrl = JSON.parse(data).commenyUrl;
 	let url = 'http://licalhost:3000'+commentUrl
 		console.log(data)
 		return getNews(url)
 	},(error)=>{
 		error
 	})
 ```
 #### symbol
 1. smbol属性对于的值是唯一的，解决命名冲突问题。
 2. symbol值不能与其他数据进行计算，包括同字符串拼串。
 3. for in，for of遍历时不会遍历symbol属性。
 
  - 调用symbol函数得到symbol值
  ```
  let symbol = Symbol();
  let obj = {};
  obj[symbol] = 'hello'
  ```
  
  - 传参标识别
  ```
  let symbol = Symbol('one');
  let symbol2 = Symbol('two');
  console.log(symbol); //Symbol(one)
  console.log(symbol2)//Symbol(two)
  ```
  
  - 内置symbol值

 
 #### iterator 一种接口机制，为各种不同的数据结构提供统一的访问机制。
  - 作用
  1. 为各种数据结构，提供一种统一的，简便的访问接口；
  2. 使得数据结构的成员能够按某种次序排列
  3. es6创造了一种新的遍历命令for...of循环，iterator接口主要供for...of消费
  
  - 工作原理
  1. 创建一个指针对象（遍历器对象），指向数据结构的起始位置。
  2. 第一次调用next方法，指针自动指向数据结构的第一个成员
  3. 接下来不断的调用next方法，指针会一直往后移动，直到指向最后一个成员
  4. 每调用next方法返回的是一个包含value和done的对象，{value：当前成员的值，done：布尔值，表示当前的数据的结构是否遍历结束，undefined表示false}
  
   - 扩展理解
   1. 当数据结构上部署了symbol.iterator接口，该数据就是可以用for...of遍历
   2. 当使用for..of去遍历目标数据的时候，该数据会自动去找symbol.iterator属性，找到了遍历，找不到不遍历
   symbol.iterator属性指向对象的默认遍历器方法。
   1. Array
   2. arguments
   3. set容器
   4. map容器
   5. string
   ```
   //模拟指针对象（遍历器对象）
   function myIterator(arr) {//iterator接口
   let index = 0;//记录指针的位置
   return{ //遍历器对象
   next:function() {
   	return index<arr.length?{value:arr[index++],done:false}:{value:undefined,done:true}
   }
   }
   } 
   //准备一个数据
   var arr = [1,2,3,'abc'];
   let iteratorObj = myIterator(arr);
   console.log(iteratorObj.next())
   console.log(iteratorObj.next())
   console.log(iteratorObj.next())
   console.log(iteratorObj.next())
   console.log(iteratorObj.next())
   
   for(let i of arr) {
   console.log(i)}
   
    let str = 'abcdefj'
    for(let i of str) {
    	console.log(i)
    }
    
    function foo(){
    for(let i of arguments) {
    console.log(i)
    		}
    }
    foo(1,2,3,4,5，'abc')

let targetDate = {
[symbol.iterator]:function() {
let nextIndex = 0;
return{
next:function() {
return nextIndex <this.length?{value:this[nextINdex++]},done:false:value:undefined,done:true}
}
}
}

//将iterator接口部署到指定的数据类型上，可以使用for of去循环遍历

//使用三点运算符，解构赋值，默认调用iterator接口
var arr1 = [1,6];
var arr2 = [2,3,4,5];
arr1 = [1,...arr2,6]
let[a,b] = arr1;
console.log(a,b)

```
#### Generator
 - 概念
1. es6提供的解决异步编程的方案之一
2. generator函数是一个状态机，内部封装了不同状态的数据
3. 用来生成遍历器对象
4. 可暂停函数（惰性求值），yield可暂停，next方法可启动，每次返回的是yield后的表达式的结果
 - 特点
 1. function与函数名之间有一个星号
 2. 内部使用yield表达式来定义不同的状态
 ```
 function* generatorExample() {
 	let result = yield 'hello'; //状态值为hello
 	yield 'generator'; //状态值为generator
 }
 ```
 3. generator函数返回的是指针对象，而不会执行函数内部的逻辑
 4. 调用next方法函数内部逻辑开始执行，遇到yield表达式停止，返回{value:yield后的表达式结果/undefined,done:}
 5. 再次调用next方法会从上一次停止时的yield处开始，直到最后
 6. yield语句返回结果通常为undefined，当调用next方法时传参内容作为启动时yield语句的返回值
 ```
 function* myGenerator() {
 	console.log('开始执行');
 	let result = yield 'hello';
 	console.log(result);
 	console.log('暂停后，再次执行');
 	yield 'world';
 	console.log('遍历完毕');
 	return '返回结果'
 }
 let MG = myGenerator(); //返回的是指针对象
 consolelog(MG); //遍历器对象
 let result = MG.next();//函数执行，遇到yield暂停
console.log( result)//{value:'hello',done:false} 
result = MG.next('我的值会是yield');//函数再次启动
console.log(result);//{value:''}//{value:'我的值会是yield',done:false}
ewsult = MG.next() 
console.log( result) //{value:undefined,done:true}

let obj = {userName:'lee',age:12};
for(var i of obj) {
console.log(i)}  //报错

let obj = {userName:'darker',age:14}
obj[Symbol.iterator] = function* myTest() {
yield 1
yield 2
yield 3
}
for(let i of obj) {
console.log(i)
}


function getNews(url) {
$.get(url,function(data) {
console.log(data);
let url = 'http://locaohost:3000' + data.commentUrl;
SX.next(url);
})
}
function* sendXML() {
let url = yield getNews('http://localhost:3000/news?id=3');
yield getNees(url)
}

//获取遍历器对象
let SX = sendXML();
SX.next()
 ```
 
 
  
  
  
  
  

