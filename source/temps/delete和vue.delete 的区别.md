---
title: vue- delete和vue.delete 的区别
date: 2021-07-15 14:32:35
tags: vue
excerpt: vue-delete和vue.delete 的区别
---

# Delete和vue.delete 的区别



> 因为， Delete 是js 原生方法，由于语言限制，此方法无法设置回调来响应
>
> 所以，删除对象或者数组时，只是被删除的元素变成了 empty/undefined，其他元素的键值还是 __没有改变__



---



> Vue.delete 是vue提供的实例方法
>
> 在vue实例中 此方法处理了一些边界情况，处理了数组和对象的的删除
>
> 【获取了变量上的ob指针指向的观察者实例，通知依赖dep里的watcher更新】
>
> 所以，在删除对象或者数组时，其他元素的键值__随之改变__



***



*参考文献：*

1. https://www.jianshu.com/p/fbe96ed71fd7
2. https://blog.csdn.net/weixin_41275295/article/details/101101265
