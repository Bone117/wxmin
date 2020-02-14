import request from './network.js'

const baseURL = "http://123.207.32.32:8000";

export function getMultiData(){
  return request({
    url: "/home/multidata",
  })
}

export function getGoodsData(type,page){
  return request({
    url: "/home/data",
    data:{
      type,
      page
    }
  })
}