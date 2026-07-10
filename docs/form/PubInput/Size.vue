<template>
    <pub-input v-model="name" label="Small" placeholder="Enter your name" size="sm" />
    <pub-input v-model="name" label="Medium" placeholder="Enter your name" size="md" />
    <pub-input v-model="name" label="Large" placeholder="Enter your name" size="lg" />
    <pub-input v-model="name" label="Extra large" placeholder="Enter your name" size="xl" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { PubInput } from "vuelicity";

const name = ref("");
</script>
