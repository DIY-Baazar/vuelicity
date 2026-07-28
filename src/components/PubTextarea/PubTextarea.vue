<template>
  <div :class="wrapperClasses">
    <label
      v-if="props.label"
      :for="inputName"
      :class="labelClasses"
    >
      {{ props.label }}
    </label>
    <div :class="inputWrapperClasses">
      <textarea
        v-model="model"
        :class="inputClasses"
        :disabled="disabled"
        :required="required"
        :name="inputName"
        :autocomplete="autocomplete"
        :rows="rows"
        v-bind="attrs"
      />
      <div
        v-if="$slots.footer"
        :class="footerClasses"
      >
        <slot name="footer" />
      </div>
    </div>
    <p
      v-if="$slots.validationMessage"
      :class="validationMessageClasses"
    >
      <slot name="validationMessage" />
    </p>
    <p
      v-if="$slots.helper"
      :class="helperMessageClasses"
    >
      <slot name="helper" />
    </p>
  </div>
</template>

<script lang="ts" setup>
import { computed, toRefs, useAttrs, useId } from 'vue'

import { useTextareaClasses } from './utils'

import type { TextareaProps } from './types'

const props = withDefaults(defineProps<TextareaProps>(), {
    autocomplete: 'off',
    disabled: false,
    required: false,
    class: '',
    wrapperClass: '',
    labelClass: '',
    inputClass: '',
    prependClass: '',
    appendClass: '',
    validationStatus: undefined,
    size: 'md',
    rows: 4,
    footerClass: '',
})

const model = defineModel<string | number>({ default: '' })
const attrs = useAttrs()

const inputName = computed(() => props.name || 'input-' + useId())

const {
    wrapperClasses,
    labelClasses,
    inputWrapperClasses,
    inputClasses,
    validationMessageClasses,
    helperMessageClasses,
    footerClasses,
} = useTextareaClasses(toRefs(props))
</script>
