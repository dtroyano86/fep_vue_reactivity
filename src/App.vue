<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import meUrl from './assets/me.png'

</script>

<template>
  <div class="container is-fluid has-background-primary p-3">
    <div class="columns">
      <div class="column is-1">
        <figure class="image is-32x32">
          <img
            class="is-rounded" 
            :src="meUrl"
            />
        </figure>
      </div>
      <div class="column is-flex gap-s">
        <RouterLink :to="{ name: 'home' }" class="button mr-2">
          Home
        </RouterLink>
        <RouterLink :to="{ name: 'react' }" class="button mr-2">
          Reactivity
        </RouterLink>
        <RouterLink :to="{ name: 'custom' }" class="button">
          Rebuild
        </RouterLink>
      </div>
    </div>
  </div>
  <RouterView />
</template>
