<template>
    <pub-input v-model="name" label="Name" placeholder="Enter your name" required />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { PubInput } from "vuelicity";

const name = ref("");
</script>
