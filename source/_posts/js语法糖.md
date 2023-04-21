---
title: js语法糖
tags: 经验
categories: 工作
excerpt: 关于js语法糖
date: 2021-07-13 17:00:55
---

# 将一维数组切割成特定长度的二维数组

``` js
var array=[1,2,3,4,5,6,8,9,21,50,3,6,8,9];
var size=3;
function sliceArr(array, size) {
	var result = [];
	for (var x = 0; x < Math.ceil(array.length / size); x++) {
		var start = x * size;
		var end = start+ size;
		result.push(array.slice(start, end));
	}
	return result;
}

console.log(array,'未处理数组')
console.log(sliceArr(array, size),'新数组-分组后的')
```

# 数组原型链上添加去重方法

```js
let arr = [1,2,3,4,4,3,2,1,3,4,5,6,7,7,8,9,8]

Array.prototype.quchong = function(){
	return [...new Set(this)]
}

console.log(arr.quchong())
```



# 过滤数组对象

```js
let arr = [{id:1,lable:'11'},{id:2,lable:'22'},{id:3,lable:'33'},{id:4,lable:'44'},{id:5,lable:'55'}]
let arr0 = ['11','33','55']

let newArr = []
arr.filter(item=>{
	if (arr0.indexOf(item.lable) !== -1)
		newArr.push(item.lable)
})

console.log(newArr)
```



# 递归

```js
traverse(arr) {
  for (const i in arr) {
	  if (arr[i].hasChildren) {
		  this.traverse(arr[i].children);
		}
		let temp = {};
		temp.label = arr[i].label;
		temp.id = arr[i].id;
		this.treeData.push(temp)
	}
}
```

