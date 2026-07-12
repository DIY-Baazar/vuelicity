<template>
    <pub-phone-input
        v-model="form_data.phone"
        name="phone"
        placeholder="Enter your Phone number"
        label="Phone number"
        :isdCodes="isdCodes"
    />
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { PubPhoneInput } from "vuelicity";

const isdCodes = [
    { code: "+1", name: "US 🇺🇸" },
    { code: "+44", name: "UK 🇬🇧" },
    { code: "+91", name: "IND 🇮🇳" },
];
const form_data = reactive({
    phone: ""
});
</script>