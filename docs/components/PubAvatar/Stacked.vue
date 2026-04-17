<template>
    <div class="grid gap-2">
        <pub-avatar-stack>
            <pub-avatar src="/images/avatar001.jpeg" rounded stacked />
            <pub-avatar src="/images/avatar002.jpeg" rounded stacked />
            <pub-avatar src="/images/avatar003.jpeg" rounded stacked />
            <pub-avatar src="/images/avatar004.jpeg" rounded stacked />
            <pub-avatar src="/images/avatar005.jpeg" rounded stacked />
        </pub-avatar-stack>
        <pub-avatar-stack>
            <pub-avatar src="/images/avatar001.jpeg" rounded stacked />
            <pub-avatar src="/images/avatar002.jpeg" rounded stacked />
            <pub-avatar src="/images/avatar003.jpeg" rounded stacked />
            <pub-avatar src="/images/avatar004.jpeg" rounded stacked />
            <pub-avatar-stack-counter href="#" total="99" />
        </pub-avatar-stack>
    </div>
</template>

<script setup>
import { PubAvatar, PubAvatarStack, PubAvatarStackCounter } from "vuelicity";
</script>
