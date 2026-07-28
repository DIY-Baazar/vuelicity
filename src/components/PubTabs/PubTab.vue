<template>
  <template v-if="directive === 'if'">
    <div
      v-if="activeTab === name"
      role="tabpanel"
      :aria-labelledby="`tab-${name}`"
      tabindex="0"
    >
      <slot />
    </div>
  </template>
  <template v-else-if="directive === 'show'">
    <div
      v-show="activeTab === name"
      :id="`panel-${name}`"
      role="tabpanel"
      :aria-labelledby="`tab-${name}`"
      :tabindex="activeTab === name ? 0 : -1"
    >
      <slot />
    </div>
  </template>
</template>

<script lang="ts" setup>
import { computed, inject, type Ref } from 'vue'

import type { TabProps, TabsState } from './types'

defineOptions({
    __PUB_TAB__: true,
})

withDefaults(defineProps<TabProps>(), {
    title: '',
    disabled: false,
})

const injected = inject<{ modelValue: Ref<string>, tabsState: TabsState }>('tabsState')

if (!injected) {
    throw new Error('PubTabs: missing injected value "tabsState"')
}

const { modelValue, tabsState } = injected

const activeTab = computed(() => modelValue.value ?? '')
const directive = computed(() => tabsState.directive ?? 'if')
</script>
