---
title: mac使用的一些小tips
tags: 经验
categories: 工作
excerpt: 关于mac使用的一些小tips
date: 2023-03-06 15:40:42
---

# MAC常用命令

```js
ls     // 显示列表
ls -a  // 显示所有文件，包括隐藏文件
ls -la // 显示当前目录下包括隐藏文件/目录的所有文件的详细信息

id -un // 查看当前用户

pwd // 显示当前路径

sudo chown -R shenyihuan /usr/local/lib/node_modules // 改变指定文件所有者
// 权限问题
sudo chown -R $USER:$GROUP ~/.npm
sudo chown -R $USER:$GROUP ~/.config

sudo spctl --master-disable    // Mac隐私打开任何来源命令
sudo spctl --master-enable     // Mac隐私关闭任何来源命令

sudo cp httpd.conf httpd.conf.bak // 备份文件
sudo cp httpd.conf.bak httpd.conf // 如果操作出现错误！可以使用命令，恢复备份的 httpd.conf 文件
sudo vim httpd.conf // 用vim编辑httpd.conf文件，httpd.conf文件时Apache的配置文件

cd /etc/apache2 // 切换工作目录

sudo xattr -d com.apple.quarantine /Applications/Navicat\for\MySQL.app // 允许任何来源

uname -a // 查看操作系统位数

// 配置环境变量
open ~/.bash_profile //打开配置文件
echo $PATH //查看环境变量
source .bash_profile //刷新环境变量

// 端口被占用
sudo lsof -i tcp:port // port为端口号
lsof -i:8000 //查看端口是否被占用
kill PID //杀掉进程

sudo vim /etc/hosts //vim修改host文件

cat /etc/shells //查看系统shell

// zsh与bash 切换
chsh -s /bin/bash
chsh -s /bin/zsh


```

# MAC 常用快捷键

```js
shift+command+. // 查看隐藏文件夹
option+8 //打实心圆点•
```

