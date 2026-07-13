<template>
    <pub-checkbox v-model="check">
        I agree with the
        <a class="text-blue-600 hover:underline" href="#">
            terms and conditions.
        </a>
    </pub-checkbox>
</template>

<script setup>
import { ref } from 'vue';
import { PubCheckbox } from 'vuelicity';

const check = ref(false);
</script>