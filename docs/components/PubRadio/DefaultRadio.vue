<template>
  <pub-radio
    v-model="defPicked"
    name="default"
    label="Default radio"
    value="one"
  />
  <pub-radio
    v-model="defPicked"
    name="default"
    label="Checked state"
    value="two"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PubRadio } from 'vuelicity'

const defPicked = ref('two')
</script>
