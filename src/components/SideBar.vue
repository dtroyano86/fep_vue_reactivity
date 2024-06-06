<script setup lang="ts">
import { useSideBarStore } from '@/stores/sidebar';
import { storeToRefs } from 'pinia';

const sidebarStore = useSideBarStore()
const { open } = storeToRefs(sidebarStore)

</script>

<template>
  <div
    class="sidebar"
    :class="{ open }"
    >
    <slot></slot>
  </div>
</template>

<style lang="sass">
.sidebar
  position: fixed
  z-index: 100
  top: 56px
  left: -400px
  height: 100%
  background-color: grey
  width: 400px
  transition: left 1s ease-in-out
  &.open
    left: 0px

</style>