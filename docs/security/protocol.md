---
title: 加密协议
order: 6
next: ../help/
---

Matrix的加密协议基于密码学基础设计，可以保证聊天内容的绝对安全。

## Olm库

Olm (libolm) 是 C 和 C++ 中 Double Ratchet 加密棘轮的独立实现，其中还包括Matrix中使用的、新的Megolm“群组棘轮”算法。Olm库是整个Matrix密码学实现的核心函数库，您的每个运行Matrix的客户端以及我们的服务端都使用到了这个库。

OLM库的仓库地址位于[gitlab托管](https://gitlab.matrix.org/matrix-org/olm)

Olm 1.3.0 于 2016 年 9 月由 NCC 集团的密码学分部独立评估以检查安全问题：您可以下载其评估报阅读所有相关信息。

[https://www.nccgroup.com/globalassets/our-research/us/public-reports/2016/november/ncc_group_olm_cryptogrpahic_review_2016_11_01.pdf](https://www.nccgroup.com/globalassets/our-research/us/public-reports/2016/november/ncc_group_olm_cryptogrpahic_review_2016_11_01.pdf)

[https://matrix.org/blog/2016/11/21/matrixs-olm-end-to-end-encryption-security-assessment-released-and-implemented-cross-platform-on-riot-at-last/](https://matrix.org/blog/2016/11/21/matrixs-olm-end-to-end-encryption-security-assessment-released-and-implemented-cross-platform-on-riot-at-last/)

## Megolm

[Megolm](https://gitlab.matrix.org/matrix-org/olm/blob/master/docs/megolm.md)是一个基于AES设计的双棘轮加密协议，用来加密群组中的聊天信息。Megolm 棘轮适用于加密消息传递应用程序，其中每条消息可能有大量接收者，因此排除了使用点对点加密系统，如 Olm。 它还允许收件人多次解密收到的消息。例如，在客户端/服务器应用程序中，密文的副本可以存储在（不受信任的）服务器上，而客户端只需要存储会话密钥。

对话中的每个参与者都使用他们自己的出站会话来加密消息。会话由棘轮和 Ed25519 密钥对组成。 棘轮可以向前计算但不能向后计算，提供了保密性。棘轮用于为每条消息派生一个不同的消息密钥。 真实性通过 Ed25519 签名提供。 棘轮的值和 Ed25519 密钥的公共部分通过安全的点对点通道与对话中的其他参与者共享。如果点对点通道向参与者提供消息的真实性和向第三方提供消息的可否认性，Megolm 会话将继承这些属性。

在Matrix中，Megolm密码库存储在用户本地，也经过加密后备份到服务器中。实际上，在Matrix中Megolm的应用非常广泛，不仅仅局限在参与人数众多的群组聊天中，点对点的聊天也是Megolm保护的，这主要是为了统一。