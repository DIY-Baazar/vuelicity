<script lang="ts" setup>
import { computed, toRefs } from "vue";
import { useCheckBoxClasses } from "./utils";
import type { CheckBoxProps } from "./types";

const props = withDefaults(defineProps<CheckBoxProps>(), {
    disabled: false,
    label: "",
    labelClass: "",
    class: "",
    wrapperClass: "",
    name: undefined,
    value: undefined
});

const model = defineModel<boolean>({ default: false });

const { wrapperClasses, checkboxClasses, labelClasses, helperMessageClasses } = useCheckBoxClasses(toRefs(props));
</script>

<template>
    <div :class="wrapperClasses">
        <label :for="name" class="flex justify-start items-center select-none">
            <input
                v-model="model"
                :class="checkboxClasses"
                :disabled="disabled"
                :name="name"
                :value="value"
                type="checkbox"
            />
            <span v-if="label" :class="labelClasses">
                {{ label }}
            </span>
            <span :class="labelClasses">
                <slot />
            </span>
        </label>
        <p v-if="$slots.helper" :class="helperMessageClasses">
            <slot name="helper" />
        </p>
    </div>
</template>
