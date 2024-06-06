<script setup lang="ts">
import { useSideBarStore } from '@/stores/sidebar';
import type { BoardGame } from '@/types/BoardGames.interface'

defineProps<{
  boardGame: BoardGame
}>()

const sidebarStore = useSideBarStore()
const { openSidebar } = sidebarStore

</script>

<template>
  <div 
    class="card board-game"
    @click="openSidebar(boardGame)"  
  >
    <div class="card-image">
      <figure class="image">
        <img
          :alt="`Image of ${boardGame.name}`"
          :src="boardGame.image"
        />
      </figure>
    </div>
    <div class="card-content">
      <p>
        {{ boardGame.name }}
      </p>
    </div>
  </div>
</template>

<style lang="sass">
.board-game
  width: 300px
  cursor: pointer
</style>