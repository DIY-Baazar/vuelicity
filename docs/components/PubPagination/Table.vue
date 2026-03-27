<template>
    <pub-pagination v-model="currentPage1" layout="table" :page-size="20" :total-items="100" />
    <pub-pagination v-model="currentPage2" layout="table" :page-size="100" :total-items="550" size="md" />
</template>

<script lang="ts" setup>
import { PubPagination } from "vuelicity";
import { ref } from "vue";

const currentPage1 = ref(1);
const currentPage2 = ref(1);
</script>
