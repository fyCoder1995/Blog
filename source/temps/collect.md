---
title: collect
date: 2021-07-13 16:44:46
tags: collect
excerpt: 积累一些常用命令及快捷键
---

# browser-sync启动命令

```js
browser-sync start --server --browser "Google Chrome" --files "*.html,stylesheet/*.css,scripts/*.js"
```



# 关于npm

```bash
npm install -g cnpm --registry-http://registry.npm.taobao.org // npm镜像cpm
```

# 关于Apache

```js
sudo apachectl start //开启apache
sudo apachectl restart //重启apache
sudo apachectl stop //关闭apache

/Library/WebServer/Documents/ // web发布文件地址
```

# 关于Mysql

```js
 /usr/local/mysql/bin/mysql -u root -p  // 进入mySql
exit //退出
```

# 关于Sublime

```bash
ctrl+shift+h \\ 格式化
shift+command+B \\ 运行js快捷键
```

# 关于GIT

```js

git branch -a \\查看本地及远程分支

git checkout -b \\切换分支

git checkout master \\切换为主分支

git merge 分支名 \\合并分支

git merge --no-ff 分支名 \\快进式合并

git push origin 分支名 \\推送

git branch -d 分支名 \\删除分支

git push origin --delete 分支名 \\删除远程分支

git reset --hard commit_id \\撤销commit

git rm -r \\删除文件

git remote add origin git@github.com:user/repo

git push -f origin master \\强制更新git

// 在签出前，请清理存储库工作树 手动解决
git stash
git pull
git stash pop

git stash list //  显示git栈中所有工作区的备份
git stash apply stash@{1} // 把版本号为stash@{1}的备份取出来

// 在签出前，请清理存储库工作树 放弃本地修改，直接覆盖
git reset --hard
git pull

// vim编辑 git配置文件
vim ~/.gitconfig
// 提交报443错误【macos LibreSSL SSL_connect: SSL_ERROR_SYSCALL in connection to github.com:443】
 git config --global http.sslBackend "openssl"
```

# 关于SVN

```js
brew install svn //安装
svn --version //查看版本
which svn //svn安装路径

// 命令
svn up //更新
svn add * //提交全部 注意：此命令最好在业务层文件 如src 添加
svn ci -m 'log' //提交 带log 注意：同上
svn st //查看状态
svn rm //删除文件
svn merge //合并文件
svn mergeinfo //合并文件详细
svn resolved //解决冲突
svn revert //回滚
svn ls //版本控制下目录
svn log //查看日志
svn propset svn:ignore '' //设置忽略文件 
svn co svn://url //checkout 检出
```

# 关于C++

```c++
g++ -o test test.cpp
./test
```

# 关于Vue

```js
npm list vue // 查看vue版本号
vue -V // 查看vuecil版本号
vue ui -H 127.0.0.1 // ip被占用情况
```

# 关于Jmeter

https://www.jianshu.com/p/bce9077d883c

# 关于Hexo

```js
sudo hexo clean // 清除缓存
sudo hexo g // 生成静态文件
sudo hexo s // 启动本地服务
sudo hexo d // 发布
hexo new page // 新增文件夹
```

