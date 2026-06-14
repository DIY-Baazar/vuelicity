<template>
    <pub-check-box v-model="check" disabled label="Disabled checkbox" />
    <pub-check-box v-model="checked" disabled label="Checked disabled state" />
</template>

<script setup>
import { ref } from 'vue';
import { PubCheckBox } from 'vuelicity';

const check = ref(false);
const checked = ref(true);
</script>