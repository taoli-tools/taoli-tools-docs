---
title: Grvt 设置 - Taoli Tools 使用手册
description: 配置 Grvt Perp DEX API,支持永续合约交易,积分增加 30%
head:
  - - meta
    - name: keywords
      content: Grvt,Perp DEX,永续合约,Taoli Tools,API 配置
---

# Grvt

返佣：20%

邀请码：`ALIEZ`

邀请链接：[https://grvt.io/?ref=ALIEZ](https://grvt.io/?ref=ALIEZ)

> [!WARNING]
> 因 Grvt API 限制，必须**使用浏览器插件的方式**解除浏览器的跨域限制才可以使用，教程在 [浏览器插件](../disable-browser-cors/browser-extension)

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
