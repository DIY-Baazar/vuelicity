<template>
    <pub-checkbox v-model="check" disabled label="Disabled checkbox" />
    <pub-checkbox v-model="checked" disabled label="Checked disabled state" />
</template>

<script setup>
import { ref } from 'vue';
import { PubCheckbox } from 'vuelicity';

const check = ref(false);
const checked = ref(true);
</script>