<template>
    <pub-textarea v-model="message" label="Your message" placeholder="Write your thoughts here..." />
</template>

<script setup>
import { ref } from 'vue';
import { PubTextarea } from 'vuelicity';

const message = ref('');
</script>