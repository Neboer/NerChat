---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

import NeboerAvatar from './assets/nerchat/avatars/neboer-avatar.webp'
import DucksoftAvatar from './assets/nerchat/avatars/ducksoft-avatar.webp'
import EibonAvatar from './assets/nerchat/avatars/eibon-avatar.webp'
import KruslAvatar from './assets/nerchat/avatars/krusl-avatar.webp'
import Retrieve0Avatar from './assets/nerchat/avatars/retrieve0-avatar.webp'
import VivianAvatar from './assets/nerchat/avatars/vivian-avatar.webp'
import CikarosAvatar from './assets/nerchat/avatars/cikaros-avatar.webp'

const home_icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>'

const members = [
  {
    avatar: NeboerAvatar,
    name: 'Neboer',
    title: '开发者/Nelement维护者/运维工程师',
    links: [
      { icon: 'github', link: 'https://github.com/Neboer' },
      { icon: {svg: home_icon}, link: 'https://www.neboer.site/'}
    ]
  },
  {
    avatar: KruslAvatar,
    name: 'Krusl',
    title: '运维、网络和系统工程师/开发者/技术顾问',
    links: [
      { icon: 'github', link: 'https://github.com/peigongdsd' },
      { icon: {svg: home_icon}, link: 'https://blog.zariski.site/'}
    ]
  },
  {
    avatar: EibonAvatar,
    name: 'Eibon',
    title: '硬件工程师/硬件技术顾问',
    links: [
      { icon: 'github', link: 'https://github.com/Eibon00' }
    ]
  },
  {
    avatar: VivianAvatar,
    name: 'Vivian',
    title: '现场工程师',
    links: [
      { icon: 'github', link: 'https://github.com/Neboer' }
    ]
  },
  {
    avatar: DucksoftAvatar,
    name: 'Ducksoft',
    title: '技术顾问',
    links: [
      { icon: 'github', link: 'https://github.com/DuckSoft' },
      { icon: {svg: home_icon}, link: 'https://www.ducksoft.site/'}
    ]
  },
  {
    avatar: CikarosAvatar,
    name: 'Cikaros',
    title: '运维工程师/技术编辑',
    links: [
      { icon: 'github', link: 'https://github.com/Cikaros/' },
      { icon: {svg: home_icon}, link: 'https://blog.cikaros.top/'}
    ]
  },
  {
    avatar: Retrieve0Avatar,
    name: 'Retrieve0',
    title: '开发者/技术编辑',
    links: [
      { icon: 'github', link: 'https://github.com/lost0427' }
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      UntilSoftware
    </template>
    <template #lead>
      <div>NerChat!由UntilSoftware团队负责开发维护</div>
      <div>以下是我们的全部成员</div>
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>

<style>
@media (min-width: 642px) {
  .container .item:first-child {
    grid-column-start: 2;
  }
}

</style>