<template>
  <pub-input
    v-model="email"
    label="Email"
    placeholder="Enter your email"
  >
    <template #prepend>
      <pub-icon
        name="envelope"
        class="text-grey-800"
      />
    </template>
  </pub-input>
  <pub-input
    v-model="username"
    label="Username"
    placeholder="Enter your username"
  >
    <template #append>
      @example.com
    </template>
  </pub-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { PubIcon, PubInput } from 'vuelicity'

const email = ref('')
const username = ref('')
</script>
