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
