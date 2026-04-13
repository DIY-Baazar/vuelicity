<template>
    <pub-alert show-icon theme="blue">
        <template #title>
            <p class="font-medium">Check if the password meets the following requirements:</p>
        </template>
        <ul class="mt-1.5 ml-7 list-disc list-inside">
            <li>At least 8 characters</li>
            <li>At least one uppercase letter</li>
            <li>At least one lowercase letter</li>
            <li>At least one number</li>
        </ul>
    </pub-alert>
    <pub-alert show-icon theme="yellow">
        <template #title>
            <p class="font-medium">Check if the password meets the following requirements:</p>
        </template>
        <ul class="mt-1.5 ml-7 list-disc list-inside">
            <li>At least 8 characters</li>
            <li>At least one uppercase letter</li>
            <li>At least one lowercase letter</li>
            <li>At least one number</li>
        </ul>
    </pub-alert>
</template>

<script setup>
import { PubAlert } from "vuelicity";
</script>
