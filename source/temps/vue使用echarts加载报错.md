---
title: vue使用echarts加载报错
date: 2021-07-15 14:26:40
tags: vue
excerpt: TypeError:Cannot read property getAttribute of null？
---

# vue 使用echarts 加载报错 TypeError: Cannot read property getAttribute of null？



> 原因：页面中使用了v-if 在页面中没有找到dom 所以渲染时找不到节点



**解决方案：**使用v-show代替

