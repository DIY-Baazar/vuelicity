<template>
    <pub-button @click="clickProcess" :loading="loading">
        {{ loading ? "Loading" : "Click Me" }}
    </pub-button>
    <pub-button theme="primary" :skeleton="skeletal">Success</pub-button>
</template>

<script setup>
import { PubButton } from "vuelicity";
import { ref } from "vue";

const skeletal = ref(true);
const loading = ref(false);

// onMounted(() => {
//     setTimeout(() => {
//         skeletal.value = false;
//     }, 2000);
// });

function clickProcess() {
    loading.value = !loading.value;
    setTimeout(() => {
        loading.value = !loading.value;
    }, 2000);
}
</script>
