<template>
    <pub-check-box v-model="check" label="Free shopping via PehliBazar">
        <template #helper> You will get 10% discount for your first order.</template>
    </pub-check-box>
</template>

<script setup>
import { ref } from 'vue';
import { PubCheckBox } from 'vuelicity';

const check = ref(false);
</script>