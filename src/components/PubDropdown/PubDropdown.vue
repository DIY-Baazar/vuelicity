<script lang="ts" setup>
import { computed, nextTick, ref, toRefs, watch } from "vue";
import { onClickOutside } from "@vueuse/core";
import type { DropdownPlacement, DropdownProps } from "./types";
import { useDropdownClasses } from "./utils";
import PubButton from "@/components/PubButton/PubButton.vue";
import PubIcon from "@/components/PubIcon/PubIcon.vue";

const props = withDefaults(defineProps<DropdownProps>(), {
    alignToEnd: false,
    class: "",
    closeInside: false,
    theme: "blue",
    contentWrapperClass: "",
    disabled: false,
    placement: "bottom",
    text: "Dropdown",
    transition: "",
    triggerClass: "",
    triggerWrapperClass: "",
    duration: 250,
    offsetDistance: 8,
    offsetSkidding: 0
});

const isContentVisible = ref(false);
const dropdownWrapper = ref<HTMLDivElement>();
const triggerWrapper = ref<HTMLDivElement>();
const contentWrapper = ref<HTMLDivElement>();
const contentStyles = ref("");

const placementCalculator: Record<DropdownPlacement, (contentRect: DOMRect, triggerRect: DOMRect) => string> = {
    bottom: (contentRect: DOMRect, triggerRect: DOMRect): string =>
        `bottom: -${contentRect.height + props.offsetDistance}px;` +
        (props.offsetSkidding > 0 ? `transform: translateX(${triggerRect.width + props.offsetSkidding}px);` : ""),
    left: (contentRect: DOMRect, triggerRect: DOMRect): string =>
        `left: -${contentRect.width + props.offsetDistance}px;` +
        (props.offsetSkidding > 0 ? `transform: translateY(${triggerRect.height + props.offsetSkidding}px);` : ""),
    right: (contentRect: DOMRect, triggerRect: DOMRect): string =>
        `right: -${contentRect.width + props.offsetDistance}px;` +
        (props.offsetSkidding > 0 ? `transform: translateY(${triggerRect.height + props.offsetSkidding}px);` : ""),
    top: (contentRect: DOMRect, triggerRect: DOMRect): string =>
        `top: -${contentRect.height + props.offsetDistance}px;` +
        (props.offsetSkidding > 0 ? `transform: translateX(${triggerRect.width + props.offsetSkidding}px);` : "")
};

const handleToggle = () => {
    if (props.disabled) return;
    isContentVisible.value = !isContentVisible.value;
};
const handleHide = (event: MouseEvent) => {
    if (props.closeInside) {
        const target = event.target as HTMLElement;
        if (contentWrapper.value && contentWrapper.value.contains(target)) {
            isContentVisible.value = false;
        }
    }
};
onClickOutside(dropdownWrapper, () => isContentVisible.value && (isContentVisible.value = false));

const calcPlacement = () => {
    const contentRect = contentWrapper.value?.getBoundingClientRect();
    const triggerRect = triggerWrapper.value?.getBoundingClientRect();
    contentStyles.value =
        contentRect && triggerRect ? placementCalculator[props.placement](contentRect, triggerRect) : "";
};

const emit = defineEmits<{
    show: [];
    hide: [];
}>();

watch(isContentVisible, (value: boolean) => {
    if (value) {
        emit("show");
        nextTick(() => calcPlacement());
    } else {
        emit("hide");
    }
});

const transitionName = computed(() => (!props.transition ? `to-${props.placement}` : props.transition));

const { wrapperClasses, contentWrapperClasses, triggerWrapperClasses, triggerAppendClass } = useDropdownClasses({
    ...toRefs(props),
    isContentVisible
});
</script>

<template>
    <div :class="wrapperClasses" ref="dropdownWrapper">
        <div :class="triggerWrapperClasses" @click="handleToggle" ref="triggerWrapper">
            <slot name="trigger">
                <pub-button
                    :aria-expanded="isContentVisible"
                    :theme="theme"
                    :disabled="disabled"
                    aria-haspopup="true"
                    role="button"
                >
                    {{ text }}
                    <template #append>
                        <pub-icon :class="triggerAppendClass" name="chevron-down" size="xs" />
                    </template>
                </pub-button>
            </slot>
        </div>
        <transition
            :name="transitionName"
            :duration="props.duration"
            @before-enter="isContentVisible = true"
            @before-leave="isContentVisible = false"
        >
            <div
                v-if="isContentVisible"
                :class="contentWrapperClasses"
                :style="contentStyles"
                ref="contentWrapper"
                @click="handleHide"
            >
                <slot />
            </div>
        </transition>
    </div>
</template>

<style scoped>
/* transitions */
.to-bottom-enter-active,
.to-bottom-leave-active,
.to-left-enter-active,
.to-left-leave-active,
.to-right-enter-active,
.to-right-leave-active,
.to-top-enter-active,
.to-top-leave-active {
    transition: all 250ms;
}

/* to top */
.to-top-enter-active,
.to-top-leave-to {
    opacity: 0;
    transform: translateY(10px);
}

.to-top-leave,
.to-top-enter-to {
    opacity: 1;
    transform: translateY(0);
}

/* to right */
.to-right-enter-active,
.to-right-leave-to {
    opacity: 0;
    transform: translateX(-10px);
}

.to-right-leave,
.to-right-enter-to {
    opacity: 1;
    transform: translateX(0);
}

/* to bottom */
.to-bottom-enter-active,
.to-bottom-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

.to-bottom-leave,
.to-bottom-enter-to {
    opacity: 1;
    transform: translateY(0);
}

/* to left */
.to-left-enter-active,
.to-left-leave-to {
    opacity: 0;
    transform: translateX(10px);
}

.to-left-leave,
.to-left-enter-to {
    opacity: 1;
    transform: translateX(0);
}
</style>
