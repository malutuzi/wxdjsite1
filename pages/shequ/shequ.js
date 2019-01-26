// pages/shequ/shequ.js

var wxCharts = require('../../utils/wxcharts-min.js'); 

Page({

  /**
   * 页面的初始数据
   */
  data: {
   shequname:"",
   lhism:['201806','201807'],
   lhisp:[50000,51000],
   minp:50000, 


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
      url: 'https://jitaofang.com/wxgetshequ/',
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
          count:res.data.count,
          namelen:res.data.namelen,
          shequname:res.data.shequname,
          match:res.data.match,
          lhis:res.data.lhis,
          lhism: res.data.lhism,
          lhisp: res.data.lhisp,
          minp: res.data.minp,
          soldmost:res.data.soldmost,
          visitmost:res.data.visitmost
        });

        let chart = new wxCharts({
          canvasId: 'lineCanvas',
          type: 'line',
          categories: self.data.lhism,
          // categories: ['2', '4', '6', '8'],
          animation: false,
          series: [{
            name: '均价',
            data: self.data.lhisp,
            format: function (val, name) {
              return val + '元';
            }
          }],
          xAxis: {
            disableGrid: true
          },
          yAxis: {
            title: '均价（元）',
            format: function (val) {
              // return val.toFixed(2);
              return val;
            },
            min: self.data.minp * 0.98
          },
          width: 300,
          height: 150,
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



  teltap:function (e) {
    var tel1 = e._relatedInfo.anchorTargetText;
    var tel2 = tel1.replace('转',',');
    // console.log(tel2)
    wx.makePhoneCall({
      phoneNumber: tel2,
    })
  },

  chooseoneshequ:function(e){
    var para = e._relatedInfo.anchorTargetText;
    var self = this;
    wx.request({
      url: 'https://jitaofang.com/wxgetshequ/',
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
          lhis: res.data.lhis,
          lhism:res.data.lhism,
          lhisp:res.data.lhisp,
          minp:res.data.minp,
          soldmost: res.data.soldmost,
          visitmost: res.data.visitmost
        });
        let chart = new wxCharts({
          canvasId: 'lineCanvas',
          type: 'line',
          categories: self.data.lhism,
          animation: false,
          series: [{
            name: '均价',
            data: self.data.lhisp,
            format: function (val, name) {
              return val + '万';
            }
          }],
          xAxis: {
            disableGrid: true
          },
          yAxis: {
            title: '均价（万元）',
            format: function (val) {
              // return val.toFixed(2);
              return val;
            },
            min: self.data.minp * 0.98
          },
          width: 300,
          height: 150,
          dataLabel: true,
          dataPointShape: true,
          extra: {
            // lineStyle: 'curve'
            lineStyle: 'straight'
          }
        });
      }
    })

  },

  jumphot: function (e) {
    var para = e._relatedInfo.anchorTargetText;
    var self = this;
    wx.request({
      url: 'https://jitaofang.com/wxgetshequ/',
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
          lhis: res.data.lhis,
          lhism: res.data.lhism,
          lhisp: res.data.lhisp,
          minp: res.data.minp,
          soldmost: res.data.soldmost,
          visitmost: res.data.visitmost
        });
        let chart = new wxCharts({
          canvasId: 'lineCanvas',
          type: 'line',
          categories: self.data.lhism,
          animation: false,
          series: [{
            name: '均价',
            data: self.data.lhisp,
            format: function (val, name) {
              return val + '万';
            }
          }],
          xAxis: {
            disableGrid: true
          },
          yAxis: {
            title: '均价（万元）',
            format: function (val) {
              // return val.toFixed(2);
              return val;
            },
            min: self.data.minp * 0.98
          },
          width: 300,
          height: 150,
          dataLabel: true,
          dataPointShape: true,
          extra: {
            // lineStyle: 'curve'
            lineStyle: 'straight'
          }
        });
      }
    })

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
          p_shequ: res.data[0]
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