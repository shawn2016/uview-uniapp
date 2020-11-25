/*
 * @Author: your name
 * @Date: 2020-11-25 11:22:34
 * @LastEditTime: 2020-11-25 15:19:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /uview-uniapp/pages/index/home/index.js
 */
export default {
  data() {
    return {
      data: {},
      show: false,
      mode: "date",
    };
  },
  onLoad() {},
  methods: {
    sumbitByGet() {
      this.$u.api.user_getlist().then((res) => {
        this.data = JSON.stringify(res);
        // res为服务端返回的数据
      });
    },
  },
};
