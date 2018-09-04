---
toc: true
title: hexo博客教程
date: 2018-06-19 16:04:06
tags: hexo
categories: 
   - IT
---
## hexo博客搭建的简单教程
**前言**
　教程写的不好，请见谅！主要也就是把自己的搭建过程写一下，防止以后忘记。以下是初步截图：
![](/images/blog.png)
本教程的主要内容如下:
> * 安装NodeJs
> * 安装hexo
> * 部署本地项目
> * 安装Git
> * 搭桥至github
> * 博客个性化配置
> * 结尾感想

### 1. 安装NodeJs
　对于初学者，最先的就是搭建nodejs的环境，这是hexo博客最基础的运行环境。
>Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。 
>Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。 
>Node.js 的包管理器 npm，是全球最大的开源库生态系统。

- [下载地址](http://nodejs.cn/download/),选择相应的版本下载(推荐下载.msi文件)
- [NodeJs安装教程](https://www.runoob.com/nodejs/nodejs-install-setup.html)
- 安装完成后，就可以进行下一步了

### 2. 安装hexo
** 什么是 Hexo？**
　Hexo 是一个快速、简洁且高效的博客框架。Hexo 使用 Markdown（或其他渲染引擎）解析文章，在几秒内，即可利用靓丽的主题生成静态网页。
安装之前，检查nodejs是否安装ok
- 先创建一个文件夹，最好创建第一级的文件夹，就是在硬盘下创建，不要在硬盘的文件夹下创建（有点拗口）
- 然后`cd`到该文件夹下（或者在该文件夹中shift+右键-->在此处打开命令行窗口），执行`npm i -g hexo`命令,即可安装hexo
- 等待安装完成后，可以通过输入`hexo -v`查看版本和各种信息，验证是否安装成功

### 3. 部署本地项目
　安装成功之后，只是安装好了hexo运行环境，需要进行初始化生成博客`hexo init`,等待一段时间之后，就可以在你新建的目录下看到你的博客相关的文件。这样博客基本就搭成了，可以在本地运行测试了，执行以下命令，本地部署博客(基本上启动博客，最好按这步骤走，比较保险)
   ```
   $ hexo clean
   $ hexo generate
   $ hexo server
   ```
   执行命令成功后，打开浏览器输入：`http://localhost:4000`, 然后就能看见hexo博客的模板网站页面了
![](/images/blogInit.png)

### 4. 安装Git
　本地运行成功后，博客基本成型了，接下来就是如何让博客可以接入外网访问，为了省去购买服务器的代价，采用搭桥github的方式，将项目同步到GitHub上运行
所以你首先要注册个github账号，这个就不赘述了。同时为了操作方便，要先下载git安装，便于将来的搭桥操作。
- [下载地址](https://git-scm.com/downloads),选择相应的版本下载
- 安装基本上默认安装即可，安装完成后，在开始菜单中发现`Git->Git Bash`,说明安装成功，然后打开`Git Bash`进行用户配置
```
$ git config --global user.name "Your Name"
$ git config --global user.email "email@example.com"
```
  配置好用户的信息后，搭桥GitHub时，就会默认选择你的GitHub库

### 5. 搭桥至github
- 你需要创建一个repository来存储你上传的项目，项目名字格式最好是`yourname.github.io`,其他保持不变直接创建。
![](/images/repository.png)
- 创建SSH，使用SSH协议，您可以连接并验证远程服务器和服务。使用SSH密钥，您可以连接到GitHub，而无需在每次访问时提供用户名或密码。
  打开`Git Bash`，输入命令`ssh-keygen -t rsa -C "youremail@example.com`(邮箱用自己github的邮箱)，生成SSH，然后获取密钥内容关联GitHub
  输入以下命令即可查看：
  ```
  $ cd `/.ssh
  $ cat id_rsa.pub
  ```
  效果如下图：
  ![](/images/ssh.png)
  将获取到的ssh值全部复制到github中，**点击自己的头像-->settings-->SSH and GPG keys**,点击`New SSH key`，标题随便取,将密钥复制即可
  ![](/images/copySSH.png)
  如果不放心的话，在`Git Bash`中验证是否添加密钥成功：`ssh -T git@github.com`
  完成以上的基础工作后，我们需要将博客项目与GitHub关联起来，找到你的blog位置，打开`_config.yml`文件（用记事本，editplus都可以打开）,按如下图进行配置
  ![](/images/config.png)
  现在博客跟GitHub关联起来了，可以吧项目上传值GitHub了，先安装插件`npm install hexo-deployer-git --save`，这样你的项目才能上传至GitHub。
  执行部署命令如下(建议每次都按如下步骤执行)：
  ```
  hexo clean
  hexo generate
  hexo deploy
  ```
  其中deploy过程中需要输入GitHub的账号密码，成功部署后，输入`http://yourgithubname.github.io`即可查看博客了，你的博客就可以让别人看见了。

### 6. 博客个性化配置
一些简单的标题配置之类的在`_config.yml`就可以设置了，我主要讲的就是比较炫酷的操作：
- 评论系统
- 博客相关统计
- 博客背景音乐
- 博客动态背景
- 文章显示文章目录
- 点击页面出现小心心
- 等等

### 7. 结尾感想
