<template>
    <PubButton theme="blue" size="sm">
        <template #prepend>
            <PubIcon name="cart" aschild/>
        </template>
        Buy Now
    </PubButton>
    <PubButton theme="blue" size="sm">
        Go to Payment
        <template #append>
            <PubIcon name="arrow-right" aschild/>
        </template>
    </PubButton>
</template>

<script setup>
import { PubButton, PubIcon } from "vuelicity";
</script>