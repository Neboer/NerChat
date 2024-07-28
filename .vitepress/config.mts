import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NerChat!——开源IM",
  description: "NerChat! 是一个部署在国内的即时聊天Matrix服务器。",
  lang: 'zh-CN',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/docs/' },
      { text: '团队', link: '/team' }
    ],

    sidebar: {
      '/docs': [
        {
          text: '文档',
          items: [
            { text: 'Markdown Examples', link: '/docs/markdown-examples' },
            { text: 'Runtime API Examples', link: '/docs/api-examples' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
