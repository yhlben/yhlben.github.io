(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{217:function(t,e,a){"use strict";a.r(e);var i=a(0),s=Object(i.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git-常用使用方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-常用使用方式","aria-hidden":"true"}},[t._v("#")]),t._v(" Git 常用使用方式")]),t._v(" "),a("p",[t._v("本文总结一下常用到的 git 方法，和一些自己的思考。")]),t._v(" "),a("h2",{attrs:{id:"基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本使用")]),t._v(" "),a("p",[t._v("一个 github 仓库，多人开发的案例。")]),t._v(" "),a("ul",[a("li",[t._v("git clone github/xxx 克隆仓库。")]),t._v(" "),a("li",[t._v("git checkout -b feature/xxx 新建自己的分支。")]),t._v(" "),a("li",[t._v("修改代码。")]),t._v(" "),a("li",[t._v("git add xxx 暂存一段代码。")]),t._v(" "),a("li",[t._v("git commit -m 'feat: xxx' 把暂存区的所有修改提交到分支上。")]),t._v(" "),a("li",[t._v("git push 推送到远程仓库。")]),t._v(" "),a("li",[t._v("在 github 上提交 pull request 。")]),t._v(" "),a("li",[t._v("合并后删除 feature/xxx 分支。")])]),t._v(" "),a("h3",{attrs:{id:"基本操作-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本操作-api","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本操作 API")]),t._v(" "),a("ul",[a("li",[t._v("git status 查看状态。")]),t._v(" "),a("li",[t._v("git diff 查看工作区和版本库里面最新版本的区别。")]),t._v(" "),a("li",[t._v("git log 查看提交记录。")]),t._v(" "),a("li",[t._v("git reflog 查看每一次命令记录。")]),t._v(" "),a("li",[t._v("git reset --hard commit_id 切换到指定提交版本。")]),t._v(" "),a("li",[t._v("git revert HEAD 发起一个新的 commit，用来撤销最后一次 commit。\n"),a("ul",[a("li",[t._v("git revert 不能操作文件")])])]),t._v(" "),a("li",[t._v("git stash 将当前改动先存起来。git stash pop 释放之前存入的改动。")])]),t._v(" "),a("h3",{attrs:{id:"分支管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支管理","aria-hidden":"true"}},[t._v("#")]),t._v(" 分支管理")]),t._v(" "),a("p",[t._v("规范化的开发需要严格按照分支规范来进行，我们一般这样管理分支。")]),t._v(" "),a("ul",[a("li",[t._v("master 线上代码分支。")]),t._v(" "),a("li",[t._v("develop 主开发分支。\n"),a("ul",[a("li",[t._v("当无项目开发时，和 master 分支保持一致。")]),t._v(" "),a("li",[t._v("当有项目开发时，会包含正在开发的项目代码。")])])]),t._v(" "),a("li",[t._v("feature/xxx 个人开发分支。\n"),a("ul",[a("li",[t._v("从 develop 分支上拉取代码，进行功能开发。")]),t._v(" "),a("li",[t._v("开发完成后，合并到 develop 分支。")])])]),t._v(" "),a("li",[t._v("release 预发布分支。\n"),a("ul",[a("li",[t._v("从 develop 分支上拉取代码，交给测试去测。")]),t._v(" "),a("li",[t._v("测试发现比较大的 bug，在 feature 分支上修改后，合到 develop 分支上，在重新拉取。")]),t._v(" "),a("li",[t._v("测试发现的小 bug，直接在 release 分支上修改。")]),t._v(" "),a("li",[t._v("合并到 master 和 develop 分支上。")])])]),t._v(" "),a("li",[t._v("hotfix 线上紧急修复分支。\n"),a("ul",[a("li",[t._v("从 master 分支拉取，修改代码")]),t._v(" "),a("li",[t._v("测试完毕后，直接合回 master 和 develop 分支。")])])])]),t._v(" "),a("h4",{attrs:{id:"分支相关的-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支相关的-api","aria-hidden":"true"}},[t._v("#")]),t._v(" 分支相关的 API")]),t._v(" "),a("ul",[a("li",[t._v("查看分支：git branch")]),t._v(" "),a("li",[t._v("创建分支：git branch [name]")]),t._v(" "),a("li",[t._v("切换分支：git checkout [name]")]),t._v(" "),a("li",[t._v("创建 + 切换分支：git checkout -b [name]")]),t._v(" "),a("li",[t._v("合并某分支到当前分支：git merge [name]")]),t._v(" "),a("li",[t._v("删除分支：git branch -d [name]")]),t._v(" "),a("li",[t._v("建立本地分支和远程分支的关联：git branch --set-upstream branch-name origin/branch-name")])]),t._v(" "),a("p",[t._v("常规的 git 方法已经满足大部分的需求了，在多人开发的项目中，只要做好明确分工，减少代码冲突，就不会有多大的问题。")]),t._v(" "),a("h2",{attrs:{id:"进阶用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进阶用法","aria-hidden":"true"}},[t._v("#")]),t._v(" 进阶用法")]),t._v(" "),a("p",[t._v("常规的 git 命令只能在理想情况下使用，面对一些其他情况，我们应该如何应对呢？")]),t._v(" "),a("ul",[a("li",[t._v("怎么获取其他分支的 commit？")]),t._v(" "),a("li",[t._v("怎么合并多个 commit？")]),t._v(" "),a("li",[t._v("什么时候使用 git rebase？")])]),t._v(" "),a("h3",{attrs:{id:"获取其他分支的-commit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取其他分支的-commit","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取其他分支的 commit")]),t._v(" "),a("p",[t._v("在 git 分支中有两个重要的概念：流水线，head 头。我们可以把 git 中的每一个分支想象成一条流水线。每一次 commit 都会在流水线上产生一个记录，同时 head 会指向最新的 commit。不同的分支控制着不同的流水线，可以通过 git merge 或者 git rebase 将流水线合并在一起。")]),t._v(" "),a("p",[t._v("使用 git cherry-pick 操作 commit，可以将别的分支的一个或多个 commit 合到当前分支上来。")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" cherry-pick commit_id\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"合并多个-commit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#合并多个-commit","aria-hidden":"true"}},[t._v("#")]),t._v(" 合并多个 commit")]),t._v(" "),a("p",[t._v("如果要合并最后 5 次提交记录为 1 次提交记录，可以先撤销过去的 5 个 commit，然后再建一个新的。")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset HEAD~5\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -am "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"这是合并后的commit msg"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push --force\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("使用 git rebase 也可以达到同样的效果，下文将进行介绍。")]),t._v(" "),a("h4",{attrs:{id:"使用-git-rebase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-git-rebase","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用 git rebase")]),t._v(" "),a("p",[t._v("git rebase 和 git merge 都可以用来合并分支，但合并方式不相同。")]),t._v(" "),a("ul",[a("li",[t._v("git merge 是将要合并的分支流水线和当前分支流水线汇合成后一条新的流水线。")]),t._v(" "),a("li",[t._v("git rebase 是将要合并的分支流水线，直接接到当前分支的流水线上。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"project-git-rebase.jpg",alt:"git rebase img"}})]),t._v(" "),a("p",[t._v("图中可以看到，git rebase 过后的分支是一条流水线，而 git merge 会是两条流水线汇合成成一条。")]),t._v(" "),a("p",[t._v("git rebase 使用场景：")]),t._v(" "),a("ul",[a("li",[t._v("如果父分支落后太多，使用 git rebase 先拉取一下。")]),t._v(" "),a("li",[t._v("合并多个 commits。")])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 合并最后5个commit")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase -i HEAD~5\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("git rebase 命令的 i 参数表示互动（interactive），这时 git 会打开一个互动界面，进行下一步操作。互动界面中，先列出当前分支最新的几个 commit（越下面越新）。每个 commit 前面有一个操作命令，默认是 pick，表示该行 commit 被选中，要进行 rebase 操作。还有一些其他操作命令：")]),t._v(" "),a("ul",[a("li",[t._v("pick：正常选中。")]),t._v(" "),a("li",[t._v("reword：选中，并且修改提交信息。")]),t._v(" "),a("li",[t._v("edit：选中，rebase 时会暂停，允许你修改这个 commit。")]),t._v(" "),a("li",[t._v("squash：选中，会将当前 commit 与上一个 commit 合并。")]),t._v(" "),a("li",[t._v("fixup：与 squash 相同，但不会保存当前 commit 的提交信息。")]),t._v(" "),a("li",[t._v("exec：执行其他 shell 命令。")])]),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("git rebase 黄金准则")]),t._v(" "),a("p",[t._v("不要在公共分支上使用 git rebase。")])]),t._v(" "),a("h2",{attrs:{id:"参考链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考链接","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000005937408",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git Rebase 原理以及黄金准则详解"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/kidsitcn/p/5339382.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("git rebase vs git merge 详解"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/08/git-use-process.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git 使用规范流程"),a("OutboundLink")],1)])])])},[],!1,null,null,null);e.default=s.exports}}]);