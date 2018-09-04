(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{170:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"rx-基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rx-基础","aria-hidden":"true"}},[t._v("#")]),t._v(" Rx 基础")]),t._v(" "),a("p",[t._v("基本概念")]),t._v(" "),a("h2",{attrs:{id:"observable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#observable","aria-hidden":"true"}},[t._v("#")]),t._v(" Observable")]),t._v(" "),a("p",[t._v("Observable (可观察对象): 表示一个概念，这个概念是一个可调用的未来值或事件的集合。")]),t._v(" "),a("p",[t._v("Observables 是使用 Rx.Observable.create 或创建操作符创建的，并使用观察者来订阅它，然后执行它并发送 next / error / complete 通知给观察者，而且执行可能会被清理。这四个方面全部编码在 Observables 实例中。")]),t._v(" "),a("p",[t._v("Observable 的核心关注点：")]),t._v(" "),a("ul",[a("li",[t._v("创建 Observables")]),t._v(" "),a("li",[t._v("订阅 Observables")]),t._v(" "),a("li",[t._v("执行 Observables")]),t._v(" "),a("li",[t._v("清理 Observables")])]),t._v(" "),a("h2",{attrs:{id:"observer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#observer","aria-hidden":"true"}},[t._v("#")]),t._v(" Observer")]),t._v(" "),a("p",[t._v("Observer (观察者): 一个回调函数的集合，它知道如何去监听由 Observable 提供的值。")]),t._v(" "),a("p",[t._v("观察者是由 Observable 发送的值的消费者。观察者只是一组回调函数的集合，每个回调函数对应一种 Observable 发送的通知类型：next、error 和 complete 。")]),t._v(" "),a("h2",{attrs:{id:"subscription"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subscription","aria-hidden":"true"}},[t._v("#")]),t._v(" Subscription")]),t._v(" "),a("p",[t._v("Subscription (订阅): 表示 Observable 的执行，主要用于取消 Observable 的执行。")]),t._v(" "),a("p",[t._v("Subscription 是表示可清理资源的对象，通常是 Observable 的执行。Subscription 有一个重要的方法，即 unsubscribe，它不需要任何参数，只是用来清理由 Subscription 占用的资源。")]),t._v(" "),a("h2",{attrs:{id:"operators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#operators","aria-hidden":"true"}},[t._v("#")]),t._v(" Operators")]),t._v(" "),a("p",[t._v("操作符是 Observable 类型上的方法，比如 .map(...)、.filter(...)、.merge(...)，等等。当操作符被调用时，它们不会改变已经存在的 Observable 实例。相反，它们返回一个新的 Observable ，它的 subscription 逻辑基于第一个 Observable 。")]),t._v(" "),a("blockquote",[a("p",[t._v("操作符是函数，它基于当前的 Observable 创建一个新的 Observable。这是一个无副作用的操作：前面的 Observable 保持不变。\n操作符是采用函数式编程风格的纯函数 (pure function)，使用像 map、filter、concat、flatMap 等这样的操作符来处理集合。")])]),t._v(" "),a("h2",{attrs:{id:"subject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subject","aria-hidden":"true"}},[t._v("#")]),t._v(" Subject")]),t._v(" "),a("p",[t._v("Subject (主体): 相当于 EventEmitter，并且是将值或事件多路推送给多个 Observer 的唯一方式。")]),t._v(" "),a("p",[t._v("RxJS Subject 是一种特殊类型的 Observable，它允许将值多播给多个观察者，所以 Subject 是多播的，而普通的 Observables 是单播的(每个已订阅的观察者都拥有 Observable 的独立执行)。")]),t._v(" "),a("p",[t._v("变种：")]),t._v(" "),a("p",[t._v("BehaviorSubject：Subject 的其中一个变体就是 BehaviorSubject，它有一个“当前值”的概念。它保存了发送给消费者的最新值。并且当有新的观察者订阅时，会立即从 BehaviorSubject 那接收到“当前值”。")]),t._v(" "),a("p",[t._v("ReplaySubject： 类似于 BehaviorSubject，它可以发送旧值给新的订阅者，但它还可以记录 Observable 执行的一部分。")]),t._v(" "),a("p",[t._v("AsyncSubject： 只有当 Observable 执行完成时(执行 complete())，它才会将执行的最后一个值发送给观察者。")]),t._v(" "),a("h2",{attrs:{id:"schedulers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#schedulers","aria-hidden":"true"}},[t._v("#")]),t._v(" Schedulers")]),t._v(" "),a("p",[t._v("Schedulers (调度器): 用来控制并发并且是中央集权的调度员，允许我们在发生计算时进行协调，例如 setTimeout 或 requestAnimationFrame 或其他。")]),t._v(" "),a("p",[t._v("调度器控制着何时启动 subscription 和何时发送通知。它由三部分组成：")]),t._v(" "),a("ul",[a("li",[t._v("调度器是一种数据结构。 它知道如何根据优先级或其他标准来存储任务和将任务进行排序。")]),t._v(" "),a("li",[t._v("调度器是执行上下文。 它表示在何时何地执行任务(举例来说，立即的，或另一种回调函数机制(比如 setTimeout 或 process.nextTick)，或动画帧)。")]),t._v(" "),a("li",[t._v("调度器有一个(虚拟的)时钟。 调度器功能通过它的 getter 方法 now() 提供了“时间”的概念。在具体调度器上安排的任务将严格遵循该时钟所表示的时间。")]),t._v(" "),a("li",[t._v("调度器可以让你规定 Observable 在什么样的执行上下文中发送通知给它的观察者。")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("调度器")]),t._v(" "),a("th",[t._v("目的")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Rx.Scheduler.queue")]),t._v(" "),a("td",[t._v("当前事件帧中的队列调度(蹦床调度器)。用于迭代操作。")])]),t._v(" "),a("tr",[a("td",[t._v("Rx.Scheduler.asap")]),t._v(" "),a("td",[t._v("微任务的队列调度，它使用可用的最快速的传输机制，比如 Node.js 的 process.nextTick() 或 Web Worker 的 MessageChannel 或 setTimeout 或其他。用于异步转换。")])]),t._v(" "),a("tr",[a("td",[t._v("Rx.Scheduler.async")]),t._v(" "),a("td",[t._v("使用 setInterval 的调度。用于基于时间的操作符。")])])])]),t._v(" "),a("h2",{attrs:{id:"小示例："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小示例：","aria-hidden":"true"}},[t._v("#")]),t._v(" 小示例：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("//第一步，创建一个可观察对象（也可以通过fromEvent...）")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" observable "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Rx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Observable"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("create")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("observer"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  observer"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("next")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"first"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("setInterval")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    observer"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("next")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"5"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Error")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"错误"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    observer"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("complete")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"6"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("6000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("map")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" e"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("bold")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 使用操作符过滤观察流")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("observeOn")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Rx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Scheduler"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("async")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//让流变为异步")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" subject "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Rx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Subject")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("//增加两个监听函数")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("observer1")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" e "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("observer2")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" e "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"监听2"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("//未使用subject传播")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// var subscription1 = observable.subscribe(observer1);")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// var subscription2 = observable.subscribe(observer2);")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("//使用subject多播给多个观察者")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" subscription1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" subject"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("subscribe")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("observer1"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" subscription2 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" subject"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("subscribe")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("observer2"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nobservable"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("subscribe")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("subject"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"waibu"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("//增加取消监听")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  subscription1"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("unsubscribe")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  subscription2"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("unsubscribe")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1500")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}],!1,null,null,null);e.options.__file="library-rxjs.md";s.default=e.exports}}]);