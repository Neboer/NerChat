import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { getDirname, path } from "@vuepress/utils";
const __dirname = getDirname(import.meta.url);


let ogprefix = 'og: http://ogp.me/ns#'
let title = 'NerChat! 开源IM'
let description = 'NerChat!是一个国内部署的开源即时聊天Matrix服务器！'
let color = '#41b883'
let author = 'Neboer'

export default defineUserConfig({
  base: "/nerchat/",
  // base: "/",


  locales: {
    "/": {
      lang: "zh-CN",
      title: "NerChat!",
      description: "NerChat! 开源IM",
    },
  },

  head: [
    ['link', { rel: 'icon', href: `/assets/favicon.ico` }],
    ['meta', { name: 'theme-color', content: color }],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicons/favicon-32x32.png"}],
    ['meta', { prefix: ogprefix, property: 'og:title', content: title }],
    ['meta', { prefix: ogprefix, property: 'og:type', content: 'website' }],
    ['meta', { prefix: ogprefix, property: 'og:url', content: 'https://www.neboer.site/nerchat/' }],
    ['meta', { prefix: ogprefix, property: 'og:description', content: description }],
    ['meta', { prefix: ogprefix, property: 'og:image', content: 'https://www.neboer.site/nerchat/nerchatlogo.png' }],
    ['meta', { prefix: ogprefix, property: 'og:article:author', content: author }],
],
  theme,
  shouldPrefetch: false,
  alias: {
    '@nershare': path.resolve(__dirname, "../nershare_components")
  }
});
