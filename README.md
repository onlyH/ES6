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
 ```
 let obj1 = {
 	userName:'darker',
 	age:13
 }
 let str = `我的名字叫：${obj1.userName},今年我：${obj1.age}岁`;
 console.log(str)
 ```
