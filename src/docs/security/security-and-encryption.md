# 安全与加密

NerChat!基于Matrix部署，专注于聊天内容的可信安全传输。其中“可信”指的是您使用完全开源的客户端连接NerChat!服务器，开源客户端的行为是完全透明的，并且受到了开源组织和大量使用者的长期安全审查，是可以信任、安全可靠的客户端。NerChat!本身发布的客户端只是在这些基本客户端的基础上做了一些微小的修改，以便可以被用户低门槛的快速使用传播，这些修改后的客户端同样也是开源的，并且在遵守源软件的开源协议的情况下发布，欢迎各位审查NerChat!修改软件的源代码，并针对其安全性提出质疑。

安全的基础是加密，Matrix的安全性是由一套复杂的加密系统实现的。这一套复杂的身份认证/消息加密系统是Matrix与其他聊天软件的重要区别。我们希望通过这些文档让您信任Matrix的安全性，并了解到开源开发者为其所做出的大量努力。同时，本章中也有一些非常关键的内容，推荐所有人阅读。

有关Matrix实现加密的原理理解可以参考[密码学综述](cryptology)部分。如果您对加密本身不感兴趣，那么至少要了解[安全密钥](secure-key)和[交叉认证](cross-sign)两个部分的内容。

我们深知这部分的内容是大多数用户所关心的内容，所以我们尽可能的讲Matrix对聊天记录的保护措施讲得清晰明确，帮助想要验证Matrix协议安全性的用户更好的了解这套协议的实现机制，进而增强大家对它的了解和信心。

如果您对NerChat!的加密完全不感兴趣，您当然可以仅仅把NerChat!作为一个普通的聊天平台（像微信QQ一样），您只需要知道，没有您的加密密钥，任何人无法获得您的聊天记录，这里的任何人包括我们——服务器的运营方。如果您想要更多、更全面的安全保护，那么还请您详细而完善的阅读本章节。