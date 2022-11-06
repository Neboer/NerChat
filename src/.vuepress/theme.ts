import { hopeTheme } from "vuepress-theme-hope";
import { navbar, sidebar } from "vuepress-theme-hope";
import sidebar_config from "./sidebar"


export default hopeTheme({
  hostname: "https://localhost",

  iconAssets: "fontawesome",

  logo: "/logo.svg",

  docsDir: "demo/theme-docs/src",

  pageInfo: ["Original", "Date", "Category"],

  locales: {
    "/": {
      // navbar
      navbar: navbar([
        "/",
        { text: "文档", icon: "file", link: "/docs/" },
        { text: "下载", icon: "download", link: "/download/" },
      ]),
      // sidebar
      sidebar: sidebar(sidebar_config),
      displayFooter: false,
    },

  },

  plugins: {
    // Disable features you don’t want here
    mdEnhance: {
      align: false,
      attrs: false,
      chart: false,
      codetabs: false,
      container: true,
      demo: false,
      echarts: false,
      flowchart: false,
      gfm: false,
      imageLazyload: false,
      imageTitle: false,
      imageSize: true,
      include: false,
      katex: false,
      mark: true,
      mermaid: false,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: false,
      sup: false,
      tabs: true,
      vPre: false,
      vuePlayground: false,
    },
  },
});
