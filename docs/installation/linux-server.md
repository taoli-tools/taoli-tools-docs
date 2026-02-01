---
title: Linux 服务器部署 - Taoli Tools 使用手册
description: 在 Linux 服务器上使用 Docker 部署 Taoli Tools,通过 Tailscale 和 VNC 远程访问
head:
  - - meta
    - name: keywords
      content: Taoli Tools Linux 服务器,Docker 部署,Vultr,Tailscale,VNC,Debian
---

# Linux 服务器

> [!WARNING]
> 没有 Linux 使用经验的，不建议使用 Linux 服务器

## Vultr

首月 300 美元优惠

[SSD VPS Servers, Cloud Servers and Cloud Hosting](https://www.vultr.com/?ref=9717991-9J)

1. 前往 [https://my.vultr.com/deploy-beta/](https://my.vultr.com/deploy-beta/) 页面购买服务器，建议至少选择 2C4G，位于日本东京的服务器，可以关闭自动备份功能省钱
    
    ![image.png](linux-server/image-2.png)
    
2. 操作系统推荐 Debian 12（而不是 13），其余选项默认
    
    ![image.png](linux-server/image-3.png)
    

## 腾讯云

也可以选择腾讯云，月单价更划算

[腾讯云运营活动 - 腾讯云](https://curl.qcloud.com/G8aWWIr7)

![image.png](linux-server/image.png)

## 安装

> [!WARNING]
> 建议使用全新的系统安装，否则可能会对正在运行的 Docker Container 造成影响

1. 使用命令一键安装 `curl -fsSL https://taoli.tools/setup | sh`
    
    [GitHub - taoli-tools/taoli-tools-container](https://github.com/taoli-tools/taoli-tools-container)
    
2. 根据命令行里的提示，扫码或复制链接登录 Tailscale
3. 在 [Tailscale Console](https://login.tailscale.com/admin/machines) 中查看机器运行状态，复制机器的`内网IP`
4. 本地安装 [Tailscale Client](https://tailscale.com/download) 并运行
5. 本地使用浏览器访问 [`https://](https://IP)内网IP` ，并忽略证书错误，即可使用
6. 给远程浏览器安装插件以 [解除浏览器跨域限制](../disable-browser-cors/) 
7. 申请交易所 API 时的 IP 白名单，要填在云服务后台看到的公网 IP，而不是 Tailscale 里的内网 IP

## 与 Signer 配合使用

> [!TIP]
> Container 和 Signer 已经集成，因此无需查看 Signer 的 GitHub 教程

1. 提前准备好`keychain.toml`文件，再运行安装命令
2. 安装成功后，右键退出全屏模式，访问 `chrome://certificate-manager/localcerts/usercerts` 添加位于`/home/taoli/cert`中的`CERT.pem`证书
    
    ![image.png](linux-server/image-1.png)
    
3. SIgner URL 为：`https://signer`

## 注意事项

- Chromium 是 Chrome 的开源版本
- Chromium 全屏运行没有按钮，可以右键退出全屏，或使用键盘快捷键进行网页导航
    - Alt（Option）+ ⬅️：后退
    - Ctrl + W：关闭网页
- 关闭最后一个网页后，Docker Container 会自动重启
- 访问 [`https://](https://IP)内网IP/vnc.html` 网页可以使用更多 VNC 功能选项（比如复制粘贴中文文本）
- VNC 没有设置密码，脱离 Tailscale 使用相当于裸奔
