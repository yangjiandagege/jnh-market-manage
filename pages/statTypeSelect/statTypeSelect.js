// roleSelect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statTarget:'',
    statType:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      statTarget : options.statTarget
    })
  },

})