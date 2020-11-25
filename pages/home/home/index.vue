<!--
 * @Author: your name
 * @Date: 2019-08-26 03:41:20
 * @LastEditTime: 2020-11-25 15:18:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /uview-uniapp/pages/index/index.vue
-->
<template>
  <view>
    home
    <u-button
      type="primary"
      @tap="sxf.navTo('/pages/home/amap/index', 'navigateTo', 'nologin')"
    >
      高德地图
    </u-button>
    <u-button type="primary" @tap="sumbitByGet">发起请求</u-button>
    {{ data }}
    <u-button type="error" @click="show = true">打开日历</u-button>
    <u-calendar v-model="show" :mode="mode"></u-calendar>
     <sxf-footer></sxf-footer>
  </view>
</template>

<script src="./index.js">
</script>

<style lang="scss">
</style>
