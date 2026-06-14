<template>
    <pub-textarea v-model="message" size="sm" label="Small" placeholder="Small textarea..." />
    <pub-textarea v-model="message" size="md" label="Medium (default)" placeholder="Medium textarea..." />
    <pub-textarea v-model="message" size="lg" label="Large" placeholder="Large textarea..." />
    <pub-textarea v-model="message" size="xl" label="Extra large" placeholder="Extra large textarea..." />
</template>

<script setup>
import { ref } from 'vue';
import { PubTextarea } from 'vuelicity';

const message = ref('');
</script>