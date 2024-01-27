// components/xzs-news-item/xzs-news-item.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    item: {
      type: Object,
      value: {
        title: "默认标题",
        author: "Zzj"
      }
    },


  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClick(e) {
      wx.navigateTo({
        url: '/pages/newPage/newPage?id='+e.currentTarget.dataset.id,
        
      })
    },
  }
})