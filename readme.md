# taro-react-ts 项目模板

## 参考文档

- [tarojs](https://taro-docs.jd.com/docs/)
- [project.config.json](https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html)

## 技术栈

- tarojs
- react
- typescript
- tailwindcss
- jotai
- react-query + axios-miniprogram
- nut UI

## 坑

- 使用脚手架构建项目时 `npx @tarojs/cli init myApp`, 选择 cli 默认模板, 其他的或多或少有问题
- @tanstack/react-query 安装 v4, v5 目前不支持
- env 不能直接访问 `process.env`, 必须访问 `process.env.TARO_APP_${key}`, 否则报错
- tailwindcss 所有 `transform` 样式类不生效
- [调试-预览报错：Error: 非法的文件](https://developers.weixin.qq.com/community/minihome/doc/00064018e8c52030127c4134f5b400) 调试器勾选 _将 JS 编译成 ES5_

## todo

- 图标方案
- 数据请求方案升级
