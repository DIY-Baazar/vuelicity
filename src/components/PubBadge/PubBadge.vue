<template>
  <component
    :is="componentName"
    :class="['pub-badge', wrapperClasses, props.class]"
    :href="href"
  >
    <slot name="icon" />
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue'

import { useBadgeClasses } from './utils'

import type { BadgeProps } from './types'

const props = withDefaults(defineProps<BadgeProps>(), {
  color: 'default',
  size: 'xs',
  href: null,
  bordered: false,
  rounded: false,
})

const wrapperClasses = useBadgeClasses(toRefs(props))
const componentName = computed(() => (props.href ? 'a' : 'span'))

</script>
