import {
  newContent
} from "../../api/apis"
import {
  formatTime,
  formatNum
} from "../../utils/common"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contentData: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getNewContent(options.id)
  },
  getNewContent(id) {
    newContent({
      id
    }).then(res => {
      res.data.publish_date = formatTime(res.data.publish_date, 1)
      res.data.view_count = formatNum(res.data.view_count)
      res.data.content=res.data.content.replace(/<p/gi,"<p class='pstyle'")
      res.data.content=res.data.content.replace(/<img/gi,"<img class='imgstyle'")
      wx.setNavigationBarTitle({
        title: res.data.title,
      })
      this.setData({
        contentData: res.data
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    return{
      title:this.data.contentData.title,
      path:"/pages/newPage/newPage?id="+this.data.contentData._id
    }
  },
  onShareTimeline(){
    return{
      title:this.data.contentData.title,
      path:"/pages/newPage/newPage?id="+this.data.contentData._id
    }
  }
})