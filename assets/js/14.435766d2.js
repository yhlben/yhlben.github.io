(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{163:function(t,a,e){"use strict";e.r(a);var s=e(0),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"js-事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#js-事件","aria-hidden":"true"}},[t._v("#")]),t._v(" js 事件")]),e("h2",{attrs:{id:"事件流"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件流","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件流")]),e("ul",[e("li",[t._v("事件冒泡")]),e("li",[t._v("事件捕获")]),e("li",[t._v("目标阶段")])]),e("h2",{attrs:{id:"事件处理程序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件处理程序","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件处理程序")]),e("p",[t._v("DOM0 级事件:使用 dom0 级的时间处理程序被认为是元素的方法，this 是当前元素。")]),e("p",[t._v("DOM2 级事件：主要定义 addEventListener removeEventListener 两个方法，this 是当前元素。")]),e("h2",{attrs:{id:"事件对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件对象","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件对象")]),e("p",[t._v("触发事件时，会产生一个事件对象，包含所有与事件相关的信息。")]),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("e"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("preventDefault")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ne"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("stopPropagation")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ne"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ne"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bubbles"),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token comment"}},[t._v("// 是否冒泡")]),t._v("\ne"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cancelable"),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token comment"}},[t._v("// 是可以取消默认事件")]),t._v("\ne"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eventPhase"),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token comment"}},[t._v("// 1 捕获阶段 2处理阶段 3冒泡阶段")]),t._v("\n"),e("span",{attrs:{class:"token comment"}},[t._v("//......")]),t._v("\n")])])]),e("h3",{attrs:{id:"事件对象中与位置相关的属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件对象中与位置相关的属性","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件对象中与位置相关的属性")]),e("ul",[e("li",[t._v("clientX CLientY：相对于浏览器可视区域，滑动后，点击同一位置，值不变。")]),e("li",[t._v("pageX pageY：相对于浏览器页面，滑动后，点击同一位置，值会变。")]),e("li",[t._v("screenX screenY：相对于设备屏幕，如果浏览器窗口移动，则会改变。")])]),e("h2",{attrs:{id:"事件类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件类型","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件类型")]),e("h3",{attrs:{id:"ui-事件-不一定和用户操作相关的事件。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ui-事件-不一定和用户操作相关的事件。","aria-hidden":"true"}},[t._v("#")]),t._v(" ui 事件:不一定和用户操作相关的事件。")]),e("ul",[e("li",[t._v("load")]),e("li",[t._v("unload")]),e("li",[t._v("abort")]),e("li",[t._v("error")]),e("li",[t._v("select")]),e("li",[t._v("resize")]),e("li",[t._v("scroll")])]),e("h3",{attrs:{id:"焦点事件：元素获得或失去焦点时触发。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#焦点事件：元素获得或失去焦点时触发。","aria-hidden":"true"}},[t._v("#")]),t._v(" 焦点事件：元素获得或失去焦点时触发。")]),e("ul",[e("li",[t._v("blur 失去焦点(不冒泡)。")]),e("li",[t._v("focusin (冒泡) 。")]),e("li",[t._v("focusout (冒泡) 。")]),e("li",[t._v("focus(不冒泡)。")])]),e("h3",{attrs:{id:"鼠标和滚轮事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#鼠标和滚轮事件","aria-hidden":"true"}},[t._v("#")]),t._v(" 鼠标和滚轮事件")]),e("ul",[e("li",[t._v("click")]),e("li",[t._v("dbclick")]),e("li",[t._v("mousedown")]),e("li",[t._v("mouseenter")]),e("li",[t._v("mouseleave")]),e("li",[t._v("mousemove")]),e("li",[t._v("mouseup")]),e("li",[t._v("mouseout 鼠标位于一个元素外部，然后将其首次移动到另一元素边界之内时触发。")]),e("li",[t._v("mouseover 鼠标位于一个元素上，然后将鼠标移入另一个元素时触发。")])]),e("h3",{attrs:{id:"键盘与文本事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#键盘与文本事件","aria-hidden":"true"}},[t._v("#")]),t._v(" 键盘与文本事件")]),e("ul",[e("li",[t._v("keydown 按下键盘上的"),e("code",[t._v("任意键")]),t._v("时触发，按住不放会重复触发。")]),e("li",[t._v("keyup")]),e("li",[t._v("keypress 按下键盘上的"),e("code",[t._v("字符键")]),t._v("时触发，按住不放会重复触发。")]),e("li",[t._v("textInput 当用户在可编辑区域中输入字符时触发,按下"),e("code",[t._v("实际字符键")]),t._v("才触发(如果敲退格键，不触发，因为不是实际字符键)。")])]),e("h3",{attrs:{id:"复合事件：输入组合件触发"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#复合事件：输入组合件触发","aria-hidden":"true"}},[t._v("#")]),t._v(" 复合事件：输入组合件触发")]),e("h3",{attrs:{id:"变动事件：dom-变化时触发事件。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#变动事件：dom-变化时触发事件。","aria-hidden":"true"}},[t._v("#")]),t._v(" 变动事件：dom 变化时触发事件。")]),e("ul",[e("li",[t._v("DOMSubtreeModified 在 DOM 结构中发生任何变化时触发。这个事件在其他任何事件触发后都会触发。")]),e("li",[t._v("DOMNodeInserted 在一个节点作为子节点被插入到另一个节点中时触发")]),e("li",[t._v("DOMNodeRemoved 在节点从其父节点中移除时触发")]),e("li",[t._v("DOMNodeInsertedIntoDocument 在一个节点被直接插入文档或通过子树间接插入文档之后触发。在 DOMNodeInserted 之后")]),e("li",[t._v("DOMNodeRemovedFromDocument 在一个节点被直接从文档中移除或通过子树间接从文档中移除之前触发。在 DOMNodeRemoved 之后")]),e("li",[t._v("DOMAttrModified 在属性被修改之后触发")]),e("li",[t._v("DOMCharacterDataModified 在文本节点的值发生改变时触发")])]),e("h3",{attrs:{id:"html5-事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#html5-事件","aria-hidden":"true"}},[t._v("#")]),t._v(" Html5 事件")]),e("ul",[e("li",[t._v("contextmenu 右键打开菜单栏")]),e("li",[t._v("beforeunload 页面卸载前")]),e("li",[t._v("DOMContentLOaded 形成完整 DOM 树时触发")]),e("li",[t._v("readystatechange 页面加载相关")]),e("li",[t._v("pageshow pagehide 前进后退事件")]),e("li",[t._v("hashcahnge 事件")])]),e("h3",{attrs:{id:"设备事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设备事件","aria-hidden":"true"}},[t._v("#")]),t._v(" 设备事件")]),e("ul",[e("li",[t._v("orientationchange 切换横竖屏")]),e("li",[t._v("deviceorientation 设备在空间中朝向哪里")]),e("li",[t._v("devicemotion 检测每个方向的加速度")])]),e("h3",{attrs:{id:"触摸与手势事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#触摸与手势事件","aria-hidden":"true"}},[t._v("#")]),t._v(" 触摸与手势事件")]),e("ul",[e("li",[t._v("touchstart")]),e("li",[t._v("touchmove")]),e("li",[t._v("touchend")]),e("li",[t._v("touchcancel")])]),e("p",[t._v("手势")]),e("ul",[e("li",[t._v("gesturestart 当一个手指已经在屏幕上而另一个手指又触摸屏幕时触发")]),e("li",[t._v("gesturechange 当触摸屏幕的任何一个手指的位置发生变化时触发")]),e("li",[t._v("gestureend 任何一个手指从屏幕上移开时触发")])]),e("p",[t._v("当触摸屏幕上的元素时，会依次执行如下事件：")]),e("p",[t._v("touchstart mouseover mousemove mousedown mouseup click touchend")]),e("h2",{attrs:{id:"事件委托"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件委托","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件委托")]),e("p",[t._v("将事件绑定到父节点，利用事件冒泡，管理多个子节点的事件。")]),e("h2",{attrs:{id:"移除事件处理程序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#移除事件处理程序","aria-hidden":"true"}},[t._v("#")]),t._v(" 移除事件处理程序")]),e("p",[t._v("移除 dom 时，为了避免与 dom 绑定的事件也一并被回收，应该一并清空事件处理程序。")]),e("h2",{attrs:{id:"模拟事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模拟事件","aria-hidden":"true"}},[t._v("#")]),t._v(" 模拟事件")]),e("p",[t._v("createEvent() 参数：UIEvent MouseEvents MutationEvents 一般化的 dom 变动 HTMLEvents。\ndispatchEvent() 触发事件。")])])}],!1,null,null,null);a.default=r.exports}}]);