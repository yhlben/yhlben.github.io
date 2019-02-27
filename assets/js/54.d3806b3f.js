(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{177:function(e,t,r){"use strict";r.r(t);var a=r(0),n=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),r("p",[e._v("我们使用 npm 安装包的时候，常常会安装很多依赖，等到项目上线后，项目代码一般不会改动了。可依赖包却也在不断地更新。那么我们依赖包是否需要同样不断更新？这一章我们主要来讨论一下这个问题。")]),e._v(" "),e._m(1),e._v(" "),r("p",[e._v("我们从开发者和用户两个角度思考一下。")]),e._v(" "),e._m(2),e._v(" "),r("p",[e._v("用户其实并不关心项目中的依赖，只要程序能够正常运行就好了，如果升级后导致了更多的问题，还会引起用户的反感。")]),e._v(" "),e._m(3),e._v(" "),r("p",[e._v("开发者和用户不一样，由于前端更新换代非常快，库的更新也特别快，保持依赖库的更新，可以起到优化项目，利于维护等好处。")]),e._v(" "),r("p",[e._v("优化项目：新版本的库一般是对旧版本库的一些扩展、一些已知 bug 的修复、性能优化等。例如：同样使用 node 跑一次测试用例，node10 版本比 node6 版本构建时间要缩短 50% 以上。")]),e._v(" "),r("p",[e._v("利于维护：新版本的库都是最新的文档，查阅比较方便，如果遇到项目交接给一个新手，可以避免去学习一些老版本的语法，降低交接难度。")]),e._v(" "),e._m(4),e._v(" "),r("p",[e._v("1、最简单的方法是使用 npm update package_xxx 来升级一个包，但会受到包版本规则的影响。")]),e._v(" "),r("p",[e._v("package.json 中包版本号规则：")]),e._v(" "),e._m(5),e._v(" "),r("p",[e._v("2、使用 "),r("a",{attrs:{href:"https://greenkeeper.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("greenkeeper"),r("OutboundLink")],1),e._v("。这个工具使用 github 账号登录后，选定指定项目，它会解析你的 package.json 文件，当有更新的依赖包被加载进来的时候，就会提交一个 Pull requests，这会触发 ci 构建，如果 ci 没什么问题，直接合并就好了。")]),e._v(" "),r("p",[e._v("如果 ci 有问题，证明新的依赖包可能更改了语法，或者不向下兼容了，便于开发人员第一时间发现问题，处理问题，而不必等到依赖包更新太多导致语法差异越来越大，到时候再想兼容新版本可就要费一番心思了。")]),e._v(" "),r("p",[e._v("3、如果你的依赖都是最新的，还可以在 "),r("a",{attrs:{href:"https://david-dm.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("David"),r("OutboundLink")],1),e._v("上添加小图标哦。")]),e._v(" "),e._m(6),e._v(" "),r("p",[r("a",{attrs:{href:"http://blog.js-republic.com/keep-npm-dependencies-up-to-date/",target:"_blank",rel:"noopener noreferrer"}},[e._v("HOW TO KEEP HIS NPM DEPENDENCIES UP-TO-DATE ?"),r("OutboundLink")],1)])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"package-json-依赖管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#package-json-依赖管理","aria-hidden":"true"}},[this._v("#")]),this._v(" package.json 依赖管理")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"需要升级依赖包吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#需要升级依赖包吗","aria-hidden":"true"}},[this._v("#")]),this._v(" 需要升级依赖包吗")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"用户角度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用户角度","aria-hidden":"true"}},[this._v("#")]),this._v(" 用户角度")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"开发者角度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开发者角度","aria-hidden":"true"}},[this._v("#")]),this._v(" 开发者角度")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"如何升级依赖包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何升级依赖包","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何升级依赖包")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("~1.0.0 匹配 1.0.x")]),e._v(" "),r("li",[e._v("^1.0.0 匹配 1.x.x")]),e._v(" "),r("li",[e._v("1.0.0 匹配 1.0.0")]),e._v(" "),r("li",[e._v(">1.0.0 匹配大于 1.0.0")]),e._v(" "),r("li",[e._v("<1.0.0 匹配小于 1.0.0")]),e._v(" "),r("li",[e._v("* 匹配任何版本")]),e._v(" "),r("li",[e._v("latest 匹配最新版本")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"参考地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考地址","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考地址")])}],!1,null,null,null);t.default=n.exports}}]);