<script lang="ts" setup>
import { computed, ref, toRefs, useSlots } from "vue";
import { useNavbarClasses } from "./utils";
import type { NavbarProps } from "./types";
import { useBreakpoints } from "@/composables/useBreakpoints";
import PubIcon from "@/components/PubIcon/PubIcon.vue";

const { isMobile } = useBreakpoints();
const isShowMobileMenu = ref(false);

const toggleMobileMenu = () => {
    isShowMobileMenu.value = !isShowMobileMenu.value;
};

const slots = useSlots();

const props = withDefaults(defineProps<NavbarProps>(), {
    theme: "default"
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
    <nav aria-label="navbar" :class="['pub-navbar', wrapperClasses, props.containerClass]">
        <div :class="[spanClasses, props.class]">
            <slot name="logo" />

            <button aria-controls="navbar-default" aria-expanded="false"
                class="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
                type="button" @click="toggleMobileMenu()">
                <span class="sr-only">Open main menu</span>
                <slot name="menu-icon">
                    <pub-icon theme="dark" size="sm" name="bars" />
                </slot>
            </button>

            <slot :is-show-menu="isShowMenu" name="default" />

            <div v-if="slots['right-side']" class="hidden md:order-2 md:flex">
                <slot name="right-side" />
            </div>
        </div>
    </nav>
</template>
