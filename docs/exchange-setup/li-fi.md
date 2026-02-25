---
title: LI.FI 设置 - Taoli Tools 使用手册
description: 配置 LI.FI 跨链聚合器,支持多链 EVM 和 Solana 交易
head:
  - - meta
    - name: keywords
      content: LI.FI,DEX,跨链聚合器,EVM,Solana,Taoli Tools
---

# LI.FI

LI.FI 支持的链：[https://li.quest/v1/chains?chainTypes=EVM,SVM,MVM](https://li.quest/v1/chains?chainTypes=EVM,SVM,MVM)

实际支持的链是 Taoli Tools 支持的链和 LI.FI 支持的链的交集

1. 准备好助记词，为了降低整段复制粘贴带来的安全风险，所以分前后两段输入。前段输入在 Mnemonic Head 中，后段输入在 Mnemonic Tail 中。两段助记词要能恰好一前一后拼接成完整的助记词，中间不能有重叠，也不能有空缺，也不能把一个词分到两个输入框里填，每个词之间使用英文空格分隔。建议复制粘贴完成后立即清空剪贴板。
2. 每条链仅支持该助记词生成的第一个地址。
3. 在对应链的钱包中存入对应的 gas，存入 USDC 或 USDT 作为资金。
4. 设置说明：

   ![image.png](li-fi/image.png)
   1. API Key：申请网址 [https://portal.li.fi/integrations](https://portal.li.fi/integrations)
      - 如果不填，单 IP 限速每分钟 200 个请求
      - 即使后台看到 LIFI's Fee 不等于 0bps 也没事。只要是在 Taoli Tools 内使用。就是 0 手续费，并且不收正滑点。
   2. Quote Interval：询价频率。
   3. Mnemonic Head：用来下单的钱包助记词中的前几个单词。
   4. Mnemonic Tail：同一组助记词剩下的几个单词。分开复制以防剪贴板被恶意程序监控。
   5. 点击 Save，如无报错，则会显示全链 U 余额的总和，点击数字可以查看详情。

## 限制及注意事项

- 报价中不包含 LI.FI 的收费
- 建议每个 API Key 的限速都一样，不然可能会利用不满高限速的 API Key。
- 只支持市价单，不支持限价单，选择限价单时仍然是下市价单。
- 首次交易某个 ERC20 Token 时候会自动 Approve Unlimited 给 [Li.Fi Diamond 合约](https://docs.li.fi/introduction/lifi-architecture/smart-contract-addresses)。
- Pair 的 Size 参数的改变会影响报价，从而影响差价。不填 Size 默认是 100。
- [DEX 常见问题](../dex-faq/)
- [Taoli Tools Signer](../taoli-tools-signer/)
