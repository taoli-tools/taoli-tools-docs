---
title: Hyperliquid 设置 - Taoli Tools 使用手册
description: 配置 Hyperliquid Perp DEX API,支持永续合约和现货交易,4% 返佣
head:
  - - meta
    - name: keywords
      content: Hyperliquid,Perp DEX,永续合约,现货交易,Taoli Tools,API 配置
---

# Hyperliquid

返佣：4%

邀请码：`ALIEZ`

邀请链接：[https://app.hyperliquid.xyz/join/ALIEZ](https://app.hyperliquid.xyz/join/ALIEZ)

1. 打开「API」页面 [https://app.hyperliquid.xyz/API](https://app.hyperliquid.xyz/API)
2. 输入「API 钱包的名称」，点击「生成」，然后点击「授权 API 钱包」
3. 按自己需求输入「有效天数」，保存好「私钥」后，点击「授权」

   ![image.png](hyperliquid/image.png)

4. 请注意，设置页面需要填写的「Address」是主钱包地址（如下图所示），「API Private Key」是 API 钱包私钥，不要搞混

   ![image-1.png](hyperliquid/image-1.png)

5. 打开「投资组合」页面 [https://app.hyperliquid.xyz/portfolio](https://app.hyperliquid.xyz/portfolio)
6. 修改「账户类型」为「统一账户」或「投资组合保证金」模式

   ![image-2.png](hyperliquid/image-2.png)

7. Hyperliquid 现货 Symbol 前面需要加一个字母 `U`。比如 `UBTC`、`UETH`。

   [About Unit | Unit](https://docs.hyperunit.xyz/)

8. HIP-3 代币需要增加前缀，并且交易对名字和网页显示的也不一定相同，比如 `SAMSUNG-USDC` 在 Taoli Tools 中显示为 `xyz:SMSN`
