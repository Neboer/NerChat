---
title: 客户端
---

你可以用桌面端浏览器使用NerChat!的Web版本chat.neboer.site直接连接NerChat!，或者使用NerChat!的官方Android软件Nelement登录NerChat!.这两种方法是推荐的操作，不需要您做任何多余的操作，就像国产聊天软件一样开箱即用，非常方便。

::: warning

NerChat!的Web端仅支持桌面浏览器使用，移动端访问NerChat!请使用app，不要直接连接网站。

桌面端推荐使用Chrome和Firefox浏览器连接NerChat!，请尽量避免使用国产浏览器连接。

:::

当然，如果您不想用NerChat!制作的软件，您当然可以使用任何支持Matrix协议的客户端（如Element Android）登录NerChat!，只需要把homeserver地址设置为**chat.neboer.site**即可。当然您必须首先解决官方app无法连接至主站的问题。

同时，你也可以用NerChat!发布的客户端连接任何支持Matrix协议的服务器，当然了，包括matrix.org在内的一系列网站不可以直接访问。

根据你所使用的平台点击下面列表中的软件名称，下载对应客户端。

| 使用环境            | 推荐客户端  |  官方客户端  |
| :----:            | :--------: | :--------: |
|Web                |chat.neboer.site|app.element.io|
|Windows/Linux/MacOS|  Nelemer   | Element Desktop|
|Android            |  Nelement    | Element Android |
|IOS                | -          | Element IOS     |

在桌面设备上，Web端和桌面端的消息推送是最快的，但是因为要做HTTP轮询请求，比较耗费电量。

在移动设备上，推送是通过FCM和APN来实现的，相对来说比较省电，但是推送的抵达会慢一些。在没有Google Play服务的Android设备上可能无法正常收到推送，这是Element的已知问题，Neboer的Nelement并没有解决这一点。如果您非常在意消息推送的即时性，可以打开Element/Nelement客户端的常驻后台选项，同时在电池优化里忽略它们。

详细的操作方法可以参考您使用APP的设置选项。