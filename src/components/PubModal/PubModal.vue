<script lang="ts" setup>
import { computed, toRefs } from "vue";
import type { ModalPosition, ModalSize, ModalZIndex } from "./types";
import { useModalClasses } from "./utils";

interface ModalProps {
    position: ModalPosition;
    size: ModalSize;
    isOpen: boolean;
    zIndex: ModalZIndex;
    class: string;
    persistent: boolean;
    notEscapeClose: boolean;
    notClickClose: boolean;
    overlayBlur: boolean;
    scrollable: boolean;
}

const props = withDefaults(defineProps<ModalProps>(), {
    position: "center",
    size: "md",
    isOpen: false,
    zIndex: 40,
    class: "",
    persistent: false,
    notEscapeClose: false,
    notClickClose: false,
    overlayBlur: false,
    scrollable: false
});

const closeWithEsc = () => {
    if (!props.persistent && !props.notEscapeClose) {
        emit("close");
    }
};

const clickOutside = () => {
    if (!props.persistent && !props.notClickClose) {
        emit("close");
    }
};

const emit = defineEmits(["close"]);

const modalClasses = computed(() => useModalClasses(toRefs(props)));

const wrapperClasses = computed(() => modalClasses.value.wrapperClasses);
const spanClasses = computed(() => modalClasses.value.spanClasses);
</script>

<template>
    <!-- Modal background -->
    <div
        :class="[wrapperClasses, 'fixed inset-0 transition-opacity duration-300 ease-in grid']"
        v-if="props.isOpen"
        tabindex="0"
        @keyup.esc="closeWithEsc"
        @click.self="clickOutside"
        role="dialog"
        aria-modal="true"
    >
        <div :class="[spanClasses, 'relative w-full p-2']">
            <!-- Modal content -->
            <div :class="['relative bg-white shadow max-h-[90vh] flex flex-col', props.class]">
                <!-- Modal header -->
                <div
                    :class="$slots.header ? 'border-b border-gray-200' : ''"
                    class="flex items-center justify-between p-2"
                >
                    <slot name="header"></slot>
                </div>
                <!-- Modal body -->
                <div
                    :class="[$slots.header ? '' : 'pt-0', scrollable ? 'overflow-auto' : 'overflow-hidden']"
                    class="p-3 flex-1"
                >
                    <slot></slot>
                </div>
                <!-- Modal footer -->
                <div v-if="$slots.footer" class="flex items-center justify-end border-t border-gray-200 p-2">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </div>
</template>
