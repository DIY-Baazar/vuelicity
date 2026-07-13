<template>
    <pub-select v-model="selected" :options="countries" label="Select a country">
        <template #helper>
            We'll never share your details. Read our
            <a href="#" class="text-blue-600 dark:text-blue-500"> Privacy Policy </a>.
        </template>
    </pub-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { PubSelect } from 'vuelicity';

const selected = ref('');
const countries = [
    { value: 'us', name: 'United States' },
    { value: 'ca', name: 'Canada' },
    { value: 'fr', name: 'France' },
];
</script>