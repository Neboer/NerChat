import { defineConfig } from 'vitepress'
import fontawesome_components from './fontawesome_components'
import docs_sidebar from './docs_sidebar'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NerChat!——开源IM",
  description: "NerChat! 是一个部署在国内的即时聊天Matrix服务器。",
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
      message: '本站采用MIT协议开源，文档内容基于CC-BY-4.0协议开放。',
      copyright: '<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://www.neboer.site/nerchat">NerChat! Documents</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://www.neboer.site">Neboer</a> is    licensed under <a href="https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">Creative Commons Attribution 4.0 International<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;display: inline;"     src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img     style="height:22px!important;margin-left:3px;vertical-align:text-bottom;display: inline;"     src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""></a></p>'
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
    externalLinkIcon: true
  },
  vite: fontawesome_components.vite,
  srcDir: './src'
})
