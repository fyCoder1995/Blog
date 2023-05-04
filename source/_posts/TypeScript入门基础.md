---
title: TypeScript入门基础
tags: TypeScript
categories: TypeScript
excerpt: TypeScript是由微软开发的自由开源的编程语言。它是JavaScript的超集，而且本质上向这个语言添加了可选的静态类型和基于类的面向对象编程
date: 2023-05-04 19:56:45
---

> TypeScript是由微软开发的自由开源的编程语言。它是JavaScript的超集，而且本质上向这个语言添加了可选的静态类型和基于类的面向对象编程

### 运行ts

```shell
$ npm install -g typescript # 安装

$ tsc helloworld.ts #编译 helloworld.ts => helloworld.js
```

### TypeScript基础类型

#### Boolean类型

```typescript
// Boolean类型
let isDone: boolean = false; // ES5: var isDone = false;
```

#### Number类型

```typescript
// Number类型
let count: number = 10; //ES5: var count = 10;
```

#### String类型

```typescript
// String类型
let name: string = 'fyCoder'; // ES5: var name = 'fycoder'
```

#### Array类型

```typescript
// Array类型
let list: number[] = [1,2,3]; //ES5: var list = [1,2,3]; 
let list: Array<number> = [1,2,3]; //Array<number>泛型语法 //ES5: var list = [1,2,3]
```

#### Enum(枚举)类型

##### 数字枚举

```typescript
// 数字枚举
enum Direction {NORTH = 3,SOUTH,EAST,WEST,}
let dir:Direction = Direction.NORTH

/*
    ES5:  
    "use strict";
    var Direction;
    (function (Direction) {
        Direction[Direction["NORTH"] = 3] = "NORTH";
        Direction[Direction["SOUTH"] = 4] = "SOUTH";
        Direction[Direction["EAST"] = 5] = "EAST";
        Direction[Direction["WEST"] = 6] = "WEST";
    })(Direction || (Direction = {}));
    var dir = Direction.NORTH;
*/
```

##### 字符串枚举

```typescript
// 字符串枚举
enum Direction {  NORTH = "NORTH",  SOUTH = "SOUTH",  EAST = "EAST",  WEST = "WEST",}

/*
    ES5:
    "use strict";
    var Direction;
    (function (Direction) {
        Direction["NORTH"] = "NORTH";
        Direction["SOUTH"] = "SOUTH";
        Direction["EAST"] = "EAST";
        Direction["WEST"] = "WEST";
    })(Direction || (Direction = {}));
*/
```

##### 异构枚举

*异构枚举的成员值是数字和字符串的混合*

```typescript
// 异构枚举 （数字枚举相对字符串枚举多了“反向映射”）
enum Enum {  A,  B,  C = "C",  D = "D",  E = 8,  F,}
console.log(Enum.A) //输出：0
console.log(Enum[0]) // 输出：A

/*
ES5:
    var Enum;
    (function (Enum) {
        Enum[Enum["A"] = 0] = "A";
        Enum[Enum["B"] = 1] = "B";
        Enum["C"] = "C";
        Enum["D"] = "D";
        Enum[Enum["E"] = 8] = "E";
        Enum[Enum["F"] = 9] = "F";
    })(Enum || (Enum = {}));
    console.log(Enum.A); //输出：0
    console.log(Enum[0]); // 输出：A
*/
```

#### Any类型

````typescript
// any类型（全局超级类型）本质上是类型系统的逃逸舱

let notSure: any = 666;notSure='fyCoder';notSure = false;

let value: any; 

/*
    value.foo.bar;
    value.trim();
    value();
    new value(); 
    value[0][1];
    
    以上形式都不会报错
*/

````

#### Unknown类型

```typescript
// 与any类型一样，另一种顶级类型

let value: unknown;

/*
 value = true; // OK
 value = 42; // OK
 value = "Hello World"; // OK
 value = []; // OK
 value = {}; // OK
 value = Math.random; // OK
 value = null; // OK
 value = undefined; // OK
 value = new TypeError(); // OK
 value = Symbol("type"); // OK
*/

// unknow类型只能被赋值给any类型和unknow类型本身
 let value: unknown;

/*
 let value1: unknown = value; // OK
 let value2: any = value; // OK
 let value3: boolean = value; // Error
 let value4: number = value; // Error
 let value5: string = value; // Error
 let value6: object = value; // Error
 let value7: any[] = value; // Error
 let value8: Function = value; // Error
*/

/*
  value.foo.bar; // Error
  value.trim(); // Error
  value(); // Error
  new value(); // Error
  value[0][1]; // Error
  
	与any相反，以上形式都会报错
*/
```

#### Tuple(元组)类型

*js中是没有元组类型的，元组是TypeScript中特有的类型，其工作方式类似于数组*

```typescript
// 元祖可用于定义具有有限数量的未命名属性的类型
let tupleType: [string, boolean];
tupleType = ["fyCoder", true];
console.log(tupleType[0]); // fyCoder
console.log(tupleType[1]); // true

// 如果类型不匹配，编译器会报错
tupleType = [true, "fyCoder"]; // Error

// 初始化元组时，必须提供每个属性的值，不然也会报错
tupleType = ["fyCoder"]; //Error
```

#### Void类型

```typescript
// 声明函数返回值为void ，与any类型相反，表示没有任何类型

function warnUser(): void {  
    console.log("This is my warning message");
}

/*
    ES5:
     "use strict";
     function warnUser() {
        console.log("This is my warning message");
    }
*/

// 声明一个void类型的变量没有什么作用，它的值只能是undefined 或 null
let unusable: void = undefined;
```

#### Null 和 Undefined类型

```typescript
// 默认情况下 null 和 undefined 是所有类型的子类型
// 然而 如果指定了 --strictNullChecks（严格校验） 标记，null 和 undefined 只能赋值给 void 和它们各自的类型
let u: undefined = undefined;
let n: null = null;
```

#### Never类型

```typescript
// 表示那些永不存在的值的类型
// 总是会抛出异常或根本不会有返回值的函数表达式或箭头函数表达式的返回类型
// 返回never的函数必须存在无法达到的终点
 function error(message: string): never {
   throw new Error(message);
 }
 
 function infiniteLoop(): never {
   while (true) {}
 }
 
//  可以利用never类型的特性做全面性检查
 type Foo = string | number;
 
 function controlFlowAnalysisWithNever(foo: Foo) {
   if (typeof foo === "string") {
     // 这里 foo 被收窄为 string 类型
   } else if (typeof foo === "number") {
     // 这里 foo 被收窄为 number 类型
   } else {
     // foo 在这里是 never
     const check: never = foo;
   }
 }
 
//  使用 never 避免出现新增了联合类型没有对应的实现，目的就是写出类型绝对安全的代码。
```

### TypeScript 断言

*相当于类型转换，但是不进行特殊的数据检查和解构;没有运行时的影响，只是在编译阶段起作用 **通俗来说相当于告诉编译器，我知道你是什么类型***

#### 1、尖括号语法

```typescript
// 1、尖括号语法
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
```

#### 2、as语法

```typescript
// 2、as语法
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

### 类型守卫

*类型守卫也称类型保护，是可执行运行时检查的一种表达式，用于确保该类型在一定的范围内*

#### in 关键字

```typescript
// in
interface Admin {
  name: string;
  privileges: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}
```

#### typeof 关键字

```typescript
// typeof 
// typeof 只支持 "number"， "string"， "boolean" 或 "symbol"。当然你要去比较其他类型，也不拦着
function padLeft(value: string, padding: string | number) {
   if (typeof padding === "number") {
       return Array(padding + 1).join(" ") + value;
   }
   if (typeof padding === "string") {
       return padding + value;
   }
   throw new Error(`Expected string or number, got '${padding}'.`);
 }
```

####  instanceof 关键字

```typescript
// instanceof 关键字
interface Padder {
   getPaddingString(): string;
 }
 
class SpaceRepeatingPadder implements Padder {
   constructor(private numSpaces: number) {}
   getPaddingString() {
     return Array(this.numSpaces + 1).join(" ");
   }
}
 
class StringPadder implements Padder {
   constructor(private value: string) {}
   getPaddingString() {
     return this.value;
   }
}
 
let padder: Padder = new SpaceRepeatingPadder(6);
 
if (padder instanceof SpaceRepeatingPadder) {
   // padder的类型收窄为 'SpaceRepeatingPadder'
}

```

#### 自定义类型保护的类型谓词

```typescript
// 自定义类型保护的类型谓词
function isNumber(x: any): x is number {
   return typeof x === "number";
 }
 
 function isString(x: any): x is string {
   return typeof x === "string";
 }
```

### 联合类型和类型别名

#### 联合类型

```typescript
// 联合类型 通常与 null 或 undefined 一起使用

const sayHello = (name: string | undefined) => { };

sayHello("fyCoder");
sayHello(undefined);
```

#### 可辨识联合类型

*也称为代数数据类型或标签联合类型; 包含三个要点可辨识、联合类型和类型守卫：*



```typescript
/*
    这种类型的本质是结合联合类型和字面量类型的一种类型保护方法
    如果一个类型是多个类型的联合类型，且多个类型含有一个公共属性，那么就可以利用这个公共属性，来创建不同的类型保护区块。
*/

// 可辨识 （要求联合类型中的每个元素都含有一个单例类型属性）
// 例子中vType属性，就被称为可辨识属性
enum CarTransmission {
   Automatic = 200,
   Manual = 300
 }
 
interface Motorcycle {
   vType: "motorcycle"; // discriminant
   make: number; // year
 }
 
 interface Car {
   vType: "car"; // discriminant
   transmission: CarTransmission
 }
 
 interface Truck {
   vType: "truck"; // discriminant
   capacity: number; // in tons
 }
 
//  联合类型
type Vehicle = Motorcycle | Car | Truck;

// 类型守卫

 const EVALUATION_FACTOR = Math.PI; 

 function evaluatePrice(vehicle: Vehicle) {
   return vehicle.capacity * EVALUATION_FACTOR;
 }
 
 const myTruck: Truck = { vType: "truck", capacity: 9.5 };

// 调用上面函数会报错，因为不存在capacity属性
 evaluatePrice(myTruck);
 
// 重构后的evaluatePrice函数
  function evaluatePrice(vehicle: Vehicle) {
   switch(vehicle.vType) {
     case "car":
       return vehicle.transmission * EVALUATION_FACTOR;
     case "truck":
       return vehicle.capacity * EVALUATION_FACTOR;
     case "motorcycle":
       return vehicle.make * EVALUATION_FACTOR;
   }
 }
 
```

#### 类型别名

*给类型起个新名字*

```typescript
type Message = string | string[];
let greet = (message: Message) => {  
    // ...
};
```

### 交叉类型

```typescript
// TypeScript 交叉类型是将多个类型合并为一个类型

 interface IPerson {
   id: string;
   age: number;
 }
 
 interface IWorker {
   companyId: string;
 }
 
 type IStaff = IPerson & IWorker; // 使用&
 
 const staff: IStaff = {
   id: 'Xc0029',
   age: 28,
   companyId: 'Xc'
 };
 
 console.dir(staff)
```

### TypeScript 函数

#### 箭头函数

```typescript
// 常见语法
 myBooks.forEach(() => console.log('reading'));
 
 myBooks.forEach(title => console.log(title));
 
 myBooks.forEach((title, idx, arr) =>
   console.log(idx + '-' + title);
 );
 
 myBooks.forEach((title, idx, arr) => {
   console.log(idx + '-' + title);
 });
 
// 使用示例

 // 未使用箭头函数
 function Book() {
   let self = this;
   self.publishDate = 2016;
   setInterval(function () {
     console.log(self.publishDate);
   }, 1000);
 }
 
 // 使用箭头函数
 function Book() {
   this.publishDate = 2016;
   setInterval(() => {
     console.log(this.publishDate);
   }, 1000);
 }
 
```

#### 参数类型和返回类型

```typescript
 function createUserId(name: string, id: number): string {
   return name + id;
 }
```

#### 函数类型

```typescript
let IdGenerator: (chars: string, nums: number) => string;

function createUserId(name: string, id: number): string {
  return name + id;
}

IdGenerator = createUserId; // 以上是两种写法
```

#### 可选参数及默认参数

```typescript
 // 可选参数
 function createUserId(name: string, id: number, age?: number): string {
   return name + id;
 }
 
 // 默认参数
 function createUserId(
   name: string = "fyCoder",
   id: number,
   age?: number // （缺省）通过? 来定义可选参数，要放在普通参数后面，不然会导致编译错误
 ): string {
   return name + id;
 }
```

#### 剩余参数

```typescript
 function push(array, ...items) {
   items.forEach(function (item) {
     array.push(item);
   });
 }
 
 let a = [];
 push(a, 1, 2, 3);
```

#### 函数重载

*函数重载或方法重载是使用相同名称和不同参数数量或类型创建多个方法的一种能力*

```typescript
// 函数重载 
 function add(a: number, b: number): number;
 function add(a: string, b: string): string;
 function add(a: string, b: number): string;
 function add(a: number, b: string): string;

 function add(a: Combinable, b: Combinable) {
   if (typeof a === "string" || typeof b === "string") {
     return a.toString() + b.toString();
   }
   return a + b;
 }
 
// 方法重载
  class Calculator {
   add(a: number, b: number): number;
   add(a: string, b: string): string;
   add(a: string, b: number): string;
   add(a: number, b: string): string;
   add(a: Combinable, b: Combinable) { // 并不是重载列表的一部分
     if (typeof a === "string" || typeof b === "string") {
       return a.toString() + b.toString();
     }
     return a + b;
   }
 }
 
 const calculator = new Calculator();
 const result = calculator.add("fyCoder", "hello");

// 在定义重载时，一定要把最精确的定义放在最前面
```

### TypeScript 数组

#### 数组解构

```typescript
// 数组解构 []
 let x: number; let y: number; let z: number;
 let five_array = [0,1,2,3,4];
 [x,y,z] = five_array;
```

#### 数组展开运算符

```typescript
// 数组展开运算符 ...
 let two_array = [0, 1];
 let five_array = [...two_array, 2, 3, 4];
```

#### 数组遍历

```typescript
// 数组遍历
 let colors: string[] = ["red", "green", "blue"];
 for (let i of colors) {  
     console.log(i);
 }
```

### TypeScript 对象

#### 对象解构

```typescript
// 对象解构 {}
 let person = {
   name: "fyCoder",
   gender: "Female",
 };
 
 let { name, gender } = person;
```

#### 对象展开运算符

```typescript
 // 对象展开运算符 ...
 let person = {
   name: "fyCoder",
   gender: "Female",
   address: "ZheJiang",
 };
```

#### 组装对象

```typescript
 // 组装对象
 let personWithAge = { ...person, age: 28 };
```

#### 获取除了某些项外的其它项

```typescript
 // 获取除了某些项外的其它项
 let { name, ...rest } = person;
```

### TypeScript 接口

*在面向对象语言中，接口是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类去实现。*

####  对象的形状

```typescript
// 对象的形状
 interface Person {
   name: string;
   age: number;
 }
 
 let Fycoder: Person = {
   name: "Fycoder",
   age: 28,
 };
```

#### 可选 | 只读属性

```typescript
//  可选 | 只读属性
 interface Person {
   readonly name: string;
   age?: number;
 }
// 只读属性用于限制只能在对象刚刚创建的时候修改其值
 
 let a: number[] = [1, 2, 3, 4];
 let ro: ReadonlyArray<number> = a; //ReadonlyArray<T> 与 Array<T> 相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改
 ro[0] = 12; // error!
 ro.push(5); // error!
 ro.length = 100; // error!
 a = ro; // error!
 
```

### TypeScript 类

*在面向对象语言中，类是一种面向对象计算机编程语言的构造，是创建对象的蓝图，描述了所创建的对象共同的属性和方法*

#### 类的属性与方法

```typescript
 class Greeter {
   // 静态属性
   static cname: string = "Greeter";
   // 成员属性
   greeting: string;
 
   // 构造函数 - 执行初始化操作
   constructor(message: string) {
     this.greeting = message;
   }
 
   // 静态方法
   static getClassName() {
     return "Class name is Greeter";
   }
 
   // 成员方法
   greet() {
     return "Hello, " + this.greeting;
   }
 }
 
 let greeter = new Greeter("world");
 
 /*
   ES5
   "use strict";
   var Greeter = '/** @class *'/ (function () {
       // 构造函数 - 执行初始化操作
       function Greeter(message) {
           this.greeting = message;
       }
       // 静态方法
       Greeter.getClassName = function () {
           return "Class name is Greeter";
       };
       // 成员方法
       Greeter.prototype.greet = function () {
           return "Hello, " + this.greeting;
       };
       // 静态属性
       Greeter.cname = "Greeter";
       return Greeter;
   }());
   var greeter = new Greeter("world");
 */

```

#### 访问器

*在ts中，通过getter和setter方法来实现数据的封装和有效性校验，防止出现异常数据*

```typescript
 let passcode = "Hello TypeScript";
 
 class Employee {
   private _fullName: string;
 
   get fullName(): string {
     return this._fullName;
   }
 
   set fullName(newName: string) {
     if (passcode && passcode == "Hello TypeScript") {
       this._fullName = newName;
     } else {
       console.log("Error: Unauthorized update of employee!");
     }
   }
 }
 
 let employee = new Employee();
 employee.fullName = "fyCoder";
 if (employee.fullName) {
   console.log(employee.fullName);
 }
```

#### 类的继承

*继承是一种联结类与类的层次模型。指的是一个类（子类、子接口）继承另外的一个类（父类、父接口）的功能，并可以增加它自己的新功能的能力，继承是类与类或者接口与接口之间最常见的关系*

**is-a关系**

```typescript
 class Animal {
   name: string;
   
   constructor(theName: string) {
     this.name = theName;
   }
   
   move(distanceInMeters: number = 0) {
     console.log(`${this.name} moved ${distanceInMeters}m.`);
   }
 }
 
 class Snake extends Animal { // 使用extends关键字
   constructor(name: string) {
     super(name);
   }
   
   move(distanceInMeters = 5) {
     console.log("Slithering...");
     super.move(distanceInMeters);
   }
 }
 
 let sam = new Snake("Sammy the Python");
 sam.move();
```

#### ECMAScript 私有字段

*Typescript3.8版本开始支持*

```typescript
 class Person {
   #name: string;
 
   constructor(name: string) {
     this.#name = name;
   }
 
   greet() {
     console.log(`Hello, my name is ${this.#name}!`);
   }
 }
 
 let fyCoder = new Person("fyCoder");
 
 fyCoder.#name;
 //     ~~~~~
 // Property '#name' is not accessible outside class 'Person'
 // because it has a private identifier.
 
// 私有字段 以 # 字符开头，有时我们称之为私有名称；
// 每个私有字段名称都唯一地限定于其包含的类；
// 不能在私有字段上使用 TypeScript 可访问性修饰符（如 public 或 private）；
// 私有字段不能在包含的类之外访问，甚至不能被检测到。
```

### TypeScript 泛型

*使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据*

*设计泛型的关键目的是在成员之间提供有意义的约束，这些成员可以是：类的实例成员、类分方法、函数参数和函数返回值*

*泛型是允许同一个函数接受不同类型的参数的一种模版，使用泛型来创建可复用组件比使用any类型要更好，因为泛型会保留参数类型*

#### 泛型接口

```typescript
interface GenericIdentityFn<T> {  (arg: T): T;}
```

#### 泛型类

```typescript
 class GenericNumber<T> {
   zeroValue: T;
   add: (x: T, y: T) => T;
 }
 
 let myGenericNumber = new GenericNumber<number>();
 myGenericNumber.zeroValue = 0;
 myGenericNumber.add = function (x, y) {
   return x + y;
 };
```

#### 泛型变量(常见)

``` text
T（Type）：表示一个 TypeScript 类型
K（Key）：表示对象中的键类型
V（Value）：表示对象中的值类型
E（Element）：表示元素类型
```

#### 泛型工具类型

##### typeof

```typescript
// 1、typeof 用来获取一个变量声明或对象的类型
 interface Person {
   name: string;
   age: number;
 }
 
 const sem: Person = { name: 'fyCoder', age: 28 };
 type Sem= typeof sem; // -> Person
 
 function toArray(x: number): Array<number> {
   return [x];
 }
 
 type Func = typeof toArray; // -> (x: number) => number[]
```

##### keyof

```typescript
// 2、keyof 遍历一个对象中的所有key值
 interface Person {
     name: string;
     age: number;
 }
 
 type K1 = keyof Person; // "name" | "age"
 type K2 = keyof Person[]; // "length" | "toString" | "pop" | "push" | "concat" | "join" 
 type K3 = keyof { [x: string]: Person };  // string | number
```

##### in

```typescript
//  3、in 用来遍历枚举类型
 type Keys = "a" | "b" | "c"
 
 type Obj =  {
   [p in Keys]: any
 } // -> { a: any, b: any, c: any }
```

##### infer

```typescript
//  4、infer 在条件类型语句中，声明类型变量并使用
type ReturnType<T> = T extends (
   ...args: any[]
 ) => infer R ? R : any;
```

##### extends

```typescript
//  5、extends 添加泛型约束
 interface ILengthwise {
   length: number;
 }
 
 function loggingIdentity<T extends ILengthwise>(arg: T): T {
   console.log(arg.length);
   return arg;
 }
 
  loggingIdentity(3);  // Error 因为定义了约束，所以不再适用于任意类型
  
  loggingIdentity({length: 10, value: 3}); //OK
```

##### Partial

```typescript
//  6、Partial 将某个类型里的属性全部变为可选项?
 /**
  * node_modules/typescript/lib/lib.es5.d.ts
  * Make all properties in T optional
  */
 type Partial<T> = {
   [P in keyof T]?: T[P]; // 通过keyof拿到T的所有属性名，使用in进行遍历，将值赋值给P，通过T[P]取得相应的属性值。?做缺省，用于将所有属性变为可选
 };
 
// .eg.
  interface Todo {
   title: string;
   description: string;
 }
 
 function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
   return { ...todo, ...fieldsToUpdate };
 }
 
 const todo1 = {
   title: "organize desk",
   description: "clear clutter",
 };
 
 const todo2 = updateTodo(todo1, {
   description: "throw out trash",
 });
  
/*
   fieldsToUpdate的类型为Partial<Todo> 即：
    {  
     title?: string | undefined;   
     description?: string | undefined;
   }
*/
```

### TypeScript 装饰器

#### 装饰器是什么？

- 它是一个表达式
- 该表达式被执行后，返回一个函数
- 函数的入参分别为 target、name和descriptoe
- 执行该函数后，可能返回descriptor对象，用于配制target对象

#### 装饰器的分类

- 类装饰器（Class decorators）
- 属性装饰器（Property decorators）
- 方法装饰器（Method decorators）
- 参数装饰器（Parameter decorators）

#### 类装饰器

*用来装饰类，接收参数：target*

```typescript
// target: Object - 被装饰的类

//声明
declare type ClassDecorator = <TFunction extends Function>(
  target: TFunction
) => TFunction | void;

// 例子
function Greeter(target: Function): void {
  target.prototype.greet = function (): void {
    console.log("Hello Gemma!");
  };
}

@Greeter  // 使用@Greeter语法糖，上面定义的
class Greeting {
  constructor() {
    // 内部实现
  }
}

let myGreeting = new Greeting();
myGreeting.greet(); // 'Hello Gemma!';

//自定义输入语法
function Greeter(greeting: string) {
  return function (target: Function) {
    target.prototype.greet = function (): void {
      console.log(greeting);
    };
  };
}

@Greeter("Hello TS!") //这里做了自定义
class Greeting {
  constructor() {
    // 内部实现
  }
}

let myGreeting = new Greeting();
myGreeting.greet(); //  'Hello TS!';

```

#### 属性装饰器

*用来装饰类的属性，接收参数：target、propertyKey*

```typescript
// target: Object - 被装饰的类
// propertyKey: string | symbol - 被装饰类的属性名

// 声明
declare type PropertyDecorator = (target:Object, 
   propertyKey: string | symbol ) => void;

// 例子 定义一个logProperty函数，在跟踪用户对属性的操作
function logProperty(target: any, key: string) {
   delete target[key];
 
   const backingField = "_" + key;
 
   Object.defineProperty(target, backingField, {
     writable: true,
     enumerable: true,
     configurable: true
   });
 
   // property getter
   const getter = function (this: any) {
     const currVal = this[backingField];
     console.log(`Get: ${key} => ${currVal}`);
     return currVal;
   };
 
   // property setter
   const setter = function (this: any, newVal: any) {
     console.log(`Set: ${key} => ${newVal}`);
     this[backingField] = newVal;
   };
 
   // Create new property with getter and setter
   Object.defineProperty(target, key, {
     get: getter,
     set: setter,
     enumerable: true,
     configurable: true
   });
 }
 
 class Person { 
   @logProperty   //语法糖
   public name: string;
 
   constructor(name : string) { 
     this.name = name;
   }
 }
 
 const p1 = new Person("fyCoder");
 p1.name = "Gemma";
 
 // Set: name => fyCoder
 // Set: name => Gemma
```

#### 方法装饰器

*用来装饰类的方法，接收三个参数：target、propertyKey、descriptor*

```typescript
// target: Object - 被装饰的类
// propertyKey: string | symbol - 方法名
// descriptor: TypePropertyDescript - 属性描述符

// 声明
declare type MethodDecorator = <T>(target:Object, propertyKey: string | symbol,         
   descriptor: TypePropertyDescript<T>) => TypedPropertyDescriptor<T> | void;

// 例子
function LogOutput(tarage: Function, key: string, descriptor: any) {
   let originalMethod = descriptor.value;
   let newMethod = function(...args: any[]): any {
     let result: any = originalMethod.apply(this, args);
     if(!this.loggedOutput) {
       this.loggedOutput = new Array<any>();
     }
     this.loggedOutput.push({
       method: key,
       parameters: args,
       output: result,
       timestamp: new Date()
     });
     return result;
   };
   descriptor.value = newMethod;
 }
 
 class Calculator {
   @LogOutput
   double (num: number): number {
     return num * 2;
   }
 }
 
 let calc = new Calculator();
 calc.double(11);
 // console ouput: [{method: "double", output: 22, ...}]
 console.log(calc.loggedOutput); 
```

#### 参数装饰器

*装饰函数参数，接收三个参数：target、propertyKey、parameterIndex*

```typescript
//target: Object - 被装饰的类
//propertyKey: string | symbol - 方法名
//parameterIndex: number - 方法中参数的索引值

// 声明
declare type ParameterDecorator = (target: Object, propertyKey: string | symbol, 
   parameterIndex: number ) => void

// 例子
function Log(target: Function, key: string, parameterIndex: number) { 
  let functionLogged = key || target.prototype.constructor.name;  
  console.log(`The parameter in position ${parameterIndex} at ${functionLogged} has  been decorated`);
       
}
class Greeter {  
  greeting: string;  
  constructor(@Log phrase: string) {    
    this.greeting = phrase;   
  }
} 
//  The parameter in position 0 at Greeter has been decorated

```

### 编译上下文

#### tsconfig.json的作用

1. 用于标识 TypeScript 项目的根路径；
2. 用于配置 TypeScript 编译器；
3. 用于指定编译的文件。

#### tsconfig.json 重要字段

1. files - 设置要编译的文件的名称；
2. include - 设置需要进行编译的文件，支持路径模式匹配；
3. exclude - 设置无需进行编译的文件，支持路径模式匹配；
4. compilerOptions - 设置与编译流程相关的选项。

#### compilerOptions 选项

``` json
{
   "compilerOptions": {
     /* 基本选项 */
     "target": "es5",                       // 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES6'/'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'
     "module": "commonjs",                  // 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
     "lib": [],                             // 指定要包含在编译中的库文件
     "allowJs": true,                       // 允许编译 javascript 文件
     "checkJs": true,                       // 报告 javascript 文件中的错误
     "jsx": "preserve",                     // 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'
     "declaration": true,                   // 生成相应的 '.d.ts' 文件
     "sourceMap": true,                     // 生成相应的 '.map' 文件
     "outFile": "./",                       // 将输出文件合并为一个文件
     "outDir": "./",                        // 指定输出目录
     "rootDir": "./",                       // 用来控制输出目录结构 --outDir.
     "removeComments": true,                // 删除编译后的所有的注释
     "noEmit": true,                        // 不生成输出文件
     "importHelpers": true,                 // 从 tslib 导入辅助工具函数
     "isolatedModules": true,               // 将每个文件做为单独的模块 （与 'ts.transpileModule' 类似）.
 
     /* 严格的类型检查选项 */
     "strict": true,                        // 启用所有严格类型检查选项
     "noImplicitAny": true,                 // 在表达式和声明上有隐含的 any类型时报错
     "strictNullChecks": true,              // 启用严格的 null 检查
     "noImplicitThis": true,                // 当 this 表达式值为 any 类型的时候，生成一个错误
     "alwaysStrict": true,                  // 以严格模式检查每个模块，并在每个文件里加入 'use strict'
 
     /* 额外的检查 */
     "noUnusedLocals": true,                // 有未使用的变量时，抛出错误
     "noUnusedParameters": true,            // 有未使用的参数时，抛出错误
     "noImplicitReturns": true,             // 并不是所有函数里的代码都有返回值时，抛出错误
     "noFallthroughCasesInSwitch": true,    // 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）
 
     /* 模块解析选项 */
     "moduleResolution": "node",            // 选择模块解析策略： 'node' (Node.js) or 'classic' (TypeScript pre-1.6)
     "baseUrl": "./",                       // 用于解析非相对模块名称的基目录
     "paths": {},                           // 模块名到基于 baseUrl 的路径映射的列表
     "rootDirs": [],                        // 根文件夹列表，其组合内容表示项目运行时的结构内容
     "typeRoots": [],                       // 包含类型声明的文件列表
     "types": [],                           // 需要包含的类型声明文件名列表
     "allowSyntheticDefaultImports": true,  // 允许从没有设置默认导出的模块中默认导入。
 
     /* Source Map Options */
     "sourceRoot": "./",                    // 指定调试器应该找到 TypeScript 文件而不是源文件的位置
     "mapRoot": "./",                       // 指定调试器应该找到映射文件而不是生成文件的位置
     "inlineSourceMap": true,               // 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件
     "inlineSources": true,                 // 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性
 
     /* 其他选项 */
     "experimentalDecorators": true,        // 启用装饰器
     "emitDecoratorMetadata": true          // 为装饰器提供元数据的支持
   }
 }
```















