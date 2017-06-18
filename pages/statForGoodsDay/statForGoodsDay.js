var config = require('../../config');
var dateUtil = require('../../utils/dateUtil.js');
var self;
Page({
  data: {
    tabs: ['按车次统计', '按件数统计'],
    activeIndex: 0,
    listForCar:[
      {
        goodsType: "西货特货",
        goodsNum: 56
      },
      {
        goodsType: "西货普货",
        goodsNum: 78
      },
      {
        goodsType: "泰货普货",
        goodsNum: 97
      },
      {
        goodsType: "台湾水果",
        goodsNum: 12
      },
      {
        goodsType: "国产水果",
        goodsNum: 35
      },
      {
        goodsType: "杂货",
        goodsNum: 57
      }
    ],
    listForNum: [
      {
        goodsType: "西货特货",
        goodsNum: 221
      },
      {
        goodsType: "西货普货",
        goodsNum: 231
      },
      {
        goodsType: "泰货普货",
        goodsNum: 234
      },
      {
        goodsType: "台湾水果",
        goodsNum: 234
      },
      {
        goodsType: "国产水果",
        goodsNum: 143
      },
      {
        goodsType: "杂货",
        goodsNum: 68
      }
    ]
  },
  onLoad: function (options) {
    self = this;
  },
  tabClick: function (e) {
    self.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
})