<template>
  <div
    ref="contentRef"
    :class="['pub-accordion-content', contentClasses]"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed, inject, onMounted, ref, toRefs } from 'vue'

import { useAccordionContentClasses } from './utils'

import type { AccordionContentProps, AccordionPanelState, AccordionState } from './types'

const props = withDefaults(defineProps<AccordionContentProps>(), {
    class: '',
    activeClass: '',
})

const panelId = inject<string>('panelId')

if (!panelId) {
    throw new Error('PubAccordion: missing injected value "panelId"')
}

const accordionState = ref()
const accordionPanelState = computed(() =>
    accordionState.value?.panels.find((panel: AccordionPanelState) => panel.id === panelId),
)

const { contentClasses } = useAccordionContentClasses(accordionState, accordionPanelState, toRefs(props))

onMounted(() => {
    const injected = inject<{ accordionState: AccordionState }>('accordionState')

    if (!injected) {
        throw new Error('PubAccordion: missing injected value "accordionState"')
    }
    const { accordionState: newAccordionState } = injected
    accordionState.value = newAccordionState
})
</script>
