<template>
  <pub-tabs v-model="activeTab" class="p-5">
    <pub-tab name="profile" title="Profile"> Lorem ipsum dolor... </pub-tab>
    <pub-tab name="orders" title="Orders"> Lorem ipsum dolor... </pub-tab>
    <pub-tab name="address" title="Address"> Lorem ipsum dolor... </pub-tab>
    <pub-tab name="admin" title="Admin" disabled>
      Lorem ipsum dolor...
    </pub-tab>
  </pub-tabs>
</template>

<script setup>
import { ref } from "vue";
import { PubTab, PubTabs } from "vuelicity";

const activeTab = ref("profile");
</script>
