## 你知道为什么 typeof null 是object吗?

> 因为不同的对象在底层都表示为二进制,在JavaScipt中二进制前三位为0的话都会判定为object类型,而null的二进制全是0，所以会被判定为object

![image-20220215163923273](/Users/shenyihuan/Library/Application Support/typora-user-images/image-20220215163923273.png)



## JS如何检测文件的类型（二进制版）

https://juejin.cn/post/6971935704938971173

参考链接：https://mp.weixin.qq.com/s/QHi6BVM5Jt8XwZ_FKcRYsg



## 前端大文件上传

1、对文件做切片

2、通知服务器合并切片

3、控制多个请求的并发量

4、做断点续传

https://juejin.cn/post/7053658552472174605



## 幽灵空白节点

https://blog.csdn.net/qq_43115213/article/details/105652497



## 使用Tree生成目录接口

```
npm install -g tree-node-cli // 安装tree-node-cli
tree -I node_modules > tree.text //生成tree.text
```



## Mac修改mac地址

```
openssl rand -hex 6 | sed 's/\(..\)/\1:/g; s/.$//'
```



## 在mac上修改版本号

```
npm install n -g //安装工具n

n 版本号 //切换node版本号

```



## ES6 引入 three.js 模块 火狐兼容性问题解决

```
可以引用以下
<script async src="https://unpkg.com/es-module-shims@1.3.6/dist/es-module-shims.js"></script>
```



## Atom for MAC 安装插件

```
open ~/.atom
cd package
git clone 插件github地址
cd 插件名
npm install
重启atom
```



## sketch 80+ 切换中英文

```
 defaults write com.bohemiancoding.sketch3 AppleLanguages '("en-US")' //英文
 
 defaults write com.bohemiancoding.sketch3 AppleLanguages '(zh-CN)' //中文
```



## clac() 弃用除法

```
npm install -g sass-migrator
进入项目node_modules文件
执行 sass-migrator division **/*.scss
```



## 使用 svgo 脚本

```
svg-sprite-loader 6.0.11
svgo 1.32
```



## 高版本的node 默认装了7以上的npm版本

```
npm i webpack@4.29.5 --force
```



## element picker.vue出现父子组件传值违反单项数据流

```
element-ui 2.15.9 降版本 element-ui 2.15.8
```

```

sudo npm install webpack@4.1.0 -g --unsafe-perm
```



## node-sass  下载失败

```
https://github.com/PanJiaChen/vue-element-admin/issues/24
```



## el-table 导出excel

https://blog.csdn.net/m0_46678928/article/details/123843863



## node打开本地应用程序

https://www.cnblogs.com/cangqinglang/p/12492478.html



## 自动化打包工具 Alibaba Cloud Toolkit 配置说明



### 自制SSL服务器证书

mac https://cloud.tencent.com/developer/article/2143070

win https://blog.csdn.net/u010148813/article/details/128312327

原因：对第三方跨域问题，进行ip信任

vue中引用

```js
// 引入fs模块
const fs = require('fs')

// 调用证书
 devServer: {
    ...
    https: {
      key:fs.readFileSync(resolve('cert/key.pem')),
      cert:fs.readFileSync(resolve('cert/cert.pem'))
    }
 }
```



### WebGL如何添加gif动图

https://www.icegl.cn/ask/question/15.html





