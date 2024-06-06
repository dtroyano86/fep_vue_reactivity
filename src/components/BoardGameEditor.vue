<script setup lang="ts">
import { useSideBarStore } from '@/stores/sidebar';
import { storeToRefs } from 'pinia';

const sidebarStore = useSideBarStore()
const { selected } = storeToRefs(sidebarStore)

</script>

<template>
  <div 
    v-if="selected"
    class="container p-3"
  >
    <figure class="image">
      <img
        :alt="`Image of ${selected.name}`"
        :src="selected.image"
      />
    </figure>

    <input
      class="input is-info mt-5"
      type="text"
      placeholder="Name"
      v-model="selected.name"
    />
    <input
      class="input is-info mt-5"
      type="text"
      placeholder="Image"
      v-model="selected.image"
    />
  </div>
</template>