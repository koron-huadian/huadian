// pages/order/order.js
Page({
  data: {
    items: [
      { name: '1', value: '市区送货(免费送货)' },
      { name: '2', value: '郊区配送(+30元)', checked: 'true' },
      { name: '3', value: '远郊配送(+50元)' }
    ],
    payWay: [
      { name: '1', value: '微信支付', checked: 'true' },
      { name: '2', value: '支付宝支付' },
      { name: '3', value: '现金支付' },
      { name: '4', value: '银联支付' }
    ],
    date: '选择日期',
    showPart: true
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  backFor: function () {
    this.setData({
      showPart: true
    })
  },
  nextStep: function () {
    this.setData({
      showPart: false
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})