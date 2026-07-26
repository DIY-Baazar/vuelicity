<template>
  <a
    class="relative flex size-10 items-center justify-center rounded-full border-2 border-white bg-grey-700 text-xs font-medium text-white hover:bg-grey-600 dark:border-grey-800"
    :href="href"
  >+{{ total }}</a>
</template>

<script setup lang="ts">
import type { AvatarStackCounterProps } from './types'

withDefaults(defineProps<AvatarStackCounterProps>(), {
  total: 1,
  href: '#',
})
</script>
