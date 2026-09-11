<template>
  <pub-rating :rating="4.75">
    <template #besideText>
      <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
        4.75 out of 5
      </p>
    </template>
  </pub-rating>
</template>

<script setup lang="ts">
import { PubRating } from 'vuelicity'
</script>
