<script lang="ts" setup>
import { computed, toRefs } from "vue";

import type { ButtonRounded, ButtonSize, ButtonTheme, ButtonType } from "./types";
import { useButtonClasses } from "./utils";

interface ButtonProps {
    theme: ButtonTheme;
    type: ButtonType;
    name: string;
    to: string;
    disabled: boolean;
    class: string;
    outline: boolean;
    skeleton: boolean;
    loading: boolean;
    size: ButtonSize;
    rounded: ButtonRounded;
    as: "button" | "a";
}

const props = withDefaults(defineProps<ButtonProps>(), {
    theme: "default",
    type: "button",
    name: "",
    to: "#",
    disabled: false,
    outline: false,
    skeleton: false,
    loading: false,
    size: "md",
    rounded: "none",
    as: "button"
});

const buttonClasses = computed(() => useButtonClasses(toRefs(props)));

const wrapperClasses = computed(() => buttonClasses.value.wrapperClasses);
const spanClasses = computed(() => buttonClasses.value.spanClasses);

const isDisabled = computed(() => props.disabled || props.loading || props.skeleton);
</script>

<template>
    <button
        v-if="as === 'button'"
        :type="type"
        :name="name"
        :disabled="isDisabled"
        :class="[spanClasses, wrapperClasses]"
        v-bind="$attrs"
    >
        <slot></slot>
    </button>
    <a v-if="as === 'a'" :href="to" :aria-disabled="isDisabled" :class="[spanClasses, wrapperClasses]" v-bind="$attrs">
        <slot></slot>
    </a>
</template>
