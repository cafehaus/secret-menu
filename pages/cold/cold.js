//获取应用实例
const app = getApp()
import drinkData from '../../utils/drink.js'

Page({
  data: {
    userInfo: {},
    drinkList: [],
  },

  onLoad: function () {
    let list = drinkData.drink
    list = list.filter(item => item.tags.includes('冰饮'))

    this.setData({
      drinkList: list
    })
  }
})
