<script lang="ts" setup>
import { toRefs } from "vue";
import type { InputProps } from "./types";
import { useInputClasses } from "./utils";

const props = withDefaults(defineProps<InputProps>(), {
    autocomplete: "off",
    class: "",
    disabled: false,
    inputClass: "",
    label: "",
    labelClass: "",
    required: false,
    size: "md",
    type: "text",
    validationStatus: undefined,
    wrapperClass: ""
});

const model = defineModel<string | number>({ default: "" });

const {
    wrapperClasses,
    labelClasses,
    inputWrapperClasses,
    inputClasses,
    validationMessageClasses,
    helperMessageClasses
} = useInputClasses(toRefs(props));
</script>

<template>
    <div :class="wrapperClasses">
        <label for="" :class="labelClasses">
            {{ props.label }}
        </label>
        <div :class="inputWrapperClasses">
            <div v-if="$slots.prepend" class="ms-2 flex shrink-0 items-center">
                <slot name="prepend" />
            </div>
            <input
                v-model="model"
                :type="type"
                :class="inputClasses"
                :disabled="disabled"
                :required="required"
                :autocomplete="autocomplete"
                v-bind="$attrs"
            />
            <div v-if="$slots.append" class="me-2 flex shrink-0 items-center">
                <slot name="append" />
            </div>
        </div>
        <p v-if="$slots.validationMessage" :class="validationMessageClasses">
            <slot name="validationMessage" />
        </p>
        <p v-if="$slots.helper" :class="helperMessageClasses">
            <slot name="helper" />
        </p>
    </div>
</template>
