Page({
  data:{
    name:'outFile',
    age:18,
    students:[
      { id: 110, name: 'A', age: 30},
      { id:111, name:'B', age:31},
      { id: 112, name: 'C', age: 32}
    ],
    counter:0

  },
  handleBtnClick(){
    // 1.界面上counter不会更新
    // this.data.counter+=1
    // console.log(this.data.counter)

    // 2. this.setData()
    this.setData({
      counter:this.data.counter+1
    })
  },
  handleSubtraction(){
    this.setData({
      counter:this.data.counter-=1
    })
  }
})