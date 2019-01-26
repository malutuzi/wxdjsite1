// pages/decrease/decrease.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dayudd:''
  },

  jumpindex: function () {
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    wx.getStorage({
      key: 'dayudd',
      success: function (res) {
        console.log(res.data);
        self.setData({
          dayudd: res.data
        });
      }
    });

    wx.request({
      url: 'https://jitaofang.com/wxgetchange/',
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: "GET",
      success: function (res) {
        console.log(res.data);
        self.setData({
          de50: res.data.de50
         
        });
      }
    });
    

  },

  jumpadjust: function (e) {
    var para = e._relatedInfo.anchorTargetText;
    var self = this;

    wx.setStorage({
      key: 'hid',
      data: para
    });
    wx.navigateTo({
      url: '../adjust/adjust',
    });

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