---
title: Grvt 设置 - Taoli Tools 使用手册
description: 配置 Grvt Perp DEX API,支持永续合约交易,积分增加 30%
head:
  - - meta
    - name: keywords
      content: Grvt,Perp DEX,永续合约,Taoli Tools,API 配置
---

# Grvt

邀请码：`TAOLI`

积分增加 30%，手续费减少 20%

邀请链接：[https://grvt.io/exchange/sign-up?ref=TAOLI](https://grvt.io/exchange/sign-up?ref=TAOLI)

> [!WARNING]
> 因 Grvt API 限制，必须解除浏览器的跨域限制才可以使用，教程在 [解除浏览器跨域限制](../disable-browser-cors/)

> [!WARNING]
> 因 Grvt API 限制，一个浏览器环境中仅支持添加一个 Grvt 账号，如果添加多个账号，会引起错乱。并且 API 和交易所网页无法同时使用。

- 前往页面 [https://grvt.io/exchange/account/api-keys](https://grvt.io/exchange/account/api-keys) 点击「Create」
- 选择「Generate」
    
    ![image.png](grvt/image.png)
    
- 选择一个 TradingAccount（不要选 FundingAccount），并勾选「Trade」权限
    
    ![image.png](grvt/image-1.png)
    
- 签名后，获得 API Key 和 Secret Private Key
    
    ![image.png](grvt/image-2.png)
    
- 关闭对话框后，获得 Trading Account ID
    
    ![image.png](grvt/image-3.png)
