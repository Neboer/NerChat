import { fileURLToPath, URL } from 'node:url'



export default {
    vite: {
        resolve: {
            alias: [
                // {
                //     find: /^.*\/VPImage\.vue$/,
                //     replacement: fileURLToPath(
                //         new URL('./components/VPImage.vue', import.meta.url)
                //     )
                // },
                {
                    find: /^.*\/VPFeature\.vue$/,
                    replacement: fileURLToPath(
                        new URL('./components/VPFeature.vue', import.meta.url)
                    )
                }
            ]
        }
    }
}