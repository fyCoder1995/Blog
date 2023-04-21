---
title: v-for和v-if为什么不能一起使用？
date: 2021-07-15 14:34:38
tags: vue
excerpt: v-for和v-if为什么不能一起使用？
---

# vue- v-for和v-if 为什么不能一起使用？



__v-for 和v-if 最好不要在一个元素上使用__

例如：

```vue
<div id="app">
    <ul>
      <li v-for="item in 100" v-if="item > 5">
        {{item}}
      </li>
    </ul>
  </div>
```



> 因为，v-for的优先级比v-if的高，会导致每判断一次都要循环遍历一次，哪怕只是渲染很小的一部分



**解决方案：**将其更换为计算属性



**好处**：在渲染时只遍历活跃用户，解耦渲染层的逻辑，可维护性更强

***

*参考文献：*

1. https://cn.vuejs.org/v2/style-guide/#避免-v-if-和-v-for-用在一起必要

   
