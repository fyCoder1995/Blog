2021-01-12 16:43:38



**TCP和UDP的区别**



**两者都是通信协议，TCP和UDP都是传输层协议，但是他们的通信机制和应用场景不同。**



**TCP**

TCP（Transmission Control Protocol）又叫传输控制协议，TCP是面向连接的，并且是一种可靠的协议，在基于TCP进行通信时，通信双方需要建立TCP连接，建立连接需要经过三次握手，握手成功才可以通信。



**UDP**

UDP是一种面向无连接，切不可靠的协议，在通信过程中，它并不像TCP那样需要先建立一个连接，只要目的地址，端口号，源地址，端口号确定了，就可以直接发送信息报文，并且不需要一定能收到或者完整的数据。它仅仅提供了校验和机制来保障报文是否完整，若校验失败，则直接将报文丢弃，不做任何处理。



\#####TCP，UDP的优缺点

\######TCP优点

可靠，稳定

TCP的可靠性体现在传输数据之前，三次握手建立连接（四次挥手断开连接），并且在数据传递时，有确认，窗口，重传，拥塞控制机制，数据传完之后断开连接来节省系统资源。

\######TCP缺点

慢，效率比较低，占用系统资源，容易被攻击

传输数据之前建立连接，这样会消耗时间，而且在消息传递时，确认机制，重传机制和拥塞机制都会消耗大量的时间，而且要在每台设备上维护所有的传输连接。而且每一个连接都会占用系统的CPU，内存等硬件软件资源。并且TCP的取而机制，三次握手机制导致TCP容易被人利用，实现DOS，DDOS攻击。

\#####UDP优点

快，比TCP安全

UDP没有TCP的握手，确认窗口，重传，拥塞机制。UDP是一个无状态的传输机制，所以在传输数据时非常快。UDP没有TCP这些机制，相应被利用的漏洞就少一点。但是UDP的攻击也是存在的，比如：UDP 的flood攻击。

\######UDP缺点

不可靠，不稳定

因为UDP没有TCP的那些可靠机制，在网络质量不好的时候容易发生丢包。

\#####应用场景

\#######TCP应用场景

当对网络通信质量有要求时，比如：整个数据要准确无误的传递给对方，这往往对于一些要求可靠的应用，比如HTTP,HTTPS,FTP等传输文件的协议，POP,SMTP等邮件的传输协议。常见使用TCP协议的应用：

1.浏览器使用的：HTTP

2.FlashFXP:FTP

3.Outlook:POP，SMTP

4.QQ文件传输

\######UDP 文件传输协议

对当前网络通讯质量要求不高的时候，要求网络通讯速度尽量的快，这时就使用UDP

日常生活中常见使用UDP协议：

1.QQ语音

2.QQ视频

3.TFTP