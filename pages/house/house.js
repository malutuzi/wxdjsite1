// pages/house/house.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shequname: "",
  },

  staticData: {
    para: "",

  },

  handleMessageChange(e) {
    this.staticData.para = e.detail.value;
  },

  handlesubmit() {
    var self = this;
    wx.request({
      url: 'https://jitaofang.com/wxgethouse/',
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: "GET",
      data: {
        shequname: this.staticData.para

      },
      success: function (res) {
        console.log(res.data);
        self.setData({
          count: res.data.count,
          namelen: res.data.namelen,
          shequname: res.data.shequname,
          match: res.data.match,
          shequsale: res.data.shequsale,
          shequdeal: res.data.shequdeal
          
        });

      }
    });
  },


  chooseoneshequ: function (e) {
    var para = e._relatedInfo.anchorTargetText;
    var self = this;
    wx.request({
      url: 'https://jitaofang.com/wxgethouse/',
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: "GET",
      data: {
        shequname: para

      },
      success: function (res) {
        console.log(res.data);
        self.setData({
          count: res.data.count,
          namelen: res.data.namelen,
          shequname: res.data.shequname,
          match: res.data.match,
          shequsale: res.data.shequsale,
          shequdeal: res.data.shequdeal
        });
     
      }
    })

  },


  jumphot: function (e) {
    var para = e._relatedInfo.anchorTargetText;
    var self = this;
    wx.request({
      url: 'https://jitaofang.com/wxgethouse/',
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: "GET",
      data: {
        shequname: para

      },
      success: function (res) {
        console.log(res.data);
        self.setData({
          count: res.data.count,
          namelen: res.data.namelen,
          shequname: res.data.shequname,
          match: res.data.match,
          shequsale: res.data.shequsale,
          shequdeal: res.data.shequdeal
        
        });
      
      }
    })

  },

  jumpadjust: function (e) {
    var para = e._relatedInfo.anchorTargetText;
    var self = this;
    console.log(para);

    wx.setStorage({
      key: 'hid',
      data:para
    });
    wx.navigateTo({
      url: '../adjust/adjust',
    });

  },

  jumpadjust2: function (e) {
    var para = e._relatedInfo.anchorTargetText;
    var self = this;
    console.log(para);

    wx.setStorage({
      key: 'hid',
      data: para
    });
    wx.navigateTo({
      url: '../adjust2/adjust2',
    });

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    wx.getStorage({
      key: 'p_shequhouse',
      success: function (res) {
        console.log(res.data);
        self.setData({
          p_house: res.data[1]
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