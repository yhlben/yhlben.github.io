(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{167:function(t,a,e){"use strict";e.r(a);var i=e(0),v=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"node-浅析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node-浅析","aria-hidden":"true"}},[t._v("#")]),t._v(" Node 浅析")]),t._v(" "),e("p",[t._v("Node 的特点主要有异步 IO，单线程。")]),t._v(" "),e("h2",{attrs:{id:"异步-io-的好处"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#异步-io-的好处","aria-hidden":"true"}},[t._v("#")]),t._v(" 异步 IO 的好处")]),t._v(" "),e("ul",[e("li",[t._v("前端通过异步 IO 可以消除阻塞。")]),t._v(" "),e("li",[t._v("请求耗时少，假如有两个请求 A 和 B，那么异步 IO 用时为：Max（A+B）。同步则为 A+B，请求越多差距越大。")]),t._v(" "),e("li",[t._v("IO 是昂贵的，分布式 IO 是更昂贵的。")]),t._v(" "),e("li",[t._v("Nodejs 适用于 IO 密集型，而不适用于 CPU 密集型。")]),t._v(" "),e("li",[t._v("并不是所有都用异步任务好，遵循一个公式： s= (Ws+Wp)/(Ws+Wp/p) ws 表示同步任务，Wp 表示异步任务，p 表示处理器的数量。")])]),t._v(" "),e("h2",{attrs:{id:"node-对异步-io-的实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node-对异步-io-的实现","aria-hidden":"true"}},[t._v("#")]),t._v(" Node 对异步 IO 的实现")]),t._v(" "),e("p",[e("img",{attrs:{src:"/blog/node-async.png",alt:"异步IO"}})]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("libuv 在 linux 下是 custom threadpool。")]),t._v(" "),e("p",[t._v("libuv 在 windows 下是 iocp。")])]),t._v(" "),e("h2",{attrs:{id:"常用的实现异步-io-的方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用的实现异步-io-的方式","aria-hidden":"true"}},[t._v("#")]),t._v(" 常用的实现异步 IO 的方式")]),t._v(" "),e("ul",[e("li",[t._v("step，wind，bigpipe 等异步控制库。")]),t._v(" "),e("li",[t._v("Async、Await。")]),t._v(" "),e("li",[t._v("Promise/Defferred")]),t._v(" "),e("li",[t._v("协程，Node 暂不支持，可使用 Generator。")])]),t._v(" "),e("h2",{attrs:{id:"node-内存管理与优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node-内存管理与优化","aria-hidden":"true"}},[t._v("#")]),t._v(" Node 内存管理与优化")]),t._v(" "),e("p",[t._v("Node 采用 V8 的 分代式垃圾回收策略，分为新生代和老生代内存。")]),t._v(" "),e("ul",[e("li",[t._v("新生代内存主要通过 Scavenge 算法，分为 from 和 to。")]),t._v(" "),e("li",[t._v("老生代内存主要通过 Mark-Sweep 和 Mark-compact，标记清除和移动清除。")])]),t._v(" "),e("h2",{attrs:{id:"常见的内存泄漏"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见的内存泄漏","aria-hidden":"true"}},[t._v("#")]),t._v(" 常见的内存泄漏")]),t._v(" "),e("ul",[e("li",[t._v("无线增长的数组。")]),t._v(" "),e("li",[t._v("无限制设置对象额属性和值。")]),t._v(" "),e("li",[t._v("任何模块的私有变量都是永驻的。")]),t._v(" "),e("li",[t._v("大循环，无 GC 机会。")])]),t._v(" "),e("h2",{attrs:{id:"node-项目上线"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node-项目上线","aria-hidden":"true"}},[t._v("#")]),t._v(" Node 项目上线")]),t._v(" "),e("ul",[e("li",[t._v("前端工程化，静态资源上传到 CDN。")]),t._v(" "),e("li",[t._v("单测、压测，性能分析工具找 bug。")]),t._v(" "),e("li",[t._v("编写 nginx-conf 实现负载均衡和反向代理。")]),t._v(" "),e("li",[t._v("开启 pm2 守护进程，小流量灰度上线。")])])])}],!1,null,null,null);v.options.__file="node.md";a.default=v.exports}}]);