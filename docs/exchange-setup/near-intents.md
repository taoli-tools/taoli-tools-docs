---
title: NEAR Intents 设置 - Taoli Tools 使用手册
description: 配置 NEAR Intents,不填 API Key 走 Solver Relay(约 2 秒成交),填了走 1Click(深度更好),支持跨链资产和 Ondo 代币化美股
head:
  - - meta
    - name: keywords
      content: NEAR Intents,near.com,1Click,solver,DEX,Ondo,代币化美股,Taoli Tools
---

# NEAR Intents

邀请链接：[https://near.com/login?ref=pg3zwyj6](https://near.com/login?ref=pg3zwyj6)

NEAR Intents 是 [near.com](https://near.com) 背后的交易网络。资金存放在 `intents.near` 合约里，由 solver（做市商）报价成交，交易不需要 gas。

1. 准备资金：用 EVM 钱包登录 [near.com](https://near.com/login?ref=pg3zwyj6)，把 USDC 或 USDT 充值进 NEAR Intents。该 EVM 地址就是你的 Intents 账户，Taoli Tools 交易的就是这个账户里的余额。
2. 在设置页面添加 NEAR Intents：
   1. 1Click API Key（选填）：填了走 1Click，不填走 Solver Relay，区别见下文。申请网址 [https://partners.near-intents.org](https://partners.near-intents.org/)
   2. Quote Interval：询价频率。
   3. Wallet Type：选择 Mnemonic（助记词）或 Private Key（私钥），必须和第 1 步登录 near.com 用的是同一个钱包。为了降低整段复制粘贴带来的安全风险，助记词或私钥分前后两段输入，两段要能恰好一前一后拼接完整，中间不能有重叠或空缺。建议复制粘贴完成后立即清空剪贴板。
   4. 点击 Save，如无报错，则会显示 Intents 账户里所有 U 本位稳定币的总和（各条链的 USDC、USDT、USDT0、DAI 等分别计入，按面值相加）。

## Solver Relay 和 1Click 的区别

|          | Solver Relay             | 1Click                        |
| -------- | ------------------------ | ----------------------------- |
| 成交速度 | 约 2 秒                  | 约 15 ～ 30 秒                |
| 流动性   | 差，很多币单边或没有报价 | 好，和 near.com 基本一致      |
| 手续费   | 无                       | 约 0.2%（稳定币之间约 0.01%） |

两者交易的是同一个账户的余额，填上或清空 API Key 即可切换。Solver Relay 上卖出数量太大时常返回 `INSUFFICIENT_AMOUNT`，可以调小 Size。

## 交易对

- 所有 Intents 资产对 NEAR 原生的 USDC 和 USDT。
- 同一个币从多条链桥接进来时，在 Intents 里是互相独立的资产，会带上链名后缀以示区分，如 `USDC.base`、`ETH.arb`。只有一个来源或者是 NEAR 原生的，不带后缀，如 `PRL`、`wNEAR`。
- 包含 Ondo 代币化美股（`TSLAon`、`NVDAon`、`SPYon` 等），也就是 near.com 里的 Stocks。

## 限制及注意事项

- 不支持 Taoli Tools Signer，只能填助记词或私钥，因为每笔交易都要签名一条 ERC-191 消息。
- 只支持市价单，不支持限价单，选择限价单时仍然是下市价单。
- Pair 的 Size 参数的改变会影响报价，从而影响差价。不填 Size 默认是 100。
- 充值和提现不在 Taoli Tools 里操作，请在 near.com 完成。
- [DEX 常见问题](../dex-faq/)
