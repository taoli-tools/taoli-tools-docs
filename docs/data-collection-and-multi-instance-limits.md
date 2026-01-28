# 信息收集与多开限制

## 信息收集

Taoli Tools 不收集任何密钥和交易相关的数据，但会收集以下信息用于 Taoli Tools 账户滥用的检测：

- User Agent
- IP 地址
- 交易所 UID 或钱包地址的 Hash（Hash 可以用来检测数据是否重复，但由 Hash 并不能倒推出 UID 或地址）
- 交易所资金额度

## 多开限制

购买 VIP 后，可以在任意个浏览器环境中使用，每个浏览器环境中仅计算和显示当前环境中添加的交易所资金额度，但服务器后台会统计不同浏览器环境的交易所资金总额。

在同一个机器上，可以使用以下方式开启多个互不影响的浏览器环境：

修改命令中的「Taoli Tools」为「Taoli Tools 1」，「Taoli Tools 2」等不同文件夹路径，一个文件夹路径对应一个独立的浏览器环境。

- Windows + Edge：按 Windows 键+R 后，输入以下内容然后按回车：
    
    ```powershell
    msedge.exe --user-data-dir="C:\Taoli Tools"
    ```
    
- Windows + Chrome：按Windows键+R后，输入以下内容然后按回车：
    
    ```powershell
    chrome.exe --user-data-dir="C:\Taoli Tools"
    ```
    
- macOS + Chrome：打开Terminal.app输入以下内容然后按回车：
    
    ```bash
    open -na "Google Chrome" --args --user-data-dir="$HOME/Taoli Tools"
    ```
    
- Linux + Chrome：打开Terminal，输入以下内容然后按回车：
    
    ```bash
    exec google-chrome-stable --user-data-dir="$HOME/Taoli Tools"
    ```
