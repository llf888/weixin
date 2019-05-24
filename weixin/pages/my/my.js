// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		name:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	  wx.setNavigationBarTitle({
		  title: '我的'
	  })
	  wx.setNavigationBarColor({
		  frontColor: '#000000',
		  backgroundColor: '#FCD15E',
		  animation: {
			  duration: 100,
			  timingFunc: 'easeIn'
		  }
	  })
  },
	img:function(){

		wx:wx.chooseImage({
			count:1,
			sourceType:["album","camera"],
			success:(res)=> {
				const name=res.tempFilePaths
				this.setData({
					name:name
				})
				wx.previewImage({
					urls: this.data.name,
					current: this.data.name,
					success:(res)=>{
						wx:wx.uploadFile({
							url: '',
							filePath: '',
							name: '',
							header: {},
							formData: {},
							success: function(res) {},
							fail: function(res) {},
							complete: function(res) {},
						})
					}
				})
			},
			
		})
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