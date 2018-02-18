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
  
  
  
  
 