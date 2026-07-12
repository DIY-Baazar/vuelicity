<template>
  <td :class="tableCellClasses">
    <slot />
  </td>
</template>

<script lang="ts" setup>
import { useTableCellClasses } from './utils';

const { tableCellClasses } = useTableCellClasses()
</script>
