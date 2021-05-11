// pages/paidorder/paidorder.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this=this;
    wx.request({
      url: 'http://localhost:8989/findpaidOrder',
      method: "Post",
      data: {
        username: getApp().data.username,
      },
      dataType: 'json',
      success: (res) => {
        _this.setData({
          showList:res.data
        })
        console.log(_this.data.showList)
      }
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