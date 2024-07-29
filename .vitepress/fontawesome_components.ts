import { fileURLToPath, URL } from 'node:url'



export default {
    vite: {
        resolve: {
            alias: [
                {
                    find: /^.*\/VPFeature\.vue$/,
                    replacement: fileURLToPath(
                        new URL('./components/VPFeature.vue', import.meta.url)
                    )
                },
                {
                    find: /^.*\/VPHero\.vue$/,
                    replacement: fileURLToPath(
                        new URL('./components/VPHero.vue', import.meta.url)
                    )
                },
                {
                    find: /^.*\/VPButton\.vue$/,
                    replacement: fileURLToPath(
                        new URL('./components/VPButton.vue', import.meta.url)
                    )
                },
            ]
        }
    }
}