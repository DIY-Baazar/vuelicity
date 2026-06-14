<script lang="ts" setup>
import { computed, toRefs, useSlots, Comment, Text, useAttrs, useId } from "vue";
import type { InputProps } from "./types";
import { useInputClasses } from "./utils";
import PubIcon from "../PubIcon/PubIcon.vue";

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
    wrapperClass: "",
    prependClass: "",
    appendClass: ""
});

const model = defineModel<string | number>({ default: "" });
const slots = useSlots();
const attrs = useAttrs();
const inputName = computed(() => props.name || 'input-' + useId());

const isTextSlot = (name: string) => {
    const vnodes = slots[name]?.();
    if (!vnodes?.length) return false;
    const meaningful = vnodes.filter(v =>
        v.type !== Comment && !(v.type === Text && !String(v.children).trim()),
    );
    return meaningful.length > 0 && meaningful.every(v => v.type === Text || v.type === PubIcon);
};

const isPrependText = computed(() => isTextSlot('prepend'));
const isAppendText = computed(() => isTextSlot('append'));

const {
    wrapperClasses,
    labelClasses,
    inputWrapperClasses,
    inputClasses,
    validationMessageClasses,
    helperMessageClasses,
    appendContainerClasses,
    prependContainerClasses
} = useInputClasses({ ...toRefs(props), isPrependText, isAppendText });
</script>

<template>
    <div :class="wrapperClasses">
        <label v-if="props.label" :for="inputName" :class="labelClasses">
            {{ props.label }}
        </label>
        <div :class="inputWrapperClasses">
            <div v-if="$slots.prepend" :class="prependContainerClasses">
                <slot name="prepend" />
            </div>
            <input v-model="model" :type="type" :class="inputClasses" :disabled="disabled" :required="required"
                :name="inputName" :autocomplete="autocomplete" v-bind="attrs" />
            <div v-if="$slots.append" :class="appendContainerClasses">
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
