# taro-react-ts 项目模板

## 参考文档

- [tarojs](https://docs.taro.zone/docs/)

## 技术栈

- tarojs@4
- react
- typescript
- tailwindcss@4
- jotai
- react-query@5 + axios-miniprogram
- taroify-ui

### init

> taro@v4

```bash
$ npx @tarojs/cli init
```

选择`webpack5`，`vite`目前问题很多，不推荐使用；
选择`cli 内置模版`，其他模版都有问题（草蛋）；

### tailwindcss

> [weapp-tw for taro-webpack](https://weapp-tw.icebreaker.top/docs/quick-start/v4/taro-webpack)

**在 weapp-tw@4.x 版本中，不应该让 tailwindcss 和 sass,less,stylus 一起使用**

### 路径别名

> [alias 配置](https://docs.taro.zone/docs/config-detail#alias)

很无语的是`tsconfig.jons`里面默认配置了`paths`，但`config.ts`里面却没有配置`alias`

```js
// config/index.ts
{
   'alias': {
      '@': require('path').resolve(__dirname, '../src'),
    },
}
```

### 请求封装

由官方提供的 [@tarojs/plugin-http](https://docs.taro.zone/docs/request) bug一堆，issue 也没人管

使用[axios-miniprogram](https://axios-miniprogram.com/guide/intro)代替

### react-query@5

v5 版本使用了[AbortController](https://developer.mozilla.org/zh-CN/docs/Web/API/AbortController/AbortController)，小程序默认不支持这个 api，解决方案如下

```bash
pnpm add abort-controller
```

```tsx
// src/providers/QueryProvider/index.tsx

// 引入 polyfill
import 'abort-controller/polyfill'
// 全局注入 AbortController
globalThis.AbortController = window.AbortController
```

### taroify-ui

> [taroify-ui](https://taroify.github.io/taroify.com/introduce/) > [taroify 自定义图标](https://taroify.github.io/taroify.com/components/icon/#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9B%BE%E6%A0%87)
