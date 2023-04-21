---
title: hexo+github简单部署
tags: github
categories: 学习
date: 2022-06-02 10:02:20
---

## 第一步：准备工作

- **安装node.js**

    node官网：  http://nodejs.cn/

- **安装git**

   git官网：https://git-scm.com/

- **github创建个人远程仓库**

  github官网：https://github.com/

  配置

- 安装hexo

  hexo官网：https://hexo.io/zh-cn/docs/

```
node -v //查看是否安装node

git --version // 查看是否安装git

sudo npm install hexo-cli
```



## 第二步：配置Hexo

根据自己需求配置_config.yml



## 第三步：编写博文
```
title（标题）
tags（标签）：经验、js语法糖、网络、浏览器、github、杂文笔记、随笔、mac、工具随记、css、vue、webGL...
categories（分类）
excerpt（摘录、摘要）
```



## 第四步：总结-命令
```
sudo hexo clean // 清除缓存
sudo hexo g // 生成静态文件
sudo hexo s // 启动本地服务
sudo hexo d // 发布
hexo new page // 新增文件夹
```



