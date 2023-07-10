// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    content: 'Hello World'
  },
  // 事件处理函数
  goToLog() {
    wx.navigateTo({
      url: '/pages/logs/logs'
    })
  },
  goToPageA() {
    wx.navigateTo({
      url: '/packageA/pageA/pageA'
    })
  }
})
