// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath:""
  },
  handleImageLoad(){
    console.log("图片加载完成")
  },
  handleChooseAlbum(){
    wx.chooseImage({
      success:(res) => {
        const path = res.tempFilePaths[0]

        // 设置imagePath
        this.setData(
          {
            imagePath:path
          }
        )

      },
    })
  }
})