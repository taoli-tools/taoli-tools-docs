# Gate

返佣：合约 64%，现货 60%。注册后把 Gate UID 发给我，并在 App 里确认升级为超级代理，即可登记返佣。（在任何交易所交易量大的，发我截图，合约比例可以提高到 70%）（使用 API 下单时，合约 44%，现货 40%）

邀请码：`TAOLITOO`

邀请链接：[https://www.gatenode.xyz/share/taolitoo](https://www.gatenode.xyz/share/taolitoo)

> [!WARNING]
> 因 Gate API 限制，必须解除浏览器的跨域限制才可以使用，教程在 [解除浏览器跨域限制](../%E8%A7%A3%E9%99%A4%E6%B5%8F%E8%A7%88%E5%99%A8%E8%B7%A8%E5%9F%9F%E9%99%90%E5%88%B6.md)

> [!WARNING]
> Gate 杠杆交易有 bug：有一定概率不能自动借币，重试就可以；还有一定概率不能自动还币，需要手动还币

1. 首先升级到统一账户：[https://www.gate.io/myaccount/myfunds/spot](https://www.gate.io/myaccount/myfunds/spot)
    
    ![image.png](Gate/image.png)
    
2. 打开一个合约交易页面，比如 [https://www.gate.io/futures/USDT/BTC_USDT](https://www.gate.io/futures/USDT/BTC_USDT)
3. 点击右上角齿轮按钮
4. 设置“账户模式”为“跨币种保证金模式”，设置“持仓模式”为“单向持仓”
    
    ![image.png](Gate/234173a7-0c16-44dc-a944-a9bd5809e4d2.png)
    
5. 打开 API Key 管理页面：[https://www.gate.io/myaccount/api_key_manage](https://www.gate.io/myaccount/api_key_manage)
6. 点击创建 API Key，按照下图设置。
    
    ![image.png](Gate/image%201.png)
    
7. 如果下单时遇到额度限制（RISK_LIMIT_EXCEEDED），可以在下图位置调整风险限额。
    
    ![image.png](Gate/image%202.png)
    
8. Gate 市价买入现货（或现货杠杆）传入的参数是 U 的数量，而不是币的数量，所以可能会导致实际成交数量和设置的 Size 略微有些出入。