/*
 * @Author: your name
 * @Date: 2019-03-29 13:09:30
 * @LastEditTime: 2020-11-25 15:00:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /bcdj-uniapp/main.js
 */

import Vue from "vue";
import App from "./App";
import uView from "uview-ui";
import localStorage from "@/utils/localStorage";
import config from "@/config";
import httpInterceptor from "@/common/http.interceptor.js";
// http接口API集中管理引入部分
import httpApi from "@/common/http.api.js";
let mpShare = require("uview-ui/libs/mixin/mpShare.js");
Vue.mixin(mpShare);
Vue.use(uView);
Vue.config.productionTip = false;
const sxf = {
  localStore: localStorage,
  commonFunc: () => {},
  config,
  navTo(url, type = "navigateTo", isRequireLogin) {
    console.log(url, type, isRequireLogin);
    if (!localStorage.getToken() && !isRequireLogin) {
      uni.navigateTo({
        url: "/pages/login/login/index",
      });
      return;
    }
    if (!url) {
      uni.navigateBack({
        delta: 1,
      });
      return;
    }
    switch (type) {
      case "navigateTo":
        uni.navigateTo({
          url: url,
        });
        break;
      case "redirectTo":
        uni.redirectTo({
          url: url,
        });
        break;
      case "switchTab":
        uni.switchTab({
          url: url,
        });
        break;

      default:
        break;
    }
  },
};
Vue.prototype.sxf = sxf;
App.mpType = "app";

const app = new Vue({
  ...App,
});
Vue.use(httpInterceptor, app);
Vue.use(httpApi, app);
app.$mount();
