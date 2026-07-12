<template>
    <pub-radio v-model="picked" name="radio" label="Default radio" disabled value="one" />
    <pub-radio v-model="picked" name="radio" label="Checked state" disabled value="two" />
</template>

<script setup>
import { ref } from 'vue';
import { PubRadio } from 'vuelicity';

const picked = ref('two');
</script>