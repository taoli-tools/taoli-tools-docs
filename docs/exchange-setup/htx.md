---
title: HTX 设置 - Taoli Tools 使用手册
description: 配置 HTX 火币交易所 API,支持现货和合约交易,最高 56% 返佣
head:
  - - meta
    - name: keywords
      content: HTX,火币,CEX,现货交易,永续合约,Taoli Tools,API 配置
---

# HTX

返佣：合约 30% 自动 + 26% 手动，现货 30% 自动 + 16% 手动。

邀请码：`taoli`

邀请链接：[https://www.htx.com/invite/zh-cn/1f?invite_code=taoli](https://www.htx.com/invite/zh-cn/1f?invite_code=taoli)

1. 访问 [https://www.htx.com/apikey/](https://www.htx.com/apikey/) 点击 「创建 API Key」，选择「系统生成的 API 密钥」

2. 权限设置中勾选「读取」和「交易」
    
2. 打开一个合约交易页面，比如 [https://www.htx.com/futures/linear_swap/exchange#contract_code=BTC-USDT&contract_type=swap&type=cross](https://www.htx.com/futures/linear_swap/exchange#contract_code=BTC-USDT&contract_type=swap&type=cross)
3. 点击右上角齿轮按钮，设置「持仓模式」为「单向持仓」
