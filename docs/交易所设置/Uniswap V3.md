# Uniswap V3

[Uniswap Interface](https://app.uniswap.org/swap)

Uniswap V3 支持的链：[https://docs.uniswap.org/contracts/v3/reference/deployments/](https://docs.uniswap.org/contracts/v3/reference/deployments/)

实际支持的链是 Taoli Tools 支持的链和 Uniswap V3 支持的链的交集

设置说明：

![image.png](Uniswap%20V3/image.png)

1. 通过 Wallet Type 来选择使用助记词、私钥、或 [Taoli Tools Signer](../Taoli%20Tools%20Signer.md) 作为钱包
2. 点击 Save，如无报错，则会以绿色数字显示全链 U 余额的总和，点击数字查看详情

## 限制及注意事项

- 只支持市价单，不支持限价单，选择限价单时仍然是下市价单。
- 首次交易某个 ERC20 Token 时候会自动 Approve Unlimited 给 [Uniswap V3 Router 合约](https://docs.uniswap.org/contracts/v3/reference/deployments/)。
- Pair 的 Size 参数的改变会影响报价，从而影响差价。不填 Size 默认是 100。
- [DEX 常见问题](../DEX常见问题.md)
- [Taoli Tools Signer](../Taoli%20Tools%20Signer.md)
