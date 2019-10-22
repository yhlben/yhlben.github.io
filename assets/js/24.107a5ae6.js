(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{269:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"css-使用总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-使用总结","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS 使用总结")]),t._v(" "),a("p",[t._v("这里从几个角度来总结一下：")]),t._v(" "),a("ul",[a("li",[t._v("CSS 编写规范")]),t._v(" "),a("li",[t._v("CSS 命名规范")]),t._v(" "),a("li",[t._v("CSS 工作流")]),t._v(" "),a("li",[t._v("CSS 格式化上下文")]),t._v(" "),a("li",[t._v("CSS 特殊技巧")])]),t._v(" "),a("h2",{attrs:{id:"css-编写规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-编写规范","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS 编写规范")]),t._v(" "),a("p",[t._v("CSS 代码可以很自由的书写，但是为了便于维护，提高渲染效率，推荐使用面向对象的思想来编写 CSS 代码。OO CSS 将⻚面可重用元素抽象成一个类，用 Class 加以描述，而与其对应的 HTML 即可看成是此类的一个实例。")]),t._v(" "),a("p",[t._v("主要特点：")]),t._v(" "),a("ul",[a("li",[t._v("结构和皮肤相分离。")]),t._v(" "),a("li",[t._v("容器和内容相分离。")])]),t._v(" "),a("p",[t._v("作用：")]),t._v(" "),a("ul",[a("li",[t._v("加强代码复用以便方便维护。")]),t._v(" "),a("li",[t._v("减小 CSS 体积。")]),t._v(" "),a("li",[t._v("提升渲染效率。")]),t._v(" "),a("li",[t._v("组件库思想、栅格布局可共用、减少选择器、方便扩展。")])]),t._v(" "),a("p",[t._v("注意事项：")]),t._v(" "),a("ul",[a("li",[t._v("不要直接定义子节点，应把共性声明放到父类。")]),t._v(" "),a("li",[t._v("抽象出可重用的元素，建好组件库，在组件库内寻找可用的元素组装⻚面。")]),t._v(" "),a("li",[t._v("往你想要扩展的对象本身增加 class 而不是他的父节点。")]),t._v(" "),a("li",[t._v("对象应保持独立性。")]),t._v(" "),a("li",[t._v("避免使用 ID 选择器，权重太高，无法重用。")]),t._v(" "),a("li",[t._v("避免位置相关的样式。")]),t._v(" "),a("li",[t._v("保证选择器相同的权重。")]),t._v(" "),a("li",[t._v("类名简短清晰语义化 OOCSS 的名字并不影响 HTML 语义化。")])]),t._v(" "),a("p",[t._v("使用案例：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 在一个 class 中写成公用的 css 代码，以便进行复用 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".size1of4")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 25%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".bgBlue")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".solidGray")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid #ccc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".mts")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".mrm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-right")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".mbm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".mlm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("size1of4 bgBlue solidGray mts mlm mrm mbm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("xxx"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br")])]),a("h2",{attrs:{id:"css-命名规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-命名规范","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS 命名规范")]),t._v(" "),a("p",[t._v("CSS 有语义化的命名约定和统一的命名规范，最常用的是 BEM 规范。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://en.bem.info/",target:"_blank",rel:"noopener noreferrer"}},[t._v("BEM"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("block 代表了更高级别的抽象或组件。")]),t._v(" "),a("li",[t._v("block-name 长名称中使用连字符分隔单词。")]),t._v(" "),a("li",[t._v("block__element 代表.block 的后代，用于形成一个完整的.block 的整体。")]),t._v(" "),a("li",[t._v("block--modifier 代表.block 的不同状态或不同版本。")])]),t._v(" "),a("p",[t._v("还有以下几点规范，了解即可。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://smacss.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("SMACSS"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://suitcss.github.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("SUIT"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://acss.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Atomic"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"css-工作流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-工作流","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS 工作流")]),t._v(" "),a("p",[t._v("古老的 CSS 无法定义变量，无法进行运算，需要手写很多浏览器兼容前缀，写出来的代码可能会占很大篇幅。CSS 预处理器和后处理器可以帮助我们解决此类问题。")]),t._v(" "),a("h3",{attrs:{id:"css-预处理器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-预处理器","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS 预处理器")]),t._v(" "),a("p",[t._v("预处理器可以让我们使用变量，继承，嵌套规则，运算，函数，scope 等编程的方式书写 css。"),a("strong",[t._v("一句话总结：增强 css 语法")]),t._v("。")]),t._v(" "),a("p",[t._v("我们使用 sass，less，stylus 等语法编写的类 css 代码，然后经过编译，最后转换为真正的 css 代码。")]),t._v(" "),a("h3",{attrs:{id:"css-后处理器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-后处理器","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS 后处理器")]),t._v(" "),a("p",[t._v("后处理器可以将我们的 css 进行压缩，美化，以及加上浏览器前缀，减少我们的开发工作量。"),a("strong",[t._v("一句话总结：增强 css 的兼容性")]),t._v("。")]),t._v(" "),a("p",[t._v("我们使用 postcss，将 css 进行美化，压缩，加前缀等操作。对 css 加入一些扩展。")]),t._v(" "),a("h2",{attrs:{id:"css-格式化上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-格式化上下文","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS 格式化上下文")]),t._v(" "),a("p",[t._v("格式化上下文（Formatting Context）：定义了页面中的一块渲染区域，并且有一套渲染规则，决定了其子元素将如何定位，以及和其他元素的关系和相互作用。常见的格式化上下文有 BFC、IFC、FFC、GFC。")]),t._v(" "),a("h3",{attrs:{id:"bfc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bfc","aria-hidden":"true"}},[t._v("#")]),t._v(" BFC")]),t._v(" "),a("p",[t._v("BFC(Block Formatting Contexts)：块级格式化上下文，以下几种元素会生成 BFC：")]),t._v(" "),a("ul",[a("li",[t._v("float 的值不是 none。")]),t._v(" "),a("li",[t._v("position 的值不是 static 或者 relative。")]),t._v(" "),a("li",[t._v("display 的值是 inline-block、table-cell、flex、table-caption 或者 inline-flex。")]),t._v(" "),a("li",[t._v("overflow 的值不是 visible。")])]),t._v(" "),a("p",[t._v("BFC 的特点：")]),t._v(" "),a("ul",[a("li",[t._v("在 BFC 中，内部的 Box 会在垂直方向，一个接一个地放置。")]),t._v(" "),a("li",[t._v("Box 垂直方向的距离由 margin 决定，同一个 BFC 下相邻两个 Box 的 margin 会发生重叠。")]),t._v(" "),a("li",[t._v("在 BFC 中，每个元素的 margin box 的左边， 与包含块 border box 的左边相接触。即使存在浮动也是如此。")]),t._v(" "),a("li",[t._v("BFC 区域不会与 float Box 重叠（可阻止因浮动元素引发的文字环绕现象）。")]),t._v(" "),a("li",[t._v("计算 BFC 高度时，浮动元素也参与计算（BFC 会确切包含浮动的子元素，即清除浮动）。")])]),t._v(" "),a("h3",{attrs:{id:"ifc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ifc","aria-hidden":"true"}},[t._v("#")]),t._v(" IFC")]),t._v(" "),a("p",[t._v("IFC(Inline Formatting Contexts)：内联格式化上下文，以下几种元素会生成 BFC：")]),t._v(" "),a("ul",[a("li",[t._v("display 的值是 inline，inline-block，inline-table 的元素。")]),t._v(" "),a("li",[t._v("行内元素。")])]),t._v(" "),a("p",[t._v("IFC 的特点：")]),t._v(" "),a("ul",[a("li",[t._v("水平方向根据 direction 依次布局。")]),t._v(" "),a("li",[t._v("不会在元素前后换行。")]),t._v(" "),a("li",[t._v("受 white-space 属性的影响。")]),t._v(" "),a("li",[t._v("margin/padding 在竖直方向无效，水平方向有效的。")]),t._v(" "),a("li",[t._v("width/height 对非替换行内元素无效，宽度由元素内容决定。")]),t._v(" "),a("li",[t._v("非替换行内元素的行框高由 line-height 决定而替换行内元素的行框高则是由 height，padding，border，margin 决定。")]),t._v(" "),a("li",[t._v("浮动或者绝对定位会转化为 block。")]),t._v(" "),a("li",[t._v("vertical-align 属性生效。")])]),t._v(" "),a("h3",{attrs:{id:"ffc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ffc","aria-hidden":"true"}},[t._v("#")]),t._v(" FFC")]),t._v(" "),a("p",[t._v("FFC(Flex Formatting Contexts)：自适应格式化上下文。display 值为 flex 或者 inline-flex 的元素将会生成自适应容器。")]),t._v(" "),a("h3",{attrs:{id:"gfc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gfc","aria-hidden":"true"}},[t._v("#")]),t._v(" GFC")]),t._v(" "),a("p",[t._v("GFC(GridLayout Formatting Contexts)：网格布局格式化上下文，当为一个元素设置 display 值为 grid 的时候，此元素将会获得一个独立的渲染区域，我们可以通过在网格容器（grid container）上定义网格定义行（grid definition rows）和网格定义列（grid definition columns）属性各在网格项目（grid item）上定义网格行（grid row）和网格列（grid columns）为每一个网格项目（grid item）定义位置和空间。")]),t._v(" "),a("h2",{attrs:{id:"css-特殊技巧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-特殊技巧","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS 特殊技巧")]),t._v(" "),a("p",[t._v("我们可以利用 CSS 技巧创建各种规则和不规则形状的图形，"),a("a",{attrs:{href:"https://cssicon.space",target:"_blank",rel:"noopener noreferrer"}},[t._v("cssicon"),a("OutboundLink")],1),t._v("就使用纯 CSS 实现了一些常用的 icon。")]),t._v(" "),a("p",[t._v("CSS 绘制图形的技巧可以通过以下几种方式实现：")]),t._v(" "),a("ul",[a("li",[t._v("border && border-radius")]),t._v(" "),a("li",[t._v("after && before")]),t._v(" "),a("li",[t._v("box-shadow")]),t._v(" "),a("li",[t._v("linear-gradient radial-gradient")])]),t._v(" "),a("h2",{attrs:{id:"相关链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关链接","aria-hidden":"true"}},[t._v("#")]),t._v(" 相关链接")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.w3cplus.com/css/an-introduction-to-object-oriented-css-oocss.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("面向对象的 CSS"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/weixin_38080573/article/details/79364754",target:"_blank",rel:"noopener noreferrer"}},[t._v("常用布局之 IFC 布局"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000003043991",target:"_blank",rel:"noopener noreferrer"}},[t._v("行内布局"),a("OutboundLink")],1)])])])},[],!1,null,null,null);s.default=r.exports}}]);