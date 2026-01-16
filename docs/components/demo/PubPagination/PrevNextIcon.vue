<template>
    <pub-pagination v-model="currentPage" layout="navigation" :total-pages="100" show-icons />
    <pub-pagination
        v-model="currentPage"
        layout="navigation"
        :total-pages="100"
        show-icons
        size="lg"
    />
</template>

<script lang="ts" setup>
import { PubPagination } from "vuelicity";
import { ref } from "vue";

const currentPage = ref(1);
</script>
