// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleShowToast(){
    wx.showToast({
      title: '你好啊',
      icon: 'loading',
    })
  },
  handleShowModal(){
    wx.showModal({
      title: 'this is title',
      content: 'this is content',
      showCancel:false,
      success(res){
        console.log(res)
        if(res.cancel){
          console.log("点击了取消")
        }
        if(res.confirm){
          console.log("点击了确定")
        }
      },

    })
  },
  handleShowLoading(){
    wx.showLoading({
      title: '加载中',
    })

    setTimeout(function(){
      wx.hideLoading()
    },2000)
  },
  handleShowAction(){
    wx.showActionSheet({
      itemList: ['A','B','C'],
    })
  },
  onShareAppMessage(){
    return{
      title:"你好啊，李银河"
    }
  }
})