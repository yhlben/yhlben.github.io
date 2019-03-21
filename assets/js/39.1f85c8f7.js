(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{196:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("使用 Vue 已经很长时间了，在这里写一下总结。")]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("来一张源码截图：")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("我们再来看一下，core 文件夹下的目录：")]),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("结论:Vue.js 的组成是由 core + 对应的“平台”补充代码构成。")]),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("双向绑定图：")]),t._v(" "),t._m(6),t._v(" "),s("p",[t._v("图中可以看到，双向数据绑定主要用到一下几点：")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("ES5 中的对象方法，可以定义对象属性，这里主要用于自定义 get 和 set 方法。")]),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("观察者模式是软件设计模式的一种。在此种模式中，一个目标对象管理所有相依于它的观察者对象，并且在它本身的状态改变时主动发出通知。")]),t._v(" "),s("p",[t._v("Observer 会观察两种类型的数据，Object 与 Array。")]),t._v(" "),s("p",[t._v("对于 Array 类型的数据，由于 JavaScript 的限制， Vue 不能检测变化,会先重写操作数组 的原型方法，重写后能达到以下目的：")]),t._v(" "),t._m(10),t._v(" "),s("p",[t._v("重写完原型方法后，遍历拿到数组中的每个数据 使用 observer 观察它。")]),t._v(" "),s("p",[t._v("而对于 Object 类型的数据，则遍历它的每个 key，使用 defineProperty 设置 getter 和 setter，当触发 getter 的时候，observer 则开始收集依赖，而触发 setter 的时候，observe 则触发 notify。")]),t._v(" "),t._m(11),t._v(" "),s("p",[t._v("Watcher 是将模板和 Observer 对象结合在一起的纽带。Watcher 是订阅者模式中的订阅者。Watcher 的两个参数: expOrFn 最终会被转换为 getter 函数， cb 是更新时执行的回调。依赖收集的入口就是 get 函数。")]),t._v(" "),t._m(12),t._v(" "),s("p",[t._v("这个方法是在响应式的过程中调用的，用户修改数据触发 setter 函数，然后调用 dep.notify 去通知订阅者更新视图。")]),t._v(" "),t._m(13),t._v(" "),s("p",[t._v("vue 内置了这么多的指令， 这些指令都会抛出两个接口 bind 和 update，这两个接口的作用是，编译的最后一步是执行所有用到的指令的 bind 方法，而 update 方法则是当 watcher 触发 update 时， Directive 会触发指令的 update 方法。")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),s("p",[t._v("1、先创建 Vue 实例，创建双向数据绑定，监听 data 中数据的 get，set 方法，建立与 Dep 的对应关系。")]),t._v(" "),s("p",[t._v("2、编译模板，在有使用 v-text 等双向数据的地方，new Watcher，建立 dom 和数据的对应关系。")]),t._v(" "),s("p",[t._v("3、在 new Watcher 中，进行依赖收集，把使用到的 data 记录到 Dep 中。")]),t._v(" "),s("p",[t._v("4、每当数据变更，便会触发 set 方法，然后调用 Dep.notify 通知使用到 data 的 watcher，去更新 dom。")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),s("p",[t._v("Vue 生命周期图")]),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),s("p",[t._v("当一个节点是纯静态时，会被 vue 打上标识，模块更新时，这一部分不会进行 domdiff 比较，提高性能。")]),t._v(" "),t._m(21),t._v(" "),t._m(22),s("p",[t._v("当一个节点中的数据是一个静态数据，也会被标记成静态节点，加快渲染。")]),t._v(" "),t._m(23),t._v(" "),t._m(24),s("p",[t._v("如代码所示，静态的循环也会在运行时被优化。")]),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/reactivity.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入响应式原理"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/yhlben/mini-vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("mini-vue"),s("OutboundLink")],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"vue-使用总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-使用总结","aria-hidden":"true"}},[this._v("#")]),this._v(" Vue 使用总结")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"vue-目录结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-目录结构","aria-hidden":"true"}},[this._v("#")]),this._v(" Vue 目录结构")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/blog/vue-dir.png",alt:"vue 目录结构"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("compiler 目录是编译模板")]),t._v(" "),s("li",[t._v("core 目录是 vue 的核心")]),t._v(" "),s("li",[t._v("platforms 目录是针对核心模块的‘平台’模块，目前有 web，weex")]),t._v(" "),s("li",[t._v("server 目录是处理服务器端渲染")]),t._v(" "),s("li",[t._v("sfc 目录是处理单文件 .vue")]),t._v(" "),s("li",[t._v("shared 目录提供全局用到的工具函数")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/blog/vue-platforms.png",alt:"vue 目录结构"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"双向数据绑定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#双向数据绑定","aria-hidden":"true"}},[this._v("#")]),this._v(" 双向数据绑定")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/blog/vue-mvvm.png",alt:"双向绑定图"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("1.Object.defineProperty")]),t._v(" "),s("li",[t._v("2.Observer")]),t._v(" "),s("li",[t._v("3.Watcher")]),t._v(" "),s("li",[t._v("4.Dep")]),t._v(" "),s("li",[t._v("5.Directive")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"object-defineproperty"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#object-defineproperty","aria-hidden":"true"}},[this._v("#")]),this._v(" Object.defineProperty")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"observer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#observer","aria-hidden":"true"}},[this._v("#")]),this._v(" Observer")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("当数组发生变化时，触发 notify。")]),this._v(" "),e("li",[this._v("如果是 push，unshift，splice 这些添加新元素的操作，则会使用 observer 观察新添加的数据。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"watcher"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#watcher","aria-hidden":"true"}},[this._v("#")]),this._v(" Watcher")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"dep"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dep","aria-hidden":"true"}},[this._v("#")]),this._v(" Dep")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"directive"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#directive","aria-hidden":"true"}},[this._v("#")]),this._v(" Directive")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/blog/vue-flow.png",alt:"vue 流程图"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"vue-运行流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-运行流程","aria-hidden":"true"}},[this._v("#")]),this._v(" Vue 运行流程")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("vue 异步更新")]),t._v(" "),s("p",[t._v("Vue 异步执行 DOM 更新。只要观察到数据变化，Vue 将开启一个异步队列，并缓存在同一事件循环中发生的所有数据改变。")]),t._v(" "),s("p",[t._v("Vue 在内部尝试对异步队列使用原生的 Promise.then 和 MessageChannel（基于 postMessage），如果执行环境不支持，会采用 setTimeout(fn, 0) 代替。")]),t._v(" "),s("p",[t._v("如果同一个 watcher 被多次触发，只会被推入到队列中一次（这在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作上非常重要）。")]),t._v(" "),s("p",[t._v("然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。")]),t._v(" "),s("p",[t._v("修改数据 -> 触发 set-> 执行同步代码，如果有数据更新，则开启异步队列。")]),t._v(" "),s("p",[t._v("-> 异步队列中进行去重操作，并注入 nextTick 回调函数。")]),t._v(" "),s("p",[t._v("-> 异步操作执行完毕，即 DOM 成功渲染，触发 nextTick 回调函数。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生命周期","aria-hidden":"true"}},[this._v("#")]),this._v(" 生命周期")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://cn.vuejs.org/images/lifecycle.png",alt:"vue 生命周期"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"vue-运行时优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-运行时优化","aria-hidden":"true"}},[this._v("#")]),this._v(" Vue 运行时优化")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"标记静态节点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标记静态节点","aria-hidden":"true"}},[this._v("#")]),this._v(" 标记静态节点")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"标记静态的变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标记静态的变量","aria-hidden":"true"}},[this._v("#")]),this._v(" 标记静态的变量")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-vue line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[t._v("const message = 123;\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{message}}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"优化静态循环"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优化静态循环","aria-hidden":"true"}},[this._v("#")]),this._v(" 优化静态循环")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-vue line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-for")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("i in 10"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{i}}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"以后的优化方向"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#以后的优化方向","aria-hidden":"true"}},[this._v("#")]),this._v(" 以后的优化方向")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("编译应用程序中没有用到的部分 vue 组件。")])]),this._v(" "),e("li",[e("p",[this._v("生成原子 css，让 css 更高效复用。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"相关链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相关链接","aria-hidden":"true"}},[this._v("#")]),this._v(" 相关链接")])}],!1,null,null,null);e.default=r.exports}}]);