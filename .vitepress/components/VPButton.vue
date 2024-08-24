<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { normalizeLink } from 'vitepress/dist/client/theme-default/support/utils.js'
import { EXTERNAL_URL_RE } from 'vitepress/dist/client/shared.js'

interface Props {
    tag?: string
    size?: 'medium' | 'big'
    theme?: 'brand' | 'alt' | 'sponsor'
    text: string
    href?: string
    target?: string;
    rel?: string;
    icon?: string | string[];
}
const props = withDefaults(defineProps<Props>(), {
    size: 'medium',
    theme: 'brand'
})

const isExternal = computed(
    () => props.href && EXTERNAL_URL_RE.test(props.href)
)

const component = computed(() => {
    return props.tag || props.href ? 'a' : 'button'
})

const deviceType = ref<string>('');

const detectDeviceType = (): string => {
  const userAgent = navigator.userAgent.toLowerCase();

  if (/android/.test(userAgent)) {
    return 'android';
  } else if (/iphone|ipad|ipod|mac/.test(userAgent)) {
    return 'apple';
  } else {
    return 'pc';
  }
};

const shouldShowComponent = computed(() => {
  if (deviceType.value === 'pc') {
    return props.text !== '下载安卓客户端' && props.text !== 'ios安装指南';
    console.log(shouldShowComponent);
  } else if (deviceType.value === 'android') {
    return props.text !== '浏览器访问' && props.text !== 'ios安装指南';
  } else if (deviceType.value === 'apple') {
    return props.text !== '浏览器访问' && props.text !== '下载安卓客户端';
  }
  return true; 
});

onMounted(() => {
  deviceType.value = detectDeviceType();
//   console.log(`Detected device type: ${deviceType.value}`);
//   console.log(`Received text prop: ${props.text}`);
});
</script>

<template>
    <component v-if="shouldShowComponent" :is="component" class="VPButton" :class="[size, theme]" :href="href ? normalizeLink(href) : undefined"
        :target="props.target ?? (isExternal ? '_blank' : undefined)"
        :rel="props.rel ?? (isExternal ? 'noreferrer' : undefined)">
        <font-awesome-icon v-if="props.icon" :icon="props.icon" />
        {{ text }}
    </component>
</template>

<style scoped>
.VPButton {
    display: inline-block;
    border: 1px solid transparent;
    text-align: center;
    font-weight: 600;
    white-space: nowrap;
    transition: color 0.25s, border-color 0.25s, background-color 0.25s;
    margin-left: 6px;
    margin-right: 6px;
}

.VPButton:active {
    transition: color 0.1s, border-color 0.1s, background-color 0.1s;
}

.VPButton.medium {
    border-radius: 20px;
    padding: 0 20px;
    line-height: 38px;
    font-size: 14px;
}

.VPButton.big {
    border-radius: 24px;
    padding: 0 24px;
    line-height: 46px;
    font-size: 16px;
}

.VPButton.brand {
    border-color: var(--vp-button-brand-border);
    color: var(--vp-button-brand-text);
    background-color: var(--vp-button-brand-bg);
}

.VPButton.brand:hover {
    border-color: var(--vp-button-brand-hover-border);
    color: var(--vp-button-brand-hover-text);
    background-color: var(--vp-button-brand-hover-bg);
}

.VPButton.brand:active {
    border-color: var(--vp-button-brand-active-border);
    color: var(--vp-button-brand-active-text);
    background-color: var(--vp-button-brand-active-bg);
}

.VPButton.alt {
    border-color: var(--vp-button-alt-border);
    color: var(--vp-button-alt-text);
    background-color: var(--vp-button-alt-bg);
}

.VPButton.alt:hover {
    border-color: var(--vp-button-alt-hover-border);
    color: var(--vp-button-alt-hover-text);
    background-color: var(--vp-button-alt-hover-bg);
}

.VPButton.alt:active {
    border-color: var(--vp-button-alt-active-border);
    color: var(--vp-button-alt-active-text);
    background-color: var(--vp-button-alt-active-bg);
}

.VPButton.sponsor {
    border-color: var(--vp-button-sponsor-border);
    color: var(--vp-button-sponsor-text);
    background-color: var(--vp-button-sponsor-bg);
}

.VPButton.sponsor:hover {
    border-color: var(--vp-button-sponsor-hover-border);
    color: var(--vp-button-sponsor-hover-text);
    background-color: var(--vp-button-sponsor-hover-bg);
}

.VPButton.sponsor:active {
    border-color: var(--vp-button-sponsor-active-border);
    color: var(--vp-button-sponsor-active-text);
    background-color: var(--vp-button-sponsor-active-bg);
}
</style>