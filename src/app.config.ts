export default defineAppConfig({
  pages: [
    // 'pages/index/index'

    // 主包
    'pages/(tabs)/home/index',
    'pages/(tabs)/me/index'
  ],

  // 分包
  subpackages: [{ root: 'packages/(post)', pages: ['pages/[id]/index'] }],

  tabBar: {
    custom: true,
    list: [
      { text: 'home', pagePath: 'pages/(tabs)/home/index' },
      { text: 'me', pagePath: 'pages/(tabs)/me/index' }
    ]
  },

  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',

    // 默认所有页面都使用自定义头部导航
    navigationStyle: 'custom'
  },

  lazyCodeLoading: 'requiredComponents'
})
