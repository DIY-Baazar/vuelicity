<script lang="ts" setup>
import { computed, resolveComponent, toRefs } from "vue";

import type { ButtonRounded, ButtonSize, ButtonTheme, ButtonType } from "./types";
import { useButtonClasses } from "./utils";

interface ButtonProps {
    theme?: ButtonTheme;
    type?: ButtonType;
    name?: string;
    to?: string;
    disabled?: boolean;
    class?: string;
    outline?: boolean;
    skeleton?: boolean;
    loading?: boolean;
    size?: ButtonSize;
    rounded?: ButtonRounded;
    square?: boolean;
    as?: "button" | "a";
    linkAttr?: string;
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
    square: false,
    size: "md",
    rounded: "none",
    as: "button",
    linkAttr: "href",
});

const componentName = computed(() => (props.as !== "a" ? resolveComponent(props.as) : "a"));

const emit = defineEmits<{ click: [event: Event]; }>();

const isDisabled = computed(() => props.disabled || props.loading || props.skeleton);

const handleClick = (event: Event) => {
    if (isDisabled.value) {
        return;
    }
    emit('click', event);
};


const buttonClasses = computed(() => useButtonClasses(toRefs(props)));

const wrapperClasses = computed(() => buttonClasses.value.wrapperClasses);
const spanClasses = computed(() => buttonClasses.value.spanClasses);

</script>

<template>
    <component :is="componentName" :[linkAttr]="to" :class="['pub-button', spanClasses, wrapperClasses, props.class]"
        @click="handleClick" v-bind="$attrs">
        <span class="mr-1 inline-flex items-center" v-if="$slots.prepend">
            <slot name="prepend" />
        </span>
        <slot />
        <span class="ml-1 inline-flex items-center" v-if="$slots.append">
            <slot name="append" />
        </span>
    </component>
</template>
