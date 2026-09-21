<template>
  <div class="pub-heading">
    <component
      :is="`h${level}`"
      :class="spanClasses"
    >
      <slot />
    </component>
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue'

import { useHeadingClasses } from './utils'

import type { HeadingProps } from './types'

const props = withDefaults(defineProps<HeadingProps>(), {
    level: 1,
    class: '',
})

const { spanClasses } = useHeadingClasses(toRefs(props))
</script>
