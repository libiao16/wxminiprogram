// components/card/card.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    serviceID: String,
    remark: String,
    remainder: Number,
    endTime: String,
    someInfo: String
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goToSubMain: function(event) {
      console.log(event)
    },
  }
})
