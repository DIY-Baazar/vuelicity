<template>
  <div
    :class="useMergeClasses(['relative overflow-x-auto shadow-md sm:rounded-lg', normalizeClass(props.wrapperClass)])"
  >
    <table :class="useMergeClasses(['w-full text-left text-sm text-grey-500', normalizeClass(props.class)])">
      <slot />
    </table>
  </div>
</template>

<script lang="ts" setup>
import { normalizeClass, provide, reactive } from 'vue'

import type { TableProps } from './types'

import { useMergeClasses } from '@/composables/useMergeClasses'

const props = withDefaults(
    defineProps<TableProps>(),
    {
        class: '',
        wrapperClass: '',
        color: 'default',
        hoverable: false,
        striped: false,
        stripedColumns: false,
    },
)

const tableState = reactive(props)
provide('tableState', { tableState })
</script>
