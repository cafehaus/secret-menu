// drink-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    drink: Object
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
    // 跳转详情
    goDetail(e) {
      let drinkInfo = e.currentTarget.dataset.info
      wx.setStorage({
        key: "drinkInfo",
        data: drinkInfo
      })

      wx.navigateTo({
        url: '../detail/detail'
      })
    }
  }
})
