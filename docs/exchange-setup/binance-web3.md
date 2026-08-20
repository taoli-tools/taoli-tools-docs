---
title: Binance Web3 设置 - Taoli Tools 使用手册
description: 配置 Binance Web3 聚合器,支持多链 EVM 和 Solana 交易,20% 返佣
head:
  - - meta
    - name: keywords
      content: Binance Web3,DEX,聚合器,EVM,Solana,链上交易,Taoli Tools
---

# Binance Web3

返佣：20%

邀请链接：[https://web3.binance.com/referral?ref=TAOLITOOLS](https://web3.binance.com/referral?ref=TAOLITOOLS)

Binance Web3 支持的链：[https://web3.binance.com/en/dev-docs/products/trading-api/supported-chains](https://web3.binance.com/en/dev-docs/products/trading-api/supported-chains)

实际支持的链是 Taoli Tools 支持的链和 Binance Web3 支持的链的交集

1. 准备好助记词，为了降低整段复制粘贴带来的安全风险，所以分前后两段输入。前段输入在 Mnemonic Head 中，后段输入在 Mnemonic Tail 中。两段助记词要能恰好一前一后拼接成完整的助记词，中间不能有重叠，也不能有空缺，也不能把一个词分到两个输入框里填，每个词之间使用英文空格分隔。建议复制粘贴完成后立即清空剪贴板。
2. 每条链仅支持该助记词生成的第一个地址。
3. 在对应链的钱包中存入对应的 gas，存入 USDC 或 USDT 作为资金。
4. 设置说明：
   1. API Key 和 API Secret：
      - 在 [https://web3.binance.com/en/dev-portal/project](https://web3.binance.com/en/dev-portal/project) 创建 Project 并申请 API。
      - API Key 和你用来申请 API Key 的钱包没有绑定关系。申请 API Key 的钱包里不需要存入资金。
      - 用来申请 API Key 的钱包，和用来下单的钱包之间，没有关系。
   2. Quote Interval：询价频率，详见下文。
   3. Mnemonic Head：用来下单的钱包助记词中的前几个单词。
   4. Mnemonic Tail：同一组助记词剩下的几个单词。分开复制以防剪贴板被恶意程序监控。
   5. 点击 Save，如无报错，则会显示全链 U 余额的总和，点击数字可以查看详情。

## 限制及注意事项

- Quote Interval：询价频率，根据添加的 Binance Web3 Ticker 数量填写。Ticker 是指 Pair 的 A 或 B，如果 A 和 B 都是 Binance Web3，那么 1 Pair = 2 Ticker。报价接口实测约 5 次/秒，每个 Ticker 每轮询价要用掉 2 次报价请求（买卖各一次），因此需要满足：
  1. Quote Interval 毫秒数 ≥ Binance Web3 Ticker 数量 \* 400
     > [!TIP]
     > 上面是不触发限速的下限，实测贴着这个值仍会偶尔限速，建议按 Ticker 数量 \* 500 起填，最开始只使用一个 Pair。
- 目前只能填一组 API。除了每个接口 5 次/秒以外，还有每个 API Key 每分钟 1200 次、每个账号每分钟 6000 次的限制，因此同一个账号下多申请几个 Project 并不能突破账号总量。详见 [限速说明](https://web3.binance.com/en/dev-docs/authentication)。
- 只支持市价单，不支持限价单，选择限价单时仍然是下市价单。
- 首次交易某个 ERC20 Token 时候会自动 Approve Unlimited 给 [Binance Web3 的聚合器合约](https://web3.binance.com/en/dev-docs/catalog/web3-wallet/api/rest-api/trading-api#get-erc20-approve-transaction)。
- 不支持美股代币（Ondo、BStock 等），这类代币走的是 RFQ 报价，需要另外的签名下单流程。
- Pair 的 Size 参数的改变会影响报价，从而影响差价。不填 Size 默认是 100。
- [DEX 常见问题](../dex-faq/)
- [Taoli Tools Signer](../taoli-tools-signer/)
