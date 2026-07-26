<template>
  <span
    class="pub-icon"
    :class="iconClasses"
    v-bind="$attrs"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      v-html="iconBody"
    />
  </span>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue'

import { getIconBody } from './icons'
import { useIconClasses } from './utils'

import type { IconSize, IconTheme, IconType } from './types'

interface IconProps {
  name: string;
  type?: IconType;
  size?: IconSize;
  color?: IconTheme;
  class?: string;
  rotate?: boolean;
  flip?: boolean;
  spin?: boolean;
  mirror?: boolean;
  aschild?: boolean;
  strokeWidth?: number;
}

const props = withDefaults(defineProps<IconProps>(), {
  size: 'sm',
  type: 'solid',
  icon: 'default',
  class: '',
  rotate: false,
  flip: false,
  spin: false,
  mirror: false,
  aschild: false,
  strokeWidth: 1,
  color: 'default',
})

const { iconClasses } = useIconClasses(toRefs(props))

const iconBody = computed(() => getIconBody(toRefs(props)))
</script>
