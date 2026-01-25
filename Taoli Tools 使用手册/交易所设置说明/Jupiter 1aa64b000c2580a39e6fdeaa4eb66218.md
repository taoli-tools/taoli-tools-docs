# Jupiter

[Jupiter](https://jup.ag/)

1. 准备好一个Solana钱包私钥，为了降低整段复制粘贴带来的安全风险，所以分前后两段输入。前段输入在Private Key Head中，后段输入在Private Key Tail中，每段私钥最短6个字符。两段私钥要能恰好一前一后拼接成一个完整的私钥，中间不能有重叠，也不能有空缺。建议复制粘贴完成后立即清空剪贴板。
2. 在钱包中存入SOL作为gas，存入USDC作为资金。
3. API Key（可选填）。购买地址：[https://portal.jup.ag/onboard](https://portal.jup.ag/onboard)
4. Quote Interval：询价间隔。不填API Key的情况下最小为1000，填之后最小值为100。
5. Enable Exact Out：如果勾选，则在买入的时候使用[ExactOut模式](https://dev.jup.ag/docs/swap-api/payments-through-swap#2-set-swapmode-to-exactout-in-quote)，卖出则始终是ExactIn模式。
    
    ![image.png](Jupiter/image.png)
    

# 限制及注意事项

- 只能使用USDC组交易对。
- 只支持市价单，不支持限价单，选择限价单时仍然是下市价单。
- [DEX常见问题](../DEX%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98%201fd64b000c258093a771de0028b8e9c4.md)