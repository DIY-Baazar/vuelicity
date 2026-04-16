<template>
    <div class="flex justify-center space-x-4">
        <pub-avatar src="/images/avatar003.jpeg" status="online" status-position="top-left" />
        <pub-avatar src="/images/avatar003.jpeg" status="online" status-position="top-right" />
        <pub-avatar src="/images/avatar003.jpeg" status="online" status-position="bottom-left" />
        <pub-avatar src="/images/avatar003.jpeg" status="online" status-position="bottom-right" />
    </div>
</template>

<script setup>
import { PubAvatar } from "vuelicity";
</script>
