<script lang="ts" setup>
import { computed, toRefs, useAttrs, useId } from "vue";
import type { RadioElementType, RadioProps } from "./types";
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

defineOptions({ inheritAttrs: false });
const attrs = useAttrs();
const inputName = computed(() => props.name || 'input-' + useId());

const model = defineModel<RadioElementType>();

const { wrapperClasses, radioWrapperClasses, radioClasses, labelClasses, helperMessageClasses } = useRadioClasses(toRefs(props));

</script>

<template>
    <div :class="wrapperClasses">
        <label :for="inputName" :class="radioWrapperClasses">
            <input v-model="model" :class="radioClasses" :disabled="disabled" :name="inputName" :value="value" type="radio"
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