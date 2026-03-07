<style lang="css">
.icon-solid{
    
}
</style>

<script lang="ts" setup>
import { computed, toRefs } from "vue";
import type { IconSize, IconTheme, IconType } from "./types";
import { useIconClasses } from "./utils";
import { getIconBody } from "./icons";

interface IconProps {
    name: string;
    type?: IconType;
    size?: IconSize;
    theme?: IconTheme;
    class?: string;
    rotate?: boolean;
    flip?: boolean;
    spin?: boolean;
    mirror?: boolean;
    aschild?: boolean;
}

const props = withDefaults(defineProps<IconProps>(), {
    size: "sm",
    type: "solid",
    theme: "default",
    class: "",
    rotate: false,
    flip: false,
    spin: false,
    mirror: false,
    aschild: false,
});

const iconClasses = computed(() => useIconClasses(toRefs(props)));

const iconBody = computed(() => getIconBody(props.name));
</script>

<template>
    <span class="pub-icon" :class="[iconClasses, props.class]" v-bind="$attrs">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" v-html="iconBody" />
    </span>
</template>
