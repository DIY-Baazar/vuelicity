<script lang="ts" setup>
import { toRefs } from "vue";
import type { BreadcrumbProps } from "./types";
import { useBreadcrumbClasses } from "./utils";

const props = withDefaults(defineProps<BreadcrumbProps>(), {
    solid: false
});

const { breadcrumbClasses, breadcrumbWrapperClasses } = useBreadcrumbClasses(toRefs(props));
</script>

<template>
    <nav :class="['pub-breadcrumb', breadcrumbWrapperClasses]" aria-label="Breadcrumb">
        <ol :class="breadcrumbClasses">
            <slot name="default" />
        </ol>
    </nav>
</template>
