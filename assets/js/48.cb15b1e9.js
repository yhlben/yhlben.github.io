(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{187:function(t,e,i){"use strict";i.r(e);var _=i(0),s=Object(_.a)({},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[t._m(0),t._v(" "),i("p",[t._v("HTTP 协议是超文本传输协议，从 www 浏览器传输到本地浏览器的一种传输协议，网站的图片，js，css 都是基于 http 协议进行传输的。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),i("p",[t._v("详细内容可以参考："),i("a",{attrs:{href:"https://github.com/skyline75489/what-happens-when-zh_CN",target:"_blank",rel:"noopener noreferrer"}},[t._v("当你在浏览器中输入 google.com 并且按下回车之后发生了什么？"),i("OutboundLink")],1)]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),i("p",[t._v("http 缓存策略图：")]),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),i("p",[t._v("HTTP/2 所有性能增强的核心在于新的二进制分帧层，它定义了如何封装 HTTP 消息并在客户端与服务器之间传输。")]),t._v(" "),i("p",[t._v("关于多路复用：")]),t._v(" "),t._m(28),t._v(" "),i("p",[t._v("1、图中第一种请求方式，就是单次发送 request 请求，收到 response 后再进行下一次请求，显示是很低效的。")]),t._v(" "),i("p",[t._v("2、于是 http1.1 提出了管线化(pipelining)技术，就是如图中第二中请求方式，一次性发送多个 request 请求。")]),t._v(" "),i("p",[t._v("3、然而 pipelining 在接收 response 返回时，也必须依顺序接收，如果前一个请求遇到了阻塞，后面的请求即使已经处理完毕了，仍然需要等待阻塞的请求处理完毕。这种情况就如图中第三种，第一个请求阻塞后，后面的请求都需要等待，这也就是队头阻塞(Head of line blocking)。")]),t._v(" "),i("p",[t._v("4、为了解决上述阻塞问题，http2 中提出了多路复用(Multiplexing)技术，Multiplexing 是通信和计算机网络领域的专业名词。http2 中将多个请求复用同一个 tcp 链接中，将一个 TCP 连接分为若干个流（Stream），每个流中可以传输若干消息（Message），每个消息由若干最小的二进制帧（Frame）组成。也就是将每个 request-response 拆分为了细小的二进制帧 Frame，这样即使一个请求被阻塞了，也不会影响其他请求，如图中第四种情况所示。")]),t._v(" "),t._m(29),t._v(" "),i("p",[t._v("HTTP/1.x 协议以换行符作为纯文本的分隔符，而 HTTP/2 将所有传输的信息分割为更小的消息和帧，并采用二进制格式对它们编码。")]),t._v(" "),t._m(30),t._v(" "),i("p",[t._v("新的二进制分帧机制改变了客户端与服务器之间交换数据的方式。 为了说明这个过程，我们需要了解 HTTP/2 的三个概念：")]),t._v(" "),i("p",[t._v("数据流：已建立的连接内的双向字节流，可以承载一条或多条消息。（一次 http 请求）\n消息：与逻辑请求或响应消息对应的完整的一系列帧。（一个请求，或一个响应）\n帧：HTTP/2 通信的最小单位，每个帧都包含帧头，至少也会标识出当前帧所属的数据流。（http 标头，消息负载等）\n这些概念的关系总结如下：")]),t._v(" "),i("p",[t._v("所有通信都在一个 TCP 连接上完成，此连接可以承载任意数量的双向数据流。\n每个数据流都有一个唯一的标识符和可选的优先级信息，用于承载双向消息。\n每条消息都是一条逻辑 HTTP 消息（例如请求或响应），包含一个或多个帧。\n帧是最小的通信单位，承载着特定类型的数据，例如 HTTP 标头、消息负载，等等。 来自不同数据流的帧可以交错发送，然后再根据每个帧头的数据流标识符重新组装。")]),t._v(" "),i("p",[t._v("理解了这张图，HTTP2 就基本上懂了。")]),t._v(" "),t._m(31),t._v(" "),i("p",[t._v("服务器端推送：")]),t._v(" "),t._m(32),t._v(" "),i("p",[t._v("在 HTTP2 中，服务端可以在客户端某个请求后，主动推送其他资源。")]),t._v(" "),i("p",[t._v("可以想象以下情况，某些资源客户端是一定会请求的，这时就可以采取服务端 push 的技术，提前给客户端推送必要的资源，这样就可以相对减少一点延迟时间。当然在浏览器兼容的情况下你也可以使用 prefetch 。")]),t._v(" "),i("p",[t._v("Header 压缩:")]),t._v(" "),t._m(33),t._v(" "),i("p",[t._v("在 HTTP/1 中，我们使用文本的形式传输 header，在 header 携带 cookie 的情况下，可能每次都需要重复传输几百到几千的字节。")]),t._v(" "),i("p",[t._v("在 HTTP /2 中，使用了 HPACK 压缩格式对传输的 header 进行编码，减少了 header 的大小。并在两端维护了索引表，用于记录出现过的 header ，后面在传输过程中就可以传输已经记录过的 header 的键名，对端收到数据后就可以通过键名找到对应的值。")]),t._v(" "),i("p",[t._v("图中可以看到：")]),t._v(" "),i("p",[t._v("1、所有的数据流共享一个 TCP 连接。")]),t._v(" "),i("p",[t._v("2、数据流可以带上权重标识，可以在传输时优先获得资源分配。")]),t._v(" "),i("p",[t._v("3、传输中是以最小单位帧开始传输的，每个帧都有一个标识，标识属于哪个流，哪个消息中的，所以帧在传输时可以不按顺序，在接收端再根据帧重新组合起来即可。")]),t._v(" "),i("p",[t._v("4、服务器可以对一个客户端请求发送多个响应。")]),t._v(" "),i("p",[t._v("5、标头压缩，使用 HPACK 压缩格式压缩请求和响应标头元数据，体积更小，且可复用，要求客户端和服务器同时维护和更新一个包含之前见过的标头字段的索引列表。")]),t._v(" "),i("p",[t._v("更多关于 HTTP2 的资料，可以参考"),i("router-link",{attrs:{to:"/book/book-http2.html"}},[t._v("HTTP2 基础教程总结")]),t._v("。")],1),t._v(" "),t._m(34),t._v(" "),i("p",[t._v("HTTP/3\n虽然 HTTP/2 解决了很多之前旧版本的问题，但是它还是存在一个巨大的问题，虽然这个问题并不是它本身造成的，而是底层支撑的 TCP 协议的问题。")]),t._v(" "),i("p",[t._v("因为 HTTP/2 使用了多路复用，一般来说同一域名下只需要使用一个 TCP 连接。当这个连接中出现了丢包的情况，那就会导致 HTTP/2 的表现情况反倒不如 HTTP/1 了。")]),t._v(" "),i("p",[t._v("因为在出现丢包的情况下，整个 TCP 都要开始等待重传，也就导致了后面的所有数据都被阻塞了。但是对于 HTTP/1 来说，可以开启多个 TCP 连接，出现这种情况反到只会影响其中一个连接，剩余的 TCP 连接还可以正常传输数据。")]),t._v(" "),i("p",[t._v("那么可能就会有人考虑到去修改 TCP 协议，其实这已经是一件不可能完成的任务了。因为 TCP 存在的时间实在太长，已经充斥在各种设备中，并且这个协议是由操作系统实现的，更新起来不大现实。")]),t._v(" "),i("p",[t._v("基于这个原因，Google 就更起炉灶搞了一个基于 UDP 协议的 QUIC 协议，并且使用在了 HTTP/3 上，当然 HTTP/3 之前名为 HTTP-over-QUIC，从这个名字中我们也可以发现，HTTP/3 最大的改造就是使用了 QUIC，接下来我们就来学习关于这个协议的内容。")]),t._v(" "),i("p",[t._v("QUIC\n之前我们学习过 UDP 协议的内容，知道这个协议虽然效率很高，但是并不是那么的可靠。QUIC 虽然基于 UDP，但是在原本的基础上新增了很多功能，比如多路复用、0-RTT、使用 TLS1.3 加密、流量控制、有序交付、重传等等功能。这里我们就挑选几个重要的功能学习下这个协议的内容。")]),t._v(" "),i("p",[t._v("多路复用")]),t._v(" "),i("p",[t._v("虽然 HTTP/2 支持了多路复用，但是 TCP 协议终究是没有这个功能的。QUIC 原生就实现了这个功能，并且传输的单个数据流可以保证有序交付且不会影响其他的数据流，这样的技术就解决了之前 TCP 存在的问题。")]),t._v(" "),i("p",[t._v("并且 QUIC 在移动端的表现也会比 TCP 好。因为 TCP 是基于 IP 和端口去识别连接的，这种方式在多变的移动端网络环境下是很脆弱的。但是 QUIC 是通过 ID 的方式去识别一个连接，不管你网络环境如何变化，只要 ID 不变，就能迅速重连上。")]),t._v(" "),i("p",[t._v("0-RTT")]),t._v(" "),i("p",[t._v("通过使用类似 TCP 快速打开的技术，缓存当前会话的上下文，在下次恢复会话的时候，只需要将之前的缓存传递给服务端验证通过就可以进行传输了。")]),t._v(" "),i("p",[t._v("纠错机制")]),t._v(" "),i("p",[t._v("假如说这次我要发送三个包，那么协议会算出这三个包的异或值并单独发出一个校验包，也就是总共发出了四个包。")]),t._v(" "),i("p",[t._v("当出现其中的非校验包丢包的情况时，可以通过另外三个包计算出丢失的数据包的内容。")]),t._v(" "),i("p",[t._v("当然这种技术只能使用在丢失一个包的情况下，如果出现丢失多个包就不能使用纠错机制了，只能使用重传的方式了。")]),t._v(" "),t._m(35),t._v(" "),i("p",[t._v("用户不直接请求服务器，而是请求反向代理服务器，再由反向代理服务器转发请求到其他服务器。")]),t._v(" "),t._m(36),t._v(" "),i("p",[t._v("反向代理的作用：")]),t._v(" "),t._m(37),t._v(" "),i("p",[t._v("负载均衡示意图：")]),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://developers.google.com/web/fundamentals/performance/http2/?hl=zh-cn#_2",target:"_blank",rel:"noopener noreferrer"}},[t._v("http2 简介"),i("OutboundLink")],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"http-协议常用知识点总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-协议常用知识点总结","aria-hidden":"true"}},[this._v("#")]),this._v(" HTTP 协议常用知识点总结")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"输入一个网址后发生了什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#输入一个网址后发生了什么","aria-hidden":"true"}},[this._v("#")]),this._v(" 输入一个网址后发生了什么")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v("1、输入网址并回车。")]),t._v(" "),i("li",[t._v("2、解析域名获得服务器 IP。")]),t._v(" "),i("li",[t._v("3、根据 IP 建立 TCP 管道。")]),t._v(" "),i("li",[t._v("3、浏览器连接 TCP 管道并发送 HTTP 请求。")]),t._v(" "),i("li",[t._v("4、服务器处理请求。")]),t._v(" "),i("li",[t._v("5、服务器通过 TCP 管道传输 HTML 相应。")]),t._v(" "),i("li",[t._v("6、浏览器处理 HTML 响应，并渲染页面。")]),t._v(" "),i("li",[t._v("7、继续请求其他资源。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"在-tcp-ip-协议栈中的位置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在-tcp-ip-协议栈中的位置","aria-hidden":"true"}},[this._v("#")]),this._v(" 在 TCP/IP 协议栈中的位置")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("HTTP 层。")]),this._v(" "),e("li",[this._v("TCP 层。")]),this._v(" "),e("li",[this._v("IP 层。")]),this._v(" "),e("li",[this._v("数据链路层。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"请求与相应"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求与相应","aria-hidden":"true"}},[this._v("#")]),this._v(" 请求与相应")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("HTTP 请求组成:请求行、消息报头、请求正文。")]),this._v(" "),e("li",[this._v("HTTP 响应组成:状态行、消息报头、响应正文。")]),this._v(" "),e("li",[this._v("请求行组成:以一个方法符号开头，后面跟着请求的 URI 和协 议的版本。")]),this._v(" "),e("li",[this._v("状态行组成:服务器 HTTP 协议的版本，服务器发回的响应状 态代码和状态代码的文本描述。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"请求方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 请求方法")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v("GET: 请求获取 Request-URI 所标识的资源（4K 大小）。")]),t._v(" "),i("li",[t._v("POST: 在 Request-URI 所标识的资源后附加新的数据（修改数据）。")]),t._v(" "),i("li",[t._v("HEAD: 请求获取由 Request-URI 所标识的资源的响应消息报头（简易版的 get,只返回请求头）。")]),t._v(" "),i("li",[t._v("PUT: 请求服务器存储一个资源，并用 Request-URI 作为其标识（增加数据）。")]),t._v(" "),i("li",[t._v("DELETE:请求服务器删除 Request-URI 所标识的资源。")]),t._v(" "),i("li",[t._v("TRACE: 请求服务器回送收到的请求信息，主要用于测试或诊断 。")]),t._v(" "),i("li",[t._v("CONNECT:保留将来使用 。")]),t._v(" "),i("li",[t._v("OPTIONS:请求查询服务器的性能，或者查询与资源相关的选项和需求。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"http-状态码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-状态码","aria-hidden":"true"}},[this._v("#")]),this._v(" HTTP 状态码")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v("1xx:指示信息--表示请求已接收，继续处理 。")]),t._v(" "),i("li",[t._v("2xx:成功--表示请求已被成功接收、理解、接受 。")]),t._v(" "),i("li",[t._v("3xx:重定向--要完成请求必须进行更进一步的操作 。")]),t._v(" "),i("li",[t._v("4xx:客户端错误--请求有语法错误或请求无法实现 。")]),t._v(" "),i("li",[t._v("5xx:服务器端错误--服务器未能实现合法的请求。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"常用的请求报头"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用的请求报头","aria-hidden":"true"}},[this._v("#")]),this._v(" 常用的请求报头")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v("Accept 请求报头域用于指定客户端接受哪些类型的信息。eg:Accept:image/gif，Accept:text/ html。")]),t._v(" "),i("li",[t._v("Accept-Charset 请求报头域用于指定客户端接受的字符集。")]),t._v(" "),i("li",[t._v("Accept-Encoding:Accept-Encoding 请求 报头域类似于 Accept，但是它是用于指定可接受的内容编码。")]),t._v(" "),i("li",[t._v("Accept-Language 请求报头域类似于 Accept，但是它是用于指定一种自然语言。")]),t._v(" "),i("li",[t._v("Authorization 请求报头域主要用于证明客户端有权查看某个资源。当浏览器访问一个页面时，如果收 到服务器的响应代码为 401(未授权)，可以发送一个包含 Authorization 请求报头域的请求，要求服务 器对其进行验证。")]),t._v(" "),i("li",[t._v("Host 请求报头域主要用于指定被请求资源的 Internet 主机和端又号，它通常从 HTTP URL 中提取出来 的，发送请求时，该报头域是必需的。")]),t._v(" "),i("li",[t._v("User-Agent 请求报头域允许客户端将它的操作系统、浏览器和其它属性告诉服务器。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"常用的响应报头"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用的响应报头","aria-hidden":"true"}},[this._v("#")]),this._v(" 常用的响应报头")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Location 响应报头域用于重定向接受者到一个新的位置。Location 响应报头域常用在更换域名的时候。")]),this._v(" "),e("li",[this._v("Server 响应报头域包含了服务器用来处理请求的软件信息。与 User- Agent 请求报头域是相对应的。")]),this._v(" "),e("li",[this._v("WWW-Authenticate 响应报头域必须被包含在 401（未授权的）响应消息中，客户端收到 401 响应消息时候，并发送 Authorization 报头域请求服务器对其进行验证时，服务端响应报头就包含该报头域。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"常用的实体报头"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用的实体报头","aria-hidden":"true"}},[this._v("#")]),this._v(" 常用的实体报头")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("提示")]),this._v(" "),e("p",[this._v("请求和响应消息都可以传送一个实体。")]),this._v(" "),e("p",[this._v("一个实体由实体报头域和实体正文组成，但并不是说实体报头域和实体正文要在一起发送，可以只发送实体报头域。")]),this._v(" "),e("p",[this._v("实体报头定义了关于实体正文 (eg:有无实体正文)和请求所标识的资源的元信息。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Content-Encoding 实体报头域被用作媒体类型的修饰符，它的值指示了已经被应用到实体正文的附加内容的编码，因而要获得 Content-Type 报头域中所引用的媒体类型，必须采用相应的解 码机制。")]),this._v(" "),e("li",[this._v("Content-Language 实体报头域描述了资源所用的自然语言。")]),this._v(" "),e("li",[this._v("Content-Length 实体报头域用于指明实体正文的长度，以字节方式存储的十进制数字来表示。")]),this._v(" "),e("li",[this._v("Content-Type 实体报头域用语指明发送给接收者的实体正文的媒体类型。 Last-Modified 实体报头域用于指示资源的最后修改日期和时间。 Expires 实体报头域给出响应过期的日期和时间。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"http-缓存策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-缓存策略","aria-hidden":"true"}},[this._v("#")]),this._v(" HTTP 缓存策略")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"cookie-和-session"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cookie-和-session","aria-hidden":"true"}},[this._v("#")]),this._v(" Cookie 和 Session")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Cookie 是保存在客户端的小段文本，每当客户端发起一个请求发送会将该请求 URL 下的所有 Cookie 发送到服务器端。")]),this._v(" "),e("li",[this._v("Session 则保存服务器段，通过唯一的值 SessionID 来区别每一个 用户。SessionID 随每个连接请求发送到服务器，服务器根据 SessionID 来识别客户端，再通过 Session 的 Key 获取 Session 值。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"etag-if-none-match-策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etag-if-none-match-策略","aria-hidden":"true"}},[this._v("#")]),this._v(" Etag/If-None-Match 策略")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Etag：web 服务器响应请求时，告诉浏览器当前资源在服务器的唯一标识(生成规则由服务器决定)。")]),this._v(" "),e("li",[this._v("If-None-Match：当资源过期时（使用 Cache-Control 标识的 max-age），发现资源具有 Etage 声明，则再次向 web 服务器请求时带上头 If-None-Match（Etag 的值）。Web 服务器收到请求后发现 有头 If-None-Match 则与被请求资源的相应校验串进行比对，决定返回 200 或 304。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"last-modified-if-modified-since-策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#last-modified-if-modified-since-策略","aria-hidden":"true"}},[this._v("#")]),this._v(" Last-Modified/If-Modified-Since 策略")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Last-Modified：标示这个响应资源的最后修改时间。Web 服务器在响应请求时，告诉浏览器资源的最后修改时间。")]),this._v(" "),e("li",[this._v("If-Modified-Since：当资源过期时(使用 Cache-Control 标识的 max-age)，发现资源具有 Last-Modified 声明，则再次向 web 服务器请求时带上头 If-Modified-Since，表示请求时间。web 服务器收到请求后发现有头 If-Modified- Since 则与被请求资源的最后修改时间进行比对。若最后修改时间较新，说 明资源又被改动过，则响应整片资源内容(写在响应消息包体内)，HTTP 200;若最后修改时间较旧，说明资源无新修改，则响应 HTTP 304（无需包 体，节省浏览），告知浏览器继续使用所保存的 cache。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/blog/browser-caching.jpg",alt:"http 缓存策略图"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"http2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http2","aria-hidden":"true"}},[this._v("#")]),this._v(" HTTP2")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v("使用二进制格式传输，更高效、更紧凑。")]),t._v(" "),i("li",[t._v("请求可以设置优先级。")]),t._v(" "),i("li",[t._v("对报头压缩，降低开销。")]),t._v(" "),i("li",[t._v("多路复用，一个网络连接实现并行请求。")]),t._v(" "),i("li",[t._v("服务器主动推送，减少请求的延迟。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"osi-http-duolufuyong.png",alt:"多路复用demo"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http-binary_framing_layer.svg",alt:"HTTP2 二进制"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"数据流、消息和帧"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据流、消息和帧","aria-hidden":"true"}},[this._v("#")]),this._v(" 数据流、消息和帧")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http-streams_messages_frames.svg",alt:"http2 数据流，消息，帧"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http-push.svg",alt:"服务器端推送"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http-header_compression.svg",alt:"Header 压缩"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"http-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-3","aria-hidden":"true"}},[this._v("#")]),this._v(" HTTP/3")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"反向代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#反向代理","aria-hidden":"true"}},[this._v("#")]),this._v(" 反向代理")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/blog/http-reverseProxy.png",alt:"反向代理"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v("复用 DNS 查询。")]),t._v(" "),i("li",[t._v("加密和 SSL 加速。")]),t._v(" "),i("li",[t._v("负载均衡。")]),t._v(" "),i("li",[t._v("缓存静态资源。")]),t._v(" "),i("li",[t._v("压缩。")]),t._v(" "),i("li",[t._v("减速上传。")]),t._v(" "),i("li",[t._v("安全。")]),t._v(" "),i("li",[t._v("外网发布。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/blog/http-loadBalancing.png",alt:"负载均衡"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"相关链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相关链接","aria-hidden":"true"}},[this._v("#")]),this._v(" 相关链接")])}],!1,null,null,null);e.default=s.exports}}]);