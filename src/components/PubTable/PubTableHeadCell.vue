<template>
    <th scope="col" :class="tableHeadCellClasses">
        <slot />
    </th>
</template>

<script lang="ts" setup>
import { computed, inject } from "vue";
import type { TableState } from "./types";
import { useTableHeadCellClasses } from './utils';

const { tableState } = inject<{ tableState: TableState; }>("tableState")!;

const { tableHeadCellClasses } = useTableHeadCellClasses({
    stripedColumns: computed(() => tableState?.stripedColumns ?? false)
});
</script>
