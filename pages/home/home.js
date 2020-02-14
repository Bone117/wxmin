// pages/home/home.js
import {
  getMultiData,
  getGoodsData
} from "../../service/home.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    recommends: [],
    titles: ['流行', '新款', '精选'],
    goods: {
      'pop': {
        page: 0,
        list: []
      },
      'new': {
        page: 0,
        list: []
      },
      'sell': {
        page: 0,
        list: []
      },
    },
    currentType: 'pop',
    types: ['pop', 'new', 'sell'],
    isShow: false,
    BACK_TOP: 1000,
    isTabFixed: false,
    tabScrollTop:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 1.请求轮播图及推荐
    this._getMultidate()

    // 2.请求商品数据
    this._getGoodsData('pop')
    this._getGoodsData('new')
    this._getGoodsData('sell')
  },

  // --------网络请求函数--------
  _getMultidate() {
    getMultiData().then(res => {
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;

      // 将banners和recommends放到data中
      this.setData({
        banners,
        recommends
      })
    })
  },
  _getGoodsData(type) {
    const page = this.data.goods[type].page + 1;

    getGoodsData(type, page).then(res => {
      const list = res.data.data.list
      const oldData = this.data.goods[type].list
      oldData.push(...list)
      const typeKey = `goods.${type}.list`
      const pageKey = `goods.${type}.page`
      this.setData({
        [typeKey]: oldData,
        [pageKey]: page
      })
    })
  },

  // --------事件监听函数--------
  handleTabClick(event) {
    console.log(event)
    const index = event.detail.index;
    this.setData({
      currentType:this.data.types[index]
    })
  },
  onReachBottom(){
    this._getGoodsData(this.data.currentType)
  },
  onPageScroll(option){
    const position = option.scrollTop
    const flag1 = position >= this.data.BACK_TOP
    if (flag1 !=this.data.showBackTop){
      this.setData({
        isShow: flag1
      })
    }

    const flag2 = position >= this.data.tabScrollTop
    if (flag2 != this.data.isTabFixed){
      this.setData({
        isTabFixed:flag2
      })
    }
  },
  handleImageLoad(){
    console.log("图片加载完成")
    wx.createSelectorQuery().select("#tab-control").
    boundingClientRect(rect =>{
      this.data.tabScrollTop = rect.top
    }).exec()
  }

})