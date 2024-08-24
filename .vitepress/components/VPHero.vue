<script setup lang="ts">
import { type Ref, inject } from 'vue'
import type { DefaultTheme } from 'vitepress/theme'
import { VPButton, VPImage } from 'vitepress/theme'

export interface HeroAction {
    theme?: 'brand' | 'alt'
    text: string
    link: string
    target?: string
    rel?: string
}

// code from stackoverflow https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
function is_mobile_browser(): bool {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};


// code from stackoverflow https://stackoverflow.com/questions/21741841/detecting-ios-android-operating-system
/**
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
 *
 * @returns {string}
 */
 function getMobileOperatingSystem(): string {
    const userAgent: string = navigator.userAgent || navigator.vendor || (window as any).opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
        return "iOS";
    }

    return "unknown";
}


let browser_type = 'desktop' 
if (is_mobile_browser()) {
    browser_type = getMobileOperatingSystem();
}

type FSHeroAction = HeroAction & {
    fontawesome?: string | string[];
}

defineProps<{
    name?: string
    text?: string
    tagline?: string
    image?: DefaultTheme.ThemeableImage
    actions?: FSHeroAction[]
}>()

const heroImageSlotExists = inject('hero-image-slot-exists') as Ref<boolean>
</script>

<template>
    <div class="VPHero" :class="{ 'has-image': image || heroImageSlotExists }">
        <div class="container">
            <div class="main">
                <slot name="home-hero-info-before" />
                <slot name="home-hero-info">
                    <h1 v-if="name" class="name">
                        <span v-html="name" class="clip"></span>
                    </h1>
                    <p v-if="text" v-html="text" class="text"></p>
                    <p v-if="tagline" v-html="tagline" class="tagline"></p>
                </slot>
                <slot name="home-hero-info-after" />

                <div v-if="actions" class="actions">
                    <div v-for="action in actions" :key="action.link" class="action" v-show="(action.browser_type && action.browser_type === browser_type) || (!action.browser_type)">
                        <VPButton tag="a" size="medium" :theme="action.theme" :text="action.text" :href="action.link"
                            :target="action.target" :rel="action.rel" :icon="action.fontawesome"/>
                    </div>
                </div>
                <slot name="home-hero-actions-after" />
            </div>

            <div v-if="image || heroImageSlotExists" class="image">
                <div class="image-container">
                    <div class="image-bg" />
                    <slot name="home-hero-image">
                        <VPImage v-if="image" class="image-src" :image="image" />
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.VPHero {
    margin-top: calc((var(--vp-nav-height) + var(--vp-layout-top-height, 0px)) * -1);
    padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 48px) 24px 48px;
}

@media (min-width: 640px) {
    .VPHero {
        padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 80px) 48px 64px;
    }
}

@media (min-width: 960px) {
    .VPHero {
        padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 80px) 64px 64px;
    }
}

.container {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1152px;
}

@media (min-width: 960px) {
    .container {
        flex-direction: row;
    }
}

.main {
    position: relative;
    z-index: 10;
    order: 2;
    flex-grow: 1;
    flex-shrink: 0;
}

.VPHero.has-image .container {
    text-align: center;
}

@media (min-width: 960px) {
    .VPHero.has-image .container {
        text-align: left;
    }
}

@media (min-width: 960px) {
    .main {
        order: 1;
        width: calc((100% / 3) * 2);
    }

    .VPHero.has-image .main {
        max-width: 592px;
    }
}

.name,
.text {
    max-width: 392px;
    letter-spacing: -0.4px;
    line-height: 40px;
    font-size: 32px;
    font-weight: 700;
    white-space: pre-wrap;
}

.VPHero.has-image .name,
.VPHero.has-image .text {
    margin: 0 auto;
}

.name {
    color: var(--vp-home-hero-name-color);
}

.clip {
    background: var(--vp-home-hero-name-background);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: var(--vp-home-hero-name-color);
}

@media (min-width: 640px) {

    .name,
    .text {
        max-width: 576px;
        line-height: 56px;
        font-size: 48px;
    }
}

@media (min-width: 960px) {

    .name,
    .text {
        line-height: 64px;
        font-size: 56px;
    }

    .VPHero.has-image .name,
    .VPHero.has-image .text {
        margin: 0;
    }
}

.tagline {
    padding-top: 8px;
    max-width: 392px;
    line-height: 28px;
    font-size: 18px;
    font-weight: 500;
    white-space: pre-wrap;
    color: var(--vp-c-text-2);
}

.VPHero.has-image .tagline {
    margin: 0 auto;
}

@media (min-width: 640px) {
    .tagline {
        padding-top: 12px;
        max-width: 576px;
        line-height: 32px;
        font-size: 20px;
    }
}

@media (min-width: 960px) {
    .tagline {
        line-height: 36px;
        font-size: 24px;
    }

    .VPHero.has-image .tagline {
        margin: 0;
    }
}

.actions {
    display: flex;
    flex-wrap: wrap;
    margin: -6px;
    padding-top: 24px;
}

.VPHero.has-image .actions {
    justify-content: center;
}

@media (min-width: 640px) {
    .actions {
        padding-top: 32px;
    }
}

@media (min-width: 960px) {
    .VPHero.has-image .actions {
        justify-content: flex-start;
    }
}

.action {
    flex-shrink: 0;
    padding: 6px;
}

.image {
    order: 1;
    margin: -76px -24px -48px;
}

@media (min-width: 640px) {
    .image {
        margin: -108px -24px -48px;
    }
}

@media (min-width: 960px) {
    .image {
        flex-grow: 1;
        order: 2;
        margin: 0;
        min-height: 100%;
    }
}

.image-container {
    position: relative;
    margin: 0 auto;
    width: 320px;
    height: 320px;
}

@media (min-width: 640px) {
    .image-container {
        width: 392px;
        height: 392px;
    }
}

@media (min-width: 960px) {
    .image-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        /*rtl:ignore*/
        transform: translate(-32px, -32px);
    }
}

.image-bg {
    position: absolute;
    top: 50%;
    /*rtl:ignore*/
    left: 50%;
    border-radius: 50%;
    width: 192px;
    height: 192px;
    background-image: var(--vp-home-hero-image-background-image);
    filter: var(--vp-home-hero-image-filter);
    /*rtl:ignore*/
    transform: translate(-50%, -50%);
}

@media (min-width: 640px) {
    .image-bg {
        width: 256px;
        height: 256px;
    }
}

@media (min-width: 960px) {
    .image-bg {
        width: 320px;
        height: 320px;
    }
}

:deep(.image-src) {
    position: absolute;
    top: 50%;
    /*rtl:ignore*/
    left: 50%;
    max-width: 192px;
    max-height: 192px;
    /*rtl:ignore*/
    transform: translate(-50%, -50%);
}

@media (min-width: 640px) {
    :deep(.image-src) {
        max-width: 256px;
        max-height: 256px;
    }
}

@media (min-width: 960px) {
    :deep(.image-src) {
        max-width: 320px;
        max-height: 320px;
    }
}
</style>