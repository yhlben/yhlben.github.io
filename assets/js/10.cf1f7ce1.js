(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{206:function(t,s,e){"use strict";e.r(s);var r=e(0),a=Object(r.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("域名劫持是互联网攻击的一种方式，通过攻击域名解析服务器（DNS），或伪造域名解析服务器（DNS）的方法，把目标网站域名解析到错误的地址从而实现用户无法访问目标网站的目的。")]),t._v(" "),e("p",[t._v("客户端访问服务端，需要经过路由器，DNS 解析，CDN，等环节，都有可能发生 DNS 劫持。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),e("p",[e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy__by_cnvoid",target:"_blank",rel:"noopener noreferrer"}},[t._v("Content-Security-Policy 文档"),e("OutboundLink")],1)]),t._v(" "),t._m(7),t._v(" "),t._m(8),e("p",[t._v("缺点:")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),e("p",[e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/Security/%E5%AD%90%E8%B5%84%E6%BA%90%E5%AE%8C%E6%95%B4%E6%80%A7",target:"_blank",rel:"noopener noreferrer"}},[t._v("Subresource Integrity 文档"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Subresource Integrity 允许浏览器检查其获得的资源（例如从 CDN 获得的）是否被篡改的一项安全特性。")]),t._v(" "),t._m(11),e("p",[t._v("缺点:")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),e("p",[e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Security/HTTP_Strict_Transport_Security",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP Strict-Transport-Security 文档"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("HTTP Strict-Transport-Security 是一个安全功能，它告诉浏览器只能通过 HTTPS 访问当前资源，而不是 HTTP。")]),t._v(" "),t._m(14),e("p",[t._v("问题:")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),e("p",[t._v("利用数学方法，让传输中可见的东西不可逆破解，只能通过私钥破解。")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"dns-劫持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns-劫持","aria-hidden":"true"}},[this._v("#")]),this._v(" DNS 劫持")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"dns-是如何工作的？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns-是如何工作的？","aria-hidden":"true"}},[this._v("#")]),this._v(" DNS 是如何工作的？")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[t._v("浏览器可能会缓存域名解析。")]),t._v(" "),e("li",[t._v("用户系统中可以有自己的域名映射表(hosts)。")]),t._v(" "),e("li",[t._v("用户设备到公共域名服务器，是通过 UDP 协议通信。")]),t._v(" "),e("li",[t._v("公共域名服务器通常由 ISP（互联网服务提供商）提供。")]),t._v(" "),e("li",[t._v("公共应服务器会缓存上一级域名服务器的结果。")]),t._v(" "),e("li",[t._v("公共域名服务器 TTL 到期后，会向顶级域名服务器获取信息。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"如何污染-dns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何污染-dns","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何污染 DNS")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[t._v("篡改 hosts 文件")]),t._v(" "),e("li",[t._v("拦截 DNS 请求")]),t._v(" "),e("li",[t._v("污染链路设备")]),t._v(" "),e("li",[t._v("中间人攻击")]),t._v(" "),e("li",[t._v("利用 DNS 服务漏洞")]),t._v(" "),e("li",[t._v("污染上一级 DNS")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"如何抵御-dns-攻击？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何抵御-dns-攻击？","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何抵御 DNS 攻击？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"content-security-policy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#content-security-policy","aria-hidden":"true"}},[this._v("#")]),this._v(" Content-Security-Policy")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("指定每种资源类型可以加载执⾏的条件。")]),this._v(" "),s("li",[this._v("主要⽤用于防御 XSS 攻击。")]),this._v(" "),s("li",[this._v("也可以⽤于强迫资源使用 https 加载。")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[t._v("// header\nContent-Security-Policy: default-src https:\n\n// meta tag\n"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),e("span",{attrs:{class:"token attr-name"}},[t._v("http-equiv")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Content-Security-Policy"),e("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{attrs:{class:"token attr-name"}},[t._v("content")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("default-src https:"),e("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("⽤于 http ⻚面时⽆法抵抗中间人攻击。")]),this._v(" "),s("li",[this._v("规则⽐比较复杂。")]),this._v(" "),s("li",[this._v("影响动态创建脚本的使⽤。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"subresource-integrity-（在-script-标签中加入字段）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subresource-integrity-（在-script-标签中加入字段）","aria-hidden":"true"}},[this._v("#")]),this._v(" Subresource Integrity （在 script 标签中加入字段）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[this._v('<script crossorigin="anonymous" integrity=“sha256-+Ec97...E=“ src=“https://a.com">'),s("span",{attrs:{class:"token script language-javascript"}}),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[this._v("</")]),this._v("script")]),s("span",{attrs:{class:"token punctuation"}},[this._v(">")])]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("用于 http ⻚面时⽆法抵抗中间⼈攻击。")]),this._v(" "),s("li",[this._v("影响动态创建脚本的使⽤。")]),this._v(" "),s("li",[this._v("校验失败时影响可⽤性。")]),this._v(" "),s("li",[this._v("兼容性有限， iOS Safari 不支持。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"http-strict-transport-security"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-strict-transport-security","aria-hidden":"true"}},[this._v("#")]),this._v(" HTTP Strict-Transport-Security")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-http extra-class"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{attrs:{class:"token header-name keyword"}},[this._v("Strict-Transport-Security:")]),this._v(" max-age=<expire-time>\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("⽤户的第⼀次访问不受控。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"走进-https"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#走进-https","aria-hidden":"true"}},[this._v("#")]),this._v(" 走进 HTTPS")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[t._v("客户端发起 SSL/TSL 握手，发送支持加密套件。")]),t._v(" "),e("li",[t._v("选取加密套件返回客户端。")]),t._v(" "),e("li",[t._v("密钥协商/密钥交换。")]),t._v(" "),e("li",[t._v("结束握手（加密）。")]),t._v(" "),e("li",[t._v("加密 http 数据。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"什么是-cdn？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是-cdn？","aria-hidden":"true"}},[this._v("#")]),this._v(" 什么是 CDN？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("用户和机房的距离客观存在。")]),this._v(" "),s("li",[this._v("利用邻近的服务器加速网站内容的访问。")]),this._v(" "),s("li",[this._v("CDN 可以起到一定缓存作用。")]),this._v(" "),s("li",[this._v("利用 DNS 引导不同地区用户到不同的 CDN 节点。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"现有方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#现有方案","aria-hidden":"true"}},[this._v("#")]),this._v(" 现有方案")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("⽅案 A：在某些省份、地区⾃建监测站，定期抓取固定资源（问题:资源太固定，监测站数量也远远不够）。")]),this._v(" "),s("li",[this._v("⽅案 B：业务⽅在⾃己的 html 中监听资源的 error 事件（问题:⽆法确认问题在于链路，也可能只是普通的 js 出错）。")]),this._v(" "),s("li",[this._v("⽅案 C：使⽤用第三⽅方企业服务进⾏监控（问题:服务越多成本越⾼）。")]),this._v(" "),s("li",[this._v("⽅案 D：CSP、SRI（问题:兼容性和灵活性差，⽆无法进行⾃定义逻辑）。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"基于代码校验的防治⽅案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于代码校验的防治⽅案","aria-hidden":"true"}},[this._v("#")]),this._v(" 基于代码校验的防治⽅案")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"/blog/dns-hijacking.png",alt:"基于代码校验的防治⽅案"}})])}],!1,null,null,null);a.options.__file="dns-cdn.md";s.default=a.exports}}]);