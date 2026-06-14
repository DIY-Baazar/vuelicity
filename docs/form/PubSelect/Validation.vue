<template>
    <pub-select v-model="selected" :options="countries" label="Select a country" validation-status="success">
        <template #validationMessage>
            <span class="font-medium">Well done!</span>
        </template>
    </pub-select>
    <hr class="mb-2" />
    <pub-select v-model="selected" :options="countries" label="Select a country" validation-status="error">
        <template #validationMessage>
            <span class="font-medium">Oh, snap!</span>
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