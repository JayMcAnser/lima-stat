/**
 * store to retrieve the statistic information from the API
 *
 * version 1.0 @jay 2023-03-16
 */

import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue';

export const useStatistics = defineStore('statistics', () => {
  const date = ref('')
  const period = ref('month')  // hour,day,week,month,year
  return {
    date,
    period
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useStatistics, import.meta.hot))
