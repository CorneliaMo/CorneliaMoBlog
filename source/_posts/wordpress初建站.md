---
title: wordpress初建站
date: 2024-05-08 12:23:24
tags:
  - 杂谈
author: Cornelia
---
# wordpress初建站

#### 在经历~~九九八十一难~~之后，这个wordpress的小博客终于部署成功了

###### &emsp;&emsp;总的来说还是比较麻烦的，wordpress作为功能完善的博客系统，整个站点的部署涉及到php动态页面，以及本地部署的sql数据库，有些许乱，部署到哪里就会污染哪里的环境，而为了部署网站，甚至要把麻烦的代理也重新配置一遍(443/80)，docker显然是最优解😘

&emsp;&emsp;但是考虑到docker对物理机离谱的内存抢占，最后并没有选择docker部署，而是退而其次用了XMAPP集成环境，自带php和mysql，对于wordpress显然是完美搭配。下载XMAPP，将无用的邮件和FTP服务器剔除掉，无脑点next，完事后将wordpress放到网站根目录下，打开localhost，哒哒！wordpress简单的图形化安装指南出现在眼前，填入mysql信息，稍待片刻，wordpress就会在后台创建sql表，之后创建账号，~~导入好看的萌妹主题~~，就可以开始写文章了。

&emsp;&emsp;虽然一切都很简单，有些工具还是要自己慢慢配置才能顺手，比如合适的markdown编辑器（Typora为什么转收费了呜呜呜😭）  目前还在寻找易用的文章编辑器，这样就能真正把心思放在内容产出上，而不是费尽心思去用啰里啰唆的markdown/html语法排版......

&emsp;&emsp;那么，就先这样吧！不忙碌的时候会抽时间更新的（笑）
# 祝一切顺利！bye😄！

------------

后记：意料之中，运行在win下的XMAPP果然出现奇奇怪怪的问题崩了，好在及时备份了文章和mysql，之后还是老老实实用docker做底层，把不熟悉容器操作的我弄得一头雾水，最后还是用了两个小时搞定（流汗），一晚上宝贵的工作时间就这么贡献给了docker