<template>
    <pub-check-box v-model="check" label="Default checkbox" />
    <pub-check-box v-model="checked" label="Checked state" />
</template>

<script setup>
import { ref } from 'vue';
import { PubCheckBox } from 'vuelicity';

const check = ref(false);
const checked = ref(true);
</script>