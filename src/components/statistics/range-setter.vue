<script setup>
  import { ref } from 'vue'
  import {useRangeSetter} from "~/stores/range-setter";
  const rangeSetter = useRangeSetter()

</script>

<template>
  <div class="w-full p-4">
    <div class="flex flex-col">
      <div class="mb-3 xl:w-96">
        <select data-te-select-init v-model="rangeSetter.period">
          <option value="week">Week</option>
          <option value="month">Month</option>
          <option value="quarter">Quaqrter</option>
          <option value="year">Year</option>
        </select>
      </div>
    </div>

    <input type="text"  v-model="rangeSetter.date">
    {{ rangeSetter.period}}
  </div>

</template>



<style scoped>

</style>
