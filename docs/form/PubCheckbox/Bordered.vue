<template>
    <pub-check-box v-model="check" label="Default checkbox" bordered />
    <pub-check-box v-model="checked" label="Checked state" bordered />
</template>

<script setup>
import { ref } from 'vue';
import { PubCheckBox } from 'vuelicity';

const check = ref(false);
const checked = ref(true);
</script>