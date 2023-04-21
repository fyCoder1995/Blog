## 一、了解Web及网络基础

#### 什么是HTTP协议？

```
HTTP (HyperText Transfer Protocol) 超文本传输协议
```

从客户端到服务端请求一系列运作流程的规范约定

**诞生**

*1989年3月CERN（欧洲核物理研究所）蒂姆·伯纳斯-李博士 提出一种能让远隔两地的研究者共享知识的设想*

*构建技术：*

1. 把SGML作为页面的文本标记语言的HTML

   *SGML（Standard Generalized Markup Language 标准通用标记语言）*

   *HTML （HyperText Markup Language 超文本标记语言）*

2. 作为文档传递协议的**HTTP**

3. 指定文档所在地址的URL（Uniform Resource Locator 统一资源定位符）

**成长**

- web（野蛮生长）

*1990年11月 CERN成功研发了世界上第一台Web服务器和Web浏览器*

*1993年1月 NCSA（National Center for Supercomputer Applications 美国国家超级计算机应用中心）研发的Mosaic问世，它以内联（in-line）等形式显示HTML图像 童年秋天Mosaic的Windows版和Macintosh版面世*

*1994年12月 网景通信公司发布了Netscape Navigator 1.0*

*1995年微软公司发布Internet Explorer 1.0和2.0*

*1995年左右起，微软公司与网景通信公司之间爆发浏览器大战*

*2000年前后，这场浏览器战争随着网景通信公司的衰落而暂告以段落*

*2004年 Mozilla基金会发布了Firefox浏览器，第二次浏览器大战随机爆发*

*之后 Internet Explorer 浏览器的版本从6升到了7 前后花费了5年时间....再后来Chrome、Opera、safari等纷纷抢占市场份额*

- HTTP（驻足不前）

  *1990年问世 HTTP/0.9*

  *1996年5月 正式作为标准被公布 版本命名为HTTP/1.0 并记载于RFC1945*

  *1997年1月公布的HTTP/1.1 是目前主流的HTTP协议版本 RFC2068*

  *修订版 RFC2626*

  *新一代HTTP/2.0 正在修订中，但要达到较高的使用覆盖率，仍需假以时日*

  

#### 什么是TCP/IP协议族？

```
通常使用的网络（包括互联网）是在TCP/IP协议族的基础上运作的。而HTTP属于它内部的一个子集。
把与互联网相关联的协议集合起来的总称
```

*该篇仅介绍理解HTTP所需掌握的TCP/IP协议族的概要*

**分层管理**

1. 应用层（决定了向用户提供应用服务时通信的活动）

   应用服务：FTP（File Transfer Protocol 文件传输协议）、DNS（Domain Name System 域名系统）服务

   **HTTP协议处于该层**

   ```
   HTTP报文+HTTP数据
   ```

2. 传输层（对上层应用层，提供处于网络连接中的两台计算机之间的数据传输）

   TCP（Transmission Control Protocol 传输控制协议）——可靠

   UDP（User Data Protocol 用户数据协议）——不可靠

   ```
   TCP报文段+TCP首部
   ```

3. 网络层【网络互连层】（用来处理在网络上流动的数据包）

   ```
   IP数据包+IP首部
   ```

4. 数据链路层【链路层、网络接口层】（用来处理连接网络的硬件部分）

   ```
   网络架构+以太网首部
   ```



#### 与HTTP关系密切的协议：IP、TCP和DNS

**IP协议（负责传输，位于应用层）**

```
重要条件：
1、IP地址:节点被分配到的地址——可变换
2、MAC地址(Media Address Control Address):网卡所属的固定地址——基本不改
```

*ARP协议（Address Resolution Protocol）：一种用以解析地址的协议，根据通信方的IP地址就可以反查出对应的MAC地址*

**TCP协议（提供可靠的字节流服务，位于传输层）**

```
三次握手（three-way handshaking）策略
SYN（synchronize-同步）
ACK（acknowledgement-确认）
```

![image-20221020170828489](/Users/shenyihuan/Library/Application Support/typora-user-images/image-20221020170828489.png)

**DNS服务（负责域名解析，位于应用层）**

```
提供通过域名查找IP地址，或逆向从IP地址反查域名
```

#### 在浏览器中输入URL后都会发生什么？

1. 用户输入URL

2. 回车，浏览器进程将url传给网络进程

3. 网络进程接收到url，先查找有没有缓存，没有缓存，进入网络请求。首先获取域名IP，系统从hosts文件中寻找与域名对应的IP地址。找到，与服务器建立TCP连接。没有找到，将网址提交DNS域名解析服务器进行IP地址解析

4. 使用IP地址和服务器建立TCP连接【三次握手】

5. 建立连接后，浏览器构建数据包，向服务器发送请求消息

6. 服务器接收到消息后根据请求信息构建响应数据，发送回网络进程

7. 网络进程接收到响应数据后进行解析，如果状态码返回了200，说明服务器返回了数据

8. 数据传输完成，TCP四次挥手断开连接

9. 网络进程将获取到的数据包进行解析，根据响应头类型判断，如果是字节流类型，就交给下载管理器，如果是text/html类型 就通知浏览器进程获取到文档准备渲染

10. 渲染进程对文档进行页面解析和子资源加载。解析html生成DOM树，解析css生成规则树。两树结合生成渲染树，浏览器绘制各个节点，将页面展现给用户

    

##  二、简单的HTTP协议

#### URI与URL的关系

URI（Uniform Resource Identifier 统一资源表示符）

**用字符串标识某一互联网资源**

URL（Uniform Resource Locator 统一资源定位符）

**资源的位置**

```
URL是URI的子集
```

#### 请求和响应









## 三、HTTP报文内的HTTP信息



## 四、返回结果的HTTP状态码



## 五、与HTTP协作的Web服务器



## 六、HTTP首部



## 七、确保Web安全的HTTPS

 

## 八、确认访问用户身份的认证



## 九、基于HTTP的功能追加协议



## 十、构建Web内容的技术



## 十一、Web的攻击技术

