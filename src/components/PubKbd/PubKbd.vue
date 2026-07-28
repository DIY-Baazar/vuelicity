<template>
  <kbd :class="kbdClasses">
    <slot name="icon" />
    <slot name="default" />
  </kbd>
</template>

<script lang="ts" setup>
import { computed, toRefs, useSlots } from 'vue'

import { useKbdClasses } from './utils'

import type { KbdProps } from './types'

const slots = useSlots()
const hasIcon = computed(() => !!slots.icon)

const props = withDefaults(defineProps<KbdProps>(), {
    class: '',
})

const { kbdClasses } = useKbdClasses({ hasIcon, ...toRefs(props) })
</script>
