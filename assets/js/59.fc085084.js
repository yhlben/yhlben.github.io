(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{198:function(s,a,e){"use strict";e.r(a);var t=e(0),n=Object(t.a)({},function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"docker-使用总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-使用总结","aria-hidden":"true"}},[s._v("#")]),s._v(" Docker 使用总结")]),s._v(" "),e("p",[s._v("最近在学习 Docker，并用 Docker 重新部署了"),e("a",{attrs:{href:"https://github.com/yhlben/cdfang-spider",target:"_blank",rel:"noopener noreferrer"}},[s._v("cdfang-spider"),e("OutboundLink")],1),s._v("项目，使用 docker 后确实大幅度地降低了部署难度。如果你也想用 Docker 来部署自己的项目，那就让我们一起往下看。")]),s._v(" "),e("p",[s._v("本文通过以下 3 个方面来聊聊 Docker：")]),s._v(" "),e("ul",[e("li",[s._v("Docker 发展史。")]),s._v(" "),e("li",[s._v("Docker 基础。")]),s._v(" "),e("li",[s._v("Docker 项目实战。")])]),s._v(" "),e("h2",{attrs:{id:"docker-发展史"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-发展史","aria-hidden":"true"}},[s._v("#")]),s._v(" Docker 发展史")]),s._v(" "),e("h3",{attrs:{id:"上古时代"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#上古时代","aria-hidden":"true"}},[s._v("#")]),s._v(" 上古时代")]),s._v(" "),e("p",[s._v("在很久以前，发布一个 App 应用，应该是这样的。首先购买一台物理服务器，然后手动安装对应的操作系统，搭建 App 应用运行环境，部署 App 应用，最后才能被其他人访问。这样做看似没毛病，但可能会造成几个问题：")]),s._v(" "),e("ul",[e("li",[s._v("部署非常慢。\n"),e("ul",[e("li",[s._v("购买物理服务器到收货需要时间。")]),s._v(" "),e("li",[s._v("手动安装操作系统需要时间。")]),s._v(" "),e("li",[s._v("安装 App 应用以及对应的环境需要时间。")])])]),s._v(" "),e("li",[s._v("成本非常高。\n"),e("ul",[e("li",[s._v("物理服务器很贵。")])])]),s._v(" "),e("li",[s._v("资源浪费。\n"),e("ul",[e("li",[s._v("如果项目很小，不能充分利用这台服务器的资源。")])])]),s._v(" "),e("li",[s._v("难于迁移和扩展。\n"),e("ul",[e("li",[s._v("如果 CPU，内存，硬盘不够，只能加物理设备，但这个是有上限的。")])])]),s._v(" "),e("li",[s._v("可能会被限定硬件厂商。")])]),s._v(" "),e("h3",{attrs:{id:"虚拟化时代"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#虚拟化时代","aria-hidden":"true"}},[s._v("#")]),s._v(" 虚拟化时代")]),s._v(" "),e("p",[s._v("为了解决物理设备的诸多问题，出现了虚拟机。虚拟机出现之后大大地降低了部署难度，要想部署一个应用程序，新建一个虚拟机就可以了，还可以根据应用程序的大小，分配合适的系统资源。")]),s._v(" "),e("p",[s._v("虚拟技术有以下几个特点：")]),s._v(" "),e("ul",[e("li",[s._v("一个物理机的资源分配到了不同的虚拟机里。")]),s._v(" "),e("li",[s._v("很容易扩展，加物理机 / 虚拟机。")]),s._v(" "),e("li",[s._v("很容易云化，阿里云，AWS 等。")])]),s._v(" "),e("p",[s._v("虚拟化技术实现了"),e("strong",[s._v("物理层的隔离")]),s._v("，但却还有以下问题：")]),s._v(" "),e("ul",[e("li",[s._v("每一个虚拟机都是一个完整的操作系统，每次新建都得手动安装一遍。")]),s._v(" "),e("li",[s._v("虚拟机中的项目环境每次也需要重新安装。")]),s._v(" "),e("li",[s._v("虚拟机本身消耗的系统资源也比较多。")])]),s._v(" "),e("h3",{attrs:{id:"容器化时代"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容器化时代","aria-hidden":"true"}},[s._v("#")]),s._v(" 容器化时代")]),s._v(" "),e("p",[s._v("为了更方便的部署项目，出现了容器化技术，主要有以下几个特点：")]),s._v(" "),e("ul",[e("li",[s._v("实现应用程序及其环境打包。")]),s._v(" "),e("li",[s._v("实现应用之间相互隔离、共享同一个操作系统内核。")]),s._v(" "),e("li",[s._v("容器本身比较轻，相比虚拟机，占用的系统资源更少。")])]),s._v(" "),e("p",[s._v("Docker 是容器化技术的一种，也是最流行的一个。Docker 提供了一种隔离机制，它将不同应用程序的依赖项和库打包在一起，运行在不同的容器中，从而实现"),e("strong",[s._v("应用层的隔离")]),s._v("。")]),s._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",[s._v("容器化技术大都是基于 Linux 内核提供的两个机制：Cgroups（实现资源按需分配）和 Namespace（实现任务隔离）。")])]),s._v(" "),e("h3",{attrs:{id:"虚拟化-vs-容器化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#虚拟化-vs-容器化","aria-hidden":"true"}},[s._v("#")]),s._v(" 虚拟化 vs 容器化")]),s._v(" "),e("p",[s._v("虚拟化和容器化都是目前主流的的部署技术，两者之间的差别如下：")]),s._v(" "),e("ul",[e("li",[s._v("虚拟机技术已经发展了很多年，配套技术和标准都已经标准化了，而容器最近几年才兴起，配套技术和标准还在完善中。")]),s._v(" "),e("li",[s._v("虚拟机由于有 GuestOS(虚拟机操作系统) 存在，可以和宿主机运行不同 OS，而容器只能支持和宿主机内核相同的操作系统，隔离性相对较差。")]),s._v(" "),e("li",[s._v("容器比虚拟机明显更轻量级，对宿主机操作系统而言，容器就跟一个进程差不多。因此容器有着更快的启动速度、更方便的集群管理等优点。同时由于没有 GuestOS 存在，在容器中运行应用和直接在宿主机上几乎没有性能损失，性能上优于虚拟机。")])]),s._v(" "),e("h2",{attrs:{id:"docker-基础"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-基础","aria-hidden":"true"}},[s._v("#")]),s._v(" Docker 基础")]),s._v(" "),e("p",[s._v("Docker 的核心是在 Docker Engine 层实现应用层的隔离。")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("Docker 分层")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("Application（应用层）")])]),s._v(" "),e("tr",[e("td",[s._v("Container（容器层）")])]),s._v(" "),e("tr",[e("td",[s._v("Docker Engine (隔离层)")])]),s._v(" "),e("tr",[e("td",[s._v("Host OS 操作系统")])]),s._v(" "),e("tr",[e("td",[s._v("infrastructure(基础设施)")])])])]),s._v(" "),e("p",[s._v("Docker 分为 Client 和 Server 两个部分，我们在 Client 中执行 Docker 命令，最后创建的 Container 和 Image 则会在 Server 中运行。Dcoker 架构如下图所示：")]),s._v(" "),e("p",[e("img",{attrs:{src:"project-docker.png",alt:"Docker 架构"}})]),s._v(" "),e("h3",{attrs:{id:"image"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#image","aria-hidden":"true"}},[s._v("#")]),s._v(" Image")]),s._v(" "),e("p",[s._v("Image 主要用来打包应用程序以及它的依赖环境，为 Container 提供必要的环境以及安装好的应用程序。Image 本身并不能执行，只能通过 Container 去运行。")]),s._v(" "),e("p",[s._v("Image 主要有以下几点特征：")]),s._v(" "),e("ul",[e("li",[s._v("文件和 meta data 的集合（root filesystem）。")]),s._v(" "),e("li",[s._v("分层的，并且每一层都可以添加改变删除文件，成为一个新的 Image。")]),s._v(" "),e("li",[s._v("不同 Image 可以共享相同的底层。")]),s._v(" "),e("li",[s._v("Image 本身是只读的。")])]),s._v(" "),e("p",[s._v("Image 可以通过 Dockerfile 去构建，也可以通过 DockerHub 上去拉取。")]),s._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",[s._v("Dockerfile 是一个文本文件，其中包含构建 Image 的所有命令。Docker 可以通过 "),e("code",[s._v("docker build")]),s._v(" 从 Dockerfile 中读取命令来自动构建 Image。常用配置信息可以参考下文 Dockerfile 文件中的注释，也建议大家阅读官方文档 "),e("a",{attrs:{href:"https://docs.docker.com/engine/reference/builder/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Dockerfile reference"),e("OutboundLink")],1)])]),s._v(" "),e("h3",{attrs:{id:"container"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#container","aria-hidden":"true"}},[s._v("#")]),s._v(" Container")]),s._v(" "),e("p",[s._v("Container 是运行 Image 的实例，通过 "),e("code",[s._v("docker run image")]),s._v("即可启动并运行一个 Container。")]),s._v(" "),e("p",[s._v("Container 主要有以下几点特征：")]),s._v(" "),e("ul",[e("li",[s._v("通过 Image 创建。")]),s._v(" "),e("li",[s._v("在 Image 之上建立一个 Container 层（可读写）。")]),s._v(" "),e("li",[s._v("类比面向对象：类(Image) 和实例(Container)。")]),s._v(" "),e("li",[s._v("Image 负责 App 的存储和分发，Container 负责运行 App。")])]),s._v(" "),e("h3",{attrs:{id:"networks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#networks","aria-hidden":"true"}},[s._v("#")]),s._v(" Networks")]),s._v(" "),e("p",[s._v("使用 Dcoker 部署项目常常会生成很多个容器，这些容器默认只能通过 ip 地址进行访问，但新建一个容器所产生的 ip 地址是不可控的，这就给容器之间通信带来了一定的麻烦。Docker 中使用 Network 来管理容器之间的通信，只要两个 Conteiner 处于同一个 Network 之中，就可以通过容器名去互相通信。")]),s._v(" "),e("p",[s._v("Docker 中内置 5 中类型的 Network :")]),s._v(" "),e("ul",[e("li",[s._v("bridge（相同 bridge 中的 container 可以相互访问）。")]),s._v(" "),e("li",[s._v("host(将 container 与宿主机的网络相连通，虽然很直接，但是却破获了 container 的隔离性)。")]),s._v(" "),e("li",[s._v("none 禁用所有网络。")]),s._v(" "),e("li",[s._v("overlay 集群使用。")]),s._v(" "),e("li",[s._v("macvlan。")])]),s._v(" "),e("p",[s._v("除了这 5 中 Network 之外，用户也可以自定义编写 Network Plugin。")]),s._v(" "),e("h3",{attrs:{id:"docker-compose"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose","aria-hidden":"true"}},[s._v("#")]),s._v(" Docker Compose")]),s._v(" "),e("p",[s._v("Docker Compose 是一个工具，这个工具可以通过一个 yml 文件定义多容器的 Docker 应用。通过一条命令就可以根据 yml 文件的定义去创建或者管理多个容器。接下来分别使用命令行和 Docker Compose 的方式来对比一下创建容器的方式。")]),s._v(" "),e("h4",{attrs:{id:"不使用-docker-compose-创建容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#不使用-docker-compose-创建容器","aria-hidden":"true"}},[s._v("#")]),s._v(" 不使用 Docker Compose 创建容器")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker pull yhlben/cdfang-spider\ndocker pull mongo\ndocker network create webapp-network\ndocker run -d --network webapp-network -v ~/data/db:/data/db mongo\ndocker run -p 8082:8082 --network webapp-network -d yhlben/cdfang-spider\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("可见，手动创建容器，需要在命令行中手动执行很多命令，这些命令一旦敲错了，就得重来，不便于容器的管理。")]),s._v(" "),e("h4",{attrs:{id:"使用-docker-compose-创建容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-docker-compose-创建容器","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用 Docker Compose 创建容器")]),s._v(" "),e("p",[s._v("1、新建 docker-compose.yml 文件。")]),s._v(" "),e("div",{staticClass:"language-yml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3.7'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("database")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" mongo\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" always\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ~/data/db"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/data/db\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" webapp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("network\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("web")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" yhlben/cdfang"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("spider\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("depends_on")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" database\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 8082"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8082")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" webapp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("network\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("webapp-network")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("driver")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" bridge\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br")])]),e("p",[s._v("2、运行 docker-compose")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker-compose up -d\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("可见，使用 Docker Compose 创建容器只需要提前编写好 yml 文件，然后执行一条命令就行了，比起手动敲命令，更加方便。")]),s._v(" "),e("p",[s._v("除此之外，Docker Compose 还可以使用 "),e("code",[s._v("docker-compose -scale")]),s._v(" 扩展多个相容的容器，用来实现负载均衡，可以扩容，也可以减容。例如：实现无缝部署项目，先扩容一个新的 Container，当 Container 启动完毕后，加入到集群中，然后更新老容器，更新完后再加入集群中。")]),s._v(" "),e("h4",{attrs:{id:"docker-compose-配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-配置","aria-hidden":"true"}},[s._v("#")]),s._v(" Docker Compose 配置")]),s._v(" "),e("p",[s._v("Docker Compose 的配置文件一般定义在 "),e("code",[s._v("docker-compose.yml")]),s._v(" 文件中，主要的配置项如下：")]),s._v(" "),e("ul",[e("li",[s._v("services\n"),e("ul",[e("li",[s._v("一个 service 代表一个 container，这个 container 可以从 dockerHub 中的镜像来创建，也可以使用本地 dockerfile build 出来的镜像来创建。")]),s._v(" "),e("li",[s._v("service 的启动类似 "),e("code",[s._v("docker run")]),s._v("，可以给 service 指定 network 和 volume 的引用。")])])]),s._v(" "),e("li",[s._v("networks\n"),e("ul",[e("li",[s._v("定义 networks ，相当于执行 "),e("code",[s._v("docker network create xxxx")]),s._v("。")])])]),s._v(" "),e("li",[s._v("volumes\n"),e("ul",[e("li",[s._v("定义 volume ，相当于执行 "),e("code",[s._v("docker volume create xxx")]),s._v("。")])])])]),s._v(" "),e("p",[s._v("更多配置项可以参考"),e("a",{attrs:{href:"https://docs.docker.com/compose/compose-file/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档 compose-file"),e("OutboundLink")],1)]),s._v(" "),e("h2",{attrs:{id:"docker-项目实战"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-项目实战","aria-hidden":"true"}},[s._v("#")]),s._v(" Docker 项目实战")]),s._v(" "),e("p",[s._v("接下来以 "),e("a",{attrs:{href:"https://github.com/yhlben/cdfang-spider",target:"_blank",rel:"noopener noreferrer"}},[s._v("cdfang-spider"),e("OutboundLink")],1),s._v(" 项目为例，使用 Docker 部署项目。")]),s._v(" "),e("h3",{attrs:{id:"全手动部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全手动部署","aria-hidden":"true"}},[s._v("#")]),s._v(" 全手动部署")]),s._v(" "),e("p",[s._v("1、编写 Dockerfile 文件。")]),s._v(" "),e("div",{staticClass:"language-docker line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-docker"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 加载基础镜像")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" mhart/alpine"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("node\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注释")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LABEL")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("maintainer")]),s._v(" = "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yhlben <yinhengliben@gmail.com>"')]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建工作目录")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" rm "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("rf /app\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" mkdir /app\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /app\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装项目依赖")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" . /app\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" npm install\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" npm run build\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" mv ./dist/* ./\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 对外暴露端口")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXPOSE")]),s._v(" 8082\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动 Image 时执行命令")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" BUILD_ENV=docker node app.js\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br")])]),e("p",[s._v("2、通过 Dockerfile 文件构建 Image。")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker build -t yhlben/cdfang-spider "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("3、拉取 mongo 官方 Image。")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker pull mongo\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("4、创建 network，让两个容器可以相互通信。")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker network create webapp-network\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("5、运行容器")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker run -d --network webapp-network -v ~/data/db:/data/db mongo\ndocker run -p 8082:8082 --network webapp-network -d yhlben/cdfang-spider\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("6、通过访问 localhost:8082 访问项目。")]),s._v(" "),e("h3",{attrs:{id:"自动化部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自动化部署","aria-hidden":"true"}},[s._v("#")]),s._v(" 自动化部署")]),s._v(" "),e("p",[s._v("1、编写 Dockerfile 文件。")]),s._v(" "),e("div",{staticClass:"language-docker line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-docker"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 加载基础镜像")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" mhart/alpine"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("node\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注释")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LABEL")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("maintainer")]),s._v(" = "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yhlben <yinhengliben@gmail.com>"')]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建工作目录")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" rm "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("rf /app\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" mkdir /app\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /app\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装项目依赖")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" . /app\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" npm install\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" npm run build\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" mv ./dist/* ./\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 对外暴露端口")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXPOSE")]),s._v(" 8082\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动 Image 时执行命令")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" BUILD_ENV=docker node app.js\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br")])]),e("p",[s._v("2、在 dockerHub 上授权 github 项目，这样当 github 项目有更新时，会自动执行 Dockerfile 进行构建，并将构建结果保存到 dockerHub 仓库中。")]),s._v(" "),e("p",[s._v("3、编写 docker-compose.yml 文件。")]),s._v(" "),e("div",{staticClass:"language-yml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3.7'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("database")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" mongo\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" always\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ~/data/db"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/data/db\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" webapp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("network\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("web")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" yhlben/cdfang"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("spider\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("depends_on")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" database\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 8082"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8082")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" webapp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("network\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("webapp-network")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("driver")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" bridge\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br")])]),e("p",[s._v("4、一键启动，确保已安装 docker-compose。")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("docker-compose up -d\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("5、通过访问 localhost:8082 访问项目。")]),s._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),e("p",[s._v("通过 Docker 部署完项目后，感受很不错，主要分以下几点：")]),s._v(" "),e("ul",[e("li",[s._v("使用 Docker Compose 一键启动项目。")]),s._v(" "),e("li",[s._v("再也不用在服务器上安装各种杂七杂八的环境，全部封装到 Image 里，启动一个 Container 跑起来就行了，不用的时候直接删除 Container 就行了，服务器上不会受到任何污染。")]),s._v(" "),e("li",[s._v("对于耗时的 Image 构建过程，直接交给 dockerHub 去自动构建。")])]),s._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",[s._v("本项目使用单机部署，即所有的容器都在同一台服务器上。除此之外，docker 还支持分布式容器部署，可以使用 docker swarm 或者 kubernetes 来管理，目前还在学习中，争取早日整理好分享给大家，感谢大家支持！")])])])},[],!1,null,null,null);a.default=n.exports}}]);