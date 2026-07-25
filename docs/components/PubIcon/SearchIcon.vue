<template>
  <div class="flex flex-col items-center">
    <div class="mb-2">
      <pub-input
        v-model="searchTerm"
        placeholder="Search for an icon"
        wrapper-class="w-full"
      >
        <template #prepend>
          <pub-icon
            name="search"
            type="outline"
            class="text-grey-700"
          />
        </template>
      </pub-input>
      <pub-checkbox
        v-model="isSolid"
        name="isSolid"
        :label="`Show '${isSolid ? 'Outline' : 'Solid'}' Icons`"
        wrapper-class="mt-2 flex items-center gap-2"
      />
    </div>
    <div class="flex flex-wrap gap-2">
      <display-icon
        v-for="icon in filteredIcons"
        :key="icon"
        :type="isSolid ? 'solid' : 'outline'"
        :name="icon"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { PubCheckbox, PubIcon, PubInput } from 'vuelicity'
import { iconsList } from 'vuelicity/components/PubIcon/icons.ts'

import DisplayIcon from './DisplayIcon.vue'

const searchTerm = ref('')
const isSolid = ref(false)
const filteredIcons = computed(() => {
  const searchTermLowerCase = searchTerm.value.toLowerCase().trim()

  if (searchTermLowerCase === '') return iconsList

  return iconsList.filter((icon) => {
    return icon.toLowerCase().includes(searchTermLowerCase)
  })
})
</script>
