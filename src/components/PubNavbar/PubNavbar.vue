<script lang="ts" setup>
import { computed, ref, toRefs } from "vue";
import { useNavbarClasses } from "./utils";
import type { PubNavbarProps } from "./types";
import { useBreakpoints } from "@/composables/useBreakpoints";

const { isMobile } = useBreakpoints();
const isShowMobileMenu = ref(false);

const toggleMobileMenu = () => {
    isShowMobileMenu.value = !isShowMobileMenu.value;
};


const props = withDefaults(defineProps<PubNavbarProps>(), {
    theme: "light"
});

const modalClasses = computed(() => useNavbarClasses(toRefs(props)));

const wrapperClasses = computed(() => modalClasses.value.wrapperClasses);
const spanClasses = computed(() => modalClasses.value.spanClasses);

const isShowMenu = computed(() => (!isMobile)
    ? true
    : isShowMobileMenu.value,
);

</script>

<template>
    <nav :class="[wrapperClasses, props.containerClass]">
        <div :class="[spanClasses, props.class]">
            <slot name="logo" />

            <button aria-controls="navbar-default" aria-expanded="false"
                class="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
                type="button" @click="toggleMobileMenu()">
                <span class="sr-only">Open main menu</span>
                <slot name="menu-icon">
                </slot>
            </button>

            <slot :is-show-menu="isShowMenu" name="default" />
        </div>
    </nav>
</template>
