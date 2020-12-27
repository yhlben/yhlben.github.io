(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{266:function(v,_,t){"use strict";t.r(_);var a=t(19),s=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"一文串联-http、tcp、ip、以太网"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一文串联-http、tcp、ip、以太网"}},[v._v("#")]),v._v(" 一文串联 HTTP、TCP、IP、以太网")]),v._v(" "),t("p",[v._v("最近部门组织了一次前端性能优化交流会，大家从输入页面 URL 到最终页面展示内容这个过程提出了许多优化点。但同时发现很多同学对 HTTP 协议层的知识不能串联起来，于是整理了这篇文章，希望可以给大家带来一丝灵感。")]),v._v(" "),t("p",[v._v("当我们在页面上发起一个 AJAX 请求的时候，在网络协议层面都经历了哪些内容？")]),v._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[v._v("// 发起请求")]),v._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[v._v("fetch")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[v._v("'https://baidu.com'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[v._v("// 协议层1...")]),v._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[v._v("// 协议层2...")]),v._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[v._v("// 协议层3...")]),v._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[v._v("then")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[v._v("res")]),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=>")]),v._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[v._v("// 得到结果")]),v._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[v._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("res"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v("\n")])]),v._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[v._v("1")]),t("br"),t("span",{staticClass:"line-number"},[v._v("2")]),t("br"),t("span",{staticClass:"line-number"},[v._v("3")]),t("br"),t("span",{staticClass:"line-number"},[v._v("4")]),t("br"),t("span",{staticClass:"line-number"},[v._v("5")]),t("br"),t("span",{staticClass:"line-number"},[v._v("6")]),t("br"),t("span",{staticClass:"line-number"},[v._v("7")]),t("br"),t("span",{staticClass:"line-number"},[v._v("8")]),t("br"),t("span",{staticClass:"line-number"},[v._v("9")]),t("br")])]),t("p",[v._v("如上述代码所示，我们对 "),t("code",[v._v("baidu.com")]),v._v(" 发起了一个网络请求，最终在 then 方法中得到了具体的响应内容。")]),v._v(" "),t("p",[v._v("使用 Wireshark 抓包结果如下：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.yinhengli.com/image-20201212121811481.png",alt:""}})]),v._v(" "),t("p",[v._v("图中可以看到，请求 baidu.com 时，首先通过 TCP 3 次握手建立连接，然后通过 HTTP 传输内容，最后通过 TCP 4 次挥手断开连接。")]),v._v(" "),t("p",[v._v("真实的过程更加复杂，我们主要分析以下几点：")]),v._v(" "),t("ul",[t("li",[v._v("建立连接阶段\n"),t("ul",[t("li",[v._v("DNS 域名解析（应用层）")]),v._v(" "),t("li",[v._v("建立 TCP 连接（传输层）\n"),t("ul",[t("li",[v._v("通过 IP 寻址找到目标服务器（网络层）")]),v._v(" "),t("li",[v._v("通过 Mac 寻址找到服务器硬件接口（数据链路层）")]),v._v(" "),t("li",[v._v("通过网线向服务器硬件接口传输比特信息（物理层）")])])])])]),v._v(" "),t("li",[v._v("发送数据阶段\n"),t("ul",[t("li",[v._v("建立 SSL 安全连接（应用层）")]),v._v(" "),t("li",[v._v("发送 HTTP 请求（应用层）")])])])]),v._v(" "),t("h2",{attrs:{id:"建立连接阶段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#建立连接阶段"}},[v._v("#")]),v._v(" 建立连接阶段")]),v._v(" "),t("p",[v._v("要获取 baidu.com 的网页内容，就需要和 baidu 服务器建立连接，怎样建立这个连接呢？")]),v._v(" "),t("ol",[t("li",[v._v("通过 DNS 获取 baidu 的 IP 地址。")]),v._v(" "),t("li",[v._v("建立 TCP 连接。")])]),v._v(" "),t("h3",{attrs:{id:"dns-域名解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dns-域名解析"}},[v._v("#")]),v._v(" DNS 域名解析")]),v._v(" "),t("p",[v._v("通过 DNS 解析，我们就能找到 baidu 服务器对应的 IP 地址。")]),v._v(" "),t("p",[v._v("如图：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.yinhengli.com/image-20201221212110456.png",alt:""}})]),v._v(" "),t("p",[v._v("经过 DNS 解析后，我们就能得到 baidu.com 的 IP 地址了：39.156.69.79 和 220.181.38.148，通常客户端会随机选中一个 IP 地址进行通信。")]),v._v(" "),t("h4",{attrs:{id:"域名的解析步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#域名的解析步骤"}},[v._v("#")]),v._v(" 域名的解析步骤")]),v._v(" "),t("p",[v._v("其实 IP 不一定要通过 DNS 解析才能获取，它通常会被客户端缓存，只有在 DNS 缓存都没有命中的时候才会请求 DNS 服务器。")]),v._v(" "),t("p",[v._v("判断步骤如下：")]),v._v(" "),t("ol",[t("li",[v._v("判断浏览器是否有缓存 IP 地址。")]),v._v(" "),t("li",[v._v("判断本机是否有缓存该 IP 地址，如：检查 Host 文件。")]),v._v(" "),t("li",[v._v("判断本地域名解析服务器是否有缓存 IP 地址，如：电信，联通等运营商。")]),v._v(" "),t("li",[v._v("向 DNS 根域名解析服务器，解析域名 IP 地址。")]),v._v(" "),t("li",[v._v("向 DNS 二根域名解析服务器，解析域名 IP 地址。")]),v._v(" "),t("li",[v._v("以此类推，最终获得 IP 地址。")])]),v._v(" "),t("h3",{attrs:{id:"建立-tcp-连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#建立-tcp-连接"}},[v._v("#")]),v._v(" 建立 TCP 连接")]),v._v(" "),t("p",[v._v("有了 IP 地址之后，客户端和服务器端就能建立连接了，首先是建立 TCP 连接。")]),v._v(" "),t("p",[v._v("TCP 是一种面向连接的、"),t("strong",[v._v("可靠的")]),v._v("、基于"),t("strong",[v._v("字节流")]),v._v("的传输层通信协议。")]),v._v(" "),t("p",[v._v("在这一层，我们传输的数据会按照一个个的字节装入报文中，当报文的长度达到最大分段（MSS）时，就会发送这个报文。如果传输的报文很长，可能会被拆分成多个 TCP 报文进行传输。")]),v._v(" "),t("p",[v._v("TCP 报文头如下：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.yinhengli.com/image-20201221100730496.png",alt:""}})]),v._v(" "),t("p",[v._v("我们主要看以下几点：")]),v._v(" "),t("ul",[t("li",[v._v("源端口、目的端口。")]),v._v(" "),t("li",[v._v("序列号：seq，报文的唯一标识。")]),v._v(" "),t("li",[v._v("确认号：ack，报文的确认标识，便于确认 seq 是否已经收到。")]),v._v(" "),t("li",[v._v("TCP 标记：\n"),t("ul",[t("li",[v._v("SYN 为 1 表示这是连接请求或是连接接受请求。用于创建连接和同步序列号。")]),v._v(" "),t("li",[v._v("ACK 为 1 表示确认号字段有效。注意这里大写的 ACK 只是一个标记，和确认号 ack 并不相同。")]),v._v(" "),t("li",[v._v("FIN 为 1 表示要求释放连接。")])])]),v._v(" "),t("li",[v._v("窗口：表示发送方可以接收的字节数，即接收窗口大小，用于流量控制。")])]),v._v(" "),t("p",[v._v("接下来，我们看一下 TCP 是怎样建立连接的？")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://lmjben.github.io/blog/osi-tcp-connect.png",alt:""}})]),v._v(" "),t("p",[v._v("如图所示，建立 TCP 连接需要 3 个步骤，俗称三次握手。")]),v._v(" "),t("ul",[t("li",[v._v("第一次握手：客户端向服务器端发送序列号 seq=x 的标识，表示开始建立连接。")]),v._v(" "),t("li",[v._v("第二次握手：服务器端回发一个 ack=x+1 的标识，表示确认收到第一次握手，同时发送自己的标识 seq=y。\n"),t("ul",[t("li",[v._v("客户端确认自己发出的数据能够被服务器端收到。")])])]),v._v(" "),t("li",[v._v("第三次握手：客户端发送 ack=y+1 的标识，标识确认收到第二次握手。\n"),t("ul",[t("li",[v._v("服务器端确认自己发出的数据能够被客户端收到。")])])])]),v._v(" "),t("p",[v._v("经过了 3 次握手，即保证了客户端和服务器端都能正常发送和接收数据，TCP 连接也就建立成功了。")]),v._v(" "),t("h4",{attrs:{id:"tcp-可靠传输原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-可靠传输原理"}},[v._v("#")]),v._v(" TCP 可靠传输原理")]),v._v(" "),t("p",[v._v("上文中说到，TCP 是可靠的传输，这是为什么呢？")]),v._v(" "),t("p",[v._v("这是因为 TCP 内部使用了 "),t("strong",[v._v("停止等待协议 ARQ")]),v._v(" ，它通过 "),t("strong",[v._v("确认")]),v._v(" 和 "),t("strong",[v._v("重传")]),v._v(" 机制，实现了信息的可靠传输。")]),v._v(" "),t("p",[v._v("例如：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://img2018.cnblogs.com/blog/1639079/201903/1639079-20190326083658281-1497754404.png",alt:""}})]),v._v(" "),t("ul",[t("li",[v._v("客户端发送数据 M1")]),v._v(" "),t("li",[v._v("服务器端确认数据 M1 收到")]),v._v(" "),t("li",[v._v("客户端发送数据 M2")]),v._v(" "),t("li",[v._v("服务器端确认数据 M2 收到")]),v._v(" "),t("li",[v._v("依次类推 ...")])]),v._v(" "),t("p",[v._v("在这期间，如果某一条数据很久都没有得到确认，客户端就会重传这条数据。这样一来，对于与每一次发送的数据，服务器端都得到了确认，即保证了数据的可靠性。")]),v._v(" "),t("p",[v._v("虽然 ARQ 可以满足数据可靠性，但每次只能发送和确认一个请求，效率太低了，于是就产生了连续 ARQ 协议。")]),v._v(" "),t("p",[t("strong",[v._v("连续 ARQ 协议")]),v._v(" 会连续发送一组数据，然后再批量等待这一组数据的确认信息，好比把单线程 ARQ 变成了多线程，大大提高了资源的利用效率。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.yinhengli.com/WX20201226-125758@2x.png",alt:""}})]),v._v(" "),t("p",[v._v("如：")]),v._v(" "),t("ul",[t("li",[v._v("客户端发送数据 M1、M2、M3、M4。")]),v._v(" "),t("li",[v._v("服务器端确认数据 M4 收到，表示 M4 及之前的数据都收到了。")]),v._v(" "),t("li",[v._v("客户端发送数据 M5、M6、M7、M8。")]),v._v(" "),t("li",[v._v("服务器端确认数据 M8 收到，表示 M8 及之前的数据都收到了。")])]),v._v(" "),t("p",[v._v("在这个流程中，服务器端不需要对每一个数据都返回确认信息，而是接收到多个数据时一并确认，这个方式叫做 "),t("strong",[v._v("累计确认")]),v._v("。")]),v._v(" "),t("hr"),v._v(" "),t("p",[v._v("这里有个疑问，TCP 的每一次握手，是怎么找到目的服务器呢？")]),v._v(" "),t("p",[v._v("答：通过 IP 协议。")]),v._v(" "),t("h3",{attrs:{id:"根据-ip-协议找到目标服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#根据-ip-协议找到目标服务器"}},[v._v("#")]),v._v(" 根据 IP 协议找到目标服务器")]),v._v(" "),t("p",[v._v("IP 协议的目的是实现网络层的数据转发，它通过路由器不断跳转，最终把数据成功送达目的地。")]),v._v(" "),t("p",[v._v("上文中的每一次 TCP 握手以及数据交互，都是通过 IP 协议去传输的。")]),v._v(" "),t("p",[v._v("IP 报文头如下：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://strawhatfy.github.io/2015/07/30/TCP-IP-Protocol/ip_package.png",alt:""}})]),v._v(" "),t("p",[v._v("我们关注以下两点就可以了：")]),v._v(" "),t("ul",[t("li",[v._v("源 IP 地址")]),v._v(" "),t("li",[v._v("目的 IP 地址")])]),v._v(" "),t("p",[v._v("发起一个 IP 请求执行流程如下：")]),v._v(" "),t("ol",[t("li",[v._v("构建 IP 请求头（源 IP、目标 IP）。")]),v._v(" "),t("li",[v._v("IP 协议通过算法，计算出一条通往服务器端的路径。")]),v._v(" "),t("li",[v._v("发送端查询路由表，找出下一跳的 IP 地址（通常是路由器），并发送数据。")]),v._v(" "),t("li",[v._v("路由器查询路由表，找出下一跳的 IP 地址，并发送数据。")]),v._v(" "),t("li",[v._v("不断重复步骤 4，直到找到目的局域网。")]),v._v(" "),t("li",[v._v("发送数据。")])]),v._v(" "),t("blockquote",[t("p",[v._v("路由表存在于计算机或路由器中，由目的 IP 地址、子网掩码、下一跳地址、发送接口四部分组成。通过目的 IP 地址，即可找到下一跳的地址，进行转发。")])]),v._v(" "),t("p",[v._v("例如：A 要向 G 发送 IP 数据。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.yinhengli.com/WX20201227-120828@2x.png",alt:""}})]),v._v(" "),t("p",[v._v("具体流程如下：")]),v._v(" "),t("ul",[t("li",[v._v("A 生成 IP 头部（源 IP：A ，目的 IP：G）\n"),t("ul",[t("li",[v._v("A 查询路由表，发现下一跳为 B，于是把数据传给 B。")])])]),v._v(" "),t("li",[v._v("B 生成 IP 头部（源 IP：A ，目的 IP：G）\n"),t("ul",[t("li",[v._v("B 查询路由表，发现下一跳为 E，于是把数据传给 E。")])])]),v._v(" "),t("li",[v._v("E 生成 IP 头部（源 IP：A ，目的 IP：G）\n"),t("ul",[t("li",[v._v("E 查询路由表，发现下一跳为 G，于是把数据传给 G。")])])]),v._v(" "),t("li",[v._v("到达目的地 G。")])]),v._v(" "),t("p",[v._v("你是否有疑惑，为什么 IP 会按照这条路径向 G 传输数据呢？")]),v._v(" "),t("p",[v._v("其实，上图中的路径并非只有一条，我们通过 ABEG 到达了目的地 G，同样也可以通过 ABCFHG 到达 G，这两种路径都能完成任务，为什么 IP 不选择 ABCFHG 这条路径呢？")]),v._v(" "),t("p",[v._v("这就涉及到了 IP 寻址的算法。")]),v._v(" "),t("h4",{attrs:{id:"ip-寻址算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ip-寻址算法"}},[v._v("#")]),v._v(" IP 寻址算法")]),v._v(" "),t("p",[v._v("我们可以把网络中的所有计算机都看做是一个点，计算机之间的连接看做是一条线，这些点和线就组合成了一个图。")]),v._v(" "),t("p",[v._v("例如：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://www.researchgate.net/profile/David_Brcic/publication/337784487/figure/fig10/AS:833070370418689@1575630862909/Representation-of-determined-Dijkstras-shortest-path-Dijkstra-1959.jpg",alt:""}})]),v._v(" "),t("p",[v._v("通过上图，我们就把复杂的网络转化成了数学问题。IP 寻址算法，其实就是图论中的最短路径的算法。")]),v._v(" "),t("p",[v._v("最短路径算法在 IP 协议中有 2 种实现：")]),v._v(" "),t("ul",[t("li",[v._v("RIP 协议\n"),t("ul",[t("li",[v._v("使用距离矢量算法，"),t("strong",[v._v("确保 IP 路由跳转的次数最小")]),v._v("。")]),v._v(" "),t("li",[v._v("原理\n"),t("ul",[t("li",[v._v("每个节点中都保存有其他节点的位置信息（跳数和下一跳的 IP）。")]),v._v(" "),t("li",[v._v("通过和邻居节点进行数据交换，更新自己到目的地的最短距离，不断重复，即可得到起点到终点的最短路径。")]),v._v(" "),t("li",[v._v("实现简单，开销很小，适用于小型网络。")])])])])]),v._v(" "),t("li",[v._v("OSPF 协议\n"),t("ul",[t("li",[v._v("使用迪杰斯特拉算法，"),t("strong",[v._v("确保 IP 路由跳转的速度最快")]),v._v("。")]),v._v(" "),t("li",[v._v("原理\n"),t("ul",[t("li",[v._v("从起始点开始，采用贪心算法的策略，每次遍历到始点距离最近且未访问过的顶点的邻接节点，直到扩展到终点为止。")]),v._v(" "),t("li",[v._v("适用于大型网络。")])])])])])]),v._v(" "),t("p",[v._v("通过以上两个协议，我们就能找到通往目的地的路径了。")]),v._v(" "),t("hr"),v._v(" "),t("p",[v._v("这里抛出一个问题：IP 数据是怎样从一个路由器跳到另一个路由器呢？")]),v._v(" "),t("p",[v._v("答：通过以太网协议。")]),v._v(" "),t("h3",{attrs:{id:"通过-mac-寻址找到服务器硬件接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过-mac-寻址找到服务器硬件接口"}},[v._v("#")]),v._v(" 通过 Mac 寻址找到服务器硬件接口")]),v._v(" "),t("p",[v._v("IP 协议主要是用来寻找最优路径的，具体的传输是由以太网协议来做的。")]),v._v(" "),t("p",[v._v("以太网属于数据链路层，它主要负责相邻设备的通信。原理是通过查询交换机 Mac 表，找到通信双方的物理接口，进而开始通信。")]),v._v(" "),t("p",[v._v("以太网报文头如下：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.yinhengli.com/image-20201223113346648.png",alt:""}})]),v._v(" "),t("p",[v._v("我们只用关心以下 3 个点：")]),v._v(" "),t("ul",[t("li",[v._v("源 Mac 地址")]),v._v(" "),t("li",[v._v("目的 Mac 地址")]),v._v(" "),t("li",[v._v("校验码 CRC：校验当前帧是否有效。")])]),v._v(" "),t("p",[v._v("可以看到，以太网层都是通过 Mac 地址进行通信的，这里的 Mac 地址是哪里来的呢？")]),v._v(" "),t("p",[v._v("答：通过 ARP 协议。")]),v._v(" "),t("p",[t("strong",[v._v("ARP 协议")]),v._v(" 是一个通过解析 IP 地址来找寻 Mac 地址的协议。IP 地址转换成 Mac 地址后，就能进行以太网数据传输了。")]),v._v(" "),t("p",[v._v("例如：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.yinhengli.com/WX20201227-122253@2x.png",alt:""}})]),v._v(" "),t("p",[v._v("当机器 A 向机器 C 发送数据时：")]),v._v(" "),t("ul",[t("li",[v._v("A 构建以太网报文（源地址：A，目的地址：C），并通过网卡发出数据帧。")]),v._v(" "),t("li",[v._v("数据帧到达交换机 B，交换机取出目的地址 C 的 Mac 地址。")]),v._v(" "),t("li",[v._v("B 查询 Mac 表，根据目的地 Mac 地址，匹配 C 的硬件接口。\n"),t("ul",[t("li",[v._v("如果找到 C 的硬件接口，发送数据。")]),v._v(" "),t("li",[v._v("如果未找到 C 的硬件接口，向 B 直连的所有机器发送广播信息找 C，找到后会把 C 记录到 Mac 表中。")])])])]),v._v(" "),t("p",[v._v("经过上述的流程，我们就找到了目的机器的硬件接口。")]),v._v(" "),t("hr"),v._v(" "),t("p",[v._v("通过以太网协议，我们找到了目标机器的硬件接口，接下来要怎么发送信息呢？")]),v._v(" "),t("p",[v._v("答：通过物理层。")]),v._v(" "),t("h3",{attrs:{id:"通过网线向服务器硬件接口传输比特信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过网线向服务器硬件接口传输比特信息"}},[v._v("#")]),v._v(" 通过网线向服务器硬件接口传输比特信息")]),v._v(" "),t("p",[v._v("在没有 WiFi 的年代，我们只能通过插网线来进行上网，网线其实就是物理层的设备之一。")]),v._v(" "),t("p",[v._v("网线可以由多种材料组成，最常见的就是光纤和电缆。")]),v._v(" "),t("p",[v._v("光纤和电缆的传输原理类似，都是通过两个信号来模拟二进制数据的，一个信号即为一个比特。")]),v._v(" "),t("ul",[t("li",[v._v("电缆中：高电位表示 1 ，低点位表示 0。")]),v._v(" "),t("li",[v._v("光纤中：光亮表示 1，光熄灭表示 0。")])]),v._v(" "),t("p",[v._v("如：在光纤中，我们通过观察光的闪动，即可得知传输的二进制数据。")]),v._v(" "),t("p",[v._v("有了这些物理设备，我们就能把复杂的数据转换成光信号或者电信号进行传输了。")]),v._v(" "),t("h2",{attrs:{id:"发送数据阶段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发送数据阶段"}},[v._v("#")]),v._v(" 发送数据阶段")]),v._v(" "),t("p",[v._v("发送数据可以分为两个步骤：")]),v._v(" "),t("ul",[t("li",[v._v("建立安全层 SSL")]),v._v(" "),t("li",[v._v("发送 HTTP 请求")])]),v._v(" "),t("h3",{attrs:{id:"建立安全层-ssl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#建立安全层-ssl"}},[v._v("#")]),v._v(" 建立安全层 SSL")]),v._v(" "),t("p",[v._v("本文的案例是发送一个 HTTPS 的请求，所以在发送数据之前，会创建一个 SSL 安全层，用于数据加密。")]),v._v(" "),t("p",[v._v("通常的加密方法有两种：")]),v._v(" "),t("ul",[t("li",[v._v("非对称加密\n"),t("ul",[t("li",[v._v("A 有钥匙，B 没有钥匙，且他们都有一个公共的锁，B 给 A 发送数据时，都会先把数据锁起来再发送。")]),v._v(" "),t("li",[v._v("接收数据时，A 用钥匙解开锁，即可得到数据。除 A 以外，其他人没有钥匙，也就获取不到数据。")]),v._v(" "),t("li",[v._v("实现了单向通信加密。")])])]),v._v(" "),t("li",[v._v("对称加密\n"),t("ul",[t("li",[v._v("A、B 双方都有一把相同的钥匙和一个公共的锁，每次发送数据时，都把数据放在锁里进行发送。")]),v._v(" "),t("li",[v._v("接收数据时，A、B 双方就用各自的钥匙来解锁。其他人没有钥匙，也就获取不到数据。")]),v._v(" "),t("li",[v._v("实现了双向通信加密。")])])])]),v._v(" "),t("p",[v._v("互联网通信是双向的，所以我们需要使用对称加密，可是，怎样才能保证通信双方都有一把相同的钥匙呢？")]),v._v(" "),t("p",[v._v("目前的解决方案：")]),v._v(" "),t("ul",[t("li",[v._v("先使用非对称加密，进行秘钥协商，让通信双方拿到相同的钥匙。")]),v._v(" "),t("li",[v._v("然后使用对称加密，进行加密传输。")])]),v._v(" "),t("p",[v._v("秘钥协商过程如图：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.yinhengli.com/image-20201220213646273.png",alt:""}})]),v._v(" "),t("p",[v._v("图中划重点：")]),v._v(" "),t("ol",[t("li",[v._v("客户端发送自身支持的加密算法。")]),v._v(" "),t("li",[v._v("服务器端选择一种加密算法，同时返回数字证书。")]),v._v(" "),t("li",[v._v("客户端确认证书有效。")]),v._v(" "),t("li",[v._v("客户端生成随机数，并使用证书中的服务器公钥加密，然后发送给服务器。")]),v._v(" "),t("li",[v._v("服务器端使用私钥解密，获得随机数。")]),v._v(" "),t("li",[v._v("双方使用第 2 步确定的加密算法，把随机数进行加密，即可获得相同的对称加密秘钥。")])]),v._v(" "),t("p",[v._v("Ok，秘钥协商之后，我们的 SSL 安全层也就建好了。")]),v._v(" "),t("p",[v._v("秘钥协商时存在一个问题：")]),v._v(" "),t("blockquote",[t("p",[v._v("秘钥协商时，怎么保证是和真正的服务器在协商，而不是一个中间人呢？")]),v._v(" "),t("p",[v._v("答："),t("strong",[v._v("数字证书")]),v._v("。")])]),v._v(" "),t("p",[v._v("数字证书重点关注 2 个部分：")]),v._v(" "),t("ul",[t("li",[v._v("服务器公钥")]),v._v(" "),t("li",[v._v("数字签名")])]),v._v(" "),t("p",[v._v("其中，数字签名又是由服务器公钥和证书私钥加密生成的，目的是为了防止服务器公钥被篡改。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://lmjben.github.io/blog/osi-https-hash1.png",alt:""}})]),v._v(" "),t("p",[v._v("有了数字证书，客户端就能通过验证证书，来判断服务器是否是真正的服务器了。")]),v._v(" "),t("p",[v._v("验证逻辑如下：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://lmjben.github.io/blog/osi-https-hash2.png",alt:""}})]),v._v(" "),t("p",[v._v("可以看到，数字证书通过同样的算法进行解密，如果得到相同的信息摘要，就能保证数据是有效的，如果不一致，则会验证失败，拒绝后续的请求。")]),v._v(" "),t("p",[v._v("到这里为止，所有的准备工作都就绪了，接下来才是发送 HTTP 请求。")]),v._v(" "),t("h3",{attrs:{id:"发送-http-请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发送-http-请求"}},[v._v("#")]),v._v(" 发送 HTTP 请求")]),v._v(" "),t("p",[v._v("HTTP 协议其实就是制定了一个通信规则，规定了客户端和服务器之间的通信格式。")]),v._v(" "),t("p",[v._v("以请求 baidu 首页为例：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.yinhengli.com/iShot2020-12-24-08.36.10.png",alt:""}})]),v._v(" "),t("p",[v._v("如上图所示，发起 HTTP 请求时，必须遵守以下规则：")]),v._v(" "),t("ul",[t("li",[v._v("请求方法（必填） "),t("code",[v._v("GET")])]),v._v(" "),t("li",[v._v("请求地址（必填） "),t("code",[v._v("/")])]),v._v(" "),t("li",[v._v("HTTP 协议版本（必填） "),t("code",[v._v("1.1")])]),v._v(" "),t("li",[v._v("其他 HTTP 头部字段（可选） "),t("code",[v._v("Host")]),v._v("、"),t("code",[v._v("User-Agent")]),v._v("、"),t("code",[v._v("Accept")])]),v._v(" "),t("li",[v._v("请求参数，放在空行后面（可选）")])]),v._v(" "),t("p",[v._v("服务器响应请求时，同样遵守了 HTTP 响应规则：")]),v._v(" "),t("ul",[t("li",[v._v("HTTP 协议版本（必填） "),t("code",[v._v("1.1")])]),v._v(" "),t("li",[v._v("响应状态码（必填） "),t("code",[v._v("200")])]),v._v(" "),t("li",[v._v("状态码描述（必填） "),t("code",[v._v("OK")])]),v._v(" "),t("li",[v._v("其他 HTTP 头部字段（可选） "),t("code",[v._v("Date")]),v._v("、"),t("code",[v._v("Server")]),v._v("、"),t("code",[v._v("ETag")]),v._v("、"),t("code",[v._v("Last-Modified")]),v._v(" 等")]),v._v(" "),t("li",[v._v("请求参数，放在空行后面（可选）")])]),v._v(" "),t("p",[v._v("只要我们遵守这个规则，就能进行 HTTP 通信了。")]),v._v(" "),t("p",[v._v("到目前为止，我们已经分析完成了数据请求的所有过程，你是否都理解了呢？")]),v._v(" "),t("h2",{attrs:{id:"思考与总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#思考与总结"}},[v._v("#")]),v._v(" 思考与总结")]),v._v(" "),t("p",[v._v("本文通过一个网络请求，对整个 HTTP、TCP、IP、以太网等协议进行了流程化分析，最后再梳理一下：")]),v._v(" "),t("ol",[t("li",[v._v("请求 baidu.com。")]),v._v(" "),t("li",[v._v("DNS 解析 baidu.com，得到 IP 地址。")]),v._v(" "),t("li",[v._v("建立 TCP 连接。")]),v._v(" "),t("li",[v._v("IP 协议通过算法，计算出一条通往服务器最优路径。")]),v._v(" "),t("li",[v._v("IP 沿着路径跳转时，会通过 ARP 协议把 IP 地址转换成 Mac 地址。")]),v._v(" "),t("li",[v._v("以太网通过 Mac 地址，找到通信双方的硬件接口。")]),v._v(" "),t("li",[v._v("物理层通过网线作为载体，在两个硬件接口之间传输比特信号。")]),v._v(" "),t("li",[v._v("TCP 连接建立完毕。")]),v._v(" "),t("li",[v._v("建立 SSL 安全层。")]),v._v(" "),t("li",[v._v("发送 HTTP 请求。")])]),v._v(" "),t("p",[v._v("最后，如果你对此有任何想法，欢迎留言评论！")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.yinhengli.com/qianduanrizhi_guanzhu.png",alt:""}})])])}),[],!1,null,null,null);_.default=s.exports}}]);