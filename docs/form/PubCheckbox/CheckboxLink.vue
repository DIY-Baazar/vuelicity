<template>
    <pub-check-box v-model="check">
        I agree with the
        <a class="text-blue-600 hover:underline" href="#">
            terms and conditions.
        </a>
    </pub-check-box>
</template>

<script setup>
import { ref } from 'vue';
import { PubCheckBox } from 'vuelicity';

const check = ref(false);
</script>