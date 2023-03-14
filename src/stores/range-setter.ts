import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue';

export const useRangeSetter = defineStore('rangeSetter', () => {
  const date = ref('')
  const period = ref('month')  // hour,day,week,month,year
  return {
    date,
    period
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useRangeSetter, import.meta.hot))
