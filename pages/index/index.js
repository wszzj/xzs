import {
  formatNum,
  formatTime
} from "../../utils/common.js"
import {
  listNav,
  listNews
} from '../../api/apis'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsArr: [],
    navArr: [],
    imgIndex:[0,1,2,3]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNavDate()
    this.getNewsData()
  },
  getNavDate() {
    listNav().then(res => {
      this.setData({
        navArr: res.data
      })
    })
  },
  getNewsData() {
    listNews({
      limit: 3,
      hot: true
    }, ).then(res => {
      res.data.forEach(item => {
        item.view_count = formatNum(item.view_count)
        item.publish_date = formatTime(item.publish_date, 5)
      })
      this.setData({
        newsArr: res.data
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})