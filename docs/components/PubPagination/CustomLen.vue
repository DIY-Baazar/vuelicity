<template>
  <pub-pagination
    v-model="currentPage"
    :slice-size="4"
    :total-pages="100"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { PubPagination } from 'vuelicity'

const currentPage = ref(5)
</script>
