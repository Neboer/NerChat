import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
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
