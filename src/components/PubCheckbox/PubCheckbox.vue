<script lang="ts" setup>
import { toRefs } from "vue";
import { useCheckboxClasses } from "./utils";
import type { CheckboxProps } from "./types";

const props = withDefaults(defineProps<CheckboxProps>(), {
    disabled: false,
    label: "",
    labelClass: "",
    class: "",
    wrapperClass: "",
    name: undefined,
    value: undefined,
    bordered: false
});

const model = defineModel<boolean>({ default: false });

const { wrapperClasses, checkboxClasses, labelClasses, helperMessageClasses } = useCheckboxClasses(toRefs(props));
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
