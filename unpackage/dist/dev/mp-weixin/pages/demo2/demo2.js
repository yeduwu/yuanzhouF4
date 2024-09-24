"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo2",
  setup(__props) {
    const isActive = common_vendor.ref(false);
    const arrs = common_vendor.ref([
      "../../static/skins_img1.png",
      "../../static/skins_img2.png",
      "../../static/skins_img3.png",
      "../../static/skins_img4.png",
      "../../static/skins_img5.png"
    ]);
    const picurl = common_vendor.ref("../../static/skins_img1.png");
    let i = 0;
    setInterval(() => {
      i++;
      console.log(i);
      picurl.value = arrs.value[i % 5];
    }, 1e3);
    return (_ctx, _cache) => {
      return {
        a: picurl.value,
        b: isActive.value ? 1 : "",
        c: common_vendor.n("active")
      };
    };
  }
};
wx.createPage(_sfc_main);
