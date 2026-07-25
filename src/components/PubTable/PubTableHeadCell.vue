<template>
  <th
    scope="col"
    :class="tableHeadCellClasses"
  >
    <slot />
  </th>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue'

import { useTableHeadCellClasses } from './utils'

import type { TableState } from './types'

const injected = inject<{ tableState: TableState; }>('tableState')

if (!injected) {
  throw new Error('PubTable: missing injected value "tableState"')
}

const { tableState } = injected

const { tableHeadCellClasses } = useTableHeadCellClasses({
  stripedColumns: computed(() => tableState.stripedColumns ?? false),
  color: computed(() => tableState.color ?? 'default'),
})
</script>
