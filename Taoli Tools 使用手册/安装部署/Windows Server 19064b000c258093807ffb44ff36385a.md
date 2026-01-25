# Windows Server

## 阿里云轻量应用服务器

1. 阿里云优惠链接：
    
    [云小站_专享特惠_云产品推荐-阿里云](https://www.aliyun.com/minisite/goods?userCode=a3nb4tbw)
    
    [轻量应用服务器_web服务器_个人建站_弹性计算-阿里云](https://cn.aliyun.com/product/swas?userCode=a3nb4tbw)
    
    阿里云国际站：
    
    [Simple Application Server-Alibaba Cloud](https://www.alibabacloud.com/product/swas?referral_code=A92PTS)
    
2. 按照下图方式筛选机器：
    
    ![image.png](Windows%20Server/image.png)
    
3. 套餐配置：选择通用型，不要选择国际型，推荐2核4G起。

## 腾讯云轻量应用服务器

1. 腾讯云优惠链接：
    
    [腾讯云运营活动 - 腾讯云](https://curl.qcloud.com/G8aWWIr7)
    
2. 按照下图方式筛选机器：
    
    ![image.png](Windows%20Server/image%201.png)
    
3. 进入服务器购买页面，如图选择：
    
    ![image.png](Windows%20Server/image%202.png)
    
    ![image.png](Windows%20Server/image%203.png)
    
4. 系统镜像：Windows Server 2022 中文版
5. 地域：亚太 - 东京。因为大部分交易所的服务器都在东京
6. 可用区：随机分配即可，无明显差别
7. 套餐规格：推荐 2核4GB 起，添加的Pair多了，可能需要更高。
8. 登录凭证：建议先使用自动生成的密码，会通过站内信的形式收到。

## 修改默认用户名和端口

<aside>
🚨

默认用户名Administrator和默认端口3389会被很多黑客频繁尝试密码，导致账户被锁。因此建议修改。

</aside>

[Windows 服务器怎么修改密码和用户名？服务器修改密码需要重启吗？-腾讯云开发者社区-腾讯云](https://cloud.tencent.com/developer/article/2364143)

修改完用户名后登出再登陆即可生效，记得在远程桌面客户端里修改用户名。

[云服务器 修改云服务器远程默认端口-运维指南-文档中心-腾讯云](https://cloud.tencent.com/document/product/213/42838)

修改完默认端口后重启生效，记得在远程桌面客户端里修改端口。之前使用默认端口只需填IP，现在要在IP后面加上小写冒号和端口号

![image.png](Windows%20Server/image%204.png)

## 禁用Windows自动更新

腾讯云轻量应用服务器默认禁用了Windows更新，可以去系统设置中确认是否有“你的组织已关闭自动更新”字样：

![image.png](Windows%20Server/image%205.png)

如果没有关闭，则需手动关闭。

[win10自动更新很烦，如何彻底关闭Win10自动更新-腾讯云开发者社区-腾讯云](https://cloud.tencent.com/developer/article/2442719)

## 禁用Edge浏览器的自动休眠

访问 edge://settings/system/managePerformance 如图

![image.png](Windows%20Server/31857a0d-4b27-4cc5-9ea7-f9ba76975c6b.png)

- 关闭”启用高效模式”
- 关闭“使用效率模式改善电脑游戏体验”
- 关闭“使用标签页休眠功能节约资源“
- “从不让这些站点进入睡眠状态”添加站点`https://taoli.tools`

## 禁用Chrome浏览器的自动休眠

访问 chrome://settings/performance 如图

![image.png](Windows%20Server/image%206.png)

- “始终让以下网站保持活跃状态”添加站点`https://taoli.tools`
- 关闭“省内存模式”
- 关闭“节能模式”

## 使系统不自动锁屏

按照下面的教程创建Logout.bat

[我希望断开桌面远程连接后，被控制电脑不要自动锁屏 - Microsoft Q&A](https://learn.microsoft.com/zh-cn/answers/questions/4105414/question-4105414)

为Logout.bat再创建一个快捷方式，右键快捷方式的属性，选择高级，勾选“用管理员身份运行”

![image.png](Windows%20Server/image%207.png)

右键任务栏，勾选工具栏里的”桌面”选项

![image.png](Windows%20Server/image%208.png)

之后就可以使用任务栏里的工具栏点击运行Logout快捷方式了

![image.png](Windows%20Server/image%209.png)

## 使系统保持唤醒状态

安装PowerToys并打开Awake功能。以避免长时间挂机导致系统休眠。

[安装 PowerToys](https://learn.microsoft.com/zh-cn/windows/powertoys/install)

按照下图进行设置：

![image.png](Windows%20Server/image%2010.png)

## 远程桌面连接登录

[轻量应用服务器 使用远程桌面连接登录 Windows 实例-操作指南-文档中心-腾讯云](https://cloud.tencent.com/document/product/1207/44579)

Microsoft Store:

[Windows App - Free download and install on Windows | Microsoft Store](https://apps.microsoft.com/detail/9n1f85v9t8bn)

Google Play:

[Windows App - Apps on Google Play](https://play.google.com/store/apps/details?id=com.microsoft.rdc.androidx)

Mac App Store:

[‎Windows App](https://apps.apple.com/app/id1295203466)

iOS App Store:

[‎Windows App Mobile](https://apps.apple.com/app/id714464092)

优化远程桌面连接

[验证码_哔哩哔哩](https://www.bilibili.com/opus/731670133133541410)
