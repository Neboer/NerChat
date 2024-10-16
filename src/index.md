---
head:
  - ['meta', { property: 'og:title', content: 'NerChat!——开源IM' }]
  - ['meta', { property: 'og:description', content: 'NerChat! 是一个部署在国内的即时聊天Matrix服务器。' }]
  - ['meta', { property: 'og:image', content: 'http://www.neboer.site/nerchat/wide_nerchat_logo.svg' }]
  - ['meta', { property: 'og:url', content: 'https://www.neboer.site/nerchat/' }]
  - ['meta', { property: 'og:type', content: 'website' }]

# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "NerChat!"
  text: "Matrix驱动的开源IM"
  tagline: "NerChat!是一个基于Matrix开发的、专业服务于国内用户多年的、自由安全的即时通信平台。"
  actions:
    - theme: brand
      fontawesome: ['fab', 'chrome']
      text: 浏览器访问
      # link: /docs/client/desktop-client
      link: https://chat.neboer.site/
      browser_type: desktop
    - theme: brand
      fontawesome: ['fab', 'android']
      text: 安卓客户端
      link: /docs/client/nelement
      browser_type: Android
    - theme: brand
      fontawesome: ['fab', 'apple']
      text: 苹果用户指南
      link: /docs/client/ios-instructions
      browser_type: iOS
    - theme: alt
      fontawesome: ['fas', 'mobile-screen']
      text: 其他客户端
      link: /docs/client/available-clients
    - theme: alt
      fontawesome: ['far', 'file']
      text: 阅读文档
      link: /docs/
  image:
    src: /nerchat_logo.svg
    alt: VitePress

features:
  - title: 开源
    icon: 
      fontawesome: ['fas', 'code']
    details: NerChat!基于Matrix和Element web部署，整个服务端和客户端的代码完全开源
  - title: 安全
    icon:
      fontawesome: ['fas', 'lock']
    details: NerChat!继承了Matrix的优势，采用非对称加密确保加密的聊天内容完全不会被除聊天的参与者以外的人获得
  - title: 现代
    icon: 
      fontawesome: ['fas', 'rocket']
    details: Element是极其现代的聊天软件，功能全面，界面美观，支持语音、图片、代码、数学、markdown、文件等多种消息和视频会议
  - title: 活跃
    icon: 
      fontawesome: ['fas', 'fire']
    details: Matrix社区是非常活跃的开源社区，拥有大量的开发者，同时作为世界上最顶尖的开放安全聊天系统开发团队，开发速度很快
  - title: 维护
    icon: 
      fontawesome: ['fas', 'wrench']
    details: NerChat!由UntilSoftware在维护。UntilSoftware是一个由敬业而专业的开源开发者组成的的开源组织，确保解决所有技术问题
  - title: 本地化
    icon: 
      fontawesome: ['fas', 'globe']
    details: Matrix项目专注于本地化，并且NerChat!更是针对Matrix的情况对中国大陆地区的访问做了优化，可以流畅访问
  - title: 跨平台
    icon: 
      fontawesome: ['fas', 'mobile-screen']
    details: Matrix本身就拥有极其丰富的跨平台支持，Web、Windows、Linux、MacOS、Android、ios等多端畅聊
  - title: 开放
    icon: 
      fontawesome: ['fas', 'users']
    details: NerChat!兼容Matrix协议的所有软件，同时NerChat!的软件也兼容其他的Matrix服务器，希望可以为优秀开源技术的本地化做一份贡献。
---
