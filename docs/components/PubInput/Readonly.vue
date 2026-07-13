<template>
  <pub-input
    v-model="value"
    label="Readonly input"
    placeholder="This value cannot be changed"
    readonly
  />
  <pub-input
    v-model="value"
    disabled
    label="Disabled + readonly input"
    placeholder="This value cannot be changed"
    readonly
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { PubInput } from 'vuelicity'

const value = ref('Prefilled Value')
</script>