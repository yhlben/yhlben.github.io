(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{175:function(e,a,t){"use strict";t.r(a);var n=t(0),s=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"webpack-整体流程分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-整体流程分析","aria-hidden":"true"}},[e._v("#")]),e._v(" Webpack 整体流程分析")]),e._v(" "),t("p",[e._v("让我们从 entry 开始，阅读 webpack 源码吧。")]),e._v(" "),t("h2",{attrs:{id:"webpack-运行流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-运行流程","aria-hidden":"true"}},[e._v("#")]),e._v(" webpack 运行流程")]),e._v(" "),t("p",[e._v("想想当我们执行 npm run build 后，webpack 是怎样运行的？")]),e._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// package.json文件")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"build"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"webpack"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[e._v("先来个粗略的流程：")]),e._v(" "),t("p",[e._v("1、先检查是否有安装 webpack-cli，如果没安装，则提示安装。")]),e._v(" "),t("p",[e._v("2、引入 webpack-cli 包，解析参数后，调用 new webpack()。")]),e._v(" "),t("p",[e._v("3、创建编译对象 new Compiler()，并生成插件实例。")]),e._v(" "),t("p",[e._v("4、WebpackOptionsApply 方法用来解析参数，根据参数，初始化默认的插件 Plugins。")]),e._v(" "),t("p",[e._v("5、解析入口文件 SingleEntryPlugin ，并调用 doBuild 方法执行 loader。")]),e._v(" "),t("p",[e._v("6、执行完 loader 之后，调用 acorn.parse 生成 AST 依赖树，搜集模块的依赖。")]),e._v(" "),t("p",[e._v("7、最后调用 compilation.seal 进入 render 阶段，根据之前收集的依赖，决定生成多少文件，每个文件的内容是什么。")]),e._v(" "),t("h2",{attrs:{id:"webpack-常见核心概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-常见核心概念","aria-hidden":"true"}},[e._v("#")]),e._v(" webpack 常见核心概念")]),e._v(" "),t("p",[e._v("1、"),t("code",[e._v("Compiler")]),e._v("。 webpack 的运行入口，compiler 对象代表了完整的 webpack 环境配置。这个对象在启动 webpack 时被一次性建立，并配置好所有可操作的设置，\n包括 options，loader 和 plugin。当在 webpack 环境中应用一个插件时，插件将收到此 compiler 对象的引用，可以使用它来访问 webpack 的主环境。")]),e._v(" "),t("p",[e._v("2、"),t("code",[e._v("Compilation")]),e._v("。 对象代表了一次资源的构建，当运行 webpack 开发环境中间件时，每当检测到一个文件的变化，就会创建一个新的 compilation，从而生成一组\n新的编译资源。一个 compilation 对象表现了当前的模块资源、编译生成资源、变换的文件、以及被跟踪依赖的状态信息。compilation 也提供了很多关键步骤的\n回调，以供插件在自定义处理时选择使用。")]),e._v(" "),t("p",[e._v("3、"),t("code",[e._v("Module")]),e._v("。用于表示代码模块的基础类，关于代码模块的所有信息都会存在 module 实例中，例如 dependencies "),t("code",[e._v("记录代码模块的依赖")]),e._v("等。")]),e._v(" "),t("p",[e._v("创建一个 module 对象，主要操作：")]),e._v(" "),t("ul",[t("li",[e._v("搜集所有依赖的 module")]),e._v(" "),t("li",[e._v("执行对应的 loader")])]),e._v(" "),t("p",[e._v("4、"),t("code",[e._v("Chunk")]),e._v("。一个 Chunk 是由一个或多个 Module 生成。一般根据入口文件生成 Chunk，然后把入口文件所依赖文件的 Module 集合加入到 Chunk 中。")]),e._v(" "),t("p",[e._v("生成 Chunk 的两种方式：")]),e._v(" "),t("ul",[t("li",[e._v("入口文件模块")]),e._v(" "),t("li",[e._v("动态引入的模块")])]),e._v(" "),t("p",[e._v("5、"),t("code",[e._v("Parser")]),e._v("。基于 acorn 来分析 ast 语法树，解析出代码模块的依赖。")]),e._v(" "),t("p",[e._v("6、"),t("code",[e._v("Dependency")]),e._v("，解析时用于保存代码模块对应的依赖使用的对象。module 实例的 build 方法，在执行完对应的 loader 时，处理完模块自身的转换后，继续调用 parser 实例来解析自身依赖的模块，解析后的结果存放在 module.denpendencies 中，首先保存的是依赖的路径，后续会经由 compilation.processModuleDependencies 方法，再来处理各个依赖模块，递归的去遍历整个依赖。")]),e._v(" "),t("p",[e._v("7、"),t("code",[e._v("Template")]),e._v("。生成最终代码要使用到的代码模块，相当于是根据 modules 创建一个自执行函数来执行所有 modules。")]),e._v(" "),t("h2",{attrs:{id:"打包流程分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打包流程分析","aria-hidden":"true"}},[e._v("#")]),e._v(" 打包流程分析")]),e._v(" "),t("ul",[t("li",[e._v("1、启动配置，读取与合并参数加载 plugin 实例化 Compiler。")]),e._v(" "),t("li",[e._v("2、调用 compiler.cun 创建 Compilation，代表依次资源的构建。")]),e._v(" "),t("li",[e._v("3、Compilation 对象也提供了很多关键步骤的钩子函数，并生成一次 Chunk。")]),e._v(" "),t("li",[e._v("4、Compilation.buildModule 主要执行 loader，编译掉不认识的代码。")]),e._v(" "),t("li",[e._v("5、使用 Parser 从 Chunk 开始解析依赖，使用 Module 和 Dependency 管理代码模块相互关系。")]),e._v(" "),t("li",[e._v("6、使用 Template 基于 Chunk 的数据生成结果代码。")])]),e._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),t("p",[e._v("1、整个流程相当于一个流水线，线上布置了有很多触发钩子，当执行到某个钩子时，会执行对应的插件。")]),e._v(" "),t("p",[e._v("2、Compiler / Compilation 都继承自 Tabable")])])])}],!1,null,null,null);a.default=s.exports}}]);