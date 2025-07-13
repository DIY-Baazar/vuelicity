<script lang="ts" setup>
import { computed, toRefs } from "vue";
import type { ModalPosition, ModalSize, ModalZIndex } from "./types";
import { useModalClasses } from "./utils";

interface ModalProps {
    position: ModalPosition;
    size: ModalSize;
    isOpen: boolean;
    zIndex: ModalZIndex;
    closeOnEsc: boolean;
    class: string;
}

const props = withDefaults(defineProps<ModalProps>(), {
    position: "center",
    size: "md",
    isOpen: false,
    zIndex: 40,
    closeOnEsc: true,
});

const closeWithEsc = (e: KeyboardEvent) => {
    if (props.closeOnEsc) {
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
    <div :class="[wrapperClasses, 'fixed inset-0 grid bg-gray-900/50']" v-if="props.isOpen" @keyup.escape="closeWithEsc">
        <!-- Modal content -->
        <div :class="[spanClasses, 'relative w-full bg-white shadow', props.class]">
            <!-- Modal header -->
            <div :class="$slots.header ? 'border-b border-gray-200' : ''" class="flex items-center justify-between p-2">
                <slot name="header"></slot>
            </div>
            <!-- Modal body -->
            <div :class="[$slots.header ? '' : 'pt-0']" class="p-3">
                <slot></slot>
            </div>
            <!-- Modal footer -->
            <div v-if="$slots.footer" class="flex items-center justify-end border-t border-gray-200 p-2">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>
