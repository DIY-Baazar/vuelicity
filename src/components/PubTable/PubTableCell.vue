<template>
  <td :class="tableCellClasses">
    <slot />
  </td>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue'

import { useTableCellClasses } from './utils'

import type { TableState } from './types'

const injected = inject<{ tableState: TableState; }>('tableState')

if (!injected) {
    throw new Error('PubTable: missing injected value "tableState"')
}

const { tableState } = injected

const { tableCellClasses } = useTableCellClasses({
    stripedColumns: computed(() => tableState.stripedColumns ?? false),
})
</script>
