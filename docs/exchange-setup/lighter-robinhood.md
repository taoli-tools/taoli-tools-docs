---
title: Lighter Robinhood 设置 - Taoli Tools 使用手册
description: 配置 Lighter 在 Robinhood Chain 上的实例,支持永续合约、代币化股票和现货交易
head:
  - - meta
    - name: keywords
      content: Lighter Robinhood,Robinhood Chain,Perp DEX,永续合约,代币化股票,USDG,Taoli Tools,API 配置
---

# Lighter Robinhood

Lighter 部署在 Robinhood Chain 上的独立实例，永续合约和现货都以代币化股票（TSLA、NVDA、SPY、QQQ 等）为主，抵押品是 **USDG** 而不是 USDC。

> [!IMPORTANT]
> 这是一套和 [Lighter](./lighter) 完全独立的账户体系，Account Index、API Key、余额都不互通，需要在设置页作为**单独的交易所**添加。两边的行情也互不相干，即使是同名的 ETH 也是两个不同的市场。

邀请码：`TAOLI`

邀请链接：[https://robinhoodchain.lighter.xyz/?referral=TAOLI](https://robinhoodchain.lighter.xyz/?referral=TAOLI)

配置步骤和 [Lighter](./lighter) 完全一致，只是把网址换成 `robinhoodchain.lighter.xyz`，页面布局相同，截图可以参考 [Lighter](./lighter) 页面：

1. 打开「API Keys」页面 [https://robinhoodchain.lighter.xyz/apikeys](https://robinhoodchain.lighter.xyz/apikeys)
2. 点击「Generate API Key」，输入 API Key Index，点击「Generate」
3. 签名两次后，复制「Private Key」
4. 打开 [https://robinhoodchain.lighter.xyz/read-only-tokens/](https://robinhoodchain.lighter.xyz/read-only-tokens/)
5. 点击 Generate Read-Only Token，填写一些参数，点击「Generate」
6. 点击右侧按钮复制 Token
7. 填写参数，添加 Lighter Robinhood 交易所

- Address：[https://robinhoodchain.lighter.xyz/trade/LIT](https://robinhoodchain.lighter.xyz/trade/LIT) 网页右上角的 Address
- API Private Key：第 3 步中的 Private Key
- Read-Only Token：第 6 步中的 Token
- Account Index：[https://robinhoodchain.lighter.xyz/sub-accounts](https://robinhoodchain.lighter.xyz/sub-accounts) 网页中主/子账户的位置，主账户是 0，子账户从 1 开始数
- API Key Index：第 3 步中的 API Key Index

> [!TIP]
> 如果一个 pair 中的 A 和 B 都是 Lighter Robinhood 的同一个账户，那么同时下单会导致 nonce 冲突。解决方式：A 和 B 使用两个不同的 API Key

> [!WARNING]
> 代币化股票在美股休市期间深度会明显变差，做对冲时注意滑点。
