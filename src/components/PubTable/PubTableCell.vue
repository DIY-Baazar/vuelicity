<template>
    <td :class="tableCellClasses">
        <slot />
    </td>
</template>

<script lang="ts" setup>
import { computed, inject } from "vue";
import type { TableState } from "./types";
import { useTableCellClasses } from './utils';

const { tableState } = inject<{ tableState: TableState; }>("tableState")!;

const { tableCellClasses } = useTableCellClasses({
    stripedColumns: computed(() => tableState?.stripedColumns ?? false)
});
</script>
