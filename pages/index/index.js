// index.js
// 获取应用实例
const app = getApp()
Page({
  data: {
    //轮播图配置
    autoplay: true,
    interval: 3000,
    duration: 1200,
    list: [
      {url:'../../images/1.jpg'},  
      // {url:'../../images/2.jpg'}, 
      // {url:'../../images/3.png'}, 
      // {url:'../../images/4.png'}
    ]
  },
  onLoad() {},
})
