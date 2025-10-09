<script setup lang="ts">
import { computed, toRefs } from "vue";
import type { PubNavbarCollapseProps } from "./types";
import { useNavbarCollapseClasses } from "./utils";


const props = withDefaults(defineProps<PubNavbarCollapseProps>(), {
    isShowMenu: false,
});

const menuClasses = computed(() => useNavbarCollapseClasses(toRefs(props)));

const wrapperClasses = computed(() => menuClasses.value.wrapperClasses);
const spanClasses = computed(() => menuClasses.value.spanClasses)

</script>

<template>
    <div :class="wrapperClasses">
        <ul :class="spanClasses">
            <slot name="default" />
        </ul>
    </div>
</template>