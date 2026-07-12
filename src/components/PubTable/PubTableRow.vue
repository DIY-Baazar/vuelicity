<template>
    <tr :class="tableRowClasses">
        <slot />
    </tr>
</template>

<script lang="ts" setup>
import { computed, inject } from "vue";
import { useTableRowClasses } from './utils';
import type { TableState } from "./types";

const { tableState } = inject<{ tableState: TableState; }>("tableState")!;

const { tableRowClasses } = useTableRowClasses({
    striped: computed(() => tableState?.striped ?? false),
    hoverable: computed(() => tableState?.hoverable ?? false)
});
</script>
