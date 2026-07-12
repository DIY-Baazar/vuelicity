<template>
  <tr :class="tableRowClasses">
    <slot />
  </tr>
</template>

<script lang="ts" setup>
import { useTableRowClasses } from './utils'

const { tableRowClasses } = useTableRowClasses()
</script>
