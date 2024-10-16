# 安全传输安全密钥

请不要使用微*、Q*等普通通信软件传输安全密钥。这类软件在传输过程中并未提供端到端加密，并且通信数据会经过运营商的服务器，存在被运营商读取、保存甚至泄露的风险。因此，为了确保安全密钥的传输安全，请优先考虑以下措施：

::: info
此处并无贬低普通通讯软件的意思，以上提到的软件各有优点，但在传输安全性方面，普通通讯软件不如端到端加密通讯软件。
:::

1. **使用加密通讯工具**：选择支持端到端加密的通信工具，如Si**al或Te****am。这些工具可以确保密钥在传输过程中无法被第三方截取或读取。

   ::: danger
   注意：请确保使用当地合法的软件。
   :::

2. **物理传输**：最安全的传输方式仍然是物理传输。例如，通过U盘或移动硬盘拷贝密钥并亲自操作这种方式可以完全避免任何网络攻击的可能性。

   ::: warning
   请注意，不要将安全密钥存储在常用的存储介质上，详见[安全存储安全密钥](storage-secure-key)的相关指导。
   :::

3. **本地传输**：如果需要无线传输（如传输到iOS设备上），请选择本地传输工具。例如，[LocalSend](https://localsend.org) 是一种本地传输工具，尽管不具备加密功能，但其传输过程完全在局域网内进行，不经过任何第三方服务器。这意味着您的安全密钥在传输过程中不会离开您的家庭或工作网络，极大地降低了被外部攻击的风险。

   ::: info
   NerChat!的维护团队与开源软件LocalSend没有任何关系，对于LocalSend有任何疑问或想要为其项目做出贡献请直接前往其社区[LocalSend Community](https://localsend.org/zh-CN/community)，NerChat!本身不对给您使用其软件造成的任何直接或间接的损失负任何责任。
   :::

选择安全的传输方式后，还应采用安全的存储方法来保护您的安全密钥。请参阅[安全存储安全密钥](storage-secure-key)的相关指导，以获取有关密钥存储的详细建议。