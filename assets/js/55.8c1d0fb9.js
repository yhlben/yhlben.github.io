(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{178:function(t,e,i){"use strict";i.r(e);var s=i(0),_=Object(s.a)({},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[t._m(0),t._v(" "),i("p",[t._v("在 HTTP 一节中，我们知道一个页面在渲染的时候除了 HTML，JS，CSS 以外，还包括了很多第三方资源，包括图片，视频以及其他多媒体资源，这些第三方资源往往会比较大，可能会在加载的时候产生性能问题，这一节我们就来讨论一下如何选择图片？")]),t._v(" "),i("p",[t._v("其实，页面中的 HTML，JS，CSS 通过压缩合并打包后，体积已经减小了很多，再想更进一步优化很难。可是页面中的图片不一样，各种类型的图片在压缩以后大小差别比较大，在合适的地方选择合适类型的图片可以起到良好的性能优化效果。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),i("p",[t._v("当前网页中常用的图片格式如下：")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),i("p",[t._v("上述的格式中， SVG 属于矢量图，JPEG，PNG，GIF 属于位图。")]),t._v(" "),t._m(7),t._v(" "),i("p",[t._v("这一节我们详细地介绍一下上面提到的图片格式。")]),t._v(" "),t._m(8),t._v(" "),i("p",[t._v("索引色（Indexed Color）：挑选一副图片中最有代表性的若干种颜色（通常不超过 256 种），编制成颜色表。在表示图片中每一个点的颜色信息时，不直接使用这个点的颜色信息，而使用颜色表的索引。")]),t._v(" "),i("p",[t._v("直接色 (direct color)：使用四个数字来代表一种颜色，这四个数字分别代表这个颜色中红色 R、绿色 G、蓝色 B 。这 3 个维度分别支持 256 种变化，所以直接色可以表示 2 的 24 次方种颜色。")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),i("p",[t._v("JPEG 非常适合用来存储照片，用来表达更生动的图像效果，比如颜色渐变。")]),t._v(" "),t._m(16),t._v(" "),i("p",[t._v("PNG 又分为 PNG-8 和 PNG-24，可以根据颜色的多少来选择适当的格式。")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),i("p",[t._v("在无损压缩的情况下，相同质量的 WebP 图片，文件大小要比 PNG 小 26%；")]),t._v(" "),i("p",[t._v("在有损压缩的情况下，具有相同图片精度的 WebP 图片，文件大小要比 JPEG 小 25%~34%；")]),t._v(" "),t._m(28),t._v(" "),i("p",[t._v("APNG 是基于 PNG 格式扩展的一种动画格式，增加了对动画图像的支持，同时加入了 24 位图像和 8 位 Alpha 透明度的支持，这意味着动画将拥有更好的质量，其诞生的目的是为了替代老旧的 GIF 格式。")]),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),i("p",[t._v("我们通过图片压缩的方式来减少图片大小，图片压缩又分为有损压缩和无损压缩。")]),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),i("p",[t._v("上述的格式中，无损压缩的有：GIF，PNG。有损压缩的有：JPEG。")]),t._v(" "),t._m(33),t._v(" "),i("p",[t._v("1、首选矢量图形，如不能满足需求，则选择位图。")]),t._v(" "),i("p",[t._v("2、选择适合的位图，流程图如下：")]),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://www.zhihu.com/question/20028452/answer/142593276",target:"_blank",rel:"noopener noreferrer"}},[t._v("图片格式 jpg、png、gif 各有什么优缺点？"),i("OutboundLink")],1)]),t._v(" "),i("li",[i("a",{attrs:{href:"https://juejin.im/post/5bfac3bd51882566936071e1",target:"_blank",rel:"noopener noreferrer"}},[t._v("盘点项目中的图片"),i("OutboundLink")],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"怎样选择图片格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#怎样选择图片格式","aria-hidden":"true"}},[this._v("#")]),this._v(" 怎样选择图片格式")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("我们优化图片的核心点："),e("strong",[this._v("在相同的图片质量基础上，尽可能地让图片大小更小")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"常见图片格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见图片格式","aria-hidden":"true"}},[this._v("#")]),this._v(" 常见图片格式")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v("JPEG")]),t._v(" "),i("li",[t._v("PNG")]),t._v(" "),i("li",[t._v("GIF")]),t._v(" "),i("li",[t._v("SVG")]),t._v(" "),i("li",[t._v("APNG (GIF 的增强版，兼容性不佳)")]),t._v(" "),i("li",[t._v("WebP (JPEG 的增强版，兼容性不佳)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"位图和矢量图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#位图和矢量图","aria-hidden":"true"}},[this._v("#")]),this._v(" 位图和矢量图")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("位图：记录的是图片上每一个像素点的色相、饱和度、明度。当你打开一张图片时，会根据记录的每一个像素点进行排列，将排列的结果显示给你看。")]),this._v(" "),e("li",[this._v("矢量图：记录的是元素形状及颜色的算法，当你打开一张图片时，会根据图中的算法进行运算，将运算结果显示给你看。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("注意")]),this._v(" "),e("ul",[e("li",[this._v("位图缩放变大后不能保持图片质量，可能会失帧，优点是能很细腻地表达图片的效果。")]),this._v(" "),e("li",[this._v("矢量图可以无限放大或缩小，不会影响图片质量，文件体积较小，编辑灵活。缺点是表达的色彩层次不清，整体观感效果不如位图。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"详细介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#详细介绍","aria-hidden":"true"}},[this._v("#")]),this._v(" 详细介绍")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"索引色和直接色"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#索引色和直接色","aria-hidden":"true"}},[this._v("#")]),this._v(" 索引色和直接色")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("注意")]),this._v(" "),e("ul",[e("li",[this._v("索引色能表示的颜色少，只能表示一些常规的颜色，但能大大减少图片的大小。")]),this._v(" "),e("li",[this._v("直接色能表示的颜色多，能够表达生动的图像效果，但图片的大小往往比较大。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"svg"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#svg","aria-hidden":"true"}},[this._v("#")]),this._v(" SVG")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("SVG 是"),e("code",[this._v("无损的")]),this._v("、"),e("code",[this._v("矢量图")]),this._v("。在它内部存储着图片绘制的函数，通常包括绘制点，线，常规图形等。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("体积小。")]),this._v(" "),e("li",[this._v("无损压缩。")]),this._v(" "),e("li",[this._v("图片质量最佳，但不适合过渡，渐变等细腻的颜色。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"jpeg"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jpeg","aria-hidden":"true"}},[this._v("#")]),this._v(" JPEG")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("JPEG 是"),e("code",[this._v("有损的")]),this._v("、采用"),e("code",[this._v("直接色")]),this._v("的、"),e("code",[this._v("位图")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("有损压缩，体积可以压的更小。")]),this._v(" "),e("li",[this._v("直接色，能表示的颜色多。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"png"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#png","aria-hidden":"true"}},[this._v("#")]),this._v(" PNG")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"png-8"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#png-8","aria-hidden":"true"}},[this._v("#")]),this._v(" PNG-8")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("PNG-8 是 PNG 的"),i("code",[t._v("索引色")]),t._v("版本。PNG-8 是"),i("code",[t._v("无损的")]),t._v("、使用"),i("code",[t._v("索引色")]),t._v("的、"),i("code",[t._v("位图")]),t._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("支持透明。")]),this._v(" "),e("li",[this._v("无损压缩，压缩比不高。")]),this._v(" "),e("li",[this._v("索引色，能表示的颜色少。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"png-24"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#png-24","aria-hidden":"true"}},[this._v("#")]),this._v(" PNG-24")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("PNG-24 是 PNG 的"),i("code",[t._v("直接色")]),t._v("版本。PNG-24 是"),i("code",[t._v("无损的")]),t._v("、使用"),i("code",[t._v("直接色")]),t._v("的、"),i("code",[t._v("位图")]),t._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("支持透明。")]),this._v(" "),e("li",[this._v("无损压缩，压缩比不高。")]),this._v(" "),e("li",[this._v("直接色，能表示的颜色多。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"gif"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gif","aria-hidden":"true"}},[this._v("#")]),this._v(" GIF")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("GIF 是"),e("code",[this._v("无损的")]),this._v("、采用"),e("code",[this._v("索引色")]),this._v("的、"),e("code",[this._v("位图")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("支持透明。")]),this._v(" "),e("li",[this._v("支持动画。")]),this._v(" "),e("li",[this._v("无损压缩，压缩比不高。")]),this._v(" "),e("li",[this._v("索引色，能表示的颜色少。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"webp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webp","aria-hidden":"true"}},[this._v("#")]),this._v(" WebP")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("WebP 是谷歌开发的一种新图片格式，WebP 是同时"),i("code",[t._v("支持有损")]),t._v("和"),i("code",[t._v("无损压缩")]),t._v("的、使用"),i("code",[t._v("直接色")]),t._v("的、"),i("code",[t._v("位图")]),t._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"apng"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apng","aria-hidden":"true"}},[this._v("#")]),this._v(" APNG")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("支持 24 位图片")]),this._v(" "),e("li",[this._v("支持 8 位 Alpha 透明通道")]),this._v(" "),e("li",[this._v("向下兼容 PNG")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"如何减少图片大小"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何减少图片大小","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何减少图片大小")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("无损压缩：使用“无损”过滤器处理图像，"),e("code",[this._v("对像素数据进行压缩")]),this._v("。意味着图像变小的同时，不会对图片质量造成损害。")]),this._v(" "),e("li",[this._v("有损压缩：使用“有损”过滤器处理图像，"),e("code",[this._v("去除某些像素数据")]),this._v("。意味着图像可以被压缩得更小，但对质量有害。如果你一次又一次地以有损压缩保存图像，图像质量会越来越差。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("提示")]),this._v(" "),e("p",[this._v("矢量图是通过函数计算的出来的，所以矢量图的压缩，都是无损压缩。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"图片选择方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#图片选择方案","aria-hidden":"true"}},[this._v("#")]),this._v(" 图片选择方案")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"project-image.png",alt:"位图选择"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("提示")]),this._v(" "),e("p",[this._v("虽然本文介绍了几种常见图片格式的选择方案，但可能在实际开发中并不需要一定用图片，例如："),e("code",[this._v("base64")]),this._v(" 代替小图标，"),e("code",[this._v("字体图标")]),this._v("代替图标等方案也是一种不错的选择，所以要具体问题具体分析。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考资料")])}],!1,null,null,null);e.default=_.exports}}]);