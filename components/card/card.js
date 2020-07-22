// components/card/card.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    card: [
      {
        title: '工商执照领取',
        serviceID: 'HD（）()01',
        remark: '法人或企业负责人。。。',
        remainder: 1,
        endTime: '2020-06-01',
        someInfo: 'a'
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goToSubMain: function(event) {
      console.log(event)
    },
    getCardInfo: function() {
      // let that = this
      // that.setData
    }
  }
})
