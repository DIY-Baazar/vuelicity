<template>
  <blockquote :class="spanClasses">
    <slot />
  </blockquote>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue'

import { useBlockquoteClasses } from './utils'

import type { BlockQuoteProps } from './types'

const props = withDefaults(defineProps<BlockQuoteProps>(), {
    type: 'default',
    cite: '',
    class: '',
})

const { spanClasses } = useBlockquoteClasses(toRefs(props))
</script>
