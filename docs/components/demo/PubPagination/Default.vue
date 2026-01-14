<template>
    <pub-pagination v-model="currentPage" :total-items="100" />
    <pub-pagination v-model="currentPage" :total-items="100" size="md" />
</template>

<script lang="ts" setup>
import { PubPagination } from 'vuelicity';
import { ref } from 'vue';

const currentPage = ref(1);
</script>