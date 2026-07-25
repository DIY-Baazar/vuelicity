<template>
  <pub-tabs
    v-model="activeTab"
    class="p-5"
  >
    <pub-tab
      name="profile"
      title="Profile"
    >
      <template #icon>
        <pub-icon name="home" />
      </template>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, odio
      repudiandae reprehenderit, modi perferendis recusandae rerum minus architecto pariatur consequatur veritatis
      facere excepturi officiis veniam distinctio. Accusamus sequi atque debitis.
    </pub-tab>
    <pub-tab
      name="orders"
      title="Orders"
    >
      <template #icon>
        <pub-icon name="shopping_bag" />
      </template>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
      optio
      voluptatem, accusantium esse, aspernatur repellendus voluptas modi ipsam magnam laboriosam nemo quidem? Eos,
      obcaecati explicabo. Necessitatibus aperiam quos voluptatem harum.
    </pub-tab>
    <pub-tab
      name="address"
      title="Address"
    >
      <template #icon>
        <pub-icon name="address_book" />
      </template>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
      ipsum
      pariatur iusto error ratione facere quam, natus quas ea distinctio porro ipsam dolorum quod deserunt nemo
      repellat
      perspiciatis! Aliquam, ad?
    </pub-tab>
    <pub-tab
      name="admin"
      title="Admin"
      disabled
    >
      <template #icon>
        <pub-icon name="user_circle" />
      </template>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, harum qui voluptas placeat dolorem sint
      asperiores nemo et voluptatem commodi nesciunt impedit earum perferendis odit dicta, ipsum illo aliquam
      corporis.
    </pub-tab>
  </pub-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PubIcon, PubTab, PubTabs } from 'vuelicity'

const activeTab = ref('profile')
</script>
