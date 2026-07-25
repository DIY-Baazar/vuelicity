<template>
  <pub-tabs
    v-model="activeTab"
    class="p-5"
    full-width
  >
    <pub-tab
      name="alpha"
      title="Alpha"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, odio
      repudiandae reprehenderit, modi perferendis recusandae rerum minus architecto pariatur consequatur veritatis
      facere excepturi officiis veniam distinctio. Accusamus sequi atque debitis.
    </pub-tab>
    <pub-tab
      name="bravo"
      title="Bravo"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus optio
      voluptatem, accusantium esse, aspernatur repellendus voluptas modi ipsam magnam laboriosam nemo quidem? Eos,
      obcaecati explicabo. Necessitatibus aperiam quos voluptatem harum.
    </pub-tab>
    <pub-tab
      name="charlie"
      title="Charlie"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsum
      pariatur iusto error ratione facere quam, natus quas ea distinctio porro ipsam dolorum quod deserunt nemo repellat
      perspiciatis! Aliquam, ad?
    </pub-tab>
    <pub-tab
      name="delta"
      title="Delta"
      disabled
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, harum qui voluptas placeat dolorem sint
      asperiores nemo et voluptatem commodi nesciunt impedit earum perferendis odit dicta, ipsum illo aliquam corporis.
    </pub-tab>
  </pub-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PubTab, PubTabs } from 'vuelicity'

const activeTab = ref('alpha')
</script>
