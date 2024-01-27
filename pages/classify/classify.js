import {
  listNav,
  productList
} from "../../api/apis"
let navid
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navActive: 0,
    tabArr: [],
    productArr: [],
    loading: false,
    noData: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    await this.getTabname()

    if (options.index) {
      this.toggleTab(options.index)
    } else {
      navid = this.data.tabArr[0]._id
      this.getProductList()
    }

  },
  async getTabname() {
    await listNav().then(res => {
      this.setData({
        tabArr: res.data
      })
    })
  },
  getProductList(size = 0) {
    this.setData({
      loading: true
    })
    productList({
      navid,
      size
    }).then(res => {
      let oldData = this.data.productArr
      let newData = [...oldData, ...res.data]
      this.setData({
        productArr: newData,
        loading: false
      })
      if (this.data.productArr.length == res.total) {
        this.setData({
          noData: true
        })
      }
    })
  },
  toggleTab(e) {
    
    let index = e?.detail?.index ?? e 
    navid = this.data.tabArr[index]._id
    this.setData({
      productArr: [],
      loading: false,
      noData: false,
      navActive: Number(index)
    })
    this.getProductList()
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
    this.setData({
      navActive: 0,
      tabArr: [],
      productArr: [],
      loading: false,
      noData: false
    })
    this.getProductList()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    if (!this.data.noData) {
      this.getProductList(this.data.productArr.length)
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})