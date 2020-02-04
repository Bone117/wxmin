// pages/home/home.js
import request from '../../service/network.js'

Page({
  data: {

  },
  onLoad: function (options) {
    this.get_data_origin()
    request({
      url: 'http://127.0.0.1:8000/api/novel/',
    }).then(res=>{
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },
  get_data_origin(){

  }
})