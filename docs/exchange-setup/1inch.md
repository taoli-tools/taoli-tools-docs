# 1inch

[dApp 1inch - DeFi / DEX aggregator on Ethereum, Binance Smart Chain, Optimism, Polygon, Arbitrum](https://app.1inch.io/)

> [!WARNING]
> 因 1inch API 限制，必须解除浏览器的跨域限制才可以使用，教程在 [disable-browser-cors](../disable-browser-cors.md)

1inch 支持的链：[https://business.1inch.com/portal/documentation/contracts/aggregation-protocol/aggregation-introduction](https://business.1inch.com/portal/documentation/contracts/aggregation-protocol/aggregation-introduction)

实际支持的链是 Taoli Tools 支持的链和 1inch 支持的链的交集

1. 去 [1inch Dev Portal](https://portal.1inch.dev/) 申请一个 API Key（需要 KYC）。
2. 准备好一个 EVM 钱包私钥，为了降低整段复制粘贴带来的安全风险，所以分前后两段输入。前段输入在 Private Key Head 中，后段输入在 Private Key Tail 中，每段私钥最短 6 个字符。两段私钥要能恰好一前一后拼接成一个完整的私钥，中间不能有重叠，也不能有空缺。建议复制粘贴完成后立即清空剪贴板。

## 限制及注意事项

- 买一卖一价格始终相等。同一个币选不同的 U，价格可能不一样。
- 只支持 ERC20 标准代币，不支持原生代币，可以使用包装过的原生代币（如 WETH、WAVAX 等）。
- 只支持市价单，不支持限价单，选择限价单时仍然是下市价单。
- 首次交易某个 token 时候会自动 Approve Unlimited 给 [1inch 的 AggregationRouterV6 合约](https://portal.1inch.dev/documentation/contracts/aggregation-protocol/aggregation-introduction)。
- [DEX 常见问题](../dex-faq.md)
