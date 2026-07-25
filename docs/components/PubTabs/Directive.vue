<template>
  <pub-tabs
    v-model="activeTab"
    directive="show"
    class="p-5"
  >
    <pub-tab
      name="profile"
      title="Profile"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
      odio
      repudiandae reprehenderit, modi perferendis recusandae rerum minus architecto pariatur consequatur veritatis
      facere excepturi officiis veniam distinctio. Accusamus sequi atque debitis.
    </pub-tab>
    <pub-tab
      name="orders"
      title="Orders"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
      optio
      voluptatem, accusantium esse, aspernatur repellendus voluptas modi ipsam magnam laboriosam nemo quidem? Eos,
      obcaecati explicabo. Necessitatibus aperiam quos voluptatem harum.
    </pub-tab>
    <pub-tab
      name="address"
      title="Address"
    >
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
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, harum qui voluptas placeat dolorem sint
      asperiores nemo et voluptatem commodi nesciunt impedit earum perferendis odit dicta, ipsum illo aliquam
      corporis.
    </pub-tab>
  </pub-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PubTab, PubTabs } from 'vuelicity'

const activeTab = ref('profile')
</script>
