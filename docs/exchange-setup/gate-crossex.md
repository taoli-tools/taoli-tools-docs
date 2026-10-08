---
title: Gate CrossEx 设置 - Taoli Tools 使用手册
description: 配置 Gate CrossEx 跨所交易 API,用一个 Gate 账户交易 Binance、Bybit、OKX、Hyperliquid 等交易所的现货和永续合约
head:
  - - meta
    - name: keywords
      content: Gate CrossEx,Gate,CEX,跨所交易,现货交易,永续合约,Taoli Tools,API 配置
---

# Gate CrossEx

Gate CrossEx 是 Gate 的跨所交易平台：用一个 Gate 账户，通过 CrossEx API 在 Binance、Bybit、OKX、Kraken、Gate、Hyperliquid、Deribit、Lighter 上交易现货和永续合约，保证金和持仓由 CrossEx 统一记账。

返佣与 Gate 相同，见 [Gate](./gate)。

邀请码：`TAOLITOO`

邀请链接：[https://www.gate.com/share/taolitoo](https://www.gate.com/share/taolitoo)

> [!WARNING]
> 因 Gate API 限制，必须解除浏览器的跨域限制才可以使用，教程在 [解除浏览器跨域限制](../disable-browser-cors/)

1. 在 Gate 开通 CrossEx 账户。
2. 设置 CrossEx 的「账户模式」为「跨所保证金模式」（Cross Exchange），「持仓模式」为「单向持仓」（One Way）。
3. 打开 API Key 管理页面：[https://www.gate.com/myaccount/api_key_manage](https://www.gate.com/myaccount/api_key_manage)，创建 API Key，勾选跨所交易的读写权限。
4. 在设置页面添加 Gate CrossEx，把 API Key 和 Secret 分别填到「API Key」和「API Secret」中。

## 交易对

- CrossEx 的交易对名称带有目标交易所前缀，用来区分不同交易所的同名交易对，比如 `bn:BTC/USDT` 是 Binance 的 BTC/USDT。

  | 前缀  | 目标交易所  |
  | ----- | ----------- |
  | `bn:` | Binance     |
  | `by:` | Bybit       |
  | `ok:` | OKX         |
  | `kr:` | Kraken      |
  | `gt:` | Gate        |
  | `hl:` | Hyperliquid |
  | `dr:` | Deribit     |
  | `lt:` | Lighter     |

- 用 [快捷配对](../quick-pairing) 时，BASE 也要带上前缀，比如 `GX-P:bn:BTC/USDT`。
- CrossEx 的永续合约是各目标交易所合约的镜像，所以不会出现在首页的资金费率表里。
