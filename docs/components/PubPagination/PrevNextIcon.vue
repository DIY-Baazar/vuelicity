<template>
  <pub-pagination
    v-model="currentPage"
    layout="navigation"
    :total-pages="100"
    show-icons
  />
  <pub-pagination
    v-model="currentPage"
    layout="navigation"
    :total-pages="100"
    show-icons
    size="lg"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { PubPagination } from 'vuelicity'

const currentPage = ref(1)
</script>
