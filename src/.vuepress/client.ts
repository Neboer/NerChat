import { defineClientConfig } from '@vuepress/client'
// import NerShare from "../nershare_components/NerShare.vue"

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    // router.addRoute({
    //   path: "/nershare/",
    //   component: NerShare
    // })
    router.beforeEach((to, from, next) => {
      const redirectList = {
        '/docs/': '/docs/introduction/',
      }
      const redirect = redirectList[to.path]

      if (redirect) {
        next({ path: redirect })
      } else next()
    })
  },
})
