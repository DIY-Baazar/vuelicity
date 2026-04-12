<script lang="ts" setup>
import { computed, ref, toRefs, useAttrs } from "vue";
import type { AlertProps } from "./types";
import { useAlertClasses } from "./utils";
import PubIcon from "@/components/PubIcon/PubIcon.vue";

const props = withDefaults(defineProps<AlertProps>(), {
    theme: "blue",
    closable: false,
    bordered: false,
    showIcon: false
});

const slots = defineSlots<{
    default: any;
    "close-button": any;
    icon: any;
    title: any;
}>();

const attrs = useAttrs();

const visible = ref(true);

const emit = defineEmits(["close"]);

const { wrapperClasses, closeButtonClasses } = useAlertClasses(
    toRefs({ ...props, hasTitle: slots.title ? true : false })
);

function close() {
    emit("close");
    visible.value = false;
}
</script>

<template>
    <div v-if="visible" v-bind="attrs" :class="['pub-alert', wrapperClasses]" role="alert">
        <div class="flex items-center gap-3">
            <slot v-if="props.showIcon || slots.icon" name="icon">
                <pub-icon name="info-circle" size="xs" aschild />
            </slot>
            <slot name="title" />
        </div>
        <div class="pub-alert-container">
            <slot name="default" :close="close" />
        </div>
        <slot name="close-button" :close="close">
            <button v-if="props.closable" :class="['pub-alert-close-button', closeButtonClasses]" @click="close">
                <pub-icon name="close" size="xs" aschild />
            </button>
        </slot>
    </div>
</template>
