<script lang="ts" setup>
import { computed, toRefs, useSlots } from "vue";
import type { BadgeTheme, BadgeSize } from "./types";
import { useBadgeClasses } from "./utils";

interface BadgeProps {
    theme?: BadgeTheme,
    size?: BadgeSize,
    href?: string | null,
    bordered?: boolean,
    rounded?: boolean;
}

const props = withDefaults(defineProps<BadgeProps>(), {
    theme: "default",
    size: "xs",
    href: null,
    bordered: false,
    rounded: false
});

const slots = useSlots();
const wrapperClasses = computed(() => useBadgeClasses(toRefs(props)));
const componentName = computed(() => (props.href ? 'a' : 'span'));

</script>

<template>
    <component :is="componentName" :class="['pub-badge', wrapperClasses]" :href="href">
        <slot name="icon"></slot>
        <slot></slot>
    </component>
</template>
