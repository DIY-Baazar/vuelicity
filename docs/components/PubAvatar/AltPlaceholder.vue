<template>
    <div class="flex justify-center space-x-4">
        <pub-avatar>
            <template #placeholder>
                <pub-icon name="user-circle" aschild />
            </template>
        </pub-avatar>
        <pub-avatar rounded>
            <template #placeholder>
                <pub-icon name="user-circle" aschild />
            </template>
        </pub-avatar>
    </div>
</template>

<script setup>
import { PubAvatar, PubIcon } from "vuelicity";
</script>
