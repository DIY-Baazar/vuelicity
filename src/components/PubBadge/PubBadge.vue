<template>
  <component
    :is="componentName"
    :class="['pub-badge', wrapperClasses, props.class]"
    :href="href"
  >
    <slot name="icon" />
    <slot name="default" />
    <button
      v-if="dismissable"
      type="button"
      aria-label="Remove Badge"
      @click.stop="emit('dismiss')"
    >
      <pub-icon
        name="close"
        size="xs"
      />
      <span class="sr-only">Remove badge</span>
    </button>
  </component>
</template>

<script lang="ts" setup>
import { computed, toRefs, useSlots } from 'vue'

import PubIcon from '../PubIcon/PubIcon.vue'

import { useBadgeClasses } from './utils'

import type { BadgeProps } from './types'

const props = withDefaults(defineProps<BadgeProps>(), {
    color: 'default',
    size: 'xs',
    href: null,
    bordered: false,
    rounded: false,
    dismissable: false,
})

const emit = defineEmits(['dismiss'])
const slots = useSlots()

const wrapperClasses = useBadgeClasses({
    ...toRefs(props),
    hasIconOnly: computed(() => !!slots.icon && !slots.default),
})
const componentName = computed(() => (props.href ? 'a' : 'span'))

</script>
