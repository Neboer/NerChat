import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "NerChat!",
      description: "NerChat! 开源IM",
    },
  },

  theme,

  shouldPrefetch: false,
});
