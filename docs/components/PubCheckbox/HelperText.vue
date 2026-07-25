<template>
  <pub-checkbox
    v-model="check"
    label="Free shopping via PehliBazar"
  >
    <template #helper>
      You will get 10% discount for your first order.
    </template>
  </pub-checkbox>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PubCheckbox } from 'vuelicity'

const check = ref(false)
</script>
