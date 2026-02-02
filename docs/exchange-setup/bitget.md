---
title: Bitget 设置 - Taoli Tools 使用手册
description: 配置 Bitget 交易所 API,支持现货、合约和杠杆交易,最高 60% 返佣
head:
  - - meta
    - name: keywords
      content: Bitget,CEX,现货交易,永续合约,Taoli Tools,API 配置
---

# Bitget

返佣：现货 50%，合约 60%。注册后把 Bitget UID 发给 [Aliez Ren](https://t.me/aliez_ren)，在后台给你升级为子代理后，即可登记返佣。（使用 API 下单时，合约 50%）

邀请码：`taoli888`

邀请链接：[https://partner.bitget.xyz/bg/jhyb565e](https://partner.bitget.xyz/bg/jhyb565e)

Bitget Wallet Card 邀请码：`1t5Nzd`

邀请链接：[https://web3.bitget.com/invite/card/1t5Nzd](https://web3.bitget.com/invite/card/1t5Nzd)

> [!WARNING]
> 因 Bitget API 限制，必须解除浏览器的跨域限制才可以使用，教程在 [解除浏览器跨域限制](../disable-browser-cors/)

> [!WARNING]
> 暂不支持 Bitget 统一账户

1. 打开一个合约，比如 [https://www.bitget.comfutures/usdt/BTCUSDT](https://www.bitget.com/futures/usdt/BTCUSDT)
2. 点击右侧齿轮按钮
3. 按照下图设置。持仓模式：单向持仓。
4. USDC 合约和 U 本位合约要分别设置，都只支持单向持仓。

   ![image.png](bitget/image-2.png)

5. 在「API 密钥」页面 [https://www.bitget.com/account/newapi](https://www.bitget.com/account/newapi) 点击「新建 API Key」
6. 选择「系统生成的 API 密钥」

   ![image.png](bitget/image.png)

7. 按照图中的进行勾选

   ![image.png](bitget/image-1.png)

8. Bitget 市价买入现货（或现货杠杆）传入的参数是 U 的数量，而不是币的数量，所以可能会导致实际成交数量和设置的 Size 略微有些出入。
9. 暂不支持 Bitget 统一账户
