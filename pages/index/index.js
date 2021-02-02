// pages/chat/chat.js
const app = getApp()
var websocket = require('../../utils/websocket.js');
var utils = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newslist: [],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo
      })
    }
    //调通接口
    websocket.connect(this.data.userInfo,  (res) =>{
      console.log(JSON.parse(res.data))
      this.setData({
        newslist: JSON.parse(res.data)
      })
    })
  },
  toChat(e) {
    console.log(e)
    wx.navigateTo({
      url: '../chat/chat?receiver=' + e.currentTarget.dataset.name
    })
  },
})