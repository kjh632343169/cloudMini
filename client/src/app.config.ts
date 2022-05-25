export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/template/index',
    'pages/my/index',
    'pages/nodata/index',
  ],
  tabBar: {
    color: '#707070',
    selectedColor: '#6DA9F7',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: './static/image/homegray.png',
        selectedIconPath: './static/image/home.png',
      },
      {
        pagePath: 'pages/template/index',
        text: '模板',
        iconPath: './static/image/moregray.png',
        selectedIconPath: './static/image/more.png',
      },
      {
        pagePath: 'pages/my/index',
        text: '我的',
        iconPath: './static/image/mygray.png',
        selectedIconPath: './static/image/my.png',
      },
    ],
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
});
