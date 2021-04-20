---
layout:     post
title:      记录在MacBookPro M1 安装Homebrew 的一些问题
date:       2021-04-20
author:     PengPengQi
header-img: img/BackGround.png
catalog: true
tags:
    - M1
    - MacBookPro
    - Homebrew
---

> 心心念念好久的MBP终于到手了，拿到之后马上装了PS、FCPX、Wechat等应用，然后马上开始配置前端环境，安装了vscode，subliem以及一些常用插件，然后开始准备下载node.js包，然而第一次使用mac，node.js官网只有.pkg文件，通过查询了解到了还有一种方式通过Homebrew安装node.js，于是开始了一天的Homebrew折磨之旅。记录下这次安装经历，帮助需要的人。

## Homebrew官网
进入[Homebrew官网](https://brew.sh)，显示
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
然而、发现连接不上`raw.githubusercontent.com`，这是由于DNS污染的原因

### 安装 ARM 版本的 Homebrew
根据官方规划，ARM 版 Homebrew 必须安装在 `/opt/homebrew` 路径下，而非此前的 `/usr/local/Homebrew`，通过下面命令来安装：
```bash
cd /opt #打开用户文件夹下的opt
mkdir homebrew #创建一个homebrew文件夹
curl -L https://github.com/Homebrew/brew/tarball/master | tar xz --strip 1 -C homebrew
```
> 如果安装和使用过程中报错，可能是因为当前用户对于 `/opt/homebrew` 路径没有权限。对此，可以通过 `sudo chown -R $(whoami) /opt/homebrew` 接管该目录,然后输入用户密码，输入时密码不会显示，输入完成后直接enter

### 安装 X86 版本的 Homebrew
```bash
arch -x86_64 /bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
# 一键安装命令，对中文非常友好
```

### 安装node.js
```bash
brew install node.js

#Error: Cannot install in Homebrew on ARM processor in Intel default prefix (/usr/local)!
#Please create a new installation in /opt/homebrew using one of the
#"Alternative Installs" from:
#  https://docs.brew.sh/Installation
#You can migrate your previously installed formula list with:
#  brew bundle dump
```
> 使用安装检验brew是否安装完成

弹出错误，随后我试了一下
```bash
brew --version #查看brew的版本

#Homebrew 3.1.2-53-g844f15e
#Homebrew/homebrew-core (git revision 7ccd20b304; last commit 2021-04-20)
#Homebrew/homebrew-cask (git revision c976414fb3; last commit 2021-04-20)
```
发现已经安装了Homebrew，然后
```bash
brew update #更新Homebrew

brew --version
#Homebrew 3.1.2-53-g844f15e
#Homebrew/homebrew-core (git revision 18a1557a41; last commit 2021-04-20)
#Homebrew/homebrew-cask (git revision c976414fb3; last commit 2021-04-20)
```
再次
```bash
brew install node

node --version
#v15.14.0
npm --version
#7.7.6
```
#### 参考
- [记录Mac Pro M1芯片安装HomeBrew的过程吧](https://learnku.com/articles/53342)