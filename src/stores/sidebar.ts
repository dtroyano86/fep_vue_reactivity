import { ref, unref } from 'vue'
import { defineStore } from 'pinia'
import type { BoardGame } from '@/types/BoardGames.interface'

export const useSideBarStore = defineStore('sidebar', () => {
  const open = ref<boolean>(false)

  const selected = ref<BoardGame | null>()

  const openSidebar = (game: BoardGame) => {
    const s = unref(selected)
    if (s && s.id === game.id) closeSidebar()
    else {
      open.value = true
      selected.value = game 
    }
  }

  const closeSidebar = () => {
    open.value = false
    setTimeout(() => {
      if (!open.value) selected.value = null
    }, 1000)
  }

  return { 
    open,
    selected,
    openSidebar,
    closeSidebar
   }
})
