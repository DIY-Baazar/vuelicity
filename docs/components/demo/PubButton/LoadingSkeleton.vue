<template>
    <pub-button @click="processing" :loading="loading">
        {{ loading ? "Loading" : "Click Me" }}
    </pub-button>
</template>

<script setup>
import { PubButton } from "vuelicity";
import { ref } from "vue";

const loading = ref(false);

function processing() {
    loading.value = !loading.value;
    setTimeout(() => {
        loading.value = !loading.value;
    }, 2000);
}
</script>
