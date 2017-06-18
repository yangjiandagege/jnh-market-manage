/**
 * 小程序配置文件
 */

var host = "dev.accemarket.com"

var baseUrl = `https://${host}/api/auth`;
var smsUrl  = `https://${host}/sms/message`;
var baseViewUrl = `https://${host}/view/auth`;

var initToken = "411e7bc272a421b44802a9f608a740e5ca74872a";

var appId = "wx180ed92be54fe64b";
var appSecret = "38fcf37cd22c3cab134e15935577b3f1";

var serviceCode = {
  BIND_PHONE_NUM: "5001U03",
  GET_TOKEN: "5002U01",
  GET_OPENID: "1001WP01",
  GET_TOKEN_BY_OPENID: "1001W02",
  GET_USER: "5003U01",
  MODIFY_USER_INFO: "5003U02",
  REGISTER_USER: "5001U02",
  BIND_WX_OPENID: "5001U03",
  GET_SMS: "100101",
  VERIFY_SMS: "100102",
}

module.exports = {
  baseUrl: baseUrl,
  smsUrl: smsUrl,
  baseViewUrl: baseViewUrl,
  initToken: initToken,
  appId: appId,
  appSecret: appSecret,
  serviceCode: serviceCode,
}