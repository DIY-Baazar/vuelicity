<script setup lang="ts">
import { computed, inject, toRefs } from "vue";
import type { NavbarState, NavbarCollapseProps } from "./types";
import { useNavbarCollapseClasses } from "./utils";

const props = withDefaults(defineProps<NavbarCollapseProps>(), {
    isShowMenu: false,
    class: ""
});

const { navbarState } = inject<{ navbarState: NavbarState }>("navbarState")!;

const { wrapperClasses, spanClasses } = useNavbarCollapseClasses({
    ...toRefs(props),
    noToggleButton: computed(() => navbarState.noToggleButton)
});
</script>

<template>
    <div :class="['pub-navbar-collapse', wrapperClasses]">
        <ul :class="spanClasses">
            <slot name="default" />
        </ul>
    </div>
</template>
