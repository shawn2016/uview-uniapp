<!--
 * @Author: your name
 * @Date: 2019-08-26 03:41:20
 * @LastEditTime: 2020-11-25 11:38:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /uview-uniapp/pages/index/index.vue
-->
<template>
  <view>
    <view class="page-body">
      <view class="page-section page-section-gap">
        <map
          style="width: 100%; height: 300px"
          :polyline="polyline"
          :latitude="latitude"
          :longitude="longitude"
          scale="17"
          :markers="markers"
          show-location="true"
          @markertap="markertap"
        >
        </map>
      </view>
    </view>
  </view>
</template>

<script src="./index.js">
</script>

<style lang="scss">
@import "./index.scss";
</style>
