<script setup>
  import { ref } from 'vue'
  import {useRangeSetter} from "~/stores/range-setter";
  const rangeSetter = useRangeSetter()

</script>

<template>
  <div class="w-full bg-amber-100 p-4">
    this is the range setter {{ rangeSetter.date }}
    <input type="text"  v-model="rangeSetter.date">
  </div>

</template>



<style scoped>

</style>
