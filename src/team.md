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

const members = [
  {
    avatar: NeboerAvatar,
    name: 'Neboer',
    title: '开发者/Nelement维护者/运维工程师',
    links: [
    { icon: 'github', link: 'https://github.com/Neboer' }
    ]
  },
  {
    avatar: KruslAvatar,
    name: 'Krusl',
    title: '运维、网络和系统工程师/开发者/技术顾问',
    links: [
    { icon: 'github', link: 'https://github.com/Neboer' }
    ]
  },
  {
    avatar: EibonAvatar,
    name: 'Eibon',
    title: '硬件工程师/硬件技术顾问',
    links: [
    { icon: 'github', link: 'https://github.com/Neboer' }
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
    { icon: 'github', link: 'https://github.com/Neboer' }
    ]
  },
  {
    avatar: CikarosAvatar,
    name: 'Cikaros',
    title: '运维工程师/技术编辑',
    links: [
    { icon: 'github', link: 'https://github.com/Neboer' }
    ]
  },
  {
    avatar: Retrieve0Avatar,
    name: 'Retrieve0',
    title: '开发者/技术编辑',
    links: [
    { icon: 'github', link: 'https://github.com/Neboer' }
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

<style scoped>

</style>