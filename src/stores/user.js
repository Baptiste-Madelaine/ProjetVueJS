import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    const id = ref("");
    const name = ref("");
    function isLogged() {
      if(id.value != ""){
        return true;
      }
      return false
    }
  
    return { id, name, isLogged }
})  