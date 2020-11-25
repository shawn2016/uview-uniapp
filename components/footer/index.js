/*
 * @Author: your name
 * @Date: 2020-11-24 17:40:54
 * @LastEditTime: 2020-11-25 14:46:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /uview-uniapp/components/footer/index.js
 */
export default {
  data() {
    return {
      list: [
        {
          iconPath: "home",
          selectedIconPath: "home-fill",
          text: "首页",
          count: 2,
          isDot: true,
          customIcon: false,
          pagePath: "/pages/home/home/index",
        },
        {
          pagePath: "/pages/order/order/index",
          selectedIconPath: "grid-fill",
          text: "订单",
          customIcon: false,
          iconPath: "grid",
        },

        {
          iconPath: "account",
          selectedIconPath: "account-fill",
          text: "我的",
          count: 23,
          pagePath: "/pages/mine/mine/index",
          isDot: false,
          customIcon: false,
        },
      ],
      current: 0,
    };
  },
};
