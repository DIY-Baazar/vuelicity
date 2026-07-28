<template>
  <pub-phone-input
    v-model="formData.phone"
    name="phone"
    placeholder="Enter your Phone number"
    label="Phone number"
    :isd-codes="isdCodes"
  />
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { PubPhoneInput } from 'vuelicity'

const isdCodes = [
    { code: '+1', name: 'US 🇺🇸' },
    { code: '+44', name: 'UK 🇬🇧' },
    { code: '+91', name: 'IND 🇮🇳' },
]
const formData = reactive({
    phone: '',
})
</script>
