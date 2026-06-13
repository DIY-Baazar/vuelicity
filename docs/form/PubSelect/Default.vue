<template>
  <pub-select
    v-model="selected"
    :options="countries"
    label="Select a country"
  />
</template>

<script setup>
import { ref } from 'vue'
import { PubSelect } from 'vuelicity'

const selected = ref('')
const countries = [
  { value: 'us', name: 'United States' },
  { value: 'ca', name: 'Canada' },
  { value: 'fr', name: 'France' },
]
</script>