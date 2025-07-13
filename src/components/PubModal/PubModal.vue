<script lang="ts" setup>
import { computed, toRefs } from "vue";
import type { ModalPosition, ModalSize } from "./types";
import { useModalClasses } from "./utils";

interface ModalProps {
    position: ModalPosition;
    size: ModalSize;
    isOpen: boolean;
}

const props = withDefaults(defineProps<ModalProps>(), {
    position: "center",
    size: "md",
    isOpen: false
});

const emit = defineEmits(["close"]);

const modalClasses = computed(() => useModalClasses(toRefs(props)));

const wrapperClasses = computed(() => modalClasses.value.wrapperClasses);
const spanClasses = computed(() => modalClasses.value.spanClasses);
</script>

<template>
    <!-- Modal background -->
    <div class="fixed inset-0 z-40 grid bg-gray-900/50" v-if="props.isOpen">
        <!-- Modal content -->
        <div :class="[wrapperClasses]">
            <!-- Modal header -->
            <div :class="$slots.header ? 'border-b border-gray-200' : ''" class="flex items-center justify-between p-2">
                <slot name="header"></slot>
            </div>
            <!-- Modal body -->
            <div :class="[spanClasses]" class="p-3">
                <slot></slot>
            </div>
            <!-- Modal footer -->
            <div v-if="$slots.footer" class="flex items-center justify-end border-t border-gray-200 p-2">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>
