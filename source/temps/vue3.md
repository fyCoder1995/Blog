# vue3

1、用创建项目

```
npm init vue@latest //用脚手架创建
npm init vite@latest //用vite创建

code . // 用vscode打开 需要事先设置vscode

//brew 命令
brew outdated //查看旧版本
brew upgrade //更新过时版本

```

2、基本语法

1. v-text
2. v-html
3. v-if 、v-else、 v-else-if
4. v-on @ 可动态切换
5. v-bind :
6. v-model 【ref、reactive】
7. v-for
8. v-once、v-memo

3、虚拟 dom和diff算法 

【最强递增子序列算法】

4、Ref相关

1. ref 深层次响应

   ```typescript
   import {ref} from "vue"
   type F = {name:string}
   const FY = ref<F>({name:'fycoder'})
   FY.value.name = 'FyCoder'
   ```

   

2. isRef 判断是否为ref对象

   ```typescript
   import {isRef} from "vue"
   const FY1 = {name:'fycoder'};
   console.log(isRef(FY1))
   ```

   

3. shallowRef 浅层次响应 

   ```typescript
   import {shallowRef} from "vue"
   const FY2 = shallowRef({name:'fycoder2'})
   FY2.value = {name:'FyCoder2'}
   ```

   **ref 和shallowRef不能一块写，不然会影响shallowRef 造成视图更新**

4. triggerRef 强制更新收集的依赖

5. customRef 自定义Ref

