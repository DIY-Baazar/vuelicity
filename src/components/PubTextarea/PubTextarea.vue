<script lang="ts" setup>
import { computed, toRefs, useAttrs, useId, useSlots } from "vue";
import type { TextareaProps } from "./types";
import { useTextareaClasses } from "./utils";

const props = withDefaults(
    defineProps<TextareaProps>(),
    {
        autocomplete: "off",
        disabled: false,
        required: false,
        class: "",
        wrapperClass: "",
        labelClass: "",
        inputClass: "",
        prependClass: "",
        appendClass: "",
        validationStatus: undefined,
        size: "md",
        rows: 4,
    }
);

const model = defineModel<string | number>({ default: "" });
const slots = useSlots();
const attrs = useAttrs();

const inputName = computed(() => props.name || 'input-' + useId());


const { wrapperClasses, labelClasses, inputWrapperClasses, inputClasses, validationMessageClasses, helperMessageClasses } = useTextareaClasses(toRefs(props));
</script>

<template>
    <div :class="wrapperClasses">
        <label v-if="props.label" :for="inputName" :class="labelClasses">
            {{ props.label }}
        </label>
        <div :class="inputWrapperClasses">
            <textarea v-model="model" :class="inputClasses" :disabled="disabled" :required="required" :name="inputName"
                :autocomplete="autocomplete" :rows="rows" v-bind="attrs" />
            <!-- <div v-if="$slots.footer" :class="footerClasses">
                <slot name="footer" />
            </div> -->
        </div>
        <p v-if="$slots.validationMessage" :class="validationMessageClasses">
            <slot name="validationMessage" />
        </p>
        <p v-if="$slots.helper" :class="helperMessageClasses">
            <slot name="helper" />
        </p>
    </div>
</template>