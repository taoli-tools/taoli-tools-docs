# 命令行禁用

通过命令行禁用浏览器跨域安全

- Windows + Edge：按 Windows 键+R 后，输入以下内容然后按回车：

    ```powershell
    msedge.exe --disable-web-security --user-data-dir="C:\Taoli Tools"
    ```

- Windows + Chrome：按Windows键+R后，输入以下内容然后按回车：

    ```powershell
    chrome.exe --disable-web-security --user-data-dir="C:\Taoli Tools"
    ```

- macOS + Chrome：打开Terminal.app输入以下内容然后按回车：

    ```bash
    open -na "Google Chrome" --args --disable-web-security --user-data-dir="$HOME/Taoli Tools"
    ```

- Linux + Chrome：打开Terminal，输入以下内容然后按回车：

    ```bash
    exec google-chrome-stable --disable-web-security --user-data-dir="$HOME/Taoli Tools"
    ```


打开的浏览器中有这个提示，说明成功了。

![image.png](image-2.png)

之后的每次启动也需要使用以上方式启动，不要以默认方式启动。

其他操作系统+浏览器的组合，请使用「browser disable cors」进行搜索。
