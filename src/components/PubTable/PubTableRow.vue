<template>
  <tr :class="tableRowClasses">
    <slot />
  </tr>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue'

import { useTableRowClasses } from './utils'

import type { TableState } from './types'

const injected = inject<{ tableState: TableState; }>('tableState')

if (!injected) {
    throw new Error('PubTable: missing injected value "tableState"')
}

const { tableState } = injected

const { tableRowClasses } = useTableRowClasses({
    striped: computed(() => tableState?.striped ?? false),
    hoverable: computed(() => tableState?.hoverable ?? false),
})
</script>
