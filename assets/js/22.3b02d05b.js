(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{202:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"es5-继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es5-继承","aria-hidden":"true"}},[t._v("#")]),t._v(" ES5 继承")]),t._v(" "),a("h2",{attrs:{id:"原型链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型链","aria-hidden":"true"}},[t._v("#")]),t._v(" 原型链")]),t._v(" "),a("p",[t._v("重写原型对象，代之以一个数新类型实例。")]),t._v(" "),a("blockquote",[a("p",[t._v("问题：引用类型所有实例共享，无法向超类型传参，会影响其他子元素。")])]),t._v(" "),a("h2",{attrs:{id:"借用构造函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#借用构造函数","aria-hidden":"true"}},[t._v("#")]),t._v(" 借用构造函数")]),t._v(" "),a("p",[t._v("子类型构造函数内部调用超类型构造函数，call，apply。")]),t._v(" "),a("blockquote",[a("p",[t._v("问题：函数复用无从谈起")])]),t._v(" "),a("h2",{attrs:{id:"组合继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组合继承","aria-hidden":"true"}},[t._v("#")]),t._v(" 组合继承")]),t._v(" "),a("p",[t._v("使用原型链实现对原型属性和方法的继承，用构造函数类实现对实例属性的继承。")]),t._v(" "),a("blockquote",[a("p",[t._v("缺点：执行 2 次")])]),t._v(" "),a("h2",{attrs:{id:"原型继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型继承","aria-hidden":"true"}},[t._v("#")]),t._v(" 原型继承")]),t._v(" "),a("p",[t._v("Object.create()")]),t._v(" "),a("blockquote",[a("p",[t._v("返回新对象，原型指向传入对象。")])]),t._v(" "),a("h2",{attrs:{id:"寄生式继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#寄生式继承","aria-hidden":"true"}},[t._v("#")]),t._v(" 寄生式继承")]),t._v(" "),a("p",[t._v("在 Object.create()的基础上，增加自定义属性和方法来增强对象。")]),t._v(" "),a("h2",{attrs:{id:"寄生组合式继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#寄生组合式继承","aria-hidden":"true"}},[t._v("#")]),t._v(" 寄生组合式继承")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("inherit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("subType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" superType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" prototype "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("superType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" subType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  subType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SuperType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SubType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  SuperType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("inherit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SubType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SuperType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" instance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SubType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" instance2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SubType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("456")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("instance2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br")])])])}],!1,null,null,null);e.options.__file="js-inherit.md";s.default=e.exports}}]);