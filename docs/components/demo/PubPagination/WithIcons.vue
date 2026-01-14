<template>
    <pub-pagination v-model="currentPage" :total-items="100" hide-labels show-icons />
    <pub-pagination v-model="currentPage" :total-items="100" hide-labels show-icons size="lg" />
</template>

<script lang="ts" setup>
import { PubPagination } from 'vuelicity';
import { ref } from 'vue';

const currentPage = ref(1);
</script>