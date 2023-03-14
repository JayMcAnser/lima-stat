<template>
  <div >
    The current range is {{ range.date }}
  </div>
</template>

<script setup>
  import {useRangeSetter} from "~/stores/range-setter";
  import { watch } from 'vue'
  const range = useRangeSetter()
  watch(range, () => {
    console.log('DONE IT now')
  })
</script>

<style scoped>

</style>
