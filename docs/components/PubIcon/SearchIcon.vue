<template>
  <div class="flex flex-col items-center">
    <div class="mb-2 flex flex-row items-center gap-2">
      <pub-input
        v-model="searchTerm"
        placeholder="Search for an icon"
        wrapper-class="w-full"
        size="xs"
      >
        <template #prepend>
          <pub-icon
            name="search"
            type="outline"
            class="text-grey-700"
          />
        </template>
      </pub-input>
      <pub-select
        v-model="iconType"
        :options="iconTypeOptions"
        size="xs"
      />
    </div>
    <div class="flex flex-wrap gap-2">
      <display-icon
        v-for="icon in filteredIcons"
        :key="icon"
        :type="iconType"
        :name="icon"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { PubIcon, PubInput, PubSelect } from 'vuelicity'
import { iconsList } from 'vuelicity/components/PubIcon/icons.ts'

import DisplayIcon from './DisplayIcon.vue'

const searchTerm = ref('')
const iconType = ref('solid')
const iconTypeOptions = [
    { value: 'solid', name: 'Solid' },
    { value: 'outline', name: 'Outline' },
]
const filteredIcons = computed(() => {
    const searchTermLowerCase = searchTerm.value.toLowerCase().trim()

    if (searchTermLowerCase === '') return iconsList

    return iconsList.filter((icon) => {
        return icon.toLowerCase().includes(searchTermLowerCase)
    })
})
</script>
