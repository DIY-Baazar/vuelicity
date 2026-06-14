<template>
    <pub-checkbox v-model="check" label="Default checkbox" bordered />
    <pub-checkbox v-model="checked" label="Checked state" bordered />
</template>

<script setup>
import { ref } from 'vue';
import { PubCheckbox } from 'vuelicity';

const check = ref(false);
const checked = ref(true);
</script>