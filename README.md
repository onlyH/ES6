## 理解ES
1. 全称: ECMAScript
2. js语言的规范
3. 我们用的js是它的实现
4. js的组成
  * ECMAScript(js基础)
  * 扩展-->浏览器端
    * BOM
    * DOM
  * 扩展-->服务器端
    * Node.js
      
## ES5
1. **严格模式**
  * 运行模式: 正常(混杂)模式与严格模式
  * 应用上严格式: 'strict mode';
  * 作用: 
    * 使得Javascript在更严格的条件下运行
    * 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为
    * 消除代码运行的一些不安全之处，保证代码运行的安全
    * 需要记住的几个变化
      * 声明定义变量必须用var
      * 禁止自定义的函数中的this关键字指向全局对象
      * 创建eval作用域, 更安全
      
2. **JSON对象**
  * 作用: 用于在json对象/数组与js对象/数组相互转换
  * JSON.stringify(obj/arr)
      js对象(数组)转换为json对象(数组)
  * JSON.parse(json)
      json对象(数组)转换为js对象(数组)
      
3. Object扩展
  * Object.create(prototype[, descriptors]) : 创建一个新的对象
    * 以指定对象为原型创建新的对象
    * 指定新的属性, 并对属性进行描述
      * value : 指定值
      * writable : 标识当前属性值是否是可修改的, 默认为true
      * **get方法** : 用来得到当前属性值的回调函数
      * **set方法** : 用来监视当前属性值变化的回调函数
  * Object.defineProperties(object, descriptors) : 为指定对象定义扩展多个属性
  
4. Array扩展
  * Array.prototype.indexOf(value) : 得到值在数组中的第一个下标
  * Array.prototype.lastIndexOf(value) : 得到值在数组中的最后一个下标
  * **Array.prototype.forEach(function(item, index){}) : 遍历数组**
  * **Array.prototype.map(function(item, index){}) : 遍历数组返回一个新的数组**
  * **Array.prototype.filter(function(item, index){}) : 遍历过滤出一个子数组**
  
5. **Function扩展**
  * Function.prototype.bind(obj)
      * 将函数内的this绑定为obj, 并将函数返回
  * 面试题: 区别bind()与call()和apply()?
      * fn.bind(obj) : 指定函数中的this, 并返回函数
      * fn.call(obj) : 指定函数中的this,并调用函数
      
6. Date扩展
  * Date.now() : 得到当前时间值
  




## ES6
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
	//arguments.forEach(function(item,index) {
	//	console.log(item,index)
	//})
	
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
//将iterator接口部署到指定的数据类型上，可以使用for of去循环遍历
//使用三点运算符，解构赋值，默认调用iterator接口
var arr1 = [1,6];
var arr2 = [2,3,4,5];
arr1 = [1,...arr2,6]
let[a,b] = arr1;
console.log(a,b)

 ```
 
 #### async(es2017)
  - 概念：真正意义上去解决异步回调的问题，同步流程表达异步操作
  - 本质：Generator的语法糖
  - 语法：
  		async function foo() {
  			await 异步操作;
  			await 同步操作;
  		}
  - 特点：
  1. 不需要像generator去调用next方法，遇到await等待，当前的异步操作完成就往下执行
  2. 返回的总是promise对象，可以用then方法进行下一步操作
  3. async取代generator函数的星号*，await取代generator的tield
  4. 语意上更为明确，使用简单
  ```
  async function foo() {
  return new Promise(resolve =>{
  setTimeout(function() {
  	resolve()
  },2000)
  //setTimeout(resolve,2000)
  })
  }
  async function oop() {
  console.log('开始执行',new Date().toTimeString())
  	await foo();
  console.log('执行结束',new Date().toTimeString())
  }
  oop()
  
  //async的await返回值
  function test() {
  return 'xxx'
  }
  async function test1() {
  let result = await test();
  console.log(result)
  }
  test1()
  
  function test3() {
  	return 'xxx'
  }
  async function test4() {
  	let result = await Promise.resolve('yes,promise')
  	console.log(result);
  	result = await Promise.reject('no,err')
  }
  test4()
  
  async function test5(url) {
  	return new Promise((resolve,reject) =>{
  	$.ajax({
  	methods:'GET',
  	url,
  	success:data => resolve(data)
  	srrorr:error => reject(error)
  	})
  	})
  }
  async function test6() {
  	let result = await test5('http://localhost:8080/news?id=3');
  	console.log(result);
  	result = await test5('http://localhost:8080' + result.commentUrl);
  	console.log(result)
  }
  test6()
 
  
  async function newPaper(url) {
  	return new Promise((resolve,reject) =>{
  		$.ajax({
  			methods:'GET',
  			url,
  			success:data =>resolve(data)
  			error:error =>resolve(false);
  		})
  	})
  }
  async function newUrl() {
  	let result = await newPaper('http://localhost:8080/news?id=1');
  	console.log(result);
  	if(!result) {
  		alert('暂时没有内容。。');
  		return;
  	}
  	result = await newPaper('http://localhost:8080' + result.commentUrl);
  	console.log(result)
  }
  ```
 
#### class 类的使用
 1. 通过class定义类/实现类的继承
 2. 在类中通过constructor定义构造方法
 3. 通过new来创建类的实例
 4. 通过extend来实现类的继承
 5. 通过super调用父类的构造方法
 6. 重写从父类中继承的一般方法

 ```
 function Person(name,age) {
 	this.name = name;
 	this.age = age;
 }
 let person = new Person('lee',32)
 
 class Person {
 //类的构造方法
 	constructor(name,age) {
 		this.name = name;
 		this.age = age
 	}
 	//类的一般方法
 	showName() {
 		console.log(this.name,this.age)
 	}
 }
 let person = new Person('lee',32)
 console.log(person);
 person.showName()
 
 class childPerson extends Person {
 	constructor(name,age,sex) {	
 	super(name,age);//调用父类的构造方法
 	this.sex = sex;
 	}
 	//父类的方法重写
 	showName() {
 	console.log('调用子类的方法'+this.name,this.age,this.sex)
 	}
 } 
 let p1 = new childPerson('lee',22,'man')
 p1.showName()
 ```
 
#### es6字符串，数组的扩展
 1. includes(str) : 判断是否包含指定的字符串
 2. startsWith(str) : 判断是否以指定字符串开头
 3. endWidth(str): 判断是否以指定的字符串结尾
 4. repeat(count) :重复指定次数
 ```
 let str = 'abcdefja';
 str.includes('a') //true
 str.startsWith('a') //true
 str.endsWith('v') //false
str.repeat(3)  //"abcdefjaabcdefjaabcdefja"
 ```
 
#### 数值的扩展
 1. 二进制与八进制数值表示法：二进制用0b，八进制用0o
 2. Number.isFinite(i) : 判断是否是有限大的数
 3. Number.isNaN(i) : 判断是否为NaN
 4. Number.isInteger(i) : 判断是否为整数
 5. Number.parseInt(i) : 将字符串转为对应的数值
 6. Math.trunc(i) : 直接去除小数部分
 ```
 let arr = 3.1415926;
 Number.isFinite(arr); //true
 Number.parseInt(arr);//3
 Number.isNaN(arr);//false
 Number.isInteger(arr);//false
 Math.trunc(arr);//3
 console.log(0b1010) //10
 console.log(0o56)  //46
 console.log(Number.isInteger('123.0'))//false
 console.log(Number.parseInt('123abc456')); //123
 console.log(Number.parseInt('a123b456'))//NaN
 
 ```
 
#### 数组方法的扩展
 1. Array.from(v) : 将伪数组对象或可遍历对象转化为真数组
 2. Array.of(v1,v2,v3) : 将一系列值转化为数组
 3. find(function(value,index,arr){return true}) :找出第一个满足条件返回true的元素
 4. findIndex(function(v1,v2,v3){return true}) : 找出第一个满足条件返回true元素的下标
 ```
 let btns = document.getElementsByTagName('button');
 Array.from('btns').forEach(function(item,index) {
 	console.log(item)
 })
 
 var arr = [1,2,'abc',true];
 Array.of(arr)//(4) [1, 2, "abc", true]
 
 let arr2 = [1,2,3,4,5];
 let result = arr2.find(function(item,index){
 	return item>2
 })
 console.log(result)
 
 let arr3 = [1,2,3,4,5];
 let result = arr3.findIndex(function(item,index) {
 	return item>2
 })
 console.log(result) //2  下标
 
 ```
 
#### 对象方法的扩展
 1. Object.is(v1,v2) : 判断两个数据是否完全相同
 2. Object.assign(target,source1,source2 ... ) : 将源对象的属性复制到目标对象上
 3. 直接操作 __proto__属性
 let obj2 ={};
 obj2.__proto__ = obj1;
 ```
 console.log(Object.is(0,-0));//false
 console.log(0 == -0);//true
 
 console.log(Object.is(NaN,NaN)) //true
 console.log(NaN == NaN) //false
 
 let obj1 = {};
 let obj2 = {userName :'lee'};
 let obj3 = {sex:'man'};
 Object.assign(obj1,obj2,obj3) //{userName: "lee", sex: "man"}
 
 let obj4 = {};
 let obj5 = {money:100};
 obj4.__proto__ = obj5;
 console.log(obj4);//{}
 console.log(obj4.money)//100
 ```
 
#### 深度克隆

  ```
   let str = 123;
 let str2 = str;
 console.log(str2)//123
 str2 = 'a';
 console.log(str)//123
 console.log(str2) //a
 
 let bo1 = true;
 let bo2 = bo1;
 console.log(bo2);//true
 bo2 = false;
 console.log(bo1);//true
 console.log(bo2)//false
 
 let obj2 = {userName:'lee',age:12};
 let obj3 = obj2;
 console.log(obj3);//{userName: "lee", age: 12}
 obj3.userName = 'darker';
 console.log(obj2)// {userName: "darker", age: 12}
 
 //拷贝数组/对象 没有生成新的数据而是复制了一份引用
 let arr1 = [1,2,true,'abc'];
 let arr2 = arr1;
 arr2[0] = 'yes';
 console.log(arr1,arr2)//(4) ["yes", 2, true, "abc"] (4) ["yes", 2, true, "abc"]
  ```
 
  - 拷贝数据
  1. 基本拷贝：会生成新的数据，修改拷贝后的数据不影响原数据
  2. 对象/数组：不会生成新的数据，拷贝是引用，拷贝后的数据修改会影响原数据
  - 拷贝数据的方法：
  1. 直接赋值给一个变量 ---浅拷贝（影响原数据）
  2. Array.prototype.concat() --浅   
  3. Array.prototype.slice() --浅
  4. Object.assign()  --浅
  5. JSON.parse(JSON.stringify())  --深拷贝，拷贝的数据里不能有函数，处理不了
  
  - 浅拷贝（数组/对象）：
     - 特点：拷贝的引用，修改拷贝后的数据会影响原数据,使得原数据不安全
  - 深拷贝
  	- 特点：生成新的数据，修改拷贝后的数据不会影响原数据
  
 ```
 let obj1 = {userName:'dd'}
 let obj2 = Object.assign(obj1);
 console.log(obj2);//{userName: "dd"}
 obj2.userName = 'cc';
 console.log(obj1)//{userName: "cc"}
 
 
 let arr = [1,2,{userName:'abc'}];
 let arr1 =arr.concat();
 console.log(arr1);//{userName: "d"}
 arr1[2].userName = 'd';
 console.log(arr);//{userName: "d"}
 
 let arr = [1,2,{userName:'darker'},function fun(){}]; //函数会变成null
 let arr1 = arr.slice();
 console.log(arr1);//{userName: "t"}
 arr1[2].userName = 't';
 console.log(arr)//{userName: "t"}
 //json解析的是对象和数组，不识别函数
 let arr4 = JSON.parse(JSON.stringify(arr))
 console.log(arr4) //{userName: "t"}
 arr4[2].userName = 'bili';
 console.log(arr4)//{userName: "bili"}
 console.log(arr)//{userName: "t"}
 ```
 
  - 如何实现深拷贝？拷贝的数据里不能有对象/数组，即使有对象/数组可以继续遍历对象，数组拿到里面的每一项值，直到拿到的是基本数据类型，然后再去复制，这就是深拷贝。 
  
  - 检测数据类型
  1. Object.prototype.toString.call(obj)
  2. typeof --undefined,string,boolean,object,function
  3. Object.prototype.toString.call(obj ).slice(8,-1)
  
  ```
  //for in 对象（属性名） 数组（下标）
  let str = {userName:'lee',age:32};
  for(let i in str) {
  	console.log(i)//userName,age
  }
  
  let arr = [1,2,3,4,5,'abc'];
  for(let i in arr){
  	console.log(i) //0,1,2,3,4,5
  }
  
  
  ```
  
#### set，map容器
  
   - set容器：无序不可重复的多个value的集合体
   1. Set()
   2. Set(array)
   3. add(value)
   4. delete(value)
   5. has(value)
   6. clear()
   7. size
   
   - map容器：无序的key不重复的多个key-value的集合体
   1. Map()
   2. Map()
   3. set(key,value) //添加
   4. get(key)
   5. delete(key)
   6. has(key)
 ```
 let arr = new Set([1,2,3,2,1]);
 console.log(arr) //Set(3) {1, 2, 3}
 arr.add(7);
 console.log(arr.size,arr) //Set(4) {1, 2, 3, 7}

let map = new Map([['aaa',12],[3,'bb']]);
console.log(map)//Map(2) {"aaa" => 12, 3 => "bb"}
map.set(88,'shaun') //Map(3) {"aaa" => 12, 3 => "bb", 88 => "shaun"}
map.delete(3);
console.log(map) //Map(2) {"aaa" => 12, 88 => "shaun"}

 ```
 
#### for of
 for(let value of target){}遍历循环
 1. 遍历数组
 2. 遍历set
 3. 遍历map
 4. 遍历字符串
 5. 遍历伪数组
 ```
 var arr = [1,2,3,4,5,3,2,1];
 var arr1 = arr;
 var arr = [];
 let set = new Set(arr1)
 for(let i of set) {
 arr.push(i)
 }
 console.log(arr)
 
 
let arr = new Set([1,2,1]);

 ```
 #### 指数运算符（幂）**
 #### Array.prototype.includes(value) : 判断数组中是否包含指定value
 ```
 
 console.log(3**3)   //27
 
 let arr = [1,2,'abc'];
 arr.includes(2) //true
 ```
 
 
 
 
  
  
  
  
  

