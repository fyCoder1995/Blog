---
title: CSS动画相关
date: 2021-08-24 16:29:26
tags: CSS
excerpt: 初速度一样，加速度可能就不一样了吧
---

# 过渡动画 transition



## tranistion-property

> None | all | property-name



## tranistion-duration

> time



## transition-timing-function

> Ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier(n,n,n,n)｜steps(3,start/end)



## transition-delay

> time



```html
<!-- 示例 -->
<html>
  <div id="box"></div>
</html>

<style>
  #box{
    width: 100px;
    height: 100px;
    background-color: #f00;
    transition: all 4s ease-out 1s;
  }

  #box:hover{
    width: 200px;
    background-color: #00f;
  }
</style>
```



# 变换动画 transfrom

> None | transform-functions

## translate



## rotate



## scale



## skew



## perpective























# 关键帧动画 keyframes



# 动画属性 Animation

