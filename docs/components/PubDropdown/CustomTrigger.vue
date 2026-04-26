<template>
    <pub-dropdown>
        <template #trigger>
            <pub-button rounded="full" theme="magenta">Send</pub-button>
        </template>
        <nav class="py-2 text-sm text-gray-700">
            <a href="#" class="block px-4 py-2 hover:bg-gray-100"> Schedule </a>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100"> Now </a>
        </nav>
    </pub-dropdown>
</template>

<script setup>
import { PubDropdown, PubButton } from "vuelicity";
</script>
