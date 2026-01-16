<template>
    <pub-pagination v-model="currentPage" :slice-size="4" :total-pages="100" />
</template>

<script lang="ts" setup>
import { PubPagination } from "vuelicity";
import { ref } from "vue";

const currentPage = ref(5);
</script>
