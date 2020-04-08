(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{339:function(t,s,a){"use strict";a.r(s);var v=a(19),e=Object(v.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"js-事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-事件"}},[t._v("#")]),t._v(" JS 事件")]),t._v(" "),a("p",[t._v("JavaScript 使我们有能力创建动态页面。事件是可以被 JavaScript 侦测到的行为。")]),t._v(" "),a("h2",{attrs:{id:"事件流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件流"}},[t._v("#")]),t._v(" 事件流")]),t._v(" "),a("p",[t._v("JS 中的数据流主要包括以下 3 个阶段：")]),t._v(" "),a("ul",[a("li",[t._v("捕获阶段")]),t._v(" "),a("li",[t._v("目标阶段")]),t._v(" "),a("li",[t._v("冒泡阶段")])]),t._v(" "),a("p",[t._v("事件触发时，会先从根 DOM 元素向下遍历（捕获），找到事件触发元素（目标阶段），然后再依次向上传递事件（冒泡阶段），直到传递到根节点。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("如果在触发元素上既绑定了冒泡事件，也绑定了捕获事件，会按照事件注册的顺序进行执行，而不是先捕获或冒泡。")])]),t._v(" "),a("h3",{attrs:{id:"事件委托"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件委托"}},[t._v("#")]),t._v(" 事件委托")]),t._v(" "),a("p",[t._v("为了避免不断地新增 JS 事件，可以将事件绑定到父节点，利用事件冒泡，管理多个子节点的事件。")]),t._v(" "),a("h2",{attrs:{id:"事件处理程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件处理程序"}},[t._v("#")]),t._v(" 事件处理程序")]),t._v(" "),a("p",[t._v("DOM0 级事件：DOM0 级的事件处理程序被认为是元素的方法（直接在 DOM 元素上增加 onXXX 方法），this 是当前元素。")]),t._v(" "),a("p",[t._v("DOM2 级事件：主要定义 addEventListener removeEventListener 两个方法来绑定事件，this 是当前元素。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("移除事件处理程序")]),t._v(" "),a("p",[t._v("移除 DOM 时，为了避免与 DOM 绑定的事件没有被及时回收，应该一并清空事件处理程序。")])]),t._v(" "),a("h2",{attrs:{id:"事件对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件对象"}},[t._v("#")]),t._v(" 事件对象")]),t._v(" "),a("p",[t._v("触发事件时，会产生一个事件对象，包含所有与事件相关的信息。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("preventDefault")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ne"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stopPropagation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ne"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ne"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bubbles"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否冒泡")]),t._v("\ne"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cancelable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是可以取消默认事件")]),t._v("\ne"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eventPhase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1 捕获阶段 2处理阶段 3冒泡阶段")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//......")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h3",{attrs:{id:"事件对象中与位置相关的属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件对象中与位置相关的属性"}},[t._v("#")]),t._v(" 事件对象中与位置相关的属性")]),t._v(" "),a("ul",[a("li",[t._v("clientX，CLientY：相对于浏览器可视区域，滑动后，点击同一位置，值不变。")]),t._v(" "),a("li",[t._v("pageX，pageY：相对于浏览器页面，滑动后，点击同一位置，值会变。")]),t._v(" "),a("li",[t._v("screenX，screenY：相对于设备屏幕，如果浏览器窗口移动，则会改变。")])]),t._v(" "),a("h2",{attrs:{id:"事件类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件类型"}},[t._v("#")]),t._v(" 事件类型")]),t._v(" "),a("h3",{attrs:{id:"ui-事件：不一定和用户操作相关的事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ui-事件：不一定和用户操作相关的事件"}},[t._v("#")]),t._v(" ui 事件：不一定和用户操作相关的事件")]),t._v(" "),a("ul",[a("li",[t._v("load")]),t._v(" "),a("li",[t._v("unload")]),t._v(" "),a("li",[t._v("abort")]),t._v(" "),a("li",[t._v("error")]),t._v(" "),a("li",[t._v("select")]),t._v(" "),a("li",[t._v("resize")]),t._v(" "),a("li",[t._v("scroll")])]),t._v(" "),a("h3",{attrs:{id:"焦点事件：元素获得或失去焦点时触发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#焦点事件：元素获得或失去焦点时触发"}},[t._v("#")]),t._v(" 焦点事件：元素获得或失去焦点时触发")]),t._v(" "),a("ul",[a("li",[t._v("blur 失去焦点(不冒泡)。")]),t._v(" "),a("li",[t._v("focusin (冒泡) 。")]),t._v(" "),a("li",[t._v("focusout (冒泡) 。")]),t._v(" "),a("li",[t._v("focus(不冒泡)。")])]),t._v(" "),a("h3",{attrs:{id:"鼠标和滚轮事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#鼠标和滚轮事件"}},[t._v("#")]),t._v(" 鼠标和滚轮事件")]),t._v(" "),a("ul",[a("li",[t._v("click")]),t._v(" "),a("li",[t._v("dbclick")]),t._v(" "),a("li",[t._v("mousedown")]),t._v(" "),a("li",[t._v("mouseenter")]),t._v(" "),a("li",[t._v("mouseleave")]),t._v(" "),a("li",[t._v("mousemove")]),t._v(" "),a("li",[t._v("mouseup")]),t._v(" "),a("li",[t._v("mouseout 鼠标位于一个元素外部，然后将其首次移动到另一元素边界之内时触发。")]),t._v(" "),a("li",[t._v("mouseover 鼠标位于一个元素上，然后将鼠标移入另一个元素时触发。")])]),t._v(" "),a("h3",{attrs:{id:"键盘与文本事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#键盘与文本事件"}},[t._v("#")]),t._v(" 键盘与文本事件")]),t._v(" "),a("ul",[a("li",[t._v("keydown 按下键盘上的"),a("code",[t._v("任意键")]),t._v("时触发，按住不放会重复触发。")]),t._v(" "),a("li",[t._v("keyup")]),t._v(" "),a("li",[t._v("keypress 按下键盘上的"),a("code",[t._v("字符键")]),t._v("时触发，按住不放会重复触发。")]),t._v(" "),a("li",[t._v("textInput 当用户在可编辑区域中输入字符时触发,按下"),a("code",[t._v("实际字符键")]),t._v("才触发(如果敲退格键，不触发，因为不是实际字符键)。")])]),t._v(" "),a("h3",{attrs:{id:"复合事件：输入组合件触发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复合事件：输入组合件触发"}},[t._v("#")]),t._v(" 复合事件：输入组合件触发")]),t._v(" "),a("p",[t._v("复合事件是 DOM3 级事件中心添加的一类事件，用于处理 IME 的输入序列（输入法输入时的事件）。")]),t._v(" "),a("p",[t._v("复合事件有以下三中：")]),t._v(" "),a("ul",[a("li",[t._v("compositionstart：要开始输入。")]),t._v(" "),a("li",[t._v("compositionupdate：插入新字符。")]),t._v(" "),a("li",[t._v("compositionend：复合系统关闭，返回正常键盘输入状态。")])]),t._v(" "),a("h3",{attrs:{id:"变动事件：dom-变化时触发事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变动事件：dom-变化时触发事件"}},[t._v("#")]),t._v(" 变动事件：DOM 变化时触发事件")]),t._v(" "),a("ul",[a("li",[t._v("DOMSubtreeModified 在 DOM 结构中发生任何变化时触发。这个事件在其他任何事件触发后都会触发。")]),t._v(" "),a("li",[t._v("DOMNodeInserted 在一个节点作为子节点被插入到另一个节点中时触发。")]),t._v(" "),a("li",[t._v("DOMNodeRemoved 在节点从其父节点中移除时触发。")]),t._v(" "),a("li",[t._v("DOMNodeInsertedIntoDocument 在一个节点被直接插入文档或通过子树间接插入文档之后触发（在 DOMNodeInserted 之后）。")]),t._v(" "),a("li",[t._v("DOMNodeRemovedFromDocument 在一个节点被直接从文档中移除或通过子树间接从文档中移除之前触发（在 DOMNodeRemoved 之后）。")]),t._v(" "),a("li",[t._v("DOMAttrModified 在属性被修改之后触发。")]),t._v(" "),a("li",[t._v("DOMCharacterDataModified 在文本节点的值发生改变时触发。")])]),t._v(" "),a("h3",{attrs:{id:"html5-事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html5-事件"}},[t._v("#")]),t._v(" HTML5 事件")]),t._v(" "),a("ul",[a("li",[t._v("contextmenu 右键打开菜单栏")]),t._v(" "),a("li",[t._v("beforeunload 页面卸载前")]),t._v(" "),a("li",[t._v("DOMContentLoaded 形成完整 DOM 树时触发")]),t._v(" "),a("li",[t._v("readystatechange 页面加载相关")]),t._v(" "),a("li",[t._v("pageshow pagehide 前进后退事件")]),t._v(" "),a("li",[t._v("hashcahnge 事件")])]),t._v(" "),a("h3",{attrs:{id:"设备事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设备事件"}},[t._v("#")]),t._v(" 设备事件")]),t._v(" "),a("ul",[a("li",[t._v("orientationchange 切换横竖屏")]),t._v(" "),a("li",[t._v("deviceorientation 设备在空间中朝向哪里")]),t._v(" "),a("li",[t._v("devicemotion 检测每个方向的加速度")])]),t._v(" "),a("h3",{attrs:{id:"触摸与手势事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#触摸与手势事件"}},[t._v("#")]),t._v(" 触摸与手势事件")]),t._v(" "),a("ul",[a("li",[t._v("touchstart")]),t._v(" "),a("li",[t._v("touchmove")]),t._v(" "),a("li",[t._v("touchend")]),t._v(" "),a("li",[t._v("touchcancel")])]),t._v(" "),a("p",[t._v("手势")]),t._v(" "),a("ul",[a("li",[t._v("gesturestart 当一个手指已经在屏幕上而另一个手指又触摸屏幕时触发")]),t._v(" "),a("li",[t._v("gesturechange 当触摸屏幕的任何一个手指的位置发生变化时触发")]),t._v(" "),a("li",[t._v("gestureend 任何一个手指从屏幕上移开时触发")])]),t._v(" "),a("p",[t._v("当触摸屏幕上的元素时，会依次执行如下事件：")]),t._v(" "),a("ul",[a("li",[t._v("touchstart")]),t._v(" "),a("li",[t._v("mouseover")]),t._v(" "),a("li",[t._v("mousemove")]),t._v(" "),a("li",[t._v("mousedown")]),t._v(" "),a("li",[t._v("mouseup")]),t._v(" "),a("li",[t._v("click")]),t._v(" "),a("li",[t._v("touchend")])]),t._v(" "),a("h2",{attrs:{id:"模拟事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模拟事件"}},[t._v("#")]),t._v(" 模拟事件")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" event "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ul",[a("li",[t._v("event 就是被创建的 Event 对象.")]),t._v(" "),a("li",[t._v("type 是一个字符串，表示要创建的事件类型。事件类型可能包括"),a("code",[t._v("UIEvents")]),t._v(", "),a("code",[t._v("MouseEvents")]),t._v(", "),a("code",[t._v("MutationEvents")]),t._v(", 或者 "),a("code",[t._v("HTMLEvents")]),t._v("(一般为 DOM 变动事件)。")]),t._v(" "),a("li",[t._v("dom.dispatchEvent() 触发事件。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);