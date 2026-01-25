# Odos

[Odos](https://app.odos.xyz/)

Odos 支持的链：[https://docs.odos.xyz/build/contracts](https://docs.odos.xyz/build/contracts)

实际支持的链是 Taoli Tools 支持的链和 Odos 支持的链的交集

准备好一个 EVM 钱包私钥，为了降低整段复制粘贴带来的安全风险，所以分前后两段输入。前段输入在 Private Key Head 中，后段输入在 Private Key Tail 中，每段私钥最短 6 个字符。两段私钥要能恰好一前一后拼接成一个完整的私钥，中间不能有重叠，也不能有空缺。建议复制粘贴完成后立即清空剪贴板。

## 限制及注意事项

- 价格更新频率一般是 2 秒一次，以太坊是 12 秒一次。
- 买一卖一价格始终相等。同一个币选不同的 U，价格可能不一样。
- 只支持 ERC20 标准代币，不支持原生代币，可以使用包装过的原生代币（如 WETH、WAVAX 等）。
- 只支持市价单，不支持限价单，选择限价单时仍然是下市价单。
- 默认的 EVM 交易对列表是根据本工具支持的其他交易所的充提币列表中获取到的合约地址生成的，如果一个币不在默认列表中，说明本工具支持的其他交易所中没有任何一个支持这个币在 EVM 链上的充提。
- 首次交易某个 token 时候会自动 Approve Unlimited 给 [Odos Router V2 合约](https://docs.odos.xyz/build/contracts#sor-router-deployments)。
- [DEX 常见问题](../dex-faq.md)
