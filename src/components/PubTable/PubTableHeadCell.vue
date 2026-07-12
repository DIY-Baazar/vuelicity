<template>
  <th
    scope="col"
    :class="tableHeadCellClasses"
  >
    <slot />
  </th>
</template>

<script lang="ts" setup>
import { useTableHeadCellClasses } from './utils'

const { tableHeadCellClasses } = useTableHeadCellClasses()
</script>
