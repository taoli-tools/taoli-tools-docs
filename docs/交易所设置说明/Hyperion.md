# Hyperion

[Hyperion](https://hyperion.xyz/swap)

1. 设置 Aptos 链：
    
    ![image.png](Hyperion/image.png)
    
    Aptos 无法设置 RPC，并且需要[去Geomi申请API Key](https://geomi.dev/manage)并填入
    
2. 添加 Exchange：
    
    ![image.png](Hyperion/image%201.png)
    

## 限制及注意事项

- 只支持[Aptos Fungible Asset (FA) Standard](https://aptos.dev/build/smart-contracts/fungible-asset)，不支持[Aptos Coin Standard (Legacy)](https://aptos.dev/build/smart-contracts/aptos-coin)和[Aptos Token Standard (Legacy)](https://aptos.dev/build/smart-contracts/aptos-token)。
- 只支持市价单，不支持限价单，选择限价单时仍然是下市价单。
- 询价间隔为 1 秒。
- Pair 的 Size 参数的改变会影响报价，从而影响差价。不填 Size 默认是 100。
- [DEX常见问题](../DEX%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.md)
- [Taoli Tools Signer](../Taoli%20Tools%20Signer.md)
