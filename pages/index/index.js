//获取应用实例
const app = getApp()
import drinkData from '../../utils/drink.js'

Page({
  data: {
    userInfo: {},
    drinkList: drinkData.drink,
  },

  onLoad: function () {
    console.log(this.data.drinkList)
  }
})
