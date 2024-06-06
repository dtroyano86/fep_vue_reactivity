<script setup lang="ts">
// import CustomInput from '@/components/CustomInput.vue'
import { ref, computed } from 'vue'

const foo = ref<number>(0)
const bar = ref<number>(0)

const total = computed(() => {
  return foo.value + bar.value
})
</script>

<template>
  <div class="container pt-5">
    <p class="title is-4">
      Vue Reactivity
    </p>
    <div class="columns">
      <div class="column is-1">
        <input
          class="input"
          type="number"
          v-model="foo"
        />
      </div>
      <div class="column is-1">
        <input
          class="input"
          type="number"
          v-model="bar"
        />
        <!-- <custom-input
          v-model="bar"
        /> -->
      </div>
    </div>
    <div class="columns">
      <div class="column is-2">
        {{ foo }} + {{ bar }} = {{ total }}
      </div>
    </div>
  </div>
</template>