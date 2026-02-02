---
title: Hyperion 设置 - Taoli Tools 使用手册
description: 配置 Hyperion DEX,支持 Aptos 链上交易
head:
  - - meta
    - name: keywords
      content: Hyperion,DEX,Aptos,链上交易,Taoli Tools
---

# Hyperion

[Hyperion](https://hyperion.xyz/swap)

1. 设置 Aptos 链：

   ![image.png](hyperion/image.png)

   Aptos 无法设置 RPC，并且需要 [去 Geomi 申请 API Key](https://geomi.dev/manage) 并填入

2. 添加 Exchange：

   ![image.png](hyperion/image-1.png)

## 限制及注意事项

- 只支持 [Aptos Fungible Asset (FA) Standard](https://aptos.dev/build/smart-contracts/fungible-asset)，不支持 [Aptos Coin Standard (Legacy)](https://aptos.dev/build/smart-contracts/aptos-coin) 和 [Aptos Token Standard (Legacy)](https://aptos.dev/build/smart-contracts/aptos-token)。
- 只支持市价单，不支持限价单，选择限价单时仍然是下市价单。
- 询价间隔为 1 秒。
- Pair 的 Size 参数的改变会影响报价，从而影响差价。不填 Size 默认是 100。
- [DEX 常见问题](../dex-faq/)
- [Taoli Tools Signer](../taoli-tools-signer/)
