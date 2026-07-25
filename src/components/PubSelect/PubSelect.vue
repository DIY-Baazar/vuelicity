<template>
  <div :class="wrapperClasses">
    <label
      v-if="label"
      :for="attrs.name"
      :class="labelClasses"
    >{{ props.label }}</label>
    <select
      v-model="model"
      :name="attrs.name"
      :class="selectClasses"
      :disabled="props.disabled"
      v-bind="attrs"
    >
      <option
        disabled
        selected
        value=""
      >
        {{ props.placeholder }}
      </option>
      <option
        v-for="(option, idx) in options"
        :key="idx"
        :value="option.value"
      >
        {{ option.name }}
      </option>
    </select>
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
import { toRefs, useAttrs } from 'vue'

import { useSelectClasses } from './utils'

import type { SelectProps } from './types'

const props = withDefaults(
  defineProps<SelectProps>(),
  {
    class: '',
    wrapperClass: '',
    options: () => [],
    label: '',
    labelClass: '',
    placeholder: 'Please select one',
    validationStatus: undefined,
    size: 'md',
    disabled: false,
    underline: false,
  },
)

const model = defineModel<string | number>({ default: '' })
const attrs = useAttrs() as { name?: string;[key: string]: unknown; }

const {
  wrapperClasses,
  labelClasses,
  selectClasses,
  validationMessageClasses,
  helperMessageClasses,
} = useSelectClasses(toRefs(props))

</script>
