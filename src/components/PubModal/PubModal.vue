<template>
  <!-- Modal background -->
  <div
    v-if="props.isOpen"
    ref="modalRef"
    :class="['pub-modal', wrapperClasses, 'fixed inset-0 transition-opacity duration-300 ease-in grid']"
    tabindex="0"
    role="dialog"
    aria-modal="true"
    @keyup.esc="closeWithEsc"
    @click.self="clickOutside"
  >
    <div :class="[spanClasses, 'relative w-full p-2']">
      <!-- Modal content -->
      <div :class="['relative bg-white shadow max-h-[90vh] flex flex-col', props.class]">
        <!-- Modal header -->
        <div
          :class="$slots.header ? 'border-b border-grey-200' : ''"
          class="flex items-center justify-between p-2"
        >
          <slot name="header" />
          <pub-button
            size="sm"
            color="none"
            aria-label="close"
            @click="emit('close')"
          >
            <pub-icon
              color="grey"
              size="sm"
              name="close"
            />
            <span class="sr-only">Close</span>
          </pub-button>
        </div>
        <!-- Modal body -->
        <div
          :class="[$slots.header ? '' : 'pt-0', scrollable ? 'overflow-auto' : 'overflow-hidden']"
          class="p-3 flex-1"
        >
          <slot />
        </div>
        <!-- Modal footer -->
        <div
          v-if="$slots.footer"
          class="flex items-center justify-end border-t border-grey-200 p-2"
        >
          <slot name="footer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, type Ref, ref, toRefs } from 'vue'

import PubButton from '../PubButton/PubButton.vue'
import PubIcon from '../PubIcon/PubIcon.vue'

import { useModalClasses } from './utils'

import type { ModalProps } from './types'

const props = withDefaults(defineProps<ModalProps>(), {
  position: 'center',
  size: 'md',
  isOpen: false,
  zIndex: 40,
  class: '',
  persistent: false,
  notEscapeClose: false,
  notClickClose: false,
  overlayBlur: false,
  scrollable: false,
  focusTrap: false,
})

const closeWithEsc = () => {
  if (!props.persistent && !props.notEscapeClose) {
    emit('close')
  }
}

const clickOutside = () => {
  if (!props.persistent && !props.notClickClose) {
    emit('close')
  }
}

onMounted(() => {
  if (props.focusTrap) {
    const focusEle: HTMLElement | null = modalRef.value?.querySelector('button[aria-label="close"]') || modalRef.value

    if (focusEle) {
      focusEle.focus()
    }
  }
})

const emit = defineEmits(['close'])
const modalRef: Ref<HTMLElement | null> = ref(null)

const modalClasses = computed(() => useModalClasses(toRefs(props)))

const wrapperClasses = computed(() => modalClasses.value.wrapperClasses)
const spanClasses = computed(() => modalClasses.value.spanClasses)
</script>
