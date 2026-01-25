# EVM Router

EVM Router 是 Taoli Tools 自研的简易路由器，支持多个 EVM 链上的多个协议。

路由器和聚合器的区别：

- 路由器不会拆分订单，只会选择最优路径
- 路由器无需部署自己的合约，可以使用协议自有的合约

支持的协议如下：

- Uniswap V2
    - 支持的链：[https://docs.uniswap.org/contracts/v2/reference/smart-contracts/v2-deployments](https://docs.uniswap.org/contracts/v2/reference/smart-contracts/v2-deployments)
- Uniswap V3
    - 支持的链：[https://docs.uniswap.org/contracts/v3/reference/deployments/](https://docs.uniswap.org/contracts/v3/reference/deployments/)
- Uniswap V4
    - 支持的链：[https://docs.uniswap.org/contracts/v4/deployments](https://docs.uniswap.org/contracts/v4/deployments)
    - 需要填写 Subgrap API Key 才会启用
- Pancake Swap V2
    - 支持的链：[https://developer.pancakeswap.finance/contracts/v2/addresses](https://developer.pancakeswap.finance/contracts/v2/addresses)
- Pancake Swap V3
    - 支持的链：[https://developer.pancakeswap.finance/contracts/v3/addresses](https://developer.pancakeswap.finance/contracts/v3/addresses)
- Pancake Swap Infinity
    - 支持的链：[https://developer.pancakeswap.finance/contracts/infinity/resources/addresses](https://developer.pancakeswap.finance/contracts/infinity/resources/addresses)
    - 需要填写 Subgrap API Key 才会启用

实际支持的链是 Taoli Tools 支持的链和上面协议中支持的链的交集

设置说明：

![image.png](EVM%20Router/image.png)

1. 通过 Wallet Type 来选择使用助记词、私钥、或 [Taoli Tools Signer](../Taoli%20Tools%20Signer.md) 作为钱包
2. 有些协议需要填入 [Subgraph API Key](https://thegraph.com/studio/apikeys/) 才会启用
3. 点击 Save，如无报错，则会以绿色数字显示全链 U 余额的总和，点击数字查看详情

## 限制及注意事项

- 只支持市价单，不支持限价单，选择限价单时仍然是下市价单。
- 首次交易某个 ERC20 Token 时候会自动 Approve Unlimited 给对应的合约。
    - 对于支持 Permit2 的合约，则会 Approve Unlimited 给 Permit2
- Pair 的 Size 参数的改变会影响报价，从而影响差价。不填 Size 默认是 100。
- [DEX 常见问题](../dex-faq.md)
- [Taoli Tools Signer](../Taoli%20Tools%20Signer.md)
