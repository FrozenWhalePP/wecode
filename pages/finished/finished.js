// pages/finished/finished.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    grids: [{}, {}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.title)
    this.setData({
      title: options.title,
      description: options.description
    })
    var that = this
    wx.request({
      url: 'http://127.0.0.1:9090/api/solutions/problem/' + 'root/' + '0',
      data: {},
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: result => {
        console.log(result)
        that.setData({
          grids: result.data
        })

      },
      fail: () => {
        console.log('Wrong')
      },
      complete: () => {}
    })
  },

  showDetail: function (e) {
    console.log(e.currentTarget.id);
    var obj = null
    this.data.grids.forEach(element => {
      console.log(element)
      if (element.id == e.currentTarget.id) {
        console.log(element.id)
        obj = element;
        return false;
      }
    });

    var data = JSON.stringify(obj);
    wx.navigateTo({
      url: '../wrongProblem/index?data=' + encodeURIComponent(data) // 必须进行编码 否则会解码错误
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {}
})