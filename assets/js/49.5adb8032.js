(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{186:function(t,e,s){"use strict";s.r(e);var r=s(0),h=Object(r.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("https 是以安全为目标的 http 通道，简单讲是 http 的安全版。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("http 协议属于明文传输协议，交互过程以及数据传输都没有进行加密，通信双方也没有进行任何认证，通信过程非常容易遭遇劫持、监听、篡改。")]),t._v(" "),s("p",[t._v("可以把 http 通信比喻成寄送信件一样，A 给 B 寄信，信件在寄送过程中，会经过很多的邮递员之手，他们可以拆开信读取里面的内容（因为 http 是明文传输的）。A 的信件里面的任何内容（包括各类账号和密码）都会被轻易窃取。除此之外，邮递员们还可以伪造或者修改信件的内容，导致 B 接收到的信件内容是假的。")]),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("https 引入了加密以及身份验证机制。")]),t._v(" "),t._m(10),t._v(" "),s("p",[t._v("在图中可以看到，步骤中间人只可能在 1，3，5，7 时去劫持请求。")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://mp.weixin.qq.com/s/StqqafHePlBkWAPQZg3NrA",target:"_blank",rel:"noopener noreferrer"}},[t._v("一个故事讲完 https"),s("OutboundLink")],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"https-协议常用知识点总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#https-协议常用知识点总结","aria-hidden":"true"}},[this._v("#")]),this._v(" HTTPS 协议常用知识点总结")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https.png",alt:"https流程图"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"流程分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#流程分析","aria-hidden":"true"}},[this._v("#")]),this._v(" 流程分析")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("1、客户端请求 https 链接，并发送自己支持的一套加密规则和 1 个"),s("code",[t._v("随机数（Client random）")]),t._v("给服务器。")]),t._v(" "),s("li",[t._v("2、服务器需要安装好证书（其实就是一对公钥和私钥）。")]),t._v(" "),s("li",[t._v("3、服务端确认双方使用的加密方法，并返回一组加密组件和通过 hash 算法签名的数字证书，和 1 个服务器端生成的"),s("code",[t._v("随机数（Server random）")]),t._v("。")]),t._v(" "),s("li",[t._v("4、客户端验证证书。\n"),s("ul",[s("li",[t._v("使用 hash 检查证书是否被篡改。")]),t._v(" "),s("li",[t._v("验证失败，弹出提示，证书存在问题，拒绝请求。")]),t._v(" "),s("li",[t._v("验证成功，生成新"),s("code",[t._v("随机数（Premaster secret）")]),t._v("。")])])]),t._v(" "),s("li",[t._v("5、使用证书公钥将随机值加密后传给服务端。")]),t._v(" "),s("li",[t._v("6、服务端用私钥解密消息内容，获得"),s("code",[t._v("随机数（Premaster secret）")]),t._v("。")]),t._v(" "),s("li",[t._v("7、服务端根据约定的加密方法，使用前面的三个随机数（Client random，Server random，Premaster secret）生成"),s("code",[t._v("对话密钥（session key）")]),t._v("，并使用"),s("code",[t._v("对话密钥（session key）")]),t._v("加密传输内容，发送给客户端。")]),t._v(" "),s("li",[t._v("8、客户端使用同样的算法解密，获取内容。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"hash-检测"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hash-检测","aria-hidden":"true"}},[this._v("#")]),this._v(" hash 检测")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https-hash1.png",alt:"https流程图"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https-hash2.png",alt:"https流程图"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"https-为什么安全"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#https-为什么安全","aria-hidden":"true"}},[this._v("#")]),this._v(" https 为什么安全")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"http-不安全"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-不安全","aria-hidden":"true"}},[this._v("#")]),this._v(" http 不安全")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"https-如何保证安全"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#https-如何保证安全","aria-hidden":"true"}},[this._v("#")]),this._v(" https 如何保证安全")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("在传输过程中的内容都是经过加密的。")]),this._v(" "),e("li",[this._v("引入了证书的概念，保证客户端通信的服务器是真正的服务器，而不是中间人。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("劫持请求 1 和 3：劫持请求到另一个服务器，或修改服务器返回的证书，都会在步骤 4 中验证证书失败，故攻击失效。")]),this._v(" "),e("li",[this._v("劫持请求 5：证书私钥在服务器端，只有服务器端才能解密，中间人没有私钥，故无法破解内容。")]),this._v(" "),e("li",[this._v("劫持请求 7：对称加密的密钥存在客户端和服务端，中间人没有密钥，故无法破解内容。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"相关链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相关链接","aria-hidden":"true"}},[this._v("#")]),this._v(" 相关链接")])}],!1,null,null,null);e.default=h.exports}}]);