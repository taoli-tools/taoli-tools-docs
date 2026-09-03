---
title: Polymarket 设置 - Taoli Tools 使用手册
description: 配置 Polymarket Perps 代理凭证,支持永续合约交易,覆盖加密货币、美股、大宗商品和指数
head:
  - - meta
    - name: keywords
      content: Polymarket,Perp DEX,永续合约,美股,Taoli Tools,API 配置
---

# Polymarket

邀请码：`00allkhr`

邀请链接：[https://polymarket.com/perps?c=00allkhr](https://polymarket.com/perps?c=00allkhr)

Polymarket Perps 不使用 API Key，而是由主钱包一次性授权一把「代理钱包（Proxy）」，之后由代理私钥签名下单、代理 Secret 读取账户数据。Taoli Tools 只需要这两项，**不需要填写主钱包地址**，主钱包地址会由接口自动反查出来。

## 获取代理凭证

1. 打开任意 Perps 市场页面，例如 [https://polymarket.com/perps/asset/btc?c=00allkhr](https://polymarket.com/perps/asset/btc?c=00allkhr)，首次使用时按提示开通合约交易并入金（这一步会用主钱包签名授权代理钱包）
2. 网页会把代理凭证保存在浏览器的本地存储里。按 `F12` 打开开发者工具，切到「Console（控制台）」，粘贴下面的命令并回车，控制台会打印出凭证 JSON，手动选中并复制整段 JSON

   ```js
   console.log(
     localStorage.getItem(
       Object.keys(localStorage).find((key) => key.startsWith("polymarket.perps.creds.v3:")),
     ),
   );
   ```

   也可以切到「Application（应用）」→「Local Storage（本地存储）」→ `https://polymarket.com`，找到键名以 `polymarket.perps.creds.v3:` 开头的条目，手动复制它的值。值是一段 JSON，形如：

   ```json
   {
     "proxy": "0x…",
     "privateKey": "0x…",
     "secret": "…",
     "walletAddress": "0x…",
     "expiresAt": 1799999999999,
     "createdAt": 1788451657929
   }
   ```

3. 回到 Taoli Tools 的设置页面，把整段 JSON 粘贴到「Proxy Private Key」或「Proxy Secret」任意一个输入框，两个字段会自动填好；也可以分别填入 JSON 里的 `privateKey` 和 `secret`
4. 点击「保存」，显示主钱包地址和账户权益即配置成功
5. 也可以不经浏览器，按官方文档 [Authenticated Sessions](https://docs.polymarket.com/perps/authenticated-sessions) 用 API 自行生成代理凭证
