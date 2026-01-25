# Lighter

邀请码：`TAOLI`

邀请链接：[https://app.lighter.xyz/trade/ETH?referral=TAOLI](https://app.lighter.xyz/trade/ETH?referral=TAOLI)

1. 打开“API Keys“页面 [https://app.lighter.xyz/apikeys](https://app.lighter.xyz/apikeys)
2. 点击“Generate API Key”，输入 API Key Index，点击”Generate”
    
    ![image.png](Lighter/image.png)
    
3. 签名两次后，复制“Private Key”
    
    ![image.png](Lighter/image%201.png)
    
4. 打开 [https://app.lighter.xyz/read-only-tokens/](https://app.lighter.xyz/read-only-tokens/)
5. 点击 Generate Read-Only Token，填写一些参数，点击 Generate
    
    ![image.png](Lighter/image%202.png)
    
6. 点击右侧按钮复制 Token
    
    ![image.png](Lighter/image%203.png)
    

1. 填写参数，添加 Lighter 交易所
    
    ![image.png](Lighter/image%204.png)
    
- Address：[https://app.lighter.xyz/trade/ETH](https://app.lighter.xyz/trade/ETH) 网页右上角的 Address
- API Private Key：第 3 步中的 Private Key
- Read-Only Token：第 6 步中的 Token
- Account Index：[https://app.lighter.xyz/sub-accounts](https://app.lighter.xyz/sub-accounts?locale=zh) 网页中主/子账户的位置，主账户是 0，子账户从 1 开始数
- API Key Index：第 3 步中的 API Key Index

> [!TIP]
> 如果一个 pair 中的 A 和 B 都是 Lighter 的同一个账户，那么同时下单会导致 nonce 冲突。解决方式：A 和 B 使用两个不同的 API Key