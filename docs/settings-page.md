# 设置页面

点击右上角 `Settings` 进入设置页面

设置页面分为三列

## 第一列

- 账户信息
    
    ![image.png](settings-page-guide/image.png)
    
    - 点击 Current Funds 后面数字可以查看资金额详情
- 通知设置
    
    ![image.png](settings-page-guide/image-1.png)
    
    - 支持网页，Telegram，Lark（飞书）三种通知方式
    - 支持五种通知类型
        
        
        | Order | 下单通知。是在工具中触发下单，不是订单成交 |
        | --- | --- |
        | Info | 价格过期通知 |
        | Warn | 现货余额不足，到达 MaxO、MinA、MaxA，A then B 时 A 出错 |
        | Error | 每个 Pair 下方的红色字 |
        | Risks | Risk 中出现红色字时，或者勾选 FLAT 后两边不平衡时通知 |
    - Telegram 通知需要填写 Bot Token 才可以使用。点击工具中的链接查看教程。创建 Bot 后要点一下 Bot 的 Start 按钮，Bot 才有权限给你发消息。
    - Lark 通知需要填写 Webhook URL 才可以使用。点击工具中的链接查看教程
- 其他设置
    
    ![image.png](settings-page-guide/image-2.png)
    
    - Theme：主题色
    - Language：语言
    - Modifier Key：自定义修饰键，在交易页面按下对应按键后，会出现额外的功能
    - Display FPS：价格更新显示频率。只影响显示，不影响差价计算
    - Loop Interval：Loop 时两笔下单之间的间隔。每个 Pair 内下单都是串行的，如果订单从发送到确认的时间超过了这个设置的间隔，则下一笔订单会立即发送。也就是说：`实际下单间隔=max(从下单到确认所需的时间,Loop Interval)`
    - P&L High-performance DB：为 P&L 启用高性能数据库，只支持 Chrome，Edge 和 Firefox 浏览器。勾选后，一个浏览器中不可以同时打开两个版本不一致的网页，否则可能导致数据库卡住。

## 第二列

- 交易所
    
    ![image.png](settings-page-guide/image-3.png)
    
    - 在 Unique Name 输入自定义的名字，并在下拉框中选择交易所，再点击 Add 即可添加一个交易所
    - 添加交易所后，需要设置 API Key，API Secret 等信息，点击 Save 后
        - 显示绿色字，显示你的资金量数字，说明交易所配置保存成功，点击资金量数字可以查看资金量详情
        - 显示红色字，说明交易所配置有误，交易所配置没有保存
    - 点击已经添加的交易所的名字，可以重命名
        - 重命名可能会导致已有的 Pair 和 P&L 出错
    - 点击 `⟳` 按钮，可以测试 ping
- 区块链
    
    ![image.png](settings-page-guide/image-4.png)
    
    - 在下拉框中选择链，再点击 Add 即可添加一个链
    - RPCs：自定义 RPC，灰色的是默认 RPC，如果填了自定义的，会覆盖默认的
    - Slippage：这个链的默认滑点，是百分数
    - Fee：Gas Fee，是一个倍数，表示是默认 gas 的多少倍
    - Bundle：是否将交易发给 flashbots、48club 等 bundler，仅支持部分链
- 代币
    
    ![image.png](settings-page-guide/image-5.png)
    
    - 在交易页面搜索 Pair 的位置，如果粘贴过代币的合约地址，就会出现在这里

## 第三列

导出历史记录

- Trading：交易记录
    
    ![image.png](settings-page-guide/image-6.png)
    
    - 第一条是所选日期的总表
    - 后面每条是按 Pair 中的 A 和 B 筛选的分表
- 交易小票
    
    ![image.png](settings-page-guide/image-7.png)
    
    - 点击任意一个导出按钮后，会显示交易小票
    - SYMBOLS 和 EXCHANGES 默认隐藏，点击可以展示出来
- Funding：永续合约资金费记录
    
    ![image.png](settings-page-guide/image-8.png)
    
    - Funding Recently：最近 7 天的资金费总表
    - 选择某个 Ticker 后，则是这个 Ticker 的最近 7 天的资金费分表
- Lending：现货杠杆借贷利息记录
    
    ![image.png](settings-page-guide/image-9.png)
    
    - 必须先选一个 Ticker 才可以导出

每一条记录都有三种导出选项

- Webpage：直接在浏览器中展示一个 csv 文件
- Telegram：通过 Telegram Bot 发送 csv 文件
- Download：下载为 csv 文件
