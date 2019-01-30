// pages/wqtrend/wqtrend.js

var wxCharts = require('../../utils/wxcharts-min.js'); 
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var self = this;
    wx.request({
      url: 'https://jitaofang.com/wxgettrends/',
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: "GET",

      success: function (res) {
        console.log(res.data);
        self.setData({
          date30: res.data.date30,
          date90: res.data.date90,
          wq30: res.data.wq30,
          wq90: res.data.wq90

        });

        let chart30 = new wxCharts({
          canvasId: 'lineCanvas30',
          type: 'line',
          categories: self.data.date30,
          // categories: ['2','4','6','8'],
          animation: false,
          series: [{
            name: '网签量',
            data: self.data.wq30,
            format: function (val, name) {
              return val 
            }
          }],
          xAxis: {
            disableGrid: true
          },
          yAxis: {
            title: '网签（套）',
            format: function (val) {
              // return val.toFixed(2);
              return val;
            },
            // min: self.data.minadjustp
          },
          width: 363,
          height: 200,
          dataLabel: true,
          dataPointShape: true,
          extra: {
            lineStyle: 'curve'
            //lineStyle: 'straight'
          }
        });

        let chart90 = new wxCharts({
          canvasId: 'lineCanvas90',
          type: 'line',
          categories: self.data.date90,
          // categories: ['2','4','6','8'],
          animation: false,
          series: [{
            name: '网签量',
            data: self.data.wq90,
            format: function (val, name) {
              return val
            }
          }],
          xAxis: {
            disableGrid: true
          },
          yAxis: {
            title: '网签（套）',
            format: function (val) {
              // return val.toFixed(2);
              return val;
            },
            // min: self.data.minadjustp
          },
          width: 363,
          height: 200,
          dataLabel: true,
          dataPointShape: true,
          extra: {
            lineStyle: 'curve'
            //lineStyle: 'straight'
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