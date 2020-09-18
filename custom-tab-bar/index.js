// components/footer/index.js
const app = getApp();
Component({
  /**
   * 页面的初始数据
   */
  data: {
    navData:[
      {
        title:'首页',
        icon:'iconhomepage',
        path:'/pages/index/index'
      },
      {
        title:'点单',
        icon:'iconcoffee',
        path:'/pages/order/order'
      },
      {
        title:'',
        icon:'',
        path:'/pages/index/index'
      },
      {
        title:'订单',
        icon:'iconNote',
        path:'/pages/index/index'
      },
      {
        title:'我的',
        icon:'iconme',
        path:'/pages/index/index'
      }
    ],
    currentIndex: 0
  },
  methods: {
    currentItem(e) {
      wx.switchTab({
          url: this.data.navData[e.currentTarget.dataset.index].path
      });
      this.setData({currentIndex: e.currentTarget.dataset.index});
    }
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
    console.log('onReady');
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
});