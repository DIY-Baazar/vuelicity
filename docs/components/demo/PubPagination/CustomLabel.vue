<template>
    <pub-pagination v-model="currentPage" :total-pages="100" prev-label="<<<" next-label=">>>" />
</template>

<script lang="ts" setup>
import { PubPagination } from "vuelicity";
import { ref } from "vue";

const currentPage = ref(1);
</script>
