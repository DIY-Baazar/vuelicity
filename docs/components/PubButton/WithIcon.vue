<template>
    <pub-button theme="blue" size="sm">
        <template #prepend>
            <pub-icon name="cart" />
        </template>
        Buy Now
    </pub-button>
    <pub-button theme="blue" size="sm">
        Go to Payment
        <template #append>
            <pub-icon name="arrow-right" />
        </template>
    </pub-button>
</template>

<script setup>
import { PubButton, PubIcon } from "vuelicity";
</script>
