// pages/pie/pie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
    wx.request({
      url: 'https://jitaofang.com/wxgetpie/',
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: "GET",
      success: function (res) {
        console.log(res.data);
        self.setData({
          p_count: res.data.p_count,
          p_newcount:res.data.p_newcount,
          p_newlist:res.data.p_newlist
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