<script lang="ts" setup>
import { ref, toRefs, useAttrs } from "vue";
import type { AlertProps } from "./types";
import { useAlertClasses } from "./utils";
import PubIcon from "@/components/PubIcon/PubIcon.vue";
import PubButton from "@/components/PubButton/PubButton.vue";

const props = withDefaults(defineProps<AlertProps>(), {
    theme: "blue",
    dismissible: false,
    bordered: false,
    showIcon: false,
    duration: 300,
    class: "",
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

const { wrapperClasses, closeButtonClasses } = useAlertClasses(toRefs(props));

function handleClose() {
    emit("close");
    visible.value = false;
}
</script>

<template>
    <transition name="fade" :duration="props.duration">
        <div v-if="visible" v-bind="attrs" :class="['pub-alert', wrapperClasses]" role="alert">
            <div class="flex items-center gap-3">
                <slot v-if="props.showIcon || slots.icon" name="icon">
                    <pub-icon name="info-circle" size="xs" aschild />
                </slot>
                <slot name="title" />
            </div>
            <div class="pub-alert-container">
                <slot name="default" :handle-close="handleClose" />
            </div>
            <slot name="close-button" :handle-close="handleClose">
                <pub-button
                    size="md"
                    square
                    v-if="props.dismissible"
                    :class="['pub-alert-close-button', closeButtonClasses]"
                    @click="handleClose"
                >
                    <span class="sr-only">Dismiss</span>
                    <pub-icon name="close" size="xs" aschild />
                </pub-button>
            </slot>
        </div>
    </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
