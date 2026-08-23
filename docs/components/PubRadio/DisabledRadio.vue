<template>
  <pub-radio
    v-model="picked"
    name="disabled"
    label="Default radio"
    disabled
    value="one"
  />
  <pub-radio
    v-model="picked"
    name="disabled"
    label="Checked state"
    disabled
    value="two"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PubRadio } from 'vuelicity'

const picked = ref('two')
</script>
