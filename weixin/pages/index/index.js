const app=getApp()

Page({
	
  /**
   * 页面的初始数据
   */
  data: {
	  list: [
		{ "title": "美食", "img": "/pages/img/i1.png","name":"美食"},
		{ "title": "超市", "img": "/pages/img/i2.png", "name": "超市便利"}, 
		{ "title": "生鲜", "img": "/pages/img/i3.png", "name": "蔬菜水果" },
		{ "title": "专送", "img": "/pages/img/i4.png", "name": "美团专送" }, 
		{ "title": "", "img": "/pages/img/i5.png", "name": "下午茶" }, 
		{ "title": "", "img": "/pages/img/i6.png", "name": "汉堡披萨" },
		{ "title": "", "img": "/pages/img/i7.png", "name": "家常菜" },
		{ "title": "", "img": "/pages/img/i8.png", "name": "小吃馆" }],
	  list2: [],
	  list3: [],
	  list4: [],
	  url:"",
	  open:false,
	  zhuan:''

  },

	open:function(){
		if(this.data.open==true){
			this.setData({
				open:false,
				zhuan: "border-bottom:10rpx solid transparent;border-top:10rpx solid #000;"
				
			})
		}else{
			this.setData({
				open:true,
				zhuan: "border-bottom:10rpx solid #000;border-top:10rpx solid transparent;margin-top:0rpx"	
			})
		}
		console.log(this.data.zhuan)
	},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	  
	  var baseurl = app.globalData.baseurl
	  
	  this.setData({
		  url:baseurl
	  })

	  wx: wx.request({
		  url: this.data.url+'chao',
		  method: 'GET',
		  success: (res) => {
			  this.setData({
				  list2: res.data.data.slice(1)
			  }) 
		  }
	  })
	  

	  wx: wx.request({
		  url: this.data.url+'choose',
		  method: 'GET',
		  success: (res) => {
			  this.setData({
				  list3: res.data.data
			  }) 
		  }
	  })
	  wx: wx.request({
		  url: this.data.url+'list',
		  method: 'GET',
		  success: (res) => {
			  this.setData({
				  list4: res.data.data
			  }) 
		  }
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