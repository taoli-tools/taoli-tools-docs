# OKX DEX

返佣：20%

邀请码：TAOLI

邀请链接：

[Web3 Invitation Landing Page](https://web3.okx.com/join/TAOLI)

OKX DEX 支持的链：[https://web3.okx.com/build/dev-docs/wallet-api/supported-chain](https://web3.okx.com/build/dev-docs/wallet-api/supported-chain)

实际支持的链是 Taoli Tools 支持的链和 OKX DEX 支持的链的交集

1. 准备好助记词，为了降低整段复制粘贴带来的安全风险，所以分前后两段输入。前段输入在 Mnemonic Head 中，后段输入在 Mnemonic Tail 中。两段助记词要能恰好一前一后拼接成完整的助记词，中间不能有重叠，也不能有空缺，也不能把一个词分到两个输入框里填，每个词之间使用英文空格分隔。建议复制粘贴完成后立即清空剪贴板。
2. 每条链仅支持该助记词生成的第一个地址。
3. 在对应链的钱包中存入对应的 gas，存入 USDC 或 USDT 作为资金。
4. 设置说明：
    
    ![image.png](OKX%20DEX/image.png)
    
    1. APIs：
        - 在 [https://web3.okx.com/build/dev-portal](https://web3.okx.com/build/dev-portal) 申请 API。
        - 各个 Project 之间的限速是相互独立的。如果一个 Project 里申请了多组 API，它们之间的限速是共享的。
        - 可以申请多组 API，每行填写一组 API，每行的格式为：`API Key,API Secret,Passphrase` ，注意使用小写（半角）逗号，并且你自定义的 Passphrase（密码）里不能包含逗号。
        - API Key 和你用来申请 API Key 的钱包没有绑定关系。申请 API Key 的钱包里不需要存入资金。
        - 用来申请 API Key 的钱包，和用来下单的钱包之间，没有关系。
    2. Quote Interval：询价频率，详见下文。
    3. Mnemonic Head：用来下单的钱包助记词中的前几个单词。
    4. Mnemonic Tail：同一组助记词剩下的几个单词。分开复制以防剪贴板被恶意程序监控。
    5. 点击 Save，如无报错，则会显示全链 U 余额的总和，点击数字可以查看详情。

## 限制及注意事项

- Quote Interval：询价频率，根据你申请的 API 的数量、频率，以及添加的 OKX DEX Ticker 数量填写。Ticker 是指 Pair 的 A 或 B，如果 A 和 B 都是 OKX DEX，那么 1 Pair = 2 Ticker。如果每个 API Key 的限速都是最普通的 1 次/秒，则需要同时满足以下两个公式：
    1. API 个数 * Quote Interval 毫秒数 ≥ OKX DEX Ticker 数量 * 2000
    2. API 个数 ≥ OKX DEX Ticker 数量 * 2
    
    > [!TIP]
> 因此，最开始的时候，建议添加三组 API，Quote Interval 调整为 2000+，只使用一个 Pair。等产生一些交易量后，再联系 OKX DEX 商务给 API Key 提速。只需给其中一组 API 提速。
    
- 建议每个 API Key 的限速都一样，不然可能会利用不满高限速的 API Key。
- 只支持市价单，不支持限价单，选择限价单时仍然是下市价单。
- 首次交易某个 ERC20 Token 时候会自动 Approve Unlimited 给 [OKX DEX Router 合约](https://web3.okx.com/build/dev-docs/dex-api/dex-approve-transaction)。
- Pair 的 Size 参数的改变会影响报价，从而影响差价。不填 Size 默认是 100。
- [DEX 常见问题](../DEX%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.md)
- [Taoli Tools Signer](../Taoli%20Tools%20Signer.md)
