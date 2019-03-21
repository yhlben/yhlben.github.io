(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{171:function(_,v,i){"use strict";i.r(v);var l=i(0),t=Object(l.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var _=this,v=_.$createElement,i=_._self._c||v;return i("div",{staticClass:"content"},[i("h1",{attrs:{id:"《网络是怎么连接的》总结"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#《网络是怎么连接的》总结","aria-hidden":"true"}},[_._v("#")]),_._v(" 《网络是怎么连接的》总结")]),_._v(" "),i("p",[_._v("书中从输入网址到显示页面信息这个一个流程做了很细节的分析，先列一个提纲：")]),_._v(" "),i("ul",[i("li",[_._v("客户端\n"),i("ul",[i("li",[_._v("浏览器")]),_._v(" "),i("li",[_._v("socket 库")]),_._v(" "),i("li",[_._v("tcp 协议栈")]),_._v(" "),i("li",[_._v("ip 协议栈")]),_._v(" "),i("li",[_._v("网卡")])])]),_._v(" "),i("li",[_._v("客户端局域网\n"),i("ul",[i("li",[_._v("双绞线")]),_._v(" "),i("li",[_._v("集线器")]),_._v(" "),i("li",[_._v("交换机")]),_._v(" "),i("li",[_._v("路由器")])])]),_._v(" "),i("li",[_._v("运营商网络\n"),i("ul",[i("li",[_._v("待总结")])])]),_._v(" "),i("li",[_._v("服务器\n"),i("ul",[i("li",[_._v("防火墙")]),_._v(" "),i("li",[_._v("缓存服务器")]),_._v(" "),i("li",[_._v("网卡")]),_._v(" "),i("li",[_._v("ip 协议栈")]),_._v(" "),i("li",[_._v("tcp 协议栈")]),_._v(" "),i("li",[_._v("socket 库")]),_._v(" "),i("li",[_._v("web 服务器")])])])]),_._v(" "),i("h2",{attrs:{id:"客户端"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#客户端","aria-hidden":"true"}},[_._v("#")]),_._v(" 客户端")]),_._v(" "),i("p",[_._v("客户端发起一个请求，会经过一下几个过程：")]),_._v(" "),i("ul",[i("li",[_._v("解析 url ，获取需要请求的文件。")]),_._v(" "),i("li",[_._v("dns 解析域名，获取 ip 地址（从跟域名开始查找，例如：a.b.com，先找 com，再找 b，再找 a）。")]),_._v(" "),i("li",[_._v("浏览器生成 http 消息，并转交给 socket 库。")]),_._v(" "),i("li",[i("strong",[_._v("进入 tcp 协议栈")]),_._v(" "),i("ul",[i("li",[_._v("创建 tcp 头（包括发送方，接收方端口号，ip 等信息）。")]),_._v(" "),i("li",[_._v("根据 tcp 头部信息，找到需要连接的套接字。")]),_._v(" "),i("li",[_._v("连接套接字（3 次握手）。")]),_._v(" "),i("li",[_._v("将大的数据包拆分成小的数据包。")]),_._v(" "),i("li",[_._v("通过传递 ACK 和序号，验证双方收到的信息是否可靠。")]),_._v(" "),i("li",[i("strong",[_._v("滑动窗口")]),_._v("，管理 ACK，协商服务器端处理能力。（每一次请求都会返回服务器端剩余的带宽，当服务器带宽很小时，发送方也会减慢上传数据）。")]),_._v(" "),i("li",[_._v("每一个请求响应都会返回服务带宽和 ACK，如果请求很快，则会传输大量的验证信息，tcp 会进行合并处理（即：每次发送带宽信息时，会等待一段时间，如果时间内有其他的链接占用了带宽，也会合并后，发送给客户端）。")]),_._v(" "),i("li",[i("strong",[_._v("拥塞处理")]),_._v("，慢开始算法，拥塞避免算法等，在传输开始时将发送窗口慢慢指数级扩大。（避免网络负载过大）。")])])]),_._v(" "),i("li",[i("strong",[_._v("进入 ip 协议栈")]),_._v(" "),i("ul",[i("li",[_._v("根据服务器 ip，包裹 ip 头部。")]),_._v(" "),i("li",[_._v("根据网卡的唯一 mac 地址，包裹 mac 头部。")])])]),_._v(" "),i("li",[i("strong",[_._v("进入网卡")]),_._v(" "),i("ul",[i("li",[_._v("收到 ip 包裹的包，检查以太网可发送状态。")]),_._v(" "),i("li",[_._v("将数据信号的包转换成电信号，通过双绞线发送出去。")])])])]),_._v(" "),i("h2",{attrs:{id:"客户端局域网"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#客户端局域网","aria-hidden":"true"}},[_._v("#")]),_._v(" 客户端局域网")]),_._v(" "),i("ul",[i("li",[_._v("信号通过"),i("strong",[_._v("双绞线")]),_._v("，到达集线器。\n"),i("ul",[i("li",[_._v("双绞线的作用是为了抑制噪音，防止其他信号干扰。")])])]),_._v(" "),i("li",[i("strong",[_._v("集线器")]),_._v("将信号广播到所有端口，这样信号便能到达交换机。\n"),i("ul",[i("li",[_._v("集线器：将一些机器连接起来组成一个局域网。（OSI 第一层，物理层）")])])]),_._v(" "),i("li",[i("strong",[_._v("交换机")]),_._v(" "),i("ul",[i("li",[_._v("交换机又叫交换式集线器：根据 mac 地址表，查找 mac 地址，然后将信号发送到 mac 地址上（"),i("strong",[_._v("mac 地址对应的就是路由器")]),_._v("）。")])])]),_._v(" "),i("li",[i("strong",[_._v("路由器")]),_._v(" "),i("ul",[i("li",[_._v("根据收到的包的接收方 ip 地址查询自身的路由表找到输出端口，并将包转发到输出端口（可能是目的地，也可能是下一个路由器）。")]),_._v(" "),i("li",[_._v("地址转换，可以在转发时，对 ip 和端口号进行改写（解决公网 ip 有限问题）")]),_._v(" "),i("li",[_._v("包过滤，可以根据 mac 头，ip 头等，选择转发 or 丢弃包。")])])])]),_._v(" "),i("div",{staticClass:"tip custom-block"},[i("p",{staticClass:"custom-block-title"},[_._v("路由器和交换机的关系")]),_._v(" "),i("p",[_._v("路由器：将 ip 转发到目标地址的过程。")]),_._v(" "),i("p",[_._v("交换机：将包传给下一个路由器时，需要交换机转发。")]),_._v(" "),i("p",[_._v("路由器是在 ip 层，而交换机在 mac 层。当进行数据传递时，会经过 mac 层，在到 ip 层，如果当前 ip 没有找到目标地址，则会被转发到下一个路由器，仍然是先通过 mac 层，再到 ip 层，直到找到为止。")])]),_._v(" "),i("h2",{attrs:{id:"运营商网络"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#运营商网络","aria-hidden":"true"}},[_._v("#")]),_._v(" 运营商网络")]),_._v(" "),i("p",[_._v("这一部分设计到了很多硬件知识，我也没有完全理解，以后待完善。")]),_._v(" "),i("h2",{attrs:{id:"服务器"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#服务器","aria-hidden":"true"}},[_._v("#")]),_._v(" 服务器")]),_._v(" "),i("ul",[i("li",[i("strong",[_._v("防火墙")]),_._v("，对进入的包进行检查，判断是否允许通过。\n"),i("ul",[i("li",[_._v("通过接收方 ip 地址和发送方 ip 地址，进行过滤。")]),_._v(" "),i("li",[_._v("通过接收方端口号和发送方的端口号，进行过滤。")]),_._v(" "),i("li",[_._v("通过三次握手的方向，控制单向连接，例如只允许 web 端->服务器，或者只允许服务器->web 端发起请求。")]),_._v(" "),i("li",[_._v("控制内网 ip，禁止指定 ip 不能访问外网。")]),_._v(" "),i("li",[_._v("控制外网 ip，禁止指定 ip 外网不能访问内网。")])])]),_._v(" "),i("li",[i("strong",[_._v("缓存服务器")]),_._v("，如果用户请求的页面已经缓存在服务器上，则代替服务器想用户返回页面数据。")]),_._v(" "),i("li",[i("strong",[_._v("网卡")]),_._v("将电信号，转换成数字信息，交给协议栈。")]),_._v(" "),i("li",[i("strong",[_._v("ip 协议栈")]),_._v(" "),i("ul",[i("li",[_._v("判断是不是发给自己的包。")]),_._v(" "),i("li",[_._v("判断网络包是否经过分片。")]),_._v(" "),i("li",[_._v("检查 ip 头部，取出对应的 tcp 数据包。并转交给 tcp 模块。")])])]),_._v(" "),i("li",[i("strong",[_._v("tcp 协议栈")]),_._v(" "),i("ul",[i("li",[_._v("根据收到的包的发送方 ip 地址，发送方端口号，接收方 ip 地址，接收方端口号找到相应的套接字。")]),_._v(" "),i("li",[_._v("根据 tcp 头部，取出对应的 http 数据包。")]),_._v(" "),i("li",[_._v("将数据拼合起来并保存在接收缓冲区中。")])])]),_._v(" "),i("li",[_._v("通过 socket 库将原始的 http 数据包转交给 web 服务器。")]),_._v(" "),i("li",[_._v("web 服务器分析 http 消息的内容。\n"),i("ul",[i("li",[_._v("读取 url，转换为实际文件名。")]),_._v(" "),i("li",[_._v("检查文件访问控制，确保有权限访问文件。")]),_._v(" "),i("li",[_._v("将文件经过处理后，返回给客户端。")]),_._v(" "),i("li",[_._v("客户端根据 content-type 字段来渲染不同的内容。")])])])])])}],!1,null,null,null);v.default=t.exports}}]);