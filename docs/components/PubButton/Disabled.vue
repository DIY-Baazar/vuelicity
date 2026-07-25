<template>
    <!-- Click Fn is not working -->
    <pub-button disabled @click="onClick">Default</pub-button>
    <pub-button color="green" disabled>Green</pub-button>
</template>

<script lang="ts" setup>
import { PubButton } from "vuelicity";
function onClick() {
    console.log("clicked");
}
</script>
