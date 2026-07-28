<template>
  <pub-button
    :loading="loading"
    @click="clickProcess"
  >
    {{ loading ? "Loading..." : "Click Me" }}
  </pub-button>
  <pub-button
    color="blue"
    :skeleton="skeletal"
  >
    Green
  </pub-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { PubButton } from 'vuelicity'

const skeletal = ref(true)
const loading = ref(false)

// onMounted(() => {
//     setTimeout(() => {
//         skeletal.value = false;
//     }, 2000);
// });

function clickProcess () {
    loading.value = !loading.value
    setTimeout(() => {
        loading.value = !loading.value
    }, 2000)
}
</script>
