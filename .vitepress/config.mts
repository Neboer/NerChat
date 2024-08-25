import { defineConfig } from 'vitepress'
import fontawesome_components from './fontawesome_components'
import docs_sidebar from './docs_sidebar'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
// @ts-ignore
import cc_by_40_html from './CC-BY-4.0.txt?raw'
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: "NerChat!——开源IM",
  description: "NerChat! 是一个部署在国内的即时聊天Matrix服务器。",
  head: [
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/nerchat/favicon_logo/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/nerchat/favicon_logo/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/nerchat/favicon_logo/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/nerchat/favicon_logo/site.webmanifest' }]
  ],
  lang: 'zh-CN',
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/nerchat_reverse_logo.svg',
    siteTitle: 'NerChat! 指南',
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/docs/', activeMatch: '^/docs' },
      { text: '关于', link: '/team' }
    ],
    sidebar: {
      '/docs': docs_sidebar
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Neboer/NerChat' }
    ],
    footer: {
      message: 'NerChat! Documents are written by Neboer & Retrieve0 & Cikaros with ❤️',
      copyright: cc_by_40_html
    },
    lastUpdated: {
      text: '上次更新',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short',
        forceLocale: true
      }
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    darkModeSwitchLabel: '切换主题',
    lightModeSwitchTitle: '切换到明亮主题',
    darkModeSwitchTitle: '切换到暗黑主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    externalLinkIcon: true,

    search: {
      provider: 'local'
    }
  },
  vite: fontawesome_components.vite,
  srcDir: './src',

  mermaid: {
    // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  },
  base: "/nerchat",
  sitemap: {
    hostname: 'https://www.neboer.site/nerchat/'
  }
})
