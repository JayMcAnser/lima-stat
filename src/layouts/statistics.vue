<template>
  <div class="text-gray-700 dark:text-gray-200 bg-gray-100">
    <div class="flex flex-col">
      <VSidebar />
    </div>
    <main
        class="flex-col flex flex-grow m-5 pl-72 pt-16 pb-20 main-content text-slate-600 dark:text-slate-50 dark:bg-primary-800"
    >
      <RouterView />

      <div class="fixed bottom-2 right-2 rtl:right-auto rtl:left-2">
        <VBtn tag="a" href="#top" icon="i-carbon-chevron-up" variant="secondary" aria-label="Go to top" />
      </div>
    </main>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>
