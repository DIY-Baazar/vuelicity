<script setup lang="ts">
import { computed, resolveComponent, toRefs } from "vue";
import type { PubNavbarLinkProps } from "./types";
import { useNavbarLinkClasses } from "./utils";

const props = withDefaults(defineProps<PubNavbarLinkProps>(), {
    link: '/',
    isActive: false,
    as: 'a',
    linkAttr: 'href',
    disabled: false,
});

const emit = defineEmits<{ click: [event: Event]; }>();

const componentName = computed(() => {
    return props.as !== "a" ? resolveComponent(props.as) : "a";
});

const handleClick = (event: Event) => {
    if (props.disabled) {
        return;
    }
    emit('click', event);
};


const linkClasses = computed(() => useNavbarLinkClasses(toRefs(props)));
</script>

<template>
    <li>
        <component :is="componentName" :[linkAttr]="link" :class="linkClasses" @click="handleClick">
            <slot />
        </component>
    </li>
</template>
