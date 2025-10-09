<template>
    <!-- Click Fn is not working -->
    <pub-button disabled @click="onClick">Default</pub-button>
    <pub-button theme="success" disabled>Success</pub-button>
</template>

<script setup>
import { PubButton } from "vuelicity";
function onClick() {
    console.log("clicked");
}
</script>
