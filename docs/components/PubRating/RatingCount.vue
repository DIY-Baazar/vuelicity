<template>
  <pub-rating
    :rating="1"
    :scale="1"
    review-link="#"
    review-text="73 reviews"
  >
    <template #besideText>
      <p class="ml-2 text-sm font-bold text-gray-900 dark:text-white">
        4.95
      </p>
    </template>
  </pub-rating>
</template>

<script setup lang="ts">
import { PubRating } from 'vuelicity'
</script>
