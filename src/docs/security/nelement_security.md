---
title: Nelement安全性
order: 7
---

为了方便更多安卓用户，我们在Element Android源代码的基础上做了简单的修改，发布了Nelement，旨在打破Element无法更改的默认服务器设置给中国用户带来的不便。在某种意义上来说，Nelement在某种意义上代表了NerChat!聊天平台的立场。

Element Android是开源软件，Nelement也是开源软件。再次重申：Nelement的源代码可以在 [github.com/Neboer/Nelement](https://github.com/Neboer/Nelement) 上找到。Nelement与Element Android使用相同的开源协议，但家服务器配置与Element Android不同，可以让中国大陆的朋友打开软件即可连接到NerChat!，而无需等待Element中直连失败超时再调整服务器地址。

Nelement的唯一发布渠道是GitHub Release，我们不提供任何应用商店下载/GooglePlay下载/付费下载/网盘下载方法。根据Apache协议的约束，您可以在保证安装包完整的前提下自由分发Nelement的源代码和可安装软件。

## Nelement对Element Android的修改

Nelement主要修改了Element Android的四处代码：

1. Nelement修改了Element Android的家服务器配置文件，修改默认服务器、bug报告包名等信息。

    参考这个[commit](https://github.com/Neboer/Nelement/commit/30857e2f)的这个[文件修改](https://github.com/Neboer/Nelement/commit/30857e2f#diff-5db79790a9dbb104c9d1687b291b21b55bc9ae1736d6a83251e1de6a012911bf)。


2. Nelement修改了Element Android的图标、包名和应用名，与原版软件做出了重要区分，并且可以和原软件共存。

    对图标和应用名的修改请参考同一个[commit](https://github.com/Neboer/Nelement/commit/30857e2f)（与上一个相同）的其余所有修改。

    对包名的修改请参考这个[commit](https://github.com/Neboer/Nelement/commit/b5a5a4e8)中的这个[文件修改](https://github.com/Neboer/Nelement/commit/b5a5a4e8#diff-7d90e090118cb3b19ed7934b93c3b7ce8235f64f4fe186d2ea3f83fee00bf03e)


3. Nelement修改了Element Android的构建流程，直接构建Fdroid版本，而不再编译Google Play的预编译版本，因为Nelement不会发布到Google Play商店，同时也避免了无Google Play框架的国产手机在使用中出现问题。

    这个修改主要发生在这个[commit](https://github.com/Neboer/Nelement/commit/afc7636f)，这里删除了Element Android中不必要的测试/发布等CI过程，只保留Fdroid Release版本的构建代码。


4. Nelement修改了Element Android中配置的默认jitsi语音服务器地址为我们在国内搭建的jitsi服务，让用户可以享受高品质、低延迟的语音通话体验。

    参考这个[commit](https://github.com/Neboer/Nelement/commit/5efdb741)。


我们还对Nelement做了一些其他的适配性小修改，比如修改google-services.json中的包名、修改manifest文件中注册的，以及使用Neboer自己的密钥对Nelement进行签名、修改Element的版本号等等。

## Nelement代码审查

Nelement的代码完全是根据Element Android项目修改而来，所有对源代码的修改都可以直接[在GitHub上查看](https://github.com/vector-im/element-android/compare/main...Neboer:Nelement:main)。
我相信各位拥有足够的实力，或者拥有足够的信任来认可Nelement为确保安全性所做出的努力。

当然，同样的，你可以完全不信任我们，一个修改的客户端不但会窃取你的隐私信息，还可能让所有的加密方法瞬间失效——我可以直接在客户端里把你的消息截留，偷偷发到服务器上！所以，客户端开源透明同样重要，Nelement必须保证一切的开源和透明，尽可能保证获得你们的信任。

Nelement的软件发布流程如下：

1. （来自上游）Element Android上游发布新版本Release。
2. Nelement的维护者收到Release通知，目前NerChat!里负责维护Nelement的主要开发者是Neboer。
3. Neboer向Nelement发起pull request，申请将element/main分支合并到Nelement/main分支。
4. Neboer在本地合并两个分支，更新代码，解决冲突，做出修改。
5. Neboer提交修改，同时将修改push到Neboer/Nelement仓库中。
6. commit行为触发了GitHub Actions中配置好的CI，编译过程启动，自动构建无签名的Release版本的安装包。
7. GitHub Release构建完成，Neboer将Release中生成的artifact——也就是编译产生的无签名Release版本下载到本地并用密钥进行签名。
8. Neboer发布新版本的GitHub Release，将签名完毕的Nelement安装包以assets的形式添加到其中。
9. NerChat!发布服务器通知，告知大家新版本的Nelement已经发布，可以下载。

可以看到，在这整个过程中，我们完全无法修改Nelement的代码，因为您可以在软件发布后下载GitHub Actions中产生的artifact并与Release的版本相比对，除了签名外两个压缩包中的所有文件都应该完全相同。Nelement的安全性是通过GitHub Actions保证的。

## 可信的Nelement获取渠道

NerChat!中发布Nelement的方法只是通过GitHub Release，国内很多用户下载存在一定困难。为了方便NerChat!无障碍的传播，我们允许用户在Apache协议的许可下自由的分发Nelement的资源。在以下的列表中列举了一些目前得到NerChat!维护者认可的Nelement发布渠道，如果您发现了Nelement软件出现在其他应用商店/网盘链接分享中，请及时告知我们，谢谢。

如果您想成为Nelement在某个平台的新的发布者，请直接与Neboer或Krusl取得联系。

以下是目前已知的、会定期更新且可以信任的Nelement第三方发布渠道：

- [GitHub Release](https://github.com/Neboer/Nelement)
