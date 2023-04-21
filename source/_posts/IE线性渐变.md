---
title: IE背景线性渐变
tags: 兼容性
categories: 工作
excerpt: 关于IE背景线性渐变
date: 2021-07-16 10:45:00
---

```html
<html>
    <head>
        <meta charset="utf-8">
        <title>背景线性渐变</title>
        <style type="text/css">
           .gradient{
               width:300px;
               height:150px;
               filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr='#FFB6C1',endcolorstr=' #8B008B',gradientType=0);
               background:red;  
               background: -webkit-linear-gradient(red, rgba(0, 0, 255, 0.5));
               background: -o-linear-gradient(red, rgba(0, 0, 255, 0.5));
               background: linear-gradient(red, rgba(0, 0, 255, 0.5));
           }
        </style>
    </head>
    <body>
        <div class="gradient"></div>
    </body>
</html>
```

