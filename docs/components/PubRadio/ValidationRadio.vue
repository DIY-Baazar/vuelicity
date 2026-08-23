<template>
  <div class="space-y-6">
    <pub-radio-group
      name="fruit-success"
      label="Pick a fruit (success)"
      validation-status="success"
    >
      <pub-radio
        v-model="picked1"
        label="Apple"
        value="apple"
      />
      <pub-radio
        v-model="picked1"
        label="Banana"
        value="banana"
      />
      <template #validationMessage>
        <span class="font-medium">Great!</span> You selected a fruit.
      </template>
    </pub-radio-group>

    <pub-radio-group
      name="fruit-error"
      label="Pick a fruit (error)"
      validation-message="Required! Please select a fruit to continue."
      validation-status="error"
    >
      <pub-radio
        v-model="picked2"
        label="Apple"
        value="apple"
      />
      <pub-radio
        v-model="picked2"
        label="Banana"
        value="banana"
      />
    </pub-radio-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PubRadio, PubRadioGroup } from 'vuelicity'

const picked1 = ref('banana')
const picked2 = ref('')
</script>
