// pages/adjust/adjust.js

var wxCharts = require('../../utils/wxcharts-min.js'); 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hid:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    wx.getStorage({
      key:'hid',
      success: function (res) {
        console.log(res.data);
        self.setData({
          hid:res.data
        });
      }
    });

    

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var self = this;
    wx.request({
      url: 'https://jitaofang.com/wxgetadjust/',
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: "GET",
      data: {
        hid: this.data.hid

      },
      success: function (res) {
        console.log(res.data);
        self.setData({
          h_list:res.data.h_list,
          times:res.data.times,
          adjustm:res.data.adjustm,
          adjustp:res.data.adjustp,
          minadjustp:res.data.minadjustp,
          houseinfo:res.data.houseinfo,
          samedeal:res.data.samedeal,
          samecount:res.data.samecount

        });

        let chart = new wxCharts({
          canvasId: 'lineCanvas',
          type: 'line',
          categories: self.data.adjustm,
          // categories: ['2','4','6','8'],
          animation: false,
          series: [{
            name: '报价',
            data: self.data.adjustp,
            format: function (val, name) {
              return val + '万';
            }
          }],
          xAxis: {
            disableGrid: true
          },
          yAxis: {
            title: '报价（万元）',
            format: function (val) {
              // return val.toFixed(2);
              return val;
            },
            min: self.data.minadjustp
          },
          width: 300,
          height: 200,
          dataLabel: true,
          dataPointShape: true,
          extra: {
            // lineStyle: 'curve'
            lineStyle: 'straight'
          }
        });

      }
    });




  },

  jumpindex: function () {
    wx.switchTab({
      url: '/pages/index/index',
    })
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