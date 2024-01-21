---
title: 解决GitHub访问过慢
tags: github访问
categories: github
date: 2021-07-16 10:55:59
excerpt: 关于解决GitHub访问过慢
---

# 第一步

获取github真实访问地址：https://github.com.ipaddress.com/ 

# 第二步

分别搜索 **github.com  、  github.global.ssl.fastly.net**

# 第三步

找到host文件地址

（1）win ：**C:\Windows\System32\drivers\etc\hosts**

（2）mac/linux：/etc/hosts

# 第四步

在文件最后添加IP 和 域名 （如下）

```js
140.82.112.4        GitHub.com
199.232.69.194        github.global.ssl.Fastly.net
```

