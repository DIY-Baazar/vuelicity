<template>
    <pub-checkbox v-model="check" bordered>
        16GB unified memory
        <template #helper> Seamlessly handle multitasking, large apps. </template>
    </pub-checkbox>
    <pub-checkbox v-model="checked" bordered>
        1TB SSD storage
        <template #helper>Get ultra-fast storage with 1TB of SSD space.</template>
    </pub-checkbox>
</template>

<script setup>
import { ref } from 'vue';
import { PubCheckbox } from 'vuelicity';

const check = ref(false);
const checked = ref(true);
</script>