---
title: DEX 常见问题 - Taoli Tools 使用手册
description: Taoli Tools DEX 交易常见问题解答,包括代币搜索、交易失败原因、滑点设置、RPC 配置等
head:
  - - meta
    - name: keywords
      content: Taoli Tools DEX,DEX 常见问题,滑点设置,Gas Fee,RPC 配置,链上交易
---

# DEX 常见问题

1. 搜不到代币

   需要在搜索 Ticker 的输入框中手动粘贴输入合约地址。输入过一次后，之后输入 symbol 即可搜出。

2. 交易失败的常见原因：
   - `slippage exceeded` 价格超过了滑点，交易尚未发送
   - `simulation failed/error` 交易模拟执行时失败了，交易尚未发送。大概率是因为滑点不够导致的，小概率是由询价的 bug 导致
   - `insufficient funds for gas` Gas 不够了，交易未上链
   - `min return not reached` 通常是交易实际上链执行时超过了滑点，也可能是其他原因
   - `transaction reverted` 交易已上链并失败
   - `bundle expired` 捆绑交易因为 gas（贿赂）不够等问题，没有上链
   - `bundle submission error` 捆绑交易提交失败，可能是 gas 不够或低于最低标准，也可能是 nonce 不对
   - `InstructionError` Solana 合约执行失败，通常是因为超过了滑点
3. 可以在 Ticker 后面修改滑点和 Gas Fee：

   ![image.png](./image.png)

   - 左边的百分数是滑点
   - 右边的数是默认 Gas 的倍数（部分链不支持调整 Gas）
   - BNB Chain 和 Ethereum 支持 Bundle，勾选方框后开启

4. Settings 页面的 Exchange 里的 API Key 和 Chains 里的 RPCs 的区别：
   - Exchange 里的 API Key：用于向 DEX 聚合器查询价格和组装交易参数
   - Chains 里的 RPCs：用于查询钱包余额，发送交易，查询交易是否上链，获取交易执行结果以计算 PnL。当用于发送交易时，为了尽快广播交易，会每个 RPC 都发送相同的交易。其余的情况下，都是从第一个 RPC 开始尝试，如果失败了就换下一个，如果都失败才导致整体失败
   - Solana 的 WebSocket RPC 可以加速确认交易上链；EVM 的 WebSocket RPC 和 HTTPS RPC 则没太大区别
5. 如果+A、-A、+B、-B 一直是黄色不恢复，一般是在等待交易上链
   - 等待时间长的原因一般是因为 Gas 给少了，或者 RPC 出现了问题
   - EVM 最长会等待 3 分钟，3 分钟后如果还没上链，工具会报错，但交易仍然可能会在这之后上链
   - Solana 最长会等待 1 分钟，1 分钟后如果还没上链，工具会报错，交易会去时效性，再也不会上链
6. 如果在 Chains 里的 RPCs 里填了自定义的 RPC，则默认的 RPC 不会再使用
7. 无论使用哪个 DEX，都需要至少添加一组 OKX DEX API Key 才能看到链上的差价 K 线图
8. 点击 Save 后显示$0
   - 确认是否添加了对应的 Chain
   - 点击 $0 绿色数字，在弹窗中确认地址是否正确。只支持每个助记词生成的第一个地址
   - 只包括 U，不包括其他代币。在文档首页 [Taoli Tools 使用手册](./index.md) 的「支持的区块链」表格中点击查看 U 的合约地址
9. 使用 Market A then B（其中 A 是 DEX）时，出现单腿并且没有 P&L。
   - RPC 或 Bundle 误报，原本交易成功了，但是误报为错误了，导致不再进行 B 的交易。
