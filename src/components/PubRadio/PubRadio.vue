<script lang="ts" setup>
import { toRefs, useAttrs } from "vue";
import type { RadioProps } from "./types";
import { useRadioClasses } from "./utils";

const props = withDefaults(defineProps<RadioProps>(), {
    disabled: false,
    label: "",
    labelClass: "",
    class: "",
    wrapperClass: "",
    name: undefined,
    value: undefined,
    bordered: false,
    size: "md",
    color: "blue"
});

const attrs = useAttrs();

const model = defineModel<boolean>({ default: false });

const { wrapperClasses, radioWrapperClasses, radioClasses, labelClasses, helperMessageClasses } = useRadioClasses(toRefs(props));

</script>

<template>
    <div :class="wrapperClasses">
        <label :for="name" :class="radioWrapperClasses">
            <input v-model="model" :class="radioClasses" :disabled="disabled" :name="name" :value="value" type="radio"
                v-bind="attrs" />
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