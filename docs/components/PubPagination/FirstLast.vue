<template>
  <pub-pagination
    v-model="currentPage"
    :total-pages="100"
    show-first-last
  />
  <pub-pagination
    v-model="currentPage"
    :total-pages="100"
    show-first-last
    size="md"
  />
  <pub-pagination
    v-model="currentPage"
    :total-pages="100"
    show-first-last
    show-icons
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { PubPagination } from 'vuelicity'

const currentPage = ref(1)
</script>
