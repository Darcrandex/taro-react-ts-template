# taro-react-ts 项目模板

## 问题总结

### eslint

cli 默认的 eslint 使用的是 v8 版本，会存在错误；只需要重新安装所有的插件，更新到最新版本即可

### 使用 tailwindcss + less

[weapp-tailwindcss 文档](https://weapp-tw.icebreaker.top/docs/quick-start/v4)

此外，某些场景下可能还需要 less 来定义样式，因此也引入了 less；但 tailwindcss 不会扫描 less 文件

### 数据请求

- [axios-miniprogram](https://axios-miniprogram.com/guide/intro)

### 数据请求管理

- [react-query](https://tanstack.com/query/latest/docs/framework/react/quick-start)
- [abortcontroller](https://www.npmjs.com/package/abortcontroller-polyfill)

小程序不支持 AbortController，需要使用 polyfill

### 状态管理

- [jotai](https://jotai.org)

### UI 组件库

- [taroify](https://taroify.github.io/taroify.com/introduce/)

自定义组件库主题 [ConfigProvider](https://taroify.github.io/taroify.com/components/config-provider/)；采用修改 css 变量的方式

### 自定义图标库

- [iconfont](https://www.iconfont.cn)

已引用`阿里云官方图标库`; 采用 woff2 字体格式, 减少资源大小

### 云函数

- [tcb-router](https://www.npmjs.com/package/tcb-router)

项目中使用了 tcb-router 云函数框架，并定义了 $cloud 函数作为统一的调用工具函数，规范了云函数的返回结果

**注意:** 云函数绑定的是 appid，与业务项目无关；使用该模板时，先从开发者工具同步原云函数
