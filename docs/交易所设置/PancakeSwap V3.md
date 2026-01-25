# PancakeSwap V3

[Exchange | PancakeSwap](https://pancakeswap.finance/swap)

PancakeSwap V3 支持的链：[https://developer.pancakeswap.finance/contracts/v3/addresses](https://developer.pancakeswap.finance/contracts/v3/addresses)

实际支持的链是 Taoli Tools 支持的链和 PancakeSwap V3 支持的链的交集

设置说明：

![image.png](PancakeSwap V3/image.png)

1. 通过 Wallet Type 来选择使用助记词、私钥、或 [Taoli Tools Signer](../Taoli Tools Signer.md) 作为钱包
2. 点击 Save，如无报错，则会以绿色数字显示全链 U 余额的总和，点击数字查看详情

## 限制及注意事项

- 只支持市价单，不支持限价单，选择限价单时仍然是下市价单。
- 首次交易某个 ERC20 Token 时候会自动 Approve Unlimited 给 [PancakeSwap V3 Router 合约](https://developer.pancakeswap.finance/contracts/v3/addresses)。
- Pair 的 Size 参数的改变会影响报价，从而影响差价。不填 Size 默认是 100。
- [DEX 常见问题](../DEX常见问题.md)
- [Taoli Tools Signer](../Taoli Tools Signer.md)
