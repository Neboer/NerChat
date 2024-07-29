// .vitepress/theme/index.js
import { Theme } from 'vitepress'

import DefaultTheme from 'vitepress/theme'
import register_fontawesome from './register_fontawesome'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'

import './custom.css'

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        register_fontawesome.install(app)
        enhanceAppWithTabs(app)
    }
} satisfies Theme