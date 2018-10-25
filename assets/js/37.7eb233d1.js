(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{164:function(t,e,r){"use strict";r.r(e);var s=r(0),a=Object(s.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),r("p",[t._v("总结一下常用的 React 知识。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),r("p",[t._v("React 组件的构造函数将会在装配之前被调用。")]),t._v(" "),r("p",[t._v("构造函数是初始化状态的合适位置，可以基于属性来初始化状态。")]),t._v(" "),t._m(4),t._v(" "),r("p",[t._v("组件实例化后和接受新属性时将会调用 getDerivedStateFromProps。它应该返回一个对象来更新状态，或者返回 null 来表明新属性不需要更新任何状态。")]),t._v(" "),r("p",[t._v("getDerivedStateFromProps 只存在一个目的。它使组件能够根据 props 的更改来更新其内部状态。")]),t._v(" "),t._m(5),t._v(" "),r("p",[t._v("将虚拟 DOM 渲染成真实的 DOM。")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),r("p",[t._v("同上。")]),t._v(" "),t._m(11),t._v(" "),r("p",[t._v("此方法仅作为性能优化存在。不要依赖它来“防止”渲染，因为这可能导致错误。考虑使用内置 PureComponent 而不是 shouldComponentUpdate()手写。")]),t._v(" "),t._m(12),t._v(" "),r("p",[t._v("将虚拟 DOM 渲染成真实的 DOM。")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),r("p",[t._v("componentDidUpdate(prevProps, prevState, snapshot)")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),r("p",[t._v("这里发请求是异步的，在 render 之前还是不会返回数据。")]),t._v(" "),r("p",[t._v("componentWillMount 在 ssr 中会被调用 2 次。")]),t._v(" "),t._m(23),t._v(" "),r("p",[t._v("UNSAFE_componentWillReceiveProps(nextProps)")]),t._v(" "),r("p",[t._v("使用不当可能体现为组件陷入渲染死循环，他会一直接受新的外部状态导致自身一直在重渲染。导致被多次调用，循环调用。")]),t._v(" "),r("p",[t._v("例如：在 componentWillReceiveProps 中 setState 引起父组件渲染。")]),t._v(" "),t._m(24),t._v(" "),r("p",[t._v("更新前读取当前某个 DOM 元素的状态，用 getSnapshotBeforeUpdate 代替。")]),t._v(" "),r("p",[t._v("不能 setState，也会导致循环渲染问题。")]),t._v(" "),r("p",[r("a",{attrs:{href:"http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/",target:"_blank",rel:"noopener noreferrer"}},[t._v("生命周期图"),r("OutboundLink")],1)]),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),r("p",[t._v("我们通过使 react 变成一种单一数据源的状态来结合二者。React 负责渲染表单的组件仍然控制用户后续输入时所发生的变化。相应的，其值由 React 控制的输入表单元素称为“受控组件”。")]),t._v(" "),r("p",[t._v("使用”受控组件”,每个状态的改变都有一个与之相关的处理函数。这样就可以直接修改或验证用户输入。")]),t._v(" "),t._m(27),t._v(" "),r("p",[t._v("将 setState() 认为是一次请求而不是一次立即执行更新组件的命令。为了更为可观的性能，React 可能会推迟它，稍后会一次性更新这些组件。React 不会保证在 setState 之后，能够立刻拿到改变的结果。")]),t._v(" "),r("p",[t._v("1、在 setState 中调用了 enqueueSetState 方法将传入的 state 放到一个队列中")]),t._v(" "),r("p",[t._v("2、enqueueSetState 中先是找到需渲染组件并将新的 state 并入该组件的需更新的 state 队列中，接下来调用了 enqueueUpdate 方法")]),t._v(" "),r("p",[t._v("3、isBatchingUpdates 标识是否在一个更新组件的事务流中。")]),t._v(" "),r("p",[t._v("3.1、如果没有在事务流中，调用 batchedUpdates 方法进入更新流程，进入流程后，会将 isBatchingUpdates 设置为 true。")]),t._v(" "),r("p",[t._v("3.2、否则，将需更新的组件放入 dirtyComponents 中。")]),t._v(" "),t._m(28),t._v(" "),r("p",[t._v("1、当处于生命周期 render 之后的生命周期中。")]),t._v(" "),r("p",[t._v("2、合成事件中（jsx 中的事件都是合成事件）。")]),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),r("p",[t._v("1、使用 shouldComponentUpdate 和 Immutable 组合控制合适的时间渲染。PureComponent")]),t._v(" "),r("p",[t._v("2、render 里面尽量减少新建变量和 bind 函数，传递参数是尽量减少传递参数的数量。")]),t._v(" "),r("p",[t._v("3、多个 react 组件性能优化，key 的优化")]),t._v(" "),r("p",[t._v("4、redux 性能优化：reselect（数据获取时优化）。")]),t._v(" "),t._m(31),t._v(" "),r("p",[t._v("1、如果在 Component 中需要在某个时间点改变，那么应该使用 state，否则应该使用 prop。")]),t._v(" "),r("p",[t._v("2、state 是组件在内部管理自己的状态。")]),t._v(" "),r("p",[t._v("3、prop 只能是父组件传入，或者是初始化时自定义，一旦定义，不能改变。")]),t._v(" "),r("p",[t._v("无状态组件： 只有 prop，没有 state。除了这个 render()功能之外没有多少事情发生，所有的逻辑都围绕着 prop。")]),t._v(" "),t._m(32)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"react-常用知识点总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react-常用知识点总结","aria-hidden":"true"}},[this._v("#")]),this._v(" React 常用知识点总结")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"react-生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react-生命周期","aria-hidden":"true"}},[this._v("#")]),this._v(" React 生命周期")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"创建时"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建时","aria-hidden":"true"}},[this._v("#")]),this._v(" 创建时")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"constructor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#constructor","aria-hidden":"true"}},[this._v("#")]),this._v(" constructor")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"static-getderivedstatefromprops"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#static-getderivedstatefromprops","aria-hidden":"true"}},[this._v("#")]),this._v(" static getDerivedStateFromProps")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"render"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#render","aria-hidden":"true"}},[this._v("#")]),this._v(" render")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"componentdidmount"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#componentdidmount","aria-hidden":"true"}},[this._v("#")]),this._v(" componentDidMount")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在组件被装配后立即调用。初始化使得 DOM 节点应该进行到这里。"),e("code",[this._v("若你需要从远端加载数据，这是一个适合实现网络请求的地方。")]),this._v("在该方法里设置状态将会触发重渲。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("您可以调用 "),e("code",[this._v("setState")]),this._v("立即在 "),e("code",[this._v("componentDidMount")]),this._v("。它将触发额外的渲染，但它将在浏览器更新屏幕之前发生。这保证即使 "),e("code",[this._v("render")]),this._v("在这种情况下将被调用两次，用户也不会看到中间状态。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"更新时"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新时","aria-hidden":"true"}},[this._v("#")]),this._v(" 更新时")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"getderivedstatefromprops"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getderivedstatefromprops","aria-hidden":"true"}},[this._v("#")]),this._v(" getDerivedStateFromProps")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"shouldcomponentupdate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shouldcomponentupdate","aria-hidden":"true"}},[this._v("#")]),this._v(" shouldComponentUpdate")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"render。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#render。","aria-hidden":"true"}},[this._v("#")]),this._v(" render。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"getsnapshotbeforeupdate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getsnapshotbeforeupdate","aria-hidden":"true"}},[this._v("#")]),this._v(" getSnapshotBeforeUpdate")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("触发时间: update 发生的时候，在 render 之后，在组件 dom 渲染之前。")]),this._v(" "),e("li",[this._v("返回一个值，作为 componentDidUpdate 的第三个参数。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"componentdidupdate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#componentdidupdate","aria-hidden":"true"}},[this._v("#")]),this._v(" componentDidUpdate")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("将此作为在更新组件时对 DOM 进行操作的机会。只要您将当前道具与之前的道具进行比较（例如，如果道具未更改，则可能不需要网络请求），"),e("code",[this._v("这也是进行网络请求的好地方。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"卸载时"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#卸载时","aria-hidden":"true"}},[this._v("#")]),this._v(" 卸载时")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"componentwillunmount"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#componentwillunmount","aria-hidden":"true"}},[this._v("#")]),this._v(" componentWillUnmount")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("componentWillUnmount")]),this._v("在卸载和销毁组件之前立即调用。在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求或清除在其中创建的任何订阅。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"弃用生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#弃用生命周期","aria-hidden":"true"}},[this._v("#")]),this._v(" 弃用生命周期")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"componentwillmount"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#componentwillmount","aria-hidden":"true"}},[this._v("#")]),this._v(" componentWillMount")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("componentWillMount")]),this._v(" 是在 "),e("code",[this._v("render")]),this._v(" 之前执行，所以在这个方法中 setState 不会发生重新渲染(re-render)。通常情况下，推荐用 constructor()方法代替。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"componentwillreceiveprops"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#componentwillreceiveprops","aria-hidden":"true"}},[this._v("#")]),this._v(" componentWillReceiveProps")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"componentwillupdate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#componentwillupdate","aria-hidden":"true"}},[this._v("#")]),this._v(" componentWillUpdate")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"可控组件和不可控组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可控组件和不可控组件","aria-hidden":"true"}},[this._v("#")]),this._v(" 可控组件和不可控组件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在 HTML 当中，像"),e("code",[this._v("<input>")]),this._v(","),e("code",[this._v("<textarea>")]),this._v(", 和 "),e("code",[this._v("<select>")]),this._v("这类表单元素会维持自身状态，并根据用户输入进行更新。但在 React 中，可变的状态通常保存在组件的状态属性中，并且只能用 setState() 方法进行更新。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"react-异步渲染"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react-异步渲染","aria-hidden":"true"}},[this._v("#")]),this._v(" React 异步渲染")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"什么时候会标识-isbatchingupdates-为-true？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么时候会标识-isbatchingupdates-为-true？","aria-hidden":"true"}},[this._v("#")]),this._v(" 什么时候会标识 isBatchingUpdates 为 true？")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("提示")]),this._v(" "),e("p",[this._v("所以在 setTimeout，源生事件中的 setState 会同步渲染。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"react-怎样提高性能？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react-怎样提高性能？","aria-hidden":"true"}},[this._v("#")]),this._v(" react 怎样提高性能？")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"props-和-state-分别在什么时候用？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#props-和-state-分别在什么时候用？","aria-hidden":"true"}},[this._v("#")]),this._v(" props 和 state 分别在什么时候用？")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("纯静态展示,可读性更好，并能大大减少代码量")]),this._v(" "),e("li",[this._v("省去了多余的生命周期，提升了整体的渲染性能")]),this._v(" "),e("li",[this._v("可复用性强")])])}],!1,null,null,null);a.options.__file="react.md";e.default=a.exports}}]);