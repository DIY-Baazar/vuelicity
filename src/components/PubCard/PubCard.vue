<script lang="ts" setup>
import { computed, toRefs } from "vue";
import type { CardProps } from "./types";
import { useCardClasses } from "./utils";

const props = withDefaults(defineProps<CardProps>(), {
    href: "",
    imgAlt: "",
    imgSrc: "",
    variant: "default",
    class: "",
});

const componentName = computed(() => (props.href ? "a" : "div"));

const { cardClasses, horizontalImgClasses } = useCardClasses(toRefs(props));
</script>

<template>
    <component :is="componentName" :class="['pub-card', cardClasses, props.class]">
        <img v-if="imgSrc" :src="imgSrc" :alt="imgAlt" :class="horizontalImgClasses" class="rounded-t-lg">
        <div>
            <slot />
        </div>
    </component>
</template>