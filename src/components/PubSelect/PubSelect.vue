<script lang="ts" setup>
import { computed, toRefs, useAttrs } from "vue";
import type { SelectProps } from "./types";
import { useSelectClasses } from "./utils";

const props = withDefaults(
    defineProps<SelectProps>(),
    {
        class: "",
        wrapperClass: "",
        options: () => [],
        label: "",
        labelClass: "",
        placeholder: "Please select one",
        validationStatus: undefined,
        size: "md",
        disabled: false,
        underline: false
    }
);


const model = defineModel<string | number>({ default: "" });
const attrs = useAttrs() as { name?: string;[key: string]: unknown; };

const {
    wrapperClasses,
    labelClasses,
    selectClasses,
    validationMessageClasses,
    helperMessageClasses
} = useSelectClasses(toRefs(props));

</script>

<template>
    <div :class="wrapperClasses">
        <label v-if="label" :for="attrs.name" :class="labelClasses">{{ props.label }}</label>
        <select :name="attrs.name" v-model="model" :class="selectClasses" :disabled="props.disabled" v-bind="attrs">
            <option disabled selected value="">
                {{ props.placeholder }}
            </option>
            <option v-for="(option, idx) in options" :key="idx" :value="option.value">
                {{ option.name }}
            </option>
        </select>
        <p v-if="$slots.validationMessage" :class="validationMessageClasses">
            <slot name="validationMessage" />
        </p>
        <p v-if="$slots.helper" :class="helperMessageClasses">
            <slot name="helper" />
        </p>
    </div>
</template>