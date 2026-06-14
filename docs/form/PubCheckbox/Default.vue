<template>
    <pub-checkbox v-model="check" label="Default checkbox" />
    <pub-checkbox v-model="checked" label="Checked state" />
</template>

<script setup>
import { ref } from 'vue';
import { PubCheckbox } from 'vuelicity';

const check = ref(false);
const checked = ref(true);
</script>