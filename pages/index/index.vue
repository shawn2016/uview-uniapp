<!--
 * @Author: your name
 * @Date: 2019-08-26 03:41:20
 * @LastEditTime: 2020-11-25 11:24:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /uview-uniapp/pages/index/index.vue
-->
<template>
  <view class="content">
    <svg
      style="display: none"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <symbol id="icon-github" viewBox="0 0 16 16">
          <title>github</title>
          <path
            d="M8 0.198c-4.418 0-8 3.582-8 8 0 3.535 2.292 6.533 5.471 7.591 0.4 0.074 0.547-0.174 0.547-0.385 0-0.191-0.008-0.821-0.011-1.489-2.226 0.484-2.695-0.944-2.695-0.944-0.364-0.925-0.888-1.171-0.888-1.171-0.726-0.497 0.055-0.486 0.055-0.486 0.803 0.056 1.226 0.824 1.226 0.824 0.714 1.223 1.872 0.869 2.328 0.665 0.072-0.517 0.279-0.87 0.508-1.070-1.777-0.202-3.645-0.888-3.645-3.954 0-0.873 0.313-1.587 0.824-2.147-0.083-0.202-0.357-1.015 0.077-2.117 0 0 0.672-0.215 2.201 0.82 0.638-0.177 1.322-0.266 2.002-0.269 0.68 0.003 1.365 0.092 2.004 0.269 1.527-1.035 2.198-0.82 2.198-0.82 0.435 1.102 0.162 1.916 0.079 2.117 0.513 0.56 0.823 1.274 0.823 2.147 0 3.073-1.872 3.749-3.653 3.947 0.287 0.248 0.543 0.735 0.543 1.481 0 1.070-0.009 1.932-0.009 2.195 0 0.213 0.144 0.462 0.55 0.384 3.177-1.059 5.466-4.057 5.466-7.59 0-4.418-3.582-8-8-8z"
          ></path>
        </symbol>
        <symbol id="icon-chrome" viewBox="0 0 16 16">
          <title>chrome</title>
          <path
            d="M4.036 6.977l-2.29-3.966c1.466-1.835 3.722-3.012 6.254-3.012 2.929 0 5.489 1.574 6.883 3.922h-6.528c-0.117-0.010-0.236-0.016-0.356-0.016-1.904 0-3.509 1.307-3.964 3.071zM10.864 5.078h4.585c0.355 0.905 0.551 1.891 0.551 2.922 0 4.388-3.533 7.95-7.909 7.999l3.272-5.667c0.461-0.662 0.731-1.466 0.731-2.332 0-1.143-0.471-2.178-1.23-2.922zM5.094 8c0-1.603 1.304-2.906 2.906-2.906s2.906 1.304 2.906 2.906c0 1.602-1.304 2.906-2.906 2.906s-2.906-1.304-2.906-2.906zM9.097 11.944l-2.29 3.967c-3.852-0.576-6.806-3.899-6.806-7.911 0-1.425 0.373-2.763 1.026-3.922l3.266 5.657c0.654 1.392 2.070 2.359 3.707 2.359 0.38 0 0.747-0.052 1.097-0.149z"
          ></path>
        </symbol>
        <symbol id="icon-codepen" viewBox="0 0 16 16">
          <title>codepen</title>
          <path
            d="M14.777 5.751l-7-4.667c-0.168-0.112-0.387-0.112-0.555 0l-7 4.667c-0.139 0.093-0.223 0.249-0.223 0.416v4.667c0 0.167 0.084 0.323 0.223 0.416l7 4.667c0.084 0.056 0.181 0.084 0.277 0.084s0.193-0.028 0.277-0.084l7-4.667c0.139-0.093 0.223-0.249 0.223-0.416v-4.667c0-0.167-0.084-0.323-0.223-0.416zM7.5 10.232l-2.599-1.732 2.599-1.732 2.599 1.732-2.599 1.732zM8 5.899v-3.465l5.599 3.732-2.599 1.732-3-2zM7 5.899l-3 2-2.599-1.732 5.599-3.732v3.465zM3.099 8.5l-2.099 1.399v-2.798l2.099 1.399zM4 9.101l3 2v3.465l-5.599-3.732 2.599-1.732zM8 11.101l3-2 2.599 1.732-5.599 3.732v-3.465zM11.901 8.5l2.099-1.399v2.798l-2.099-1.399z"
          ></path>
        </symbol>
        <symbol id="icon-dribbble" viewBox="0 0 16 16">
          <title>dribbble</title>
          <path
            d="M8 16c-4.412 0-8-3.588-8-8s3.587-8 8-8c4.412 0 8 3.587 8 8s-3.588 8-8 8v0zM14.747 9.094c-0.234-0.075-2.116-0.634-4.256-0.291 0.894 2.456 1.256 4.456 1.328 4.872 1.531-1.037 2.625-2.678 2.928-4.581v0zM10.669 14.3c-0.103-0.6-0.497-2.688-1.456-5.181-0.016 0.006-0.031 0.009-0.044 0.016-3.856 1.344-5.241 4.016-5.362 4.266 1.159 0.903 2.616 1.444 4.194 1.444 0.947 0 1.85-0.194 2.669-0.544v0zM2.922 12.578c0.156-0.266 2.031-3.369 5.553-4.509 0.088-0.028 0.178-0.056 0.269-0.081-0.172-0.388-0.359-0.778-0.553-1.159-3.409 1.022-6.722 0.978-7.022 0.975-0.003 0.069-0.003 0.138-0.003 0.209 0 1.753 0.666 3.356 1.756 4.566v0zM1.313 6.609c0.306 0.003 3.122 0.016 6.319-0.831-1.131-2.013-2.353-3.706-2.534-3.953-1.913 0.903-3.344 2.666-3.784 4.784v0zM6.4 1.366c0.188 0.253 1.431 1.944 2.55 4 2.431-0.909 3.459-2.294 3.581-2.469-1.206-1.072-2.794-1.722-4.531-1.722-0.55 0.003-1.088 0.069-1.6 0.191v0zM13.291 3.691c-0.144 0.194-1.291 1.663-3.816 2.694 0.159 0.325 0.313 0.656 0.453 0.991 0.050 0.119 0.1 0.234 0.147 0.353 2.275-0.284 4.534 0.172 4.759 0.219-0.016-1.612-0.594-3.094-1.544-4.256v0z"
          ></path>
        </symbol>
      </defs>
    </svg>

    <view class="wrapper">
      <view class="wrapper-inner">
        <view class="buble" :style="getleft()"></view>
        <view class="box"></view>
      </view>
      <ul class="box-fix">
        <li
          @tap="goTab(0)"
          class="link"
          :class="activeKey === 0 ? 'active' : ''"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            class="icon-star"
          >
            <use xlink:href="#icon-github"></use>
          </svg>
        </li>
        <li
          @tap="goTab(1)"
          class="link"
          :class="activeKey === 1 ? 'active' : ''"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            class="icon-star"
          >
            <use xlink:href="#icon-chrome"></use>
          </svg>
        </li>
        <li
          @tap="goTab(2)"
          class="link"
          :class="activeKey === 2 ? 'active' : ''"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            class="icon-star"
          >
            <use xlink:href="#icon-codepen"></use>
          </svg>
        </li>
        <li
          @tap="goTab(3)"
          class="link"
          :class="activeKey === 3 ? 'active' : ''"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            class="icon-star"
          >
            <use xlink:href="#icon-dribbble"></use>
          </svg>
        </li>
      </ul>
    </view>

    <svg class="filter" xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -3"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
  </view>
</template>

<script>
export default {
  data() {
    return {
      activeKey: 0,
      value: "",
      type: "text",
      border: true,
    };
  },
  methods: {
    getleft() {
      switch (this.activeKey) {
        case 0:
          return {
            height: "30px",
            left: "36px",
          };
          break;
        case 1:
          return {
            height: "30px",
            left: "calc(50%)",
          };
          break;
        case 2:
          return {
            height: "30px",
            left: "36px",
          };
          break;
        case 3:
          return {
            height: "30px",
            left: "36px",
          };
          break;
        default:
          break;
      }
      return {
        left: "36px",
      };
    },
    goTab(key) {
      this.activeKey = key;
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

svg.filter {
  display: none;
}
.wrapper {
  overflow: hidden;
  height: 100vh;
  min-height: 250px;
  max-height: 600px;
  background-color: rgba(#fff, 0.1);
  position: relative;
  .box-fix {
    position: absolute;
    width: 100%;
    height: 43px;
    bottom: 0;
    left: 0;
    background-color: #fd6465;
  }

  .wrapper-inner {
    filter: url(#goo);
    position: relative;
    width: 100%;
    height: 100%;
  }
  .box {
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 43px;
    background-color: #fd6465;
  }
  .buble {
    position: absolute;
    width: 30px;
    height: 0px;
    background: #fd6465;
    bottom: 20px;
    left: 8px;
    border-radius: 50%;
    transition: 0.2s cubic-bezier(0.44, -0.35, 0.48, 1.5) all;
  }
}

.inspired {
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 100%;
  /* flexCenter(); */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  color: tint(#1e1737, 20);
  a {
    color: tint(#1e1737, 30);
  }
}

.box-fix {
  display: flex;
  li {
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    list-style: none;
    cursor: pointer;
    flex-grow: 1;
    height: 100%;
    color: #fff;
    /* flexCenter(); */
    display: flex;
    align-items: center;
    justify-content: center;
    &.active {
      cursor: initial;
      svg {
        transform: translateY(-10px) scale(1.1);
        fill: #fff;
        transition-delay: 0.1s;
      }
    }
    svg {
      width: 25px;
      height: 25px;
      fill: rgba(#fff, 0.3);
      transition: 0.2s 0s cubic-bezier(0.53, -0.07, 0.21, 1.98) transform;
    }
  }
}
</style>
