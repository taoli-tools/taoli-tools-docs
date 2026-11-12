---
title: NEAR Intents 设置 - Taoli Tools 使用手册
description: 配置 NEAR Intents,直接向 solver 询价,在 intents.near 合约内约 2 秒结算,支持跨链资产和 Ondo 代币化美股
head:
  - - meta
    - name: keywords
      content: NEAR Intents,near.com,DEX,solver,Ondo,代币化美股,Taoli Tools
---

# NEAR Intents

邀请链接：[https://near.com/login?ref=pg3zwyj6](https://near.com/login?ref=pg3zwyj6)

NEAR Intents 是 [near.com](https://near.com) 背后的交易网络。资金存放在 `intents.near` 合约里，由 solver（做市商）报价。Taoli Tools 直接向 solver 询价，签名后在一笔链上交易里完成结算，从下单到成交一般 2 秒左右，不需要 gas。

1. 准备资金：用 EVM 钱包登录 [near.com](https://near.com/login?ref=pg3zwyj6)，把 USDC 或 USDT 充值进 NEAR Intents。该 EVM 地址就是你的 Intents 账户，Taoli Tools 交易的就是这个账户里的余额。
2. 在设置页面添加 NEAR Intents：
   1. Quote Interval：询价频率。
   2. Wallet Type：选择 Mnemonic（助记词）或 Private Key（私钥），必须和第 1 步登录 near.com 用的是同一个钱包。为了降低整段复制粘贴带来的安全风险，助记词或私钥分前后两段输入，两段要能恰好一前一后拼接完整，中间不能有重叠或空缺。建议复制粘贴完成后立即清空剪贴板。
   3. 点击 Save，如无报错，则会显示 Intents 账户里所有 U 本位稳定币的总和（各条链的 USDC、USDT、USDT0、DAI 等分别计入，按面值相加）。

## 交易对

- 所有 Intents 资产对 NEAR 原生的 USDC 和 USDT。
- 同一个币从多条链桥接进来时，在 Intents 里是互相独立的资产，会带上链名后缀以示区分，如 `USDC.base`、`ETH.arb`。只有一个来源或者是 NEAR 原生的，不带后缀，如 `PRL`、`wNEAR`。
- 包含 Ondo 代币化美股（`TSLAon`、`NVDAon`、`SPYon` 等），也就是 near.com 里的 Stocks。

## 限制及注意事项

- 不支持 Taoli Tools Signer，只能填助记词或私钥，因为每笔交易都要签名一条 ERC-191 消息。
- 只支持市价单，不支持限价单，选择限价单时仍然是下市价单。
- 流动性完全取决于 solver，很多币只有一个 solver 报价，有的币只有单边报价或者没有报价。没有报价的一边盘口为空，此时下单会报错 `no solver quote`。
- Pair 的 Size 参数的改变会影响报价，从而影响差价。不填 Size 默认是 100。
- 下单数量和 Size 一致时，会直接使用盘口刚拿到的报价，下单最快；数量不一致时需要重新询价，会多等 2 秒多。
- 报价有效期 10 秒，签名的意图随报价一起过期，不会在过期后成交。
- 充值和提现不在 Taoli Tools 里操作，请在 near.com 完成。
- [DEX 常见问题](../dex-faq/)
