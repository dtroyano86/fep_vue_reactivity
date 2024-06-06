<script setup lang="js">
import { ref, effect } from '@/reactivity/customReactivity'
import { ref as realRef } from 'vue'

const foo = ref(0)
const bar = ref(0)

const total = ref(0)
const i = realRef(0)
effect(() => {
  total.value = foo.value + bar.value
  i.value = i.value + 1
})
</script>

<template>
  <div 
    :key="`trigger_${i}`"
    class="container pt-5"
  >
    <p class="title is-4">
      Custom Reactivity
    </p>
    <div class="columns">
      <div class="column is-1">
        <input
          class="input"
          type="number"
          v-model="foo.value"
        />
      </div>
      <div class="column is-1">
        <input
          class="input"
          type="number"
          v-model="bar.value"
        />
      </div>
    </div>
    <div class="columns">
      <div class="column is-2">
        {{ foo.value }} + {{ bar.value }} = {{ total.value }}
      </div>
    </div>
  </div>
</template>