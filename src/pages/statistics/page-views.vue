<template>
  <range-setter />
  <stat-info />
</template>


<route lang="yaml">
meta:
  layout: statistics
</route>

<script setup lang="ts">
import RangeSetter from "~/components/statistics/range-setter.vue";
import StatInfo from "~/components/statistics/stat-info.vue";
</script>
