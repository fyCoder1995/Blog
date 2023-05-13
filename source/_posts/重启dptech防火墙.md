---
title: 重启dptech防火墙
tags: tag
categories: categories
excerpt: excerpt
date: 2023-05-12 17:15:33
---

1. 下载串口工具 如windterm

   ```shell
   brew install windterm
   
   bit rate  9600 
   data bit 8 
   checksum 8
   stop bit 1
   ```

2. use连接串口线

3. 新建串口会话（Serial）

   （1）串口：tty

   （2）数据：text

   （3）字符集：

4.  命令重启（shutdown）

   ```
   [DPTECH]int
   [DPTECH]interface gige0_3
   [DPTECH-qige0 3]no shutdown
   ```

   
