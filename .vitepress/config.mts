import { defineConfig } from 'vitepress'
import fontawesome_components from './fontawesome_components'
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
      { text: '文档', link: '/docs/', activeMatch: '^/docs' },
      { text: '关于', link: '/team' }
    ],

    sidebar: {
      '/docs': docs_sidebar
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  vite: fontawesome_components.vite
})
