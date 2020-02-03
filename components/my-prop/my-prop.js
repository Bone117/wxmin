// components/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 方式1
    // title: String
    // 方式2
    title:{
      type: String,
      value: "default",
      observer:function(newVal,oldVal){
        console.log(newVal,oldVal)
      }
    }
  },
  externalClasses: ['titleClass'],
})
