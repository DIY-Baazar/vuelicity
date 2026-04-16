<template>
  <div class="flex justify-center space-x-4">
    <pub-avatar src="/images/avatar003.jpeg" status="online"/>
    <pub-avatar src="/images/avatar003.jpeg" status="busy" />
    <pub-avatar src="/images/avatar003.jpeg" status="offline" />
    <pub-avatar src="/images/avatar003.jpeg" status="away" />
  </div>
</template>

<script setup>
import { PubAvatar } from 'vuelicity'
</script>