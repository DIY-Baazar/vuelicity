<template>
  <div
    :class="['pub-accordion', accordionClasses]"
    :data-accordion-id="accordionId"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { provide, reactive, toRefs, useId } from 'vue'

import { useAccordionClasses } from './utils'

import type { AccordionPanelState, AccordionProps } from './types'

const props = withDefaults(defineProps<AccordionProps>(), {
  class: '',
  collapsed: false,
  flushed: false,
  persistent: false,
})

const { accordionClasses } = useAccordionClasses(toRefs(props))

const accordionId = useId()
const accordionState = reactive({
  ...props,
  id: accordionId,
  panels: [] as AccordionPanelState[],
})

const registerPanel = (panel: AccordionPanelState) => {
  accordionState.panels.push(panel)
}

provide('accordionState', { accordionState, registerPanel })
</script>
