# Binance

返佣：19.99%+

邀请码：`TAOLITOOLS`

邀请链接：[https://www.bmwweb.ac/join?ref=TAOLITOOLS](https://www.bmwweb.ac/join?ref=TAOLITOOLS)

> [!WARNING]
> 因 Binance API 限制，必须解除浏览器的跨域限制才可以使用，教程在 [disable-browser-cors](../disable-browser-cors.md)

1. 打开“API 管理“页面 [https://www.binance.com/my/settings/api-management](https://www.binance.com/my/settings/api-management)
2. 点击“创建 API”，类型选择“系统生成”
    
    ![image.png](binance/image.png)
    
3. 点击“编辑权限”，勾选以下权限并保存。需要填写“只访问受信任的 IP”，或者取消勾选“默认安全限制”，才可以勾选 API 权限。在更改账户类型后，需要重新创建 API Key。
    1. 如果是经典账户，则权限如下：
        
        ![image.png](binance/14041d92-6c8d-4b43-a18d-31ae9f890c6e.png)
        
    2. 如果是统一账户，则权限如下：
        
        ![image.png](binance/500e9937-526b-447e-923e-8b517a2730e7.png)
        
4. 在合约交易页面 [https://www.binance.com/futures/BTCUSDT](https://www.binance.com/futures/BTCUSDT) 点击右上角齿轮。仓位模式选择“单向持仓”。
    
    ![image.png](binance/image-1.png)
    
5. 非统一账户模式下，Binance API 不直接返回合约的爆仓价格，而是间接计算获得，因此可能会不准确。也可以使用这个 [合约计算器](https://www.binance.com/futures/BTCUSDT_PERPETUAL/calculator) 进行计算。
