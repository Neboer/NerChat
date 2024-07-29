import { defineConfig } from 'vitepress'
import replace_vpimage_fontawesome from './replace_vpimage_fontawesome'
import docs_sidebar from './docs_sidebar'

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
      '/docs': docs_sidebar
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  vite: replace_vpimage_fontawesome.vite
})
