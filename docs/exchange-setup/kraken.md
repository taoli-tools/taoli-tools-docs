---
title: Kraken 设置 - Taoli Tools 使用手册
description: 配置 Kraken 交易所 API,支持现货和永续合约交易
head:
  - - meta
    - name: keywords
      content: Kraken,CEX,现货交易,永续合约,Taoli Tools,API 配置
---

# Kraken

邀请链接：[https://invite.kraken.com/JDNW/flejwu9y](https://invite.kraken.com/JDNW/flejwu9y)

> [!WARNING]
> 因 Kraken API 限制，必须解除浏览器的跨域限制才可以使用，教程在 [解除浏览器跨域限制](../disable-browser-cors/)

Kraken 的现货和合约需要分别创建 API Key。如果只使用现货或只使用合约，只创建对应的 API Key 即可。

1. 打开 Kraken Pro 的「API」页面 [https://pro.kraken.com/app/settings/api](https://pro.kraken.com/app/settings/api)
2. 在「Spot trading API」中点击「Create API key」，按照下图设置权限。
   - 「资金权限」只勾选「查询」
   - 「订单和交易」勾选「查询未结订单&交易」「查询已结算订单&交易」「创建和更改订单」「取消和关闭订单」
   - 开启「WebSocket界面」

   ![image.png](kraken/image.png)

3. 如果需要交易 Kraken Futures，在同一个 API 页面找到「Futures trading API」，点击「Create API key」。
4. 按照下图设置 Futures API 权限。
   - 「常规 API」选择「完全权限」
   - 「取款 API」选择「不可访问」

   ![image.png](kraken/image1.png)
