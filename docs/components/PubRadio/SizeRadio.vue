<template>
  <pub-radio
    v-model="sizePicked"
    name="size"
    label="Small"
    value="sm"
    size="sm"
  />
  <pub-radio
    v-model="sizePicked"
    name="size"
    label="Medium (default)"
    value="md"
    size="md"
  />
  <pub-radio
    v-model="sizePicked"
    name="size"
    label="Large"
    value="lg"
    size="lg"
  />
  <pub-radio
    v-model="sizePicked"
    name="size"
    label="Extra large"
    value="xl"
    size="xl"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { PubRadio } from 'vuelicity'

const sizePicked = ref('md')
</script>
