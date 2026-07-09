<script lang="ts" setup>
import { computed, toRefs, useSlots, Comment, Text, useAttrs, useId } from "vue";
import type { PhoneInputProps } from "./types";
import { usePhoneInputClasses } from "./utils";
import PubIcon from "../PubIcon/PubIcon.vue";

const props = withDefaults(defineProps<PhoneInputProps>(), {
    autocomplete: "off",
    class: "",
    disabled: false,
    inputClass: "",
    label: "",
    labelClass: "",
    required: false,
    size: "md",
    validationStatus: undefined,
    wrapperClass: "",
    prependClass: "",
    appendClass: "",
    isdCodes: undefined
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
const hasISDCodes = computed(() => props.isdCodes && props.isdCodes.length > 0);

function changePhoneno (event: Event) {
    const target = event.target as HTMLInputElement;
    if (hasISDCodes.value) {
        const [isdCode, _] = model.value.toString().split(",");
        model.value = (isdCode || '') + ',' + target.value;
    } else {
        model.value = target.value;
    }
}

function changeISD (event: Event) {
    const target = event.target as HTMLInputElement;
    if (hasISDCodes.value) {
        const [_, phoneNo] = model.value.toString().split(",");
        model.value = target.value + ',' + (phoneNo || "");
    }
}

const phoneNoValue = computed(() => {
    if (hasISDCodes.value) {
        const [_, phoneNo] = model.value.toString().split(",");
        return phoneNo || "";
    } else {
        return model.value;
    }
});

const isdCodeValue = computed(() => {
    if (hasISDCodes.value) {
        const [isdCode, _] = model.value.toString().split(",");
        return isdCode || "";
    } else {
        return "";
    }
});

const {
    wrapperClasses,
    labelClasses,
    phoneInputWrapperClasses,
    phoneInputClasses,
    isdcodeInputClasses,
    validationMessageClasses,
    helperMessageClasses,
    appendContainerClasses,
    prependContainerClasses
} = usePhoneInputClasses({ ...toRefs(props), isPrependText, isAppendText });
</script>

<template>
    <div :class="wrapperClasses">
        <label v-if="props.label" :for="inputName" :class="labelClasses">
            {{ props.label }}
        </label>
        <div :class="phoneInputWrapperClasses">
            <div v-if="$slots.prepend" :class="prependContainerClasses">
                <slot name="prepend" />
            </div>

            <select v-if="props.isdCodes" :name="inputName + '-isd'" :class="isdcodeInputClasses" :disabled="disabled"
                :value="isdCodeValue" @change.prevent="($event) => changeISD($event)">
                <option disabled selected value="">Select ISD Code</option>
                <option v-for="code in props.isdCodes" :key="code.code" :value="code.code">
                    {{ code.name }} ({{ code.code }})
                </option>
            </select>
            <input type="tel" :class="phoneInputClasses" :disabled="disabled" :required="required" :name="inputName"
                :autocomplete="autocomplete" v-bind="attrs" :value="phoneNoValue"
                @input.prevent="($event) => changePhoneno($event)" />
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