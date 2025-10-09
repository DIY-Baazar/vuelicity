<script lang="ts" setup>
import { computed, resolveComponent } from 'vue';
import type { PubNavbarLogoProps } from "./types";

const props = withDefaults(defineProps<PubNavbarLogoProps>(), {
    link: '/',
    imageUrl: '/vuelicity/images/logo.png',
    alt: 'Logo',
    as: 'a',
    linkAttr: 'href',
});

const componentName = computed(() => {
    return props.as !== 'a' ? resolveComponent(props.as) : 'a';
});
</script>

<template>
    <component :is="componentName" class="flex items-center" :[linkAttr]="link">
        <img :src="imageUrl" :alt="alt" class="mr-3 h-6 sm:h-10">
        <span class="self-center whitespace-nowrap text-xl font-semibold">
            <slot />
        </span>
    </component>
</template>