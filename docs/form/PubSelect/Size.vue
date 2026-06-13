<template>
    <pub-select v-model="selected" :options="countries" label="Select a country" size="sm" />
    <pub-select v-model="selected" :options="countries" label="Select a country" size="md" />
    <pub-select v-model="selected" :options="countries" label="Select a country" size="lg" />
</template>

<script setup>
import { ref } from 'vue';
import { PubSelect } from 'vuelicity';

const selected = ref('');
const countries = [
    { value: 'us', name: 'United States' },
    { value: 'ca', name: 'Canada' },
    { value: 'fr', name: 'France' },
];
</script>