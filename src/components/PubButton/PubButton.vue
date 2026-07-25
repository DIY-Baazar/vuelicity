<template>
  <component
    :is="componentName"
    :[linkAttr]="to"
    :class="useMergeClasses(['pub-button', wrapperClasses, spanClasses])"
    v-bind="attrs"
    @click="handleClick"
  >
    <span
      v-if="$slots.prepend"
      class="mr-1 inline-flex items-center"
    >
      <slot name="prepend" />
    </span>
    <slot />
    <span
      v-if="$slots.append"
      class="ml-1 inline-flex items-center"
    >
      <slot name="append" />
    </span>
  </component>
</template>

<script lang="ts" setup>
import { computed, resolveComponent, toRefs, useAttrs } from 'vue'

import { useButtonClasses } from './utils'

import type { ButtonProps } from './types'

import { useMergeClasses } from '@/composables/useMergeClasses'

const props = withDefaults(defineProps<ButtonProps>(), {
  color: 'default',
  type: 'button',
  name: '',
  to: '#',
  disabled: false,
  outline: false,
  skeleton: false,
  loading: false,
  square: false,
  size: 'md',
  rounded: 'none',
  as: 'button',
  linkAttr: 'href',
  class: '',
})

defineOptions({
  inheritAttrs: false,
})
const attrs = useAttrs()

const componentName = computed(() => (props.as !== 'a' ? resolveComponent(props.as) : 'a'))

const emit = defineEmits<{ click: [event: Event] }>()

const isDisabled = computed(() => props.disabled || props.loading || props.skeleton)

const handleClick = (event: Event) => {
  if (isDisabled.value) {
    return
  }
  emit('click', event)
}

const { wrapperClasses, spanClasses } = useButtonClasses(toRefs(props))
</script>
