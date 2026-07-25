<template>
  <pub-pagination
    v-model="currentPage"
    :total-pages="100"
    prev-label="<<<"
    next-label=">>>"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { PubPagination } from 'vuelicity'

const currentPage = ref(1)
</script>
