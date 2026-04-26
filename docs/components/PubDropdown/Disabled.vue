<template>
    <pub-dropdown text="Profile" disabled>
        <nav class="py-2 text-sm text-gray-700">
            <a href="#" class="block px-4 py-2 hover:bg-gray-100"> Dashboard </a>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100"> Settings </a>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100"> Earnings </a>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100"> Sign out </a>
        </nav>
    </pub-dropdown>
</template>

<script setup>
import { PubDropdown } from "vuelicity";
</script>
