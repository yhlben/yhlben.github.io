(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{187:function(t,e,s){"use strict";s.r(e);var r=s(0),i=Object(r.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("最公司首页被流量劫持了，首页被插入了小广告，引起了公司层面的注意，大家一起开了个会，发表了一下当前预防劫持的几个方法，我也参与其中，学到了一些防劫持的知识，在这里写个总结。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("客户端访问服务端，需要经过路由器，DNS 解析，CDN，等环节，都有可能发生流量劫持。")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy__by_cnvoid",target:"_blank",rel:"noopener noreferrer"}},[t._v("Content-Security-Policy"),s("OutboundLink")],1),t._v(" 的实质就是白名单制度，开发者明确告诉客户端，哪些外部资源可以加载和执行，等同于提供白名单。它的实现和执行全部由浏览器完成，开发者只需提供配置。")]),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("两种方式开启 CSP：")]),t._v(" "),t._m(10),s("p",[t._v("缺点:")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),s("p",[t._v("用户在浏览器输入网址，即发出一个 HTTP 请求，首先需要进行域名解析，得到业务服务器的 IP 地址。使用传统 DNS 解析时，会通过当地网络运营商提供的 Local DNS 解析得到结果。域名劫持，即是在请求 Local DNS 解析域名时出现问题，目标域名被恶意地解析到其他 IP 地址，造成用户无法正常使用服务。")]),t._v(" "),s("p",[t._v("解决域名劫持的一个办法就是绕开 Local DNS，通过一个可信的源头来解析域名，解析方式不需要拘泥于 DNS 协议，也可以通过 HTTP 的方式。")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),s("p",[t._v("数据劫持基本针对明文传输的内容发生。用户发起 HTTP 请求，服务器返回页面内容时，经过中间的运营商网络，页面内容被篡改或加塞内容，强行插入弹窗或者广告。")]),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),s("p",[t._v("行业内解决的办法即是对内容进行 HTTPS 加密，实现密文传输，彻底避免劫持问题。MD5 校验同样能起到防止数据劫持的作用，MD5 校验是指内容返回前，应用层对返回的数据进行校验，生成校验值；同时，内容接收方接收到内容后，也对内容进行校验，同样生成校验值，将这两个校验值进行比对，倘若一致，则可以判断数据无劫持。")]),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/Security/%E5%AD%90%E8%B5%84%E6%BA%90%E5%AE%8C%E6%95%B4%E6%80%A7",target:"_blank",rel:"noopener noreferrer"}},[t._v("Subresource Integrity"),s("OutboundLink")],1),t._v(" 允许浏览器检查其获得的资源（例如从 CDN 获得的）是否被篡改的一项安全特性。")]),t._v(" "),t._m(23),s("p",[t._v("缺点:")]),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Security/HTTP_Strict_Transport_Security",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP Strict-Transport-Security"),s("OutboundLink")],1),t._v(" 是一个安全功能，它告诉浏览器只能通过 HTTPS 访问当前资源，而不是 HTTP。")]),t._v(" "),t._m(26),s("p",[t._v("问题:")]),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),s("p",[t._v("X-FRAME-OPTIONS 是一个 HTTP 响应头，在现代浏览器有一个很好的支持。这个 HTTP 响应头 就是为了防御用 iframe 嵌套的点击劫持攻击。")]),t._v(" "),s("p",[t._v("该响应头有三个值可选，分别是")]),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),s("p",[t._v("参考一下美团点评的防治方案：")]),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),s("p",[t._v("app 里的 webview 不直接请求一个链接，而是先下载一个 download.zip 文件，解压后 app 内部直接渲染，越过了 http 层面，从而避免数据被劫持。")]),t._v(" "),t._m(39),t._v(" "),s("p",[t._v("1、在页面 dom 中定义一个根元素 root，所有的业务代码都在这里，页面渲染完毕后，直接清理掉非 root 元素目录的其他 dom。")]),t._v(" "),s("p",[t._v("2、script 标签打上自定义属性，页面渲染时，把没有打自定义属性的删掉。")]),t._v(" "),s("p",[t._v("3、MutationObserver 监听 dom 插入，如果是非法 js 或 html，则阻止。")]),t._v(" "),t._m(40),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("参考资料：")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.im/post/5bea7eb4f265da612859a9e4",target:"_blank",rel:"noopener noreferrer"}},[t._v("干货！防运营商劫持"),s("OutboundLink")],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"域名劫持-数据劫持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#域名劫持-数据劫持","aria-hidden":"true"}},[this._v("#")]),this._v(" 域名劫持 / 数据劫持")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"域名劫持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#域名劫持","aria-hidden":"true"}},[this._v("#")]),this._v(" 域名劫持")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("域名劫持是互联网攻击的一种方式，通过攻击域名解析服务器（DNS），或伪造域名解析服务器（DNS）的方法，"),e("code",[this._v("把目标网站域名解析到错误的地址")]),this._v("从而实现用户无法访问目标网站的目的。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"dns-是如何工作的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dns-是如何工作的","aria-hidden":"true"}},[this._v("#")]),this._v(" DNS 是如何工作的")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("浏览器可能会缓存域名解析。")]),t._v(" "),s("li",[t._v("用户系统中可以有自己的域名映射表(hosts)。")]),t._v(" "),s("li",[t._v("用户设备到公共域名服务器，是通过 UDP 协议通信。")]),t._v(" "),s("li",[t._v("公共域名服务器通常由 ISP（互联网服务提供商）提供。")]),t._v(" "),s("li",[t._v("公共应服务器会缓存上一级域名服务器的结果。")]),t._v(" "),s("li",[t._v("公共域名服务器 TTL 到期后，会向顶级域名服务器获取信息。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"如何污染-dns"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何污染-dns","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何污染 DNS")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("篡改 hosts 文件")]),t._v(" "),s("li",[t._v("拦截 DNS 请求")]),t._v(" "),s("li",[t._v("污染链路设备")]),t._v(" "),s("li",[t._v("中间人攻击")]),t._v(" "),s("li",[t._v("利用 DNS 服务漏洞")]),t._v(" "),s("li",[t._v("污染上一级 DNS")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"如何抵御-dns-攻击"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何抵御-dns-攻击","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何抵御 DNS 攻击")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"content-security-policy-csp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#content-security-policy-csp","aria-hidden":"true"}},[this._v("#")]),this._v(" Content-Security-Policy (CSP)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("指定每种资源类型可以加载执⾏的条件。")]),this._v(" "),e("li",[this._v("主要⽤用于防御 XSS 攻击。")]),this._v(" "),e("li",[this._v("也可以⽤于强迫资源使用 https 加载。")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("// 通过http头信息\nContent-Security-Policy: default-src https:\n\n// 通过meta标签\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http-equiv")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Content-Security-Policy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("default-src https:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("⽤于 http ⻚面时⽆法抵抗中间人攻击。")]),this._v(" "),e("li",[this._v("规则⽐较复杂。")]),this._v(" "),e("li",[this._v("影响动态创建脚本的使⽤。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"http-dns"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-dns","aria-hidden":"true"}},[this._v("#")]),this._v(" HTTP-DNS")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("即用 "),e("code",[this._v("http 协议去解析域名")]),this._v("，从而绕过运营商，避免劫持。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"dns-劫持总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dns-劫持总结","aria-hidden":"true"}},[this._v("#")]),this._v(" DNS 劫持总结")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("使用 csp 限制外部 js 文件加载")]),this._v(" "),e("li",[this._v("使用 http-dns 绕过运营商解析域名")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("DNS 劫持是属于违法行为，已经被严厉打击，很少见了。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"数据劫持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据劫持","aria-hidden":"true"}},[this._v("#")]),this._v(" 数据劫持")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"数据劫持是什么工作的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据劫持是什么工作的","aria-hidden":"true"}},[this._v("#")]),this._v(" 数据劫持是什么工作的")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("http 响应经过运营商时，被加塞或串改内容")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"如何监控数据劫持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何监控数据劫持","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何监控数据劫持")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("https 也能被运营商劫持")]),this._v(" "),e("p",[this._v("1、伪造证书，通过病毒或者其他方式将伪造证书的根证书安装在用户系统中（较少）")]),this._v(" "),e("p",[this._v("2、代理也有客户的证书与私钥，或者客户端与代理认证的时候不校验合法性，即可通过代理来与我们服务端进行数据交互（较多）")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"subresource-integrity-sri"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#subresource-integrity-sri","aria-hidden":"true"}},[this._v("#")]),this._v(" Subresource Integrity (SRI)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-html line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[this._v('<script crossorigin="anonymous" integrity=“sha256-+Ec97...E=“ src=“https://a.com">'),e("span",{pre:!0,attrs:{class:"token script language-javascript"}}),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("</")]),this._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(">")])]),this._v("\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("用于 http ⻚面时⽆法抵抗中间⼈攻击。")]),this._v(" "),e("li",[this._v("影响动态创建脚本的使⽤。")]),this._v(" "),e("li",[this._v("校验失败时影响可⽤性。")]),this._v(" "),e("li",[this._v("兼容性有限， iOS Safari 不支持。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"http-strict-transport-security"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-strict-transport-security","aria-hidden":"true"}},[this._v("#")]),this._v(" HTTP Strict-Transport-Security")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-http line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[e("span",{pre:!0,attrs:{class:"token header-name keyword"}},[this._v("Strict-Transport-Security:")]),this._v(" max-age=<expire-time>\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("⽤户的第⼀次访问不受控。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"x-frame-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#x-frame-options","aria-hidden":"true"}},[this._v("#")]),this._v(" X-FRAME-OPTIONS")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("DENY，表示页面不允许通过 iframe 的方式展示。")]),this._v(" "),e("li",[this._v("SAMEORIGIN，表示页面可以在相同域名下通过 iframe 的方式展示。")]),this._v(" "),e("li",[this._v("ALLOW-FROM，表示页面可以在指定来源的 iframe 中展示。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"数据劫持总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据劫持总结","aria-hidden":"true"}},[this._v("#")]),this._v(" 数据劫持总结")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("使用 https 加密传输数据，确保内容保密")]),this._v(" "),e("li",[this._v("使用 SRI 校验文件一致性")]),this._v(" "),e("li",[this._v("使用 Strict-Transport-Security 强制用户使用 https")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("以上方法都只能起到监控数据劫持作用，并不能对劫持后的页面进行修复。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"基于代码校验的防治⽅案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基于代码校验的防治⽅案","aria-hidden":"true"}},[this._v("#")]),this._v(" 基于代码校验的防治⽅案")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"现有方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#现有方案","aria-hidden":"true"}},[this._v("#")]),this._v(" 现有方案")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("⽅案 A：在某些省份、地区⾃建监测站，定期抓取固定资源（问题:资源太固定，监测站数量也远远不够）。")]),this._v(" "),e("li",[this._v("⽅案 B：业务⽅在⾃己的 html 中监听资源的 error 事件（问题:⽆法确认问题在于链路，也可能只是普通的 js 出错）。")]),this._v(" "),e("li",[this._v("⽅案 C：使⽤用第三⽅方企业服务进⾏监控（问题:服务越多成本越⾼）。")]),this._v(" "),e("li",[this._v("⽅案 D：CSP、SRI（问题:兼容性和灵活性差，⽆无法进行⾃定义逻辑）。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/blog/dns-hijacking.png",alt:"基于代码校验的防治⽅案"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"我们的解决方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#我们的解决方案","aria-hidden":"true"}},[this._v("#")]),this._v(" 我们的解决方案")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("app 端采用 hybrid 方案加载 webview")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("业务代码规范")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("异常上报\n"),s("ul",[s("li",[t._v("上报是否被套在 iframe。")]),t._v(" "),s("li",[t._v("上报是否有其他代码被插入。")]),t._v(" "),s("li",[t._v("上报被 csp 屏蔽的外部链接。")]),t._v(" "),s("li",[t._v("附带上传客户端 ua 等。")])])])])}],!1,null,null,null);e.default=i.exports}}]);