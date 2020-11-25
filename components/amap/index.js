export default {
  data() {
    return {
      markers: [{}, {}, {}],
      poisdatas: [{}, {}, {}],
      title: "map",
      latitude: 30.208487,
      longitude: 120.21202,
      SRC: "111111111111",
      polyline: [
        {
          points: [
            {
              latitude: 30.208487,
              longitude: 120.21202,
            },
            {
              latitude: 30.209403,
              longitude: 120.213845,
            },
          ],
          color: "#000000",
          width: 2,
          dottedLine: true,
          arrowLine: true,
        },
      ],
    };
  },
  onLoad() {
    var that = this;
    var amapFile = require("@/assets/libs/amap-wx.js");
    console.log(amapFile,'0000')
    var amapPlugin = new amapFile.AMapWX({
      key: this.sxf.config,
    });
    amapPlugin.getPoiAround({
      success: function (data) {
        //成功回调
        that.markers = data.markers;
        that.markers = [
          {
            id: 0,
            width: 22,
            height: 32,
            latitude: 30.208487,
            longitude: 120.21202,
            callout: {
              padding: 2,
              fontSize: 15,
              bgColor: "blue",
              color: "#6B8E23",
              borderRadius: 5,
              display: "BYCLICK",
              content: "中南宿舍",
            },
          },
          {
            id: 18,
            width: 22,
            height: 32,
            latitude: 30.209403,
            longitude: 120.213845,
            callout: {
              padding: 2,
              fontSize: 15,
              bgColor: "blue",
              color: "#6B8E23",
              borderRadius: 5,
              display: "BYCLICK",
              content: "北京德和衡(杭州)律师事务所",
            },
          },
        ];
        that.poisdatas = data.poisData;
        var markers_new = [];
        that.markers.forEach(function (item, index) {
          markers_new.push({
            id: item.id, //marker 序号
            width: item.width, //marker 宽度
            height: item.height, //marker 高度
            iconPath: item.iconPath, //marker 图标路径
            latitude: item.latitude, //marker  纬度
            longitude: item.longitude, //marker 经度

            callout: {
              padding: 2, //callout 文本边缘留白
              fontSize: 15, //callout  文字大小
              bgColor: "blue", //callout 背景颜色
              color: "#6B8E23", //callout 文字颜色
              borderRadius: 5, //边框圆角
              display: "BYCLICK", //callout 'BYCLICK':点击显示; 'ALWAYS':常显
              content: that.poisdatas[index].name, //地理位置名称
            },
          });
        });
        that.markers = markers_new;
        console.log("data", JSON.stringify(that.poisdatas));
        console.log("markers", JSON.stringify(that.markers));
      },
      fail: function (info) {
        //失败回调
        console.log("info", info);
      },
    });
    /*	amapPlugin.getStaticmap({
                zoom: 8,
                size: 300 * 300,
                scale: 2,
                paths: "10,0x0000ff,1,,:120.210890,30.207171;120.210205,30.207968;120.210320,,30.207599;120.210694,30.207111",
                success: function(data) {
                    that.setData({
                        src: data.url
                    })
                },
                fail: function(info) {
                    wx.showModal({
                        title: info.errMsg
                    })
                }
            })
        */
  },
  methods: {
    markertap: function (e) {
      for (var i = 0; i < this.markers.length; i++) {
        if (JSON.stringify(e).substring(18, 20) == this.markers[i].id) {
          console.log(
            "markers" +
              this.poisdatas[i].name +
              "   " +
              this.poisdatas[i].address
          );
          uni.showToast({
            title: this.poisdatas[i].name,
            mask: false,
            duration: 1500,
          });
        }
      }
    },
  },
};
