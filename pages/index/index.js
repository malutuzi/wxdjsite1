// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  jumpshequ: function () {
    wx.switchTab({
      url: '/pages/shequ/shequ',
    })
  },

  jumphouse:function(){
    wx.switchTab({
      url: '/pages/house/house',
    })
  },
  jumppie: function () {
    wx.navigateTo({
      url: '../pie/pie',
    })
  },
  jumpchange: function () {
    wx.setStorage({
      key: 'dayudd',
      data: this.data.dayud[1]
    });
    wx.navigateTo({
      url: '../change/change',
    })
  },
  jumpwqtrend: function () {

    wx.navigateTo({
      url: '../wqtrend/wqtrend',
    })
  },
  jumpljtrend: function () {
    wx.navigateTo({
      url: '../ljtrend/ljtrend',
    })
  },
  onShareAppMessage: function () {
    return {
      title: '几套房',
      desc: '可能是最实用的房产数据工具！',
      path: '/page/index/index'
    }
  },

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onload');
    var self = this;
    wx.request({
      url: 'https://jitaofang.com/wxgetindex/',
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: "GET",
      success: function (res) {
        console.log(res.data);
        self.setData({
          today: res.data.today,
          weekday: res.data.weekday,
          jw: res.data.jw,
          lj: res.data.lj,
          newday: res.data.newday,
          dayud: res.data.dayud,
          p_count: res.data.p_count,
          p_newcount: res.data.p_newcount,
          p_shequ:res.data.p_shequ,
          p_house:res.data.p_house
          
        });

        wx.setStorage({
          key: 'p_shequhouse',
          data: [self.data.p_shequ, self.data.p_house]
        });

      
      }
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