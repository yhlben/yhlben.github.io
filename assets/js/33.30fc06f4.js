(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{191:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("一个精简的 React 服务器端渲染 Demo。"),a("a",{attrs:{href:"https://github.com/yhlben/react-ssr-demo",target:"_blank",rel:"noopener noreferrer"}},[t._v("github 地址"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("1、访问 "),a("a",{attrs:{href:"https://yinhengli.com:8084/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Online Demo"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("2、我们可以看到，首屏数据很快的就显示出来了，而页面右上角还在不停的加载（因为客户端 js 很大）。")]),t._v(" "),a("p",[t._v("3、等待 js 加载完成时候，页面才能进行操作（切换路由，登录等）。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("我们在访问客户端渲染的页面时，请求到的只是一个 html 空壳，里面引入了一个 js 文件，所有的内容都是通过 js 进行插入的，类似于这样：")]),t._v(" "),t._m(4),a("p",[t._v("正是因为页面是由 js 渲染出来的，所以会带来如下几个问题：")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("为了解决这 2 个问题，我们可以使用服务器端渲染。")]),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("之前说道，单页应用，请求到的是一个 html 空壳，然后通过 js 去渲染页面。那如果请求到的直接是一个渲染好的页面，是不是就可以解决这 2 个问题了呢？")]),t._v(" "),a("p",[t._v("没错，服务器端渲染就是这个原理。")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("这里使用 react-router 对前后端代码进行同构。")]),t._v(" "),a("p",[t._v("1、客户端")]),t._v(" "),t._m(13),t._v(" "),a("p",[t._v("2、服务器端")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),a("p",[t._v("在 React 中，我们常常使用 redux 来存储数据，管理状态。")]),t._v(" "),a("p",[t._v("1、客户端")]),t._v(" "),a("p",[t._v("使用 redux 进行状态管理，使用 react-redux 提供的 Provider 为组件注入 store。")]),t._v(" "),a("p",[t._v("2、服务器端")]),t._v(" "),a("p",[t._v("和客户端一样，但每一次接收到请求需产生一个新的 store，避免多个用户操作同一个 store。")]),t._v(" "),t._m(18),t._v(" "),a("p",[t._v("1、客户端")]),t._v(" "),a("p",[t._v("使用 axios 在 componentDidMount 中请求数据。")]),t._v(" "),a("p",[t._v("2、服务器端")]),t._v(" "),a("p",[t._v("同样使用 axios 去请求数据，但是服务器端不会触发 componentDidMount 生命周期。我们可以在后端匹配到路由的时候，进行数据请求，并把数据存入 redux 中的 store，然后渲染出包含数据的 html 页面，为了避免客户端二次请求，服务器端向 window 中注入 REDUX_STORE 数据，客户端直接使用。")]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),a("p",[t._v("1、客户端")]),t._v(" "),a("p",[t._v("使用 css-loader，style-loader 打包编写好的 css 代码并插入到页面中。")]),t._v(" "),a("p",[t._v("2、服务器端")]),t._v(" "),a("p",[t._v("由于 style-loader 会插入到页面，而服务器端并没有 document 等概念，所以这里使用 isomorphic-style-loader 打包 css 代码。")]),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),a("p",[t._v("SEO 主要是针对搜索引擎进行优化，爬取的是落地页，需要在服务器端做优化。")]),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),a("p",[t._v("由于网页上的文字，链接，图片等信息都是产品设计好的，技术层面不能实现优化。我们需要做的就是优化页面的 title，description 等，让爬虫爬到页面后能够展示的更加友好。")]),t._v(" "),a("p",[t._v("这里借助于 react-helmet 库，在服务期端进行 title，meta 等信息注入。")]),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),a("p",[t._v("以上两个问题归根结底还是钱的问题。服务器压力大，可以通过买更多的服务器来解决。可维护性增大，可以招募更多人来维护。但是对于小型团队来说，增加服务器，招募更多维护人员，都会额外增加的支出，所以在选择服务器端渲染时，要权衡好利弊。")]),t._v(" "),t._m(29),t._v(" "),a("p",[t._v("如果只是想优化 SEO，不妨使用预渲染来实现，推荐使用 prerender 库来实现。")]),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),a("p",[a("a",{attrs:{href:"https://timonweb.com/posts/running-expressjs-server-over-https/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Express 部署 Https"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://letsencrypt.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("免费证书 Let's Encrypt"),a("OutboundLink")],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"react-服务器端渲染-demo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react-服务器端渲染-demo","aria-hidden":"true"}},[this._v("#")]),this._v(" React 服务器端渲染 Demo")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("提示")]),this._v(" "),s("p",[this._v("效果不明显的话，可以打开控制台，在 Network 栏 Disable cache，然后刷新。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这其实体现出服务器端渲染的 2 大特点，"),s("code",[this._v("首屏直出")]),this._v("，"),s("code",[this._v("SEO 友好")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"为什么要做服务器端渲染？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么要做服务器端渲染？","aria-hidden":"true"}},[this._v("#")]),this._v(" 为什么要做服务器端渲染？")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token doctype"}},[t._v("<!DOCTYPE html>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("en"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("charset")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("UTF-8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=device-width, initial-scale=1.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http-equiv")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("X-UA-Compatible"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ie=edge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("ssr"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bundle.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("1、页面要等待 js 加载，并执行完成了才能展示，"),s("code",[this._v("在这期间页面展现的是白屏")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("2、爬虫不能识别 js 内容，所以抓取不到任何数据，"),s("code",[this._v("不利于 SEO 优化")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"react-服务器端渲染流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react-服务器端渲染流程","aria-hidden":"true"}},[this._v("#")]),this._v(" React 服务器端渲染流程")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"简化流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简化流程","aria-hidden":"true"}},[this._v("#")]),this._v(" 简化流程")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("1、服务器端使用 renderToString 直接渲染出包含页面信息的"),s("code",[this._v("静态 html")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("2、客户端根据渲染出的静态 html 进行"),s("code",[this._v("二次渲染")]),this._v("，做一些绑定事件等操作。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("提示")]),this._v(" "),s("p",[this._v("服务器端没有 DOM，Window 等概念，所以只能渲染出字符串，不能进行事件绑定，样式渲染等。")]),this._v(" "),s("p",[this._v("只有第一次访问页面时才使用服务器端渲染，之后会被客户端渲染接管。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"编写路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编写路由","aria-hidden":"true"}},[this._v("#")]),this._v(" 编写路由")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("使用 react-router-dom 下的 "),s("code",[this._v("BrowserRouter")]),this._v(" 进行前端路由控制。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("使用 react-router-dom 下的 "),s("code",[this._v("StaticRouter")]),this._v(" 进行静态路由控制，具体操作如下：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("使用 react-router-config 下的 matchRoutes 匹配后端路由，使用 renderRoutes 渲染匹配到的路由。")]),this._v(" "),s("li",[this._v("使用 react-router-dom/server 下的 renderToString 方法，渲染出 html 字符串，并返回给前端。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("提示")]),this._v(" "),s("p",[this._v("使用 StaticRouter 中通过 context 可以和前端页面通信，传参。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"状态管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#状态管理","aria-hidden":"true"}},[this._v("#")]),this._v(" 状态管理")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"数据请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据请求","aria-hidden":"true"}},[this._v("#")]),this._v(" 数据请求")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("在 routes 对象上挂载一个自定义方法 loadData。")]),this._v(" "),s("li",[this._v("在服务器端 matchRoutes 后，如果有 loadData，则进行请求数据，并把请求到的数据写入 store 中。")]),this._v(" "),s("li",[this._v("服务器端等待请求完成后，再进行 renderToString 渲染。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("提示")]),this._v(" "),s("p",[this._v("项目中使用 easy-mock 注入 cookie 来模拟登录，由于 easy-mock 写入 cookie 采用了安全机制：使用了 "),s("em",[this._v("secure")]),this._v(" 和 "),s("em",[this._v("HttpOnly")]),this._v("，所以需使用 https 模拟来访问。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"样式处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#样式处理","aria-hidden":"true"}},[this._v("#")]),this._v(" 样式处理")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("引入 isomorphic-style-loader 后，客户端就可以通过 styles._getCss 方法获取到 css 代码。")]),this._v(" "),s("li",[this._v("通过 staticRouter 中的 context 把 css 代码传入到后端。")]),this._v(" "),s("li",[this._v("后端拼接好 css 代码，然后插入到 html 中，最后返回给前端。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"seo-优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#seo-优化","aria-hidden":"true"}},[this._v("#")]),this._v(" SEO 优化")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("常规的 SEO 主要是优化："),s("code",[this._v("文字")]),this._v("，"),s("code",[this._v("链接")]),this._v("，"),s("code",[this._v("多媒体")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("内部链接尽量保持相关性")]),this._v(" "),s("li",[this._v("外部链接尽可能多")]),this._v(" "),s("li",[this._v("多媒体尽量丰富")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"你可能不需要服务器端渲染？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#你可能不需要服务器端渲染？","aria-hidden":"true"}},[this._v("#")]),this._v(" 你可能不需要服务器端渲染？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("现在，我们成功地通过服务器端渲染解决了"),s("code",[this._v("首次加载白屏时间")]),this._v("和 "),s("code",[this._v("SEO 优化")]),this._v("。但也带来了一些问题：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("服务器端压力增大。")]),this._v(" "),s("li",[this._v("引入了 node 中间层，可维护性增大。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"解决-seo-的另一种方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决-seo-的另一种方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 解决 SEO 的另一种方法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("prerender 库的原理："),s("code",[this._v("先请求客户端渲染的页面，把客户端渲染完成之后的结果，拿给爬虫看")]),this._v("，这样爬虫获取到的页面就是已经渲染好的页面。prerender 库在使用时会开启一个服务，通过传递 url 来解析客户端渲染页面，这就需要我们对服务器端架构进行调整。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("1、 nginx 判断访问类型")]),this._v(" "),s("blockquote",[s("p",[this._v("2.1、 用户访问 ：直接走客户端渲染")]),this._v(" "),s("p",[this._v("2.2、 爬虫访问 ：走预渲染")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考资料")])}],!1,null,null,null);n.options.__file="library-react-ssr.md";s.default=n.exports}}]);