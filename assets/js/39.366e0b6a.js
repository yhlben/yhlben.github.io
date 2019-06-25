(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{234:function(t,e,a){"use strict";a.r(e);var r=a(0),v=Object(r.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"react-使用总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-使用总结","aria-hidden":"true"}},[t._v("#")]),t._v(" React 使用总结")]),t._v(" "),a("p",[t._v("聊聊当前对 React 的理解。")]),t._v(" "),a("h2",{attrs:{id:"从上个时代说起"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从上个时代说起","aria-hidden":"true"}},[t._v("#")]),t._v(" 从上个时代说起")]),t._v(" "),a("h3",{attrs:{id:"jquery-时代"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jquery-时代","aria-hidden":"true"}},[t._v("#")]),t._v(" Jquery 时代")]),t._v(" "),a("p",[t._v("在 Jquery 主流的时代，我们大概的流程是通过 ajax 获取到后端数据，然后使用 Jquery 生成 DOM 更新到页面中，但是随着业务发展，我们的项目可能会越来越复杂，我们每次请求到数据，或者数据有更改的时候，我们又需要重新组装一次 DOM 结构，然后更新页面，这样我们手动同步 DOM 和数据的成本就越来越高，而且频繁的操作 dom，也使我我们页面的性能慢慢的降低。")]),t._v(" "),a("p",[t._v("痛点："),a("code",[t._v("手动同步 DOM 和数据")]),t._v("，"),a("code",[t._v("频繁地操作 DOM")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"双向数据绑定-mvvm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#双向数据绑定-mvvm","aria-hidden":"true"}},[t._v("#")]),t._v(" 双向数据绑定 MVVM")]),t._v(" "),a("p",[t._v("要"),a("code",[t._v("解决手动同步 DOM 和数据")]),t._v("的问题，这个时候 mvvm 出现了。mvvm 的双向数据绑定可以让我们在数据修改的同时去更新 dom，dom 的更新也可以直接同步到数据的更改，这个特定可以大大降低我们手动去维护 DOM 更新的成本。虽然 React 属于单项数据流，但是我们可以手动实现双向数据绑定。")]),t._v(" "),a("h3",{attrs:{id:"虚拟-dom-dom-diff"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#虚拟-dom-dom-diff","aria-hidden":"true"}},[t._v("#")]),t._v(" 虚拟 DOM && DOM Diff")]),t._v(" "),a("p",[t._v("有了 MVVM 还不够，因为如果每次有数据做了更改，然后我们都全量更新 DOM 结构的话，也没办法解决我们"),a("code",[t._v("频繁操作 DOM")]),t._v(" 结构(降低了页面性能)的问题，为了解决这个问题，React 内部实现了一套虚拟 DOM 结构，也就是用 js 实现的一套 DOM 结构，他的作用是将真实 DOM 在 js 中做一套缓存，每次有数据更改的时候，React 内部先使用算法，也就是鼎鼎有名的 diff 算法对 DOM 结构进行对比，找到那些我们需要新增、更新、删除的 DOM 节点，然后一次性对真实 DOM 进行更新，这样就大大降低了操作 DOM 的次数。")]),t._v(" "),a("p",[t._v("那么 diff 算法是怎么运作的呢？首先，diff 针对类型不同的节点，会直接判定原来节点需要卸载并且用新的节点来装载卸载的节点的位置；针对于节点类型相同的节点，会对比这个节点的所有属性，如果节点的所有属性相同，那么判定这个节点不需要更新，如果节点属性不相同，那么会判定这个节点需要更新，React 会更新并重渲染这个节点。")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("虚拟 DOM 的其他优势")]),t._v(" "),a("p",[t._v("将 虚拟 DOM 作为一个兼容层，让我们还能对接非 Web 端的系统，实现跨端开发。")]),t._v(" "),a("p",[t._v("同样的，通过 虚拟 DOM 我们可以渲染到其他的平台，比如实现 SSR、同构渲染等等。")]),t._v(" "),a("p",[t._v("实现组件的高度抽象化")])]),t._v(" "),a("h3",{attrs:{id:"状态管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#状态管理","aria-hidden":"true"}},[t._v("#")]),t._v(" 状态管理")]),t._v(" "),a("p",[t._v("React 设计之初是主要负责 UI 层的渲染，虽然每个组件有自己的 state，state 表示组件的状态，当状态需要变化的时候，需要使用 setState 更新我们的组件，但是，我们想通过一个组件重渲染它的兄弟组件，我们就需要将组件的状态提升到父组件当中，让父组件的状态来控制这两个组件的重渲染，当我们组件的层次越来越深的时候，状态需要一直往下传，无疑加大了我们代码的复杂度，"),a("code",[t._v("我们需要一个状态管理中心")]),t._v("，来帮我们管理状态 state。")]),t._v(" "),a("h4",{attrs:{id:"redux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redux","aria-hidden":"true"}},[t._v("#")]),t._v(" redux")]),t._v(" "),a("p",[t._v("这个时候，redux 出现了，我们可以将所有的 state 交给 redux 去管理，当我们的某一个 state 有变化的时候，依赖到这个 state 的组件就会进行一次重渲染，这样就解决了我们的我们需要一直把 state 往下传的问题。redux 有 action、reducer 的概念，action 为唯一修改 state 的来源，reducer 为唯一确定 state 如何变化的入口，这使得 redux 的数据流非常规范，同时也暴露出了 redux 代码的复杂，"),a("code",[t._v("本来那么简单的功能，却需要完成那么多的代码")]),t._v("。")]),t._v(" "),a("h4",{attrs:{id:"mobx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mobx","aria-hidden":"true"}},[t._v("#")]),t._v(" mobx")]),t._v(" "),a("p",[t._v("后来，社区就出现了另外一套解决方案，也就是 mobx，它推崇代码简约易懂，只需要定义一个可观测的对象，然后哪个组件使用到这个可观测的对象，并且这个对象的数据有更改，那么这个组件就会重渲染，而且 mobx 内部也做好了是否重渲染组件的生命周期 shouldUpdateComponent，不建议开发者进行更改，这使得我们使用 mobx 开发项目的时候可以简单快速的完成很多功能，连 redux 的作者也推荐使用 mobx 进行项目开发。但是，随着项目的不断变大，mobx 也不断暴露出了它的缺点，就是"),a("code",[t._v("数据流太随意")]),t._v("，出了 bug 之后不好追溯数据的流向，这个缺点正好体现出了 redux 的优点所在，所以"),a("code",[t._v("针对于小项目来说，社区推荐使用 mobx，对大项目推荐使用 redux")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"react-性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-性能优化","aria-hidden":"true"}},[t._v("#")]),t._v(" React 性能优化")]),t._v(" "),a("p",[t._v("我们都知道，React 项目渲染时会分为 2 个阶段。")]),t._v(" "),a("ul",[a("li",[t._v("生成虚拟 DOM。")]),t._v(" "),a("li",[t._v("虚拟 DOM 渲染成真实 DOM。")])]),t._v(" "),a("p",[t._v("其中，虚拟 DOM 渲染成真实 DOM 的过程，这部分是 React 内置的功能，我们不需要再进行优化，所以我们主要探讨一下在生成虚拟 DOM 阶段的优化。")]),t._v(" "),a("p",[t._v("1、避免直接操作 DOM，将与 DOM 操作的事都丢给 React 去做。")]),t._v(" "),a("p",[t._v("2、由于 DOM diff 算法的问题，对于同一层级的组件，建议加上 key 属性，方便 React 进行 DOM diff 时能够保持复用，而不至于直接创建一个新的元素。")]),t._v(" "),a("p",[t._v("3、尽量抽离无状态组件，无状态组件渲染时不需要 new 实例化，可以提高 js 效率；由于无状态组件基于函数式编程思想，同样的属性，必定会渲染出相同的内容，可以起到缓存作用。")]),t._v(" "),a("p",[t._v("4、抽离 render 函数中的变量和方法，避免每一次 render 方法执行都要重新创建一次。例如我们常常使用 bind 函数区绑定 this，应提前到 constructor 中。")]),t._v(" "),a("p",[t._v("5、使用 PureComponent 代替 Component，相当于是用 shouldComponentUpdate 做了一次浅比较，可以优化不必要的渲染，但对于引用类型的属性，应做好 immutable 处理，以免造成组件不会渲染等问题。另外 recompose 库帮我们做了一些更多的比较处理，可以试试。")]),t._v(" "),a("p",[t._v("5、使用 React Hooks 编写高度可复用的函数式组件，编写更少的代码，更精炼的生命周期实现更高的性能。")]),t._v(" "),a("h2",{attrs:{id:"相关链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关链接","aria-hidden":"true"}},[t._v("#")]),t._v(" 相关链接")]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"/blog/library-React-hooks.html"}},[t._v("React hooks")])],1)])])},[],!1,null,null,null);e.default=v.exports}}]);