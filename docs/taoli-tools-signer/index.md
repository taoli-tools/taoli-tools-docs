---
title: Taoli Tools Signer - Taoli Tools 使用手册
description: 使用 Taoli Tools Signer 开源项目保护你的钱包助记词安全,部署独立的签名服务
head:
  - - meta
    - name: keywords
      content: Taoli Tools Signer,钱包安全,助记词保护,签名服务,EVM,Solana
---

# Taoli Tools Signer

这是一个开源项目，可以让你的钱包助记词不再存到 Taoli Tools 中，而是变为像 Taoli Tools 调用其他中心化交易所 API 一样，来调用你自己部署的 Signer 服务。

[GitHub - taoli-tools/taoli-tools-signer](https://github.com/taoli-tools/taoli-tools-signer)

## 使用方式

- 根据开源项目中的教程部署 Signer 服务。
- 勾选 Enable Signer，并将 Signer URL 和 Signer Secret 填入，点击 Save 进行测试。
    
    ![image.png](./image.png)
    

## 注意事项

- Signer 目前只支持 EVM 和 Solana。
