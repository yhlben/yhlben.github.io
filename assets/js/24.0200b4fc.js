(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{200:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[s._m(0),s._v(" "),s._m(1),s._v(" "),a("p",[s._v("在 ES6 之前，社区制定了一些模块加载方案，最主要的有 CommonJS 和 AMD 两种。前者用于服务器，后者用于浏览器。")]),s._v(" "),s._m(2),s._v(" "),s._m(3),s._v(" "),s._m(4),s._v(" "),s._m(5),s._v(" "),a("p",[s._v("用于规定模块的对外接口。")]),s._v(" "),s._m(6),s._v(" "),s._m(7),s._m(8),s._v(" "),s._m(9),s._v(" "),a("p",[s._v("用于输入其他模块提供的功能。")]),s._v(" "),s._m(10),s._v(" "),s._m(11),s._m(12),s._v(" "),s._m(13),s._m(14),s._v(" "),a("p",[s._v("用星号（*）指定一个对象，所有输出值都加载在这个对象上面。")]),s._v(" "),s._m(15),s._v(" "),s._m(16),s._m(17),s._v(" "),a("p",[s._v("本质上，export default 就是输出一个叫做 default 的变量或方法。")]),s._v(" "),s._m(18),s._m(19),s._v(" "),a("p",[s._v("动态加载模块，可以在条件运算，表达式中使用。")]),s._v(" "),a("p",[s._v("返回一个 promise 对象。")]),s._v(" "),a("p",[s._v("import() 类似于 node 的 require 方法，区别主要是，前者是异步加载，后者是同步加载。")]),s._v(" "),s._m(20),s._m(21),s._v(" "),a("p",[s._v("1、传统的 script 标签")]),s._v(" "),s._m(22),a("p",[s._v("2、使用浏览器 script 标签加载 module")]),s._v(" "),s._m(23),s._m(24),s._v(" "),s._m(25),s._v(" "),s._m(26),s._v(" "),s._m(27),s._m(28),s._v(" "),s._m(29),s._m(30),s._v(" "),s._m(31),s._v(" "),a("p",[s._v("commonjs 模块循环加载，值输出已执行的部分，还未执行的额部分不会输出。")]),s._v(" "),s._m(32),s._m(33),s._v(" "),s._m(34),s._v(" "),a("p",[s._v("ES6 加载的变量都是动态引用其所在模块的。只要应用存在，代码就能执行。")]),s._v(" "),s._m(35),s._m(36),s._v(" "),a("hr"),s._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("参考资料")]),s._v(" "),a("p",[a("a",{attrs:{href:"http://ES6.ruanyifeng.com/#docs/module",target:"_blank",rel:"noopener noreferrer"}},[s._v("module 语法"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"http://ES6.ruanyifeng.com/#docs/module-loader",target:"_blank",rel:"noopener noreferrer"}},[s._v("module 加载的实现"),a("OutboundLink")],1)])])])},[function(){var s=this.$createElement,t=this._self._c||s;return t("h1",{attrs:{id:"es6-module"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#es6-module","aria-hidden":"true"}},[this._v("#")]),this._v(" ES6 module")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"es6-之前的模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#es6-之前的模块","aria-hidden":"true"}},[this._v("#")]),this._v(" ES6 之前的模块")])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("CommonJS 和 AMD 模块，都只能在运行时确定这些东西。")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"es6-模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#es6-模块","aria-hidden":"true"}},[this._v("#")]),this._v(" ES6 模块")])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("自动采用严格模式。")]),this._v(" "),t("li",[this._v("ES6 可以在编译时完成模块加载。")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"export-模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#export-模块","aria-hidden":"true"}},[this._v("#")]),this._v(" export 模块")])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("export 命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 报错")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 报错")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" m "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 正确")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" m "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 正确")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" m "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 正确")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("export 命令可以出现在模块的任何位置，只要处于模块顶层就可以。如果处于块级作用域，就会报错（违背了静态化初衷）。")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"import-命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#import-命令","aria-hidden":"true"}},[this._v("#")]),this._v(" import 命令")])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[t("p",[this._v("import 命令具有提升效果，会提升到整个模块的头部并首先执行。")])]),this._v(" "),t("li",[t("p",[this._v("本质是 import 命令式编译阶段执行的，在代码运行之前。")])]),this._v(" "),t("li",[t("p",[this._v("由于 import 是静态执行的，不能使用表达式和变量，只有在运行时才能得到结果的语法结构。")])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bcd'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'my_module'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("多次重复执行同一句 import 语句，那么只会执行一次。")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//执行一次")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"my_module"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" b "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"my_module"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 执行一次")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lodash"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lodash"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"模块的整体加载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模块的整体加载","aria-hidden":"true"}},[this._v("#")]),this._v(" 模块的整体加载")])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("整体模块加载所在的对象应该是可以静态分析的，所以不允许运行时改变。")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" xxx "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"my_module"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 报错")]),s._v("\nxxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"export-default-命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#export-default-命令","aria-hidden":"true"}},[this._v("#")]),this._v(" export default 命令")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" MyClass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 相等于")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" MyClass "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"import-方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#import-方法","aria-hidden":"true"}},[this._v("#")]),this._v(" import() 方法")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"my_module"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"模块的加载实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模块的加载实现","aria-hidden":"true"}},[this._v("#")]),this._v(" 模块的加载实现")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 下载完就执行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"application/javascript"')]),s._v(" scr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"foo.js"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 整个页面正常渲染完才会执行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"application/javascript"')]),s._v(" scr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"foo2.js"')]),s._v(" defer"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"module"')]),s._v(" scr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"foo.js"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("代码是在模块作用域之中云进行，而不是在全局作用域中运行。")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"es6-模块和-commonjs-模块的差异"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#es6-模块和-commonjs-模块的差异","aria-hidden":"true"}},[this._v("#")]),this._v(" ES6 模块和 commonjs 模块的差异")])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[t("p",[this._v("commonjs 模块输出的是一个值的复制，ES6 模块输出的是值的引用。")])]),this._v(" "),t("li",[t("p",[this._v("commonjs 模块是运行时加载，ES6 模块是编译时输出接口。")])]),this._v(" "),t("li",[t("p",[this._v("ES6 模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块。")])]),this._v(" "),t("li",[t("p",[this._v("ES6 输入的模块变量知识一个“符号链接”，所以这个变量是只读的，对他重新赋值会报错。")])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"my_module"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 报错")]),s._v("\na"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("porp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"模块加载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模块加载","aria-hidden":"true"}},[this._v("#")]),this._v(" 模块加载")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./foo'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//依次寻找")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("foo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//依次寻找")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("node_modules"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("node_modules"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("foo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("packagejson"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("node_modules"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("foo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//向上一级继续寻找")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("node_modules"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("node_modules"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("node_modules"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//继续向上一级寻找")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("node_modules"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("node_modules"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("node_modules"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"循环加载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#循环加载","aria-hidden":"true"}},[this._v("#")]),this._v(" 循环加载")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h4",{attrs:{id:"commonjs-模块循环加载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commonjs-模块循环加载","aria-hidden":"true"}},[this._v("#")]),this._v(" commonjs 模块循环加载")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// a.js")]),s._v("\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("done "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./b.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"在 a.js 之中，b.done = %j"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("done"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("done "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a.js 执行完毕"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// b.js")]),s._v("\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("done "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./a.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"在 b.js 之中，a.done = %j"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("done"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("done "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"b.js 执行完毕"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 执行a.js")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ul",[a("li",[s._v("执行 a.js。")]),s._v(" "),a("li",[s._v("执行到 a 第二行，加载 b.js。")]),s._v(" "),a("li",[s._v("执行到 b 的第二行，执行 a.js (因为 a.js 还没有执行完，从 exports 属性只能取回已经执行的部分，即：a 中的 exports.done = false;)。")]),s._v(" "),a("li",[s._v("输出 在 b.js 之中，a.done = false。")]),s._v(" "),a("li",[s._v("输出 b.js 执行完毕。")]),s._v(" "),a("li",[s._v("输出 在 a.js 之中，b.done = true。")]),s._v(" "),a("li",[s._v("输出 a.js 执行完毕。")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h4",{attrs:{id:"es6-模块循环加载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#es6-模块循环加载","aria-hidden":"true"}},[this._v("#")]),this._v(" ES6 模块循环加载")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// a.js")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" bar "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./b"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"foo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// b.js")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" foo "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"b.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bar"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ul",[a("li",[s._v("执行 a.js。")]),s._v(" "),a("li",[s._v("执行第一行，引用 b.js。")]),s._v(" "),a("li",[s._v("执行 b.js 第一行，从 a.js 输入了 foo 接口，这时不会去执行 a.js。")]),s._v(" "),a("li",[s._v("输出 b.js。")]),s._v(" "),a("li",[s._v("执行 console.log(foo); 报错，因为 foo 没有定义。")])])}],!1,null,null,null);e.options.__file="js-module.md";t.default=e.exports}}]);