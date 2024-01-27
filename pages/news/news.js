import {
  listNews
} from "../../api/apis"
import {
  formatNum,
  formatTime
} from "../../utils/common"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsArr: [],
    loading: false,
    noData: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.getNewsDate()
  },
  getNewsDate(size = 0) {
    this.setData({
      loading: true
    })
    listNews({
      limit: 8,
      size
    }).then(res => {
      res.data.forEach((item) => {
        item.view_count = formatNum(item.view_count)
        item.publish_date = formatTime(item.publish_date, 5)
      })
      let oldArr = this.data.newsArr
      let newArr = [...oldArr, ...res.data]
      wx.stopPullDownRefresh()
      this.setData({
        newsArr: newArr,
        loading: false
      })
      if (this.data.newsArr.length ===res.total) {
        this.setData({
          noData: true
        })
      }
    })
  },
 
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    this.setData({
        newsArr: [],
        loading: false,
        noData: false
      }),
      this.getNewsDate()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

    if (this.data.noData) {
      return
    } else {
      this.getNewsDate(this.data.newsArr.length)
    }

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})