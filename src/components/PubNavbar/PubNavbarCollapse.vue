<template>
  <div :class="['pub-navbar-collapse', wrapperClasses]">
    <ul :class="spanClasses">
      <slot name="default" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, toRefs } from 'vue'

import { useNavbarCollapseClasses } from './utils'

import type { NavbarCollapseProps, NavbarState } from './types'

const props = withDefaults(defineProps<NavbarCollapseProps>(), {
  isShowMenu: false,
  class: '',
})

const injected = inject<{ navbarState: NavbarState }>('navbarState')

if (!injected) {
  throw new Error('PubNavbar: missing injected value "navbarState"')
}

const { navbarState } = injected

const { wrapperClasses, spanClasses } = useNavbarCollapseClasses({
  ...toRefs(props),
  noToggleButton: computed(() => navbarState.noToggleButton),
  collapseBreakpoint: computed(() => navbarState.collapseBreakpoint),
})
</script>
