---
title: javascript一些方法
date: 2021-07-16 10:52:22
tags: javascript
excerpt: 记录一些函数方法
---

# splice()

```js
// splice（要删除第一项的位置，要删除的项数）
// splice（起始位置第一个插入数的下标位置，要删除的项数，要插入的项）
// ruturn 一个数组，包含从原始数组中删除的项（）如果没有删除任何项，则返回一个空数组

var colors = ["red","green","blue"]
var removed = colors.splice(0,1)
console.log(colors)
removed = colors.splice(1,0,"yellow","orange") //在下标为1的地方开始插入
console.log(colors)
```

# indexOf()

 ```js
var person = {name:'Nicholas'}

var people = [{name:'Nicholas'}] //指向一个匿名对象的引用
var morePeople = [person] //指向person对象的引用

console.log(people.indexOf(person)) //-1 people内找不到person对象
console.log(morePeople.indexOf(person)) //0 能找到person对象
 ```

