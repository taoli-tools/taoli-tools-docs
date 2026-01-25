# PancakeSwap V3

[Exchange | PancakeSwap](https://pancakeswap.finance/swap)

PancakeSwap V3支持的链：[https://developer.pancakeswap.finance/contracts/v3/addresses](https://developer.pancakeswap.finance/contracts/v3/addresses)

实际支持的链是Taoli Tools支持的链和PancakeSwap V3支持的链的交集

设置说明：

![image.png](PancakeSwap%20V3/image.png)

1. 通过Wallet Type来选择使用助记词、私钥、或 [Taoli Tools Signer](../Taoli%20Tools%20Signer.md) 作为钱包
2. 点击Save，如无报错，则会以绿色数字显示全链U余额的总和，点击数字查看详情

## 限制及注意事项

- 只支持市价单，不支持限价单，选择限价单时仍然是下市价单。
- 首次交易某个ERC20 Token时候会自动Approve Unlimited给[PancakeSwap V3 Router合约](https://developer.pancakeswap.finance/contracts/v3/addresses)。
- Pair的Size参数的改变会影响报价，从而影响差价。不填Size默认是100。
- [DEX常见问题](../DEX%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.md)
- [Taoli Tools Signer](../Taoli%20Tools%20Signer.md)
