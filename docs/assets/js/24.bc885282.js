(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{161:function(t,v,_){t.exports=_.p+"assets/img/image-20190729071954323.13b88af4.png"},324:function(t,v,_){t.exports=_.p+"assets/img/image-20190729071443225.13b42ed9.png"},325:function(t,v,_){t.exports=_.p+"assets/img/image-20190728220831126.b579017f.png"},396:function(t,v,_){"use strict";_.r(v);var a=_(0),e=Object(a.a)({},function(){var t=this,v=t.$createElement,a=t._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"升级-kuboard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#升级-kuboard","aria-hidden":"true"}},[t._v("#")]),t._v(" 升级 Kuboard")]),t._v(" "),a("h2",{attrs:{id:"最新版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最新版本","aria-hidden":"true"}},[t._v("#")]),t._v(" 最新版本")]),t._v(" "),a("p",[t._v("版本： v1.0.0-beta.13")]),t._v(" "),a("p",[t._v("发布日期： 2019-07-28")]),t._v(" "),a("p",[a("router-link",{attrs:{to:"/overview/change-log.html"}},[t._v("查看更新日志")])],1),t._v(" "),a("h2",{attrs:{id:"latest-标签升级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#latest-标签升级","aria-hidden":"true"}},[t._v("#")]),t._v(" latest 标签升级")]),t._v(" "),a("p",[t._v("按照 "),a("router-link",{attrs:{to:"/install/install-dashboard.html"}},[t._v("安装 Kuboard")]),t._v(" 文档完成 Kuboard 安装后，您使用的 Kuboard 镜像是 latest 标签。每次 Kuboard 版本更新后，latest 标签对应的镜像也更新为最新版本。您需要执行下述操作，以完成 latest 镜像更新：")],1),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("ul",[a("li",[t._v("安装 Kuboard 时，指定了 Kuboard 的 "),a("a",{attrs:{href:"https://kubernetes.io/docs/concepts/containers/images/#updating-images",target:"_blank",rel:"noopener noreferrer"}},[t._v("imagePullPolicy"),a("OutboundLink")],1),t._v(" 为 Always。")]),t._v(" "),a("li",[t._v("在您的生产环境中，请避免使用 latest 标签，以确保版本的稳定性。")])])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("进入 Kuboard 首页，完成登录，进入 Kuboard "),a("em",[a("strong",[t._v("集群概览")])]),t._v(" 页")])]),t._v(" "),a("li",[a("p",[t._v("点击 "),a("em",[a("strong",[t._v("名称空间 / kube-system")])]),t._v(" 进入 "),a("strong",[t._v("kube-system")]),t._v(" 名称空间")])]),t._v(" "),a("li",[a("p",[t._v("点击 "),a("em",[a("strong",[t._v("容器组列表")])]),t._v(" 按钮")])]),t._v(" "),a("li",[a("p",[t._v("勾选 "),a("em",[a("strong",[t._v("监控")])]),t._v(" 筛选项，点击刷新")]),t._v(" "),a("p",[t._v("选择 kuboard-xxxxxxxxxx-xxxxx 容器组，如下图所示：")])])]),t._v(" "),a("p",[a("img",{attrs:{src:_(324),alt:"image-20190729071443225"}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("点击 "),a("em",[a("strong",[t._v("删除")])]),t._v(" 按钮")]),t._v(" "),a("p",[t._v("点击 "),a("em",[a("strong",[t._v("应用")])]),t._v(" 按钮")]),t._v(" "),a("p",[t._v("点击 "),a("em",[a("strong",[t._v("完成")])]),t._v(" 按钮")]),t._v(" "),a("p",[t._v("等待容器组调整完毕")])]),t._v(" "),a("li",[a("p",[t._v("刷新浏览器页面")])]),t._v(" "),a("li",[a("p",[t._v("验证版本更新结果")]),t._v(" "),a("p",[t._v("如下图所示")])])]),t._v(" "),a("p",[a("img",{attrs:{src:_(161),alt:"image-20190729071954323"}})]),t._v(" "),a("h2",{attrs:{id:"指定版本升级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指定版本升级","aria-hidden":"true"}},[t._v("#")]),t._v(" 指定版本升级")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("进入 Kuboard 首页，完成登录，进入 Kuboard "),a("em",[a("strong",[t._v("集群概览")])]),t._v(" 页")])]),t._v(" "),a("li",[a("p",[t._v("点击 "),a("em",[a("strong",[t._v("名称空间 / kube-system")])]),t._v(" 进入 "),a("strong",[t._v("kube-system")]),t._v(" 名称空间")])]),t._v(" "),a("li",[a("p",[t._v("点击 "),a("em",[a("strong",[t._v("调整镜像版本")])]),t._v(" 按钮")])]),t._v(" "),a("li",[a("p",[t._v("勾选 "),a("em",[a("strong",[t._v("监控")])]),t._v(" 筛选项，点击刷新")]),t._v(" "),a("p",[t._v("并修改 Deployment / Kuboard 的镜像版本为您要升级到的目标版本，如下图所示")])])]),t._v(" "),a("p",[a("img",{attrs:{src:_(325),alt:"image-20190728220831126"}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("点击 "),a("em",[a("strong",[t._v("执行变更")])])]),t._v(" "),a("p",[t._v("点击 "),a("em",[a("strong",[t._v("应用")])])]),t._v(" "),a("p",[t._v("点击 "),a("em",[a("strong",[t._v("完成")])])]),t._v(" "),a("p",[t._v("等待容器组调整完毕。")])]),t._v(" "),a("li",[a("p",[t._v("刷新浏览器页面")])]),t._v(" "),a("li",[a("p",[t._v("验证版本更新结果")]),t._v(" "),a("p",[t._v("如下图所示")])])]),t._v(" "),a("p",[a("img",{attrs:{src:_(161),alt:"image-20190729071954323"}})])])},[],!1,null,null,null);v.default=e.exports}}]);