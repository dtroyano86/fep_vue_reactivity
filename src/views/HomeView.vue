<script setup lang="ts">
import { reactive } from 'vue'
import type { BoardGame } from '@/types/BoardGames.interface'
import BoardGameComponent from '@/components/BoardGame.vue'
import SideBar from '@/components/SideBar.vue'
import BoardGameEditor from '@/components/BoardGameEditor.vue'

const boardGames = reactive<BoardGame[]>([
  { id: 1, name: 'Wingspan', image: 'https://pandagm.com/wp-content/uploads/2023/02/Wingspan-e1677688211581.jpg' },
  { id: 2, name: 'Blood on the Clocktower', image: 'https://pandagm.com/wp-content/uploads/2023/03/20220921_DSC0354-BotC-Box.jpg'},
  { id: 3, name: 'Pandemic Legacy Season One', image: 'https://pandagm.com/wp-content/uploads/2023/02/PandemicLegacy-S1.jpg' },
  { id: 4, name: 'Root', image: 'https://pandagm.com/wp-content/uploads/2023/02/Root-e1677688253369.jpg' },
  { id: 5, name: 'Mechs VS Minions', image: 'https://pandagm.com/wp-content/uploads/2023/02/MechsVsMinions-e1677688594860.jpg' },
  { id: 6, name: 'Gloomhaven', image: 'https://pandagm.com/wp-content/uploads/2023/02/Gloomhaven-e1677688078284.jpg' }
])

</script>

<template>
  <div class="container">
    <side-bar>
      <board-game-editor />
    </side-bar>
    <div class="game-container p-5">
      <board-game-component
        v-for="bg of boardGames"
        :key="`bg_${bg.id}`"
        :board-game="bg"
      />
    </div>
  </div>
</template>

<style lang="sass">
.game-container
  display: flex
  gap: 20px
  flex-wrap: wrap
</style>