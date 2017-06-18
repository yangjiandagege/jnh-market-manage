var config = require('../../config');
var userModel = require('../../model/userModel');
var requestUtil = require('../../utils/requestUtil');
var serviceCode = require('../../config').serviceCode;
var self;

Page({
  data: {
    userInfo:{},
    user:null,
  },

  onLoad: function (){
    self = this;
    wx.login({
      success: function (data) {
        console.log('step1 success 调用微信登录接口', data);
        wx.showToast({
          title: '数据加载中...',
          icon: 'loading'
        })

        var business = {
          "code": data.code,
        }
        requestUtil.request(serviceCode.GET_OPENID, business, function (isSuccess, result, returnCode, returnMsg) {
          console.log(result);
          
          if (isSuccess) {
            getApp().user.openid = result.openId;

            userModel.login(function (isSuccess) {
              if (isSuccess) {
                self.setData({
                  user: getApp().user
                })
                console.log('step4 success 登录系统成功');
              } else {
                console.log('step4 fail 登录系统失败');
              }

              wx.hideLoading();
            });

            wx.getUserInfo({
              success: function (res) {
                console.log('step3.1 success 获取微信用户信息 ', res.userInfo);
                getApp().user.userInfo = res.userInfo;
                self.data.userInfo = getApp().user.userInfo;
                self.setData({
                  userInfo: self.data.userInfo
                })
              },

              fail: function (res) {
                console.log('step3.1 fail 获取微信用户信息', res);
              }
            })
          } else {
          }
        }, null, config.initToken);
      },

      fail: function (err) {
        console.log('step1 fail 调用微信登录接口，将无法正常使用开放接口等服务', err);
      }
    })
  },
})
