<script lang="ts" setup>
import { computed, toRefs } from "vue";
import type { BreadcrumbItemProps } from "./types";
import PubIcon from "@/components/PubIcon/PubIcon.vue";
import { useBreadcrumbItemClasses } from "./utils";

const props = withDefaults(defineProps<BreadcrumbItemProps>(), {
    href: null,
    home: false
});

const componentName = computed(() => (props.href ? "a" : "span"));

const { breadcrumbItemClasses } = useBreadcrumbItemClasses(toRefs(props));
</script>

<template>
    <li class="inline-flex items-center">
        <slot name="arrow-icon">
            <pub-icon name="chevron-right" type="outline" :stroke-width="2" v-if="!props.home" size="xs" />
        </slot>
        <component :is="componentName" :class="['pub-breadcrumb-item', breadcrumbItemClasses]" :href="href">
            <slot name="home-icon">
                <pub-icon name="home" v-if="props.home" size="xs" />
            </slot>
            <slot name="default" />
        </component>
    </li>
</template>
