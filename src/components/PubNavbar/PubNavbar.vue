<script lang="ts" setup>
import { computed, provide, reactive, ref, toRefs, useSlots } from "vue";
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
    theme: "default",
    containerClass: "",
    class: "",
    noToggleButton: false
});

const { wrapperClasses, spanClasses } = useNavbarClasses(toRefs(props));

const isShowMenu = computed(() => (!isMobile ? true : isShowMobileMenu.value));

const navbarState = reactive(props);

provide("navbarState", { navbarState });
</script>

<template>
    <nav aria-label="navbar" :class="['pub-navbar', wrapperClasses]">
        <div :class="[spanClasses, props.class]">
            <slot name="logo" />

            <button
                v-if="!props.noToggleButton"
                aria-controls="navbar-default"
                aria-expanded="false"
                class="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
                type="button"
                @click="toggleMobileMenu()"
            >
                <span class="sr-only">Open main menu</span>
                <slot name="menu-icon">
                    <pub-icon size="sm" name="bars" />
                </slot>
            </button>

            <slot :is-show-menu="isShowMenu" name="default" />

            <div v-if="slots['right-side']" class="hidden md:order-2 md:flex">
                <slot name="right-side" />
            </div>
        </div>
    </nav>
</template>
