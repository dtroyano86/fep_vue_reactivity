<script setup lang="ts">
const model = defineModel()

</script>

<template>
  <input
    class="input"
    type="number"
    v-model="model"
  />
</template>