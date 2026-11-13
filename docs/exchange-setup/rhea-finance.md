---
title: RHEA Finance 设置 - Taoli Tools 使用手册
description: 配置 RHEA Finance DEX,支持 NEAR 链上交易
head:
  - - meta
    - name: keywords
      content: RHEA Finance,Ref Finance,DEX,NEAR,链上交易,Taoli Tools
---

# RHEA Finance

[RHEA Finance](https://app.rhea.finance)（原 Ref Finance）是 NEAR 链上的 AMM，报价和路由来自 RHEA Finance 的 Smart Router。

1. 设置 NEAR 链：在 Settings 的 Chains 里添加 NEAR。NEAR 只使用第一个 RPC，失败时不会切换到下一个。

2. 添加 Exchange：
   - Wallet Type 选 Mnemonic 或 Private Key。助记词按 NEAR 钱包的路径 `m/44'/397'/0'` 派生；私钥是 `ed25519:` 开头的格式
   - Account ID 填命名账户（如 `xxx.near`），留空则使用私钥对应的隐式账户（64 位十六进制地址）

## 限制及注意事项

- 只支持 NEP-141 代币，NEAR 原生币需要先换成 wNEAR（`wrap.near`）。添加交易对时输入代币合约地址，例如 `wrap.near`。
- 资金放在 NEAR 链上的钱包里，和 [NEAR Intents](./near-intents.md) 的余额是分开的。钱包里要留一些 NEAR 付 gas。
- 第一次买入某个代币时，会先发一笔 `storage_deposit` 交易在该代币合约里注册账户，费用约 0.00125 NEAR，之后不再需要。
- 只支持市价单，不支持限价单，选择限价单时仍然是下市价单。
- 询价间隔为 1 秒。
- Pair 的 Size 参数的改变会影响报价，从而影响差价。不填 Size 默认是 100。
- Max Gas 按交易附带的 gas 乘以当前 gas 价格判断。NEAR 无法预估 gas，每笔 swap 附带 100 Tgas 再加每跳 10 Tgas（最多 300 Tgas），常见的两跳路由约 0.012 NEAR。实际扣掉的约 0.003 NEAR，大部分附带的 gas 是合约给后续调用预留的，用不完会退回。
- [DEX 常见问题](../dex-faq/)
