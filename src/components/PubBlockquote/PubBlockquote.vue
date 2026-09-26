<template>
  <blockquote class="pub-blockquote">
    <slot />
  </blockquote>
</template>

<script lang="ts" setup>
import type { BlockQuoteProps } from './types'

const props = withDefaults(defineProps<BlockQuoteProps>(), {
    type: 'default',
    cite: '',
    class: '',
})
</script>
