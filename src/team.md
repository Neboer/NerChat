---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/Neboer.png',
    name: 'Neboer',
    title: 'Creator',
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
      <div>NerChat!由UntilSoftware团队开发、维护。</div>
      <div>以下是我们的全部成员。</div>
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>