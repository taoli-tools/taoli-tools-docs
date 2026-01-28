---
title: 常见问题 - Taoli Tools 使用手册
description: Taoli Tools 使用过程中的常见问题解答,包括平仓操作、错误处理、网络问题等
head:
  - - meta
    - name: keywords
      content: Taoli Tools FAQ,常见问题,平仓操作,错误处理,Failed to fetch,CORS 问题
---

# 常见问题

1. 如何「平仓」？

    这个工具里并没有「开仓」和「平仓」的概念，只有-A+B 和+A-B 两种交易方向。如果你最开始在-A+B 方向进行「开仓」，那么你就可以在+A-B 方向「平仓」，反之亦然。
    
    Tips：
    
    - 不一定要到最后才平仓，从最开始就可以两边的 Loop 都点亮，这样中间差价反复的时候两个交易方向都能反复下单。
    - 两边的差价不一定设置为一样，可以一边高一边低，设置可以允许有一边是负的，只要两个差价数字加起来大于两边手续费加起来的 2 倍，不考虑其他因素的话，理论上就是赚的。
        - 比如 A 的手续费是 0.1%，B 的手续费是 0.05%，那么两个差价的和要大于等于 0.3%
2. `Failed to fetch`
    - 大概率是没有 [解除浏览器跨域限制](../disable-browser-cors/)
    - 也可能是网络问题
3. 出现黄字提示是怎么回事？
    
    ![image.png](./image-2.png)
    
    - 灰字和黄字不用慌，放在那不动或者点击 x 关掉即可。
    - 如果出现红字，那么运行会停止，并且你此时的仓位 Position 会出现不平衡（单腿），需要你手动操作补仓。
4. 现货少点零头
    - 在 CEX 和 Perp DEX 中，购买现货是币当手续费，卖出现货和多空合约都是 U 当手续费，所以现货总是会少一点零头。推荐你在交易所手动购买一点点现货进行补充。
    - 在 DEX 中，从 U 换到币，也可能造成收到的币多点或少点。
5. `Error:  invalid request, please check your server timestamp or recv_window param. req_timestamp[1738860732713],server_timestamp[1738860731713],recv_window[5000]`
    
    或者
    
    `Timestamp for this request is outside of the recvWindow.`
    
    或者
    
    `Timestamp for this request was 1000ms ahead of the server's time.`
    
    或者
    
    `the current time has exceeded the order expiration time`
    
    本机和交易所服务器之间出现了较大的时间差（通常是 5 秒以上），可能是网络延迟太高，可以试试使用东京的服务器。也可能是本机时间不准，可以试试校准一下操作系统时间，然后重启浏览器。
    
6. 这样资金费是亏的还是赚的？
    
    ![image.png](./image-1.png)
    
    先看单边交易：如果持仓 Position 和资金费率 Funding 的正负号是一致的，那就是亏；不一致就赚。
    
    再两边交易一起看：持仓量一致的情况下，假设现在的资金费率是正在结算的，那么图中赚的比亏的要多。
    
    需要注意的是，资金费率是不断变化的，不同交易对的资金费收费间隔也不一致，因此并不能通过某一时间的数字简单加减得出最终结论。
    
7. 链上买币为啥数量比实际下单要少？
    
    有三个主要原因：
    
    - 链上 swap 一般只能传入 input amount，而买的币数量是 output amount，是根据价格推算出来的，不一定准确。
    - 流动性池 swap 手续费较高。
    - 流动性池较浅，价格影响较大。
8. `Price expired` 价格过期
    
    A 或 B 的报价已经超过 3 秒没有更新。
    
    可能是因为网络断开或延迟太高，也可能是因为订单簿交易太少导致价格一直不更新，也可能是本机时间太快。
    
9. `InvalidInputRpcError Missing or invalid parameters.`

    `Double check you have provided the correct parameters`

    EVM 链 nonce 冲突，或者 Gas 不够了

10. Once 或 Loop 卡住
    
    当-A、+B、+A、-B 的其中任意一个（或多个）变为黄色且不恢复时，说明你的网络不稳定，订单卡住了，这单的 PnL 可能不会显示，并且 Loop 会暂停。此时并不一定没有下单成功，而是不知道是否下单成功。一般自动重连后黄色会消失并可以继续下单，如果黄色长时间没有消失，建议重启浏览器。如果刷新后的继续下单仍然有同样的问题，那么大概率是交易所服务器出现了问题，未通过 Websocket 通知下单成功事件，此时建议不要再继续交易。如果非要交易，可以通过多次点击 Once 代替 Loop。

    ![image.png](./image.png)

11. 重启浏览器没用
    
    如果浏览器提示更新的时候关掉浏览器再打开，浏览器并不会重启，只有更新或重启操作系统才有用。
    
12. 出现单腿并且没有产生 PnL 交易记录
    
    一般是因为：如果使用 Market 模式的 A then B 模式下单，A 出错后 B 就不会再下单，并且不会产生 PnL 交易记录。但可能出现 A 的 API 或 RPC 返回结果异常误判了失败（实际成功了）导致单腿。
    
13. 重启后，之前配置好的交易所都没了
    
    没有使用和之前一样的方式打开浏览器，或者硬盘剩余空间不足，浏览器清理了数据。
