<template>
  <pub-badge
    v-if="shown"
    color="blue"
    dismissable
    @dismiss="shown = false"
  >
    Brand
  </pub-badge>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PubBadge } from 'vuelicity'

const shown = ref(true)
</script>
