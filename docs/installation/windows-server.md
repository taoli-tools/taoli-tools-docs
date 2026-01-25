# Windows Server

## 阿里云轻量应用服务器

1. 阿里云优惠链接：
    
    [云小站_专享特惠_云产品推荐-阿里云](https://www.aliyun.com/minisite/goods?userCode=a3nb4tbw)
    
    [轻量应用服务器_web 服务器_个人建站_弹性计算-阿里云](https://cn.aliyun.com/product/swas?userCode=a3nb4tbw)
    
    阿里云国际站：
    
    [Simple Application Server-Alibaba Cloud](https://www.alibabacloud.com/product/swas?referral_code=A92PTS)
    
2. 按照下图方式筛选机器：
    
    ![image.png](windows-server/image.png)
    
3. 套餐配置：选择通用型，不要选择国际型，推荐 2 核 4G 起。

## 腾讯云轻量应用服务器

1. 腾讯云优惠链接：
    
    [腾讯云运营活动 - 腾讯云](https://curl.qcloud.com/G8aWWIr7)
    
2. 按照下图方式筛选机器：
    
    ![image.png](windows-server/image-1.png)
    
3. 进入服务器购买页面，如图选择：
    
    ![image.png](windows-server/image-2.png)
    
    ![image.png](windows-server/image-3.png)
    
4. 系统镜像：Windows Server 2022 中文版
5. 地域：亚太 - 东京。因为大部分交易所的服务器都在东京
6. 可用区：随机分配即可，无明显差别
7. 套餐规格：推荐 2 核 4GB 起，添加的 Pair 多了，可能需要更高。
8. 登录凭证：建议先使用自动生成的密码，会通过站内信的形式收到。

## 修改默认用户名和端口

> [!WARNING]
> 默认用户名 Administrator 和默认端口 3389 会被很多黑客脚本扫描，频繁尝试暴力破解密码，导致账户被锁。因此建议修改。

[Windows 服务器怎么修改密码和用户名？服务器修改密码需要重启吗？-腾讯云开发者社区-腾讯云](https://cloud.tencent.com/developer/article/2364143)

修改完用户名后登出再登陆即可生效，记得在远程桌面客户端里修改用户名。

[云服务器 修改云服务器远程默认端口-运维指南-文档中心-腾讯云](https://cloud.tencent.com/document/product/213/42838)

修改完默认端口后重启生效，记得在远程桌面客户端里修改端口。之前使用默认端口只需填 IP，现在要在 IP 后面加上小写冒号和端口号

![image.png](windows-server/image-4.png)

## 禁用 Windows 自动更新

腾讯云轻量应用服务器默认禁用了 Windows 更新，可以去系统设置中确认是否有“你的组织已关闭自动更新”字样：

![image.png](windows-server/image-5.png)

如果没有关闭，则需手动关闭。

[win10 自动更新很烦，如何彻底关闭 Win10 自动更新-腾讯云开发者社区-腾讯云](https://cloud.tencent.com/developer/article/2442719)

## 禁用 Edge 浏览器的自动休眠

访问 edge://settings/system/managePerformance 如图

![image.png](windows-server/31857a0d-4b27-4cc5-9ea7-f9ba76975c6b.png)

- 关闭”启用高效模式”
- 关闭“使用效率模式改善电脑游戏体验”
- 关闭“使用标签页休眠功能节约资源“
- “从不让这些站点进入睡眠状态”添加站点`https://taoli.tools`

## 禁用 Chrome 浏览器的自动休眠

访问 chrome://settings/performance 如图

![image.png](windows-server/image-6.png)

- “始终让以下网站保持活跃状态”添加站点`https://taoli.tools`
- 关闭“省内存模式”
- 关闭“节能模式”

## 使系统不自动锁屏

按照下面的教程创建 Logout.bat

[我希望断开桌面远程连接后，被控制电脑不要自动锁屏 - Microsoft Q&A](https://learn.microsoft.com/zh-cn/answers/questions/4105414/question-4105414)

为 Logout.bat 再创建一个快捷方式，右键快捷方式的属性，选择高级，勾选“用管理员身份运行”

![image.png](windows-server/image-7.png)

右键任务栏，勾选工具栏里的”桌面”选项

![image.png](windows-server/image-8.png)

之后就可以使用任务栏里的工具栏点击运行 Logout 快捷方式了

![image.png](windows-server/image-9.png)

## 使系统保持唤醒状态

安装 PowerToys 并打开 Awake 功能。以避免长时间挂机导致系统休眠。

[安装 PowerToys](https://learn.microsoft.com/zh-cn/windows/powertoys/install)

按照下图进行设置：

![image.png](windows-server/image-10.png)

## 远程桌面连接登录

[轻量应用服务器 使用远程桌面连接登录 Windows 实例-操作指南-文档中心-腾讯云](https://cloud.tencent.com/document/product/1207/44579)

Microsoft Store:

[Windows App - Free download and install on Windows | Microsoft Store](https://apps.microsoft.com/detail/9n1f85v9t8bn)

Google Play:

[Windows App - Apps on Google Play](https://play.google.com/store/apps/details?id=com.microsoft.rdc.androidx)

Mac App Store:

[Windows App](https://apps.apple.com/app/id1295203466)

iOS App Store:

[Windows App Mobile](https://apps.apple.com/app/id714464092)

优化远程桌面连接

[Microsoft Remote Desktop（RDP ）优化流程](https://www.bilibili.com/opus/731670133133541410)
