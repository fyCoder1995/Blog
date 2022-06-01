---
title: javascript语言精粹
date: 2021-08-10 15:51:25
tags: 读书笔记
excerpt: 要是有所得罪请原谅。本是出自一番好意，只是想显点粗浅技艺，那才是我们的初衷。————威廉.莎士比亚, 《仲夏夜之梦》(A Midsummer Night's Dream)
---

# 精华

> ......我不过略有一些讨人喜欢的地方而已，怎么会有什么迷人的魔力？
>
> ——威廉.莎士比亚，《温莎的风流娘儿们》（The Merry Wives of Windsor）



## 为什么要使用JavaScript

**编程是很困难的事情，绝不应该在懵懵懂懂的状态下开始你的工作。**



## 分析JavaScript

Javascript 的函数是（主要）基于**词法作用域（lexical scoping）**的顶级对象

**原型继承**是Javascript中一个有争议的特性。

*《JavaScript权威指南》*

*Lisp——链表处理语言，是基于λ演算的函数式编程语言*

*Scheme——多范型的编程语言*



## 一个简单的试验场

```javascript
Function.prototype.method = function (name,func){
	this.prototype[name] = func;
	return this;
}
```



# 语法

> 我很熟悉它，早就在文法书上念过了。
>
> ——威廉. 莎士比亚，《泰特斯.安德洛尼克斯》（The Tragedy pf Titus Andronicus）



扩展：[铁路图](https://www.cnblogs.com/PengfeiSong/p/12877953.html)

## 空白

**空白可能表现为被格式化的字符或注释的形式**

*块注释形式来自于一门叫PL/I（Programming Language One）的语言*



## 标识符

**标识符被用于语句、变量、参数、属性名、运算符和标记**

**标识符不能使用以下保留字**

```javascript
abstract
boolean break byte
case catch char class const continue
debugger default delete do double
else enum export extends
false final finally float for function
goto
if implements import in instanceof int interface
long
native new null
package private protected public
return
short static super switch synchronized
this throw throws transient true try typeof
var volatile void
while with
```



## 数字

**内部被表示为64位的浮点数，和Java的double数字类型一样**

### Math对象

``` javascript
// 常用方法
```

*NaN 是一个数值，它表示一个不能产生正常结果的运算结果。它不等于任何值，包括它自己。可用**isNaN() 检测**NaN*

*Infinity 表示所有大于1.79769313486231570e+308的值*

## 字符串

**Javascript 在被创建的时候，unicode(统一码) 是一个16位的字符集，所以Javascript中的所有字符都是16位的**

*字符串是不可变的*

### toUpperCase() 方法

```javascript
/*把字符串转换为大写*/
'cat'.toUpperCase() === 'CAT' // true
```



## 语句

**一个编译单元包含一组可执行的语句**

*链接器（Linker）——编程语言或操作系统提供的工具，它的工作就是解析未定义的符号引用，将目标文件中的占位符替换为符号地址*

### for语句

- 可选从句控制

  初始化从句（initalization）

  条件从句（condition）

  增量从句（increment）

- for in 语句【第三章枚举】

  枚举一个对象的所有属性名（或键名）

  *通常需要通过object.hasOwnProperty(variable)来确定这个属性是该对象的成员还是来自于原型链*

  ```javascript
  obj = {myvar:0}
  
  for (myvar in obj) {
      if (obj.hasOwnProperty(myvar)) {
          ... //来自成员
      }
  }
  ```

### do...while语句

**在代码块执行后检测表达式的值。这意味着代码至少要执行一次**

```javascript
var i = 10
do {
	document.writeln(i) // 10
  i++ 
}
while (i < 10)
```

### while语句

```javascript
var j = 10
while (j < 10) {
	document.writeln(j, '====') //不执行
  j++
}
```

### throw语句

``` javascript
var x = ""
try {
    if (x == "") throw document.writeln('is Empty') //is Empty
} catch (err) {
    document.writeln('err')
}
```



## 表达式

**运算符优先级**

| 符号                    | 优先级             |
| :---------------------- | ------------------ |
| . [] ()                 | 提取属性与调用函数 |
| delete new typeof + - ! | 一元运算符         |
| * / %                   | 乘法、除法、求余   |
| + -                     | 加法/连接、减法    |
| >= <= > <               | 不等式运算符       |
| === !==                 | 等式运算符         |
| &&                      | 逻辑与             |
| \|\|                    | 逻辑或             |
| !:                      | 三元               |

**一个属性存取表达式用于指定一个对象或数组的属性或元素**

## 字面量

### 对象字面量 （第三章）

**按指定规格创建新对象的表示法**

**对象是和可嵌套的**

```javascript
// 示例
var empty_object = {}

var stooge = { // stooge 走狗 这个是认真的吗？HAHAHAHA
	"first-name": "Jerome", // 用引号括住-是必须的
	"last-name": "Howard"
}

var flight = {
	airline:'Oceanic',
	number:815,
	departure:{
		IATA:'SYD',
		time:'2004-09-22 14:55',
		city:'Sydney'
	},
	arrival:{
		IATA:'LAX',
		time:'2004-09-23 10:42',
		city:'Los Angeles'
	}
}
```



### 数组字面量

**按指定规格创建新数组的表示法**

### 正则表达式



## 函数

### 函数字面量（第四章）

**定义了函数值，通过函数字面量来创建**

1. 保留字 function

2. 函数名（可以被省略，没有名称的称为匿名函数【anonymous】）

3. 圆括号中的一组参数

4. 花括号中的一组语句

   

# 对象

>对于丑陋的事物，爱会闭目无视。
>
>——威廉.莎士比亚，《维洛那二绅士》（The Two Gentlemen of Verona）



## 检索

**用[]和.表示法检索**

**尝试从undefined的成员属性中取值将会导致TypeError异常**

```javascript
// 示例
stooge["first-name"] // Jerome
flight.departure.IATA // SYD

stooge["middle-name"] //undefined
stooge.status //undefined
stooge["FIRST-NAME"] //undefined

// 用|| 运算符来填充默认值
var middle = stooge["middle-name"] || "(none)" //(none)
var status = flight.status || 'unknown' //unknown

// 通过&&运算符来避免错误
flight.equipment // undefined
flight.equipment.model // throw "Uncaught TypeError: flight.equipment is undefined"
flight.equipment && flight.equipment.model // undefined
```



## 更新

**对象里的值可以通过赋值语句来更新**

```javascript
//  示例
stooge['first-name'] =  'Jerome'

stooge['middle-name'] = 'Lester'
stooge.nickname = 'Curly'
flight.equipment = {
	model:'Boeing  777'
}
flight.status  = "overdue"
```



## 引用

**对象通过引用来 传递。它们永远不会被复制**

```javascript
var x = stooge
x.nickname = stooge.nickname
var nick = stooge.nickname // Curly （x和stooge指向同一个对象的引用）

var a = {},b = {},c = {} //a,b,c每个都引用一个不同的空对象
a = b = c = {} // a,b,c 都引用同一个空对象
```



## 原型（第六章）

**每个对象都连接到一个原型对象，并且它可以从中继承属性**

**所有通过对象字面量创建的对象都连接到Object.prototype,它是Javascript中的标配对象**

```javascript
if(typeof Object.beget !== 'function'){
	Object.create = function(o){
		var F = function(){}
		F.prototype = o;
		return new F()
	}
}

var another_stooge = Object.create(stooge)

another_stooge['first-name'] ='Harry'
another_stooge['middle-name'] = 'Moses'
another_stooge.nickname = 'Moe'

stooge.profession = 'actor'
another_stooge.profession //actor
```



## 反射

**typeof操作符对确定属性的类型很有帮助**

```javascript
typeof flight.number // number
typeof flight.status //string
typeof flight.arrival //object
typeof flight.manifest //undefined

// 原型链中的任何属性都会产生值
typeof flight.toString //function
typeof flight.constructor //function

//hasOwnProperty方法不会检查原型链
flight.hasOwnProperty('number') //true
flight.hasOwnProperty('constructor') //false
```



## 枚举

```javascript
// 通过 hasOwnProperty、typeof 来过滤
var name
for (name in another_stooge) {
    if (typeof another_stooge['name'] !== 'function') {
        document.writeln(name + ':' + another_stooge[name]) 
        //first-name:Harry
        //middle-name:Moses
        //nickname:Moe 
        //last-name:Howard 
        //profession:actor
    }
}

// 属性名出现的顺序是不确定的，要以特定顺序出现，必须完全避免使用for in 语句
var i
var properties = [
    'first-name',
    'middle-name',
    'last-name',
    'profession'
]
for (i = 0; i < properties.length; i += 1) {
    document.writeln(properties[i] + ':' + another_stooge[properties[i]])
    //first-name:Harry
    //middle-name:Moses
    //last-name:Howard
    //profession:actor
}
```



## 删除

**Delete运算符可以用来删除对象的属性。它不会触及原型链中的任何对象**

```javascript
another_stooge.nickname //Moe
delete another_stooge.nickname //删除another_stooge的nickname属性，从而暴露出原型的nickname属性
another_stooge.nickname //Curly
```



## 减少全局变量污染

**全局变量削弱来程序的灵活性，应该避免使用**

- 为你的应用只创建一个唯一的全局变量

  ```javascript
  var MYAPP = {}
  
  MYAPP.stooge = { 
      "first-name": "Jerome",
      "last-name": "Howard"
  }
  
  MYAPP.flight = {
      airline: 'Oceanic',
      number: 815,
      departure: {
          IATA: 'SYD',
          time: '2004-09-22 14:55',
          city: 'Sydney'
      },
      arrival: {
          IATA: 'LAX',
          time: '2004-09-23 10:42',
          city: 'Los Angeles'
      }
  }
  ```

  

- 闭包（closure）【通过函数字面量创建的函数对象包含一个连到外部上下文的连接】



# 函数

> 所有的过失在未犯以前，都已定下应处的惩罚
>
> ——威廉.莎士比亚，《一报还一报》（Measure for Measure）

**所谓编程，就是将一组需求分解成一组函数与数据结构的技能**

## 函数对象

**Javascript中的函数就是对象**

**函数的与众不同之处 在于它们可以被调用**



## 调用

**调用一个函数会暂停当前函数的执行，传递控制权和参数给新函数**

- this（值取决于调用的模式）

- arguments（第四章）

  *arguments并不是一个真正的数组，它只是一个“类似数组”array-like）“对象 ，它拥有length属性，但没有任何数组的方法*

  ```javascript
  // 示例
  var sum = function(){
      var i,sum  = 0
      for(i=0;i<arguments.length;i+=1){
          sum +=  arguments[i]
      }
      return sum
  }
  document.writeln(sum(4,8,15,16,23,42)) //108
  ```

  

**调用模式：**

1. 方法调用模式（当一个函数被保存为对象的一个属性是，我们称它为一个**方法**，用.或者[]调用）

   ```javascript
   var myObject = {
       value:0,
       increment:function(inc){
           this.value  += typeof inc === 'number' ? inc : 1
       }
   }
   
   myObject.increment()
   document.writeln(myObject.value) //1
   
   myObject.increment(2)
   document.writeln(myObject.value) //3
   ```

   

2. 函数调用模式 （当一个函数并非一个对象的属性时，它就是被当作函数调用）

   ```javascript
   var sum = add(3,4) // 7
   
   myObject.double = function(){
       var that = this
       var helper = function(){
           that.value = add(that.value,that.value)
       }
   
       helper() //以函数形式调用
   }
   
   myObject.double() //以方法形式调用
   document.writeln(myObject.value) //6
   ```

   

3. 构造器调用模式（按照约定，构造器函数保存在以大写格式命名的变量里，调用时必须加上new）

   ```javascript
   var Quo = function(string){ //创建一个构造函数Quo
       this.status = string
   }
   
   Quo.prototype.get_status  = function(){ //给构造函数提供一个公共方法
       return  this.status
   }
   
   var myQuo = new Quo("confused") //构造一个实例
   
   document.writeln(myQuo.get_status()) // confused
   
   ```

4. apply调用模式（构建一个参数数组传递给调用函数）

   ```javascript
   var array = [3,4]
   var sum = add.apply(null,array)//7
   
   var statusObject = {
       status :'A-OK'
   }
   
   //statusObject 并没有继承自Quo.prototype,但我们可以在 statusObject调用 get_status方法
   var status = Quo.prototype.get_status.apply(statusObject) //A-OK
   
   ```

   

## 返回

**return语句可用来时函数提前返回。没有指定返回值，则返回undefined**

**如果函数调用时在前面加上了new前缀，且返回值不是一个对象，则返回this（该新对象）**

## 异常

**异常时干扰程序的正常流程的不寻常的事故**

```javascript
var add = function(a,b){
    if(typeof a !== 'number' ||  typeof b !== 'number'){
        throw{
            name:'TypeError',
            message:'add needs numbers'
        }
    }
    return a + b
}

var try_it = function() {
    try {
        add("seven")
    } catch (e) {
        console.warn(e)
        document.writeln(e.name + ':' + e.message) //TypeError:add needs numbers
    }
}

try_it()
```



## 扩充类型的功能

**Javascript允许给语言的基本类型扩充功能**

**通过给基本类型增加方法，可以极高的提高语言的表现力**

*PS: 基本类型的原型是公用结构，所以在类库混用时务必小心*

```javascript
// 符合条件时增加方法
Function.prototype.method = function(name,func){
    if(!this.prototype[name]){
        this.prototype[name] = func
    }
    return this
}

//提取数字中的整数部分
Number.method('integer',function(){
    return Math[this < 0 ? 'ceil': 'floor'](this)
})
document.writeln((-10 / 3).integer()) // -3

//去掉字符串首尾空白
String.method('trim',function(){
    return  this.replace(/^\s+|\s+$/g,'')
})
document.writeln('"' + "   neat   ".trim() + '"'); //neat
```



## 递归

**递归函数就是会直接或间接地调用自身的一种函数**

[汉诺塔](https://baike.baidu.com/item/汉诺塔/3468295?fr=aladdin)



## 作用域



## 闭包



## 回调



## 模块



## 级联



## 柯里化



## 记忆







# 继承



# 数组



# 正则表达式



# 方法



# 代码风格



# 优美的特性



