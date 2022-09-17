const config = {
  wechat: {
    appID: "wxd95ea15ac62306b0", //公众号里面取

    AppSecret: "e5dbbff43ad91fdec3bf85235695c620", //公众号里面取

    base_templateId: "K9AllZnzXSzdsu6mRsIQoXNNfTtdj_4dpbHYjn7D7AI", // 每日推送模板的id

    birthday_templateId: "", // 生日模板id

    love_templateId: "", // 相恋模板id

  },

  polymerization: {
    weather: "http://apis.juhe.cn/simpleWeather/query?city=%E8%8B%8F%E5%B7%9E&key=5901302d99cae7d9be86fc3a997e918c", // 天气预报
    city: "江阴", // 
  },
  
  polymerization: {
    weather: "http://web.juhe.cn/constellation/getAll?consName=%E7%8B%AE%E5%AD%90%E5%BA%A7&type=today&key=7a89d61f5bafb18eea2a64561b4a7109", // 星座运势
    consName: "摩羯座",
    type:"today",// 
  },

};

module.exports = config;
