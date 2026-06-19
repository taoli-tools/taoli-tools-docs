---
title: Kraken 设置 - Taoli Tools 使用手册
description: 配置 Kraken 交易所 API,支持现货和永续合约交易
head:
  - - meta
    - name: keywords
      content: Kraken,CEX,现货交易,永续合约,Taoli Tools,API 配置
---

# Kraken

返佣：40%，限注册后 90 天

邀请码：`sk24f3kp`

邀请链接：[https://invite.kraken.com/JDNW/flejwu9y](https://invite.kraken.com/JDNW/flejwu9y)

Kraken 的现货和合约需要分别创建 API Key。

1. 开通合约交易权限 [https://pro.kraken.com/app/trade/futures-btc-usd-perp](https://pro.kraken.com/app/trade/futures-btc-usd-perp)
2. 打开「连接和 API」页面 [https://pro.kraken.com/app/settings/api](https://pro.kraken.com/app/settings/api)
3. 在「现货交易 API」中点击「创建 API 密钥」，按照下图设置权限。
   - 「资金权限」只勾选「查询」
   - 「订单和交易」勾选「查询未结订单&交易」「查询已结算订单&交易」「创建和更改订单」「取消和关闭订单」
   - 开启「WebSocket 界面」

   ![image.png](kraken/image.png)

4. 在同一个 API 页面找到「期货交易 API」，点击「创建 API 密钥」按照下图设置权限。
   - 「常规 API」选择「完全权限」
   - 「取款 API」选择「不可访问」

   ![image.png](kraken/image1.png)

5. 不支持合成的交易对 [https://blog.kraken.com/product/pro/synthetic-pairs](https://blog.kraken.com/product/pro/synthetic-pairs)

6. USD 和 USDC 等稳定币之间可以免费兑换，每天 10 万 U 额度 [https://support.kraken.com/zh-cn/articles/free-stablecoin-conversions](https://support.kraken.com/zh-cn/articles/free-stablecoin-conversions)
