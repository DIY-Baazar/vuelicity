<template>
  <p :class="spanClasses">
    <slot />
  </p>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue'

import { useParagraphClasses } from './utils'

import type { ParagraphProps } from './types'

const props = withDefaults(defineProps<ParagraphProps>(), {
    color: 'default',
    class: '',
})

const { spanClasses } = useParagraphClasses(toRefs(props))
</script>
