---
title: 桌面端指南
order: 2
---

![](/nelemer_icon.png)

## 桌面端指南

1. 前往Element软件的[下载页](https://element.io/get-started#download)
2. 选择适合您操作系统的版本，并点击直接下载。
3. 下载、运行，对Linux用户请使用下面的包管理说明，按提示安装到系统中。
4. 此时不要打开软件——如果您不能访问Matrix主站的话，软件会报错。请先按指导添加配置文件到系统中，再打开：

## 配置方法

在以下路径中新建一个文件`config.json`，将此内容保存其中

```json

{
    "default_server_name": "chat.neboer.site"
}

```

| 操作系统 | 文件位置  |
| :----:  | :--------: |
| Windows | %APPDATA%\Element\config.json |
|Linux    |$XDG_CONFIG_HOME/Element/config.json 或 ~/.config/Element/config.json|
|MacOS|~/Library/Application Support/Element/config.json|

配置放好后，请重新启动软件，就可以默认连接到NerChat!主站了。