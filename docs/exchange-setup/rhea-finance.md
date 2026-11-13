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

## 和 NEAR Intents 的区别

RHEA Finance 交易的是 NEAR 链账户里的资金，[NEAR Intents](./near-intents.md) 交易的是 Intents 账户里的资金，两者互不相通：

|          | NEAR Intents                        | RHEA Finance                                            |
| -------- | ----------------------------------- | ------------------------------------------------------- |
| 账户     | 用 EVM 钱包登录 near.com 得到的账户 | NEAR 链账户：隐式账户（64 位十六进制地址）或 `xxx.near` |
| 密钥     | EVM 助记词或私钥                    | NEAR 钱包的助记词，或 `ed25519:` 开头的私钥             |
| 资金位置 | Intents 合约里的保密余额            | NEAR 链上的钱包                                         |
| Gas      | 不需要                              | 用 NEAR 支付，每笔约 0.003 NEAR                         |

登录 near.com 的 EVM 私钥在 NEAR 链上没有对应的账户，不能用于 RHEA Finance。需要另外准备 NEAR 钱包：

1. 用 [Meteor Wallet](https://wallet.meteorwallet.app) 或 [MyNearWallet](https://app.mynearwallet.com) 新建钱包，备份助记词。默认生成的是隐式账户，不需要注册。
2. 往钱包地址转入少量 NEAR（0.5 NEAR 左右）。隐式账户收到第一笔 NEAR 后才在链上激活，之后的 gas 也从这里扣。交易时每笔会先临时冻结约 0.12 NEAR 的 gas 预付款，成交后退回，所以余额不要只留刚好够的量。
3. 转入 NEAR 原生的 USDC 或 USDt 作为交易资金：可以从交易所提币（网络选 NEAR），也可以在 near.com 把 Intents 里的余额提现到这个地址（网络选 NEAR）。

## 设置

1. 设置 NEAR 链：在 Settings 的 Chains 里添加 NEAR。可以填多个 RPC，遇到限流（429）、节点故障或超时会自动切换到下一个，建议至少填两个。

2. 添加 Exchange：
   - Quote Interval：询价间隔，默认 1000 ms，最小 100 ms。间隔越短报价越新，但请求也越多
   - Wallet Type 选 Mnemonic 或 Private Key。助记词按 NEAR 钱包的路径 `m/44'/397'/0'` 派生；私钥是 `ed25519:` 开头的格式
   - Account ID 填命名账户（如 `xxx.near`），留空则使用私钥对应的隐式账户（64 位十六进制地址）

## 限制及注意事项

- 只支持 NEP-141 代币，NEAR 原生币需要先换成 wNEAR（`wrap.near`）。添加交易对时输入代币合约地址，例如 `wrap.near`。合约地址可以在 [NearBlocks](https://nearblocks.io/tokens) 上按名称搜索，代币页里的 Contract 就是。同一个币在 NEAR 上常有多个合约（如原生 USDC 和桥过来的旧版 USDC），选持有人多、RHEA Finance 上有流动性的那个。
- 资金放在 NEAR 链上的钱包里，和 [NEAR Intents](./near-intents.md) 的余额是分开的。钱包里要留一些 NEAR 付 gas。
- 第一次买入某个代币时，会先发一笔 `storage_deposit` 交易在该代币合约里注册账户，费用约 0.00125 NEAR，之后不再需要。
- 只支持市价单，不支持限价单，选择限价单时仍然是下市价单。
- Pair 的 Size 参数的改变会影响报价，从而影响差价。不填 Size 默认是 100。
- Max Gas 按交易附带的 gas 乘以当前 gas 价格判断。NEAR 无法预估 gas，每笔 swap 附带 100 Tgas 再加每跳 10 Tgas（最多 300 Tgas），常见的两跳路由约 0.012 NEAR。实际扣掉的约 0.003 NEAR，大部分附带的 gas 是合约给后续调用预留的，用不完会退回。
- [DEX 常见问题](../dex-faq/)
