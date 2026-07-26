<template>
  <pub-radio
    v-model="picked"
    name="radio"
    label="Default radio"
    value="one"
  />
  <pub-radio
    v-model="picked"
    name="radio"
    label="Checked state"
    value="two"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PubRadio } from 'vuelicity'

const picked = ref('two')
</script>
