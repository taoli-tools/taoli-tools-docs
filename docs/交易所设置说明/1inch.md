# 1inch

[dApp 1inch - DeFi / DEX aggregator on Ethereum, Binance Smart Chain, Optimism, Polygon, Arbitrum](https://app.1inch.io/)

> [!WARNING]
> 因1inch API限制，必须解除浏览器的跨域限制才可以使用，教程在 [解除浏览器跨域限制](../%E8%A7%A3%E9%99%A4%E6%B5%8F%E8%A7%88%E5%99%A8%E8%B7%A8%E5%9F%9F%E9%99%90%E5%88%B6.md)

1inch支持的链：[https://business.1inch.com/portal/documentation/contracts/aggregation-protocol/aggregation-introduction](https://business.1inch.com/portal/documentation/contracts/aggregation-protocol/aggregation-introduction)

实际支持的链是Taoli Tools支持的链和1inch支持的链的交集

1. 去[1inch Dev Portal](https://portal.1inch.dev/)申请一个API Key（需要KYC）。
2. 准备好一个EVM钱包私钥，为了降低整段复制粘贴带来的安全风险，所以分前后两段输入。前段输入在Private Key Head中，后段输入在Private Key Tail中，每段私钥最短6个字符。两段私钥要能恰好一前一后拼接成一个完整的私钥，中间不能有重叠，也不能有空缺。建议复制粘贴完成后立即清空剪贴板。

## 限制及注意事项

- 买一卖一价格始终相等。同一个币选不同的U，价格可能不一样。
- 只支持ERC20标准代币，不支持原生代币，可以使用包装过的原生代币（如WETH、WAVAX等）。
- 只支持市价单，不支持限价单，选择限价单时仍然是下市价单。
- 首次交易某个token时候会自动Approve Unlimited给[1inch的AggregationRouterV6合约](https://portal.1inch.dev/documentation/contracts/aggregation-protocol/aggregation-introduction)。
- [DEX常见问题](../DEX%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.md)
