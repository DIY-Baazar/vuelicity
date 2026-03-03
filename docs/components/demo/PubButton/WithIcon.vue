<template>
    <pub-button theme="blue" size="sm">
        <template #prepend>
            <PubIcon name="cart" aschild/>
        </template>
        Buy Now
    </pub-button>
    <pub-button theme="blue" size="sm">
        Go to Payment
        <template #append>
            <PubIcon name="arrow-right" aschild/>
        </template>
    </pub-button>
</template>

<script setup>
import { PubButton, PubIcon } from "vuelicity";
</script>