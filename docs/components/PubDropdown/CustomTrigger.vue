<template>
    <pub-dropdown>
        <template #trigger>
            <pub-button rounded="full" color="pink">Send</pub-button>
        </template>
        <nav class="py-2 text-sm text-grey-700">
            <a href="#" class="block px-4 py-2 hover:bg-grey-100"> Schedule </a>
            <a href="#" class="block px-4 py-2 hover:bg-grey-100"> Now </a>
        </nav>
    </pub-dropdown>
</template>

<script lang="ts" setup>
import { PubDropdown, PubButton } from "vuelicity";
</script>
