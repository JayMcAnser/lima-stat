<script setup lang="ts">
import useEventsBus from '~/composables/core/eventBus'

const { t } = useI18n()

const sidebarCollapsed = ref(false)
const { bus } = useEventsBus()

watch(
    () => bus.value.get('sidebarCollapsed'),
    (val) => {
      const [sidebarCollapsedBus] = val ?? []
      sidebarCollapsed.value = sidebarCollapsedBus
    },
)


const currentIndex = ref(-1)
function setCurrentIndex(index: number) {
  currentIndex.value = index === currentIndex.value ? -1 : index
  sidebarCollapsed.value = false
}

const route = useRoute()
onMounted(() => {
  const path = route.path
  setCurrentIndex(sidebarItems.value.findIndex(item => path.startsWith(item.path)))
})

const sidebarItems = computed(() => [
  {
    id: 1,
    header: 'Statistics',
    label: 'Page views',
    url: 'http://test.url'
  },
  {
    id: 2,
    label: 'Search words',
    url: 'http://example.com'
  }

//   {
//     title: t('sidebar.statistics'),
// //    icon: 'i-carbon-home',
// //    path: '/statistics/index',
//     children: [
//       {
//         title: t('statistics.count'),
//         icon: 'i-carbon-dashboard',
//         path: '/statistics/page-views',
//       },
//     ],
//   }
  ])
</script>

<template>
  <section
      class="absolute top-0 left-0 h-full w-60 ">
    <!-- Sidenav -->
    <nav
        id="sidenav-8"
        class="absolute top-0 left-0 z-[1035] h-full w-60 -translate-x-full overflow-auto bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800"
        data-te-sidenav-init
        data-te-sidenav-hidden="false"
        data-te-sidenav-position="absolute"
        data-te-sidenav-accordion="true">
      <a
          class="mb-3 flex items-center justify-center border-b-2 border-solid border-gray-100 py-6 outline-none"
          href="#!"
          data-te-ripple-init
          data-te-ripple-color="primary">
        <img
            id="te-logo"
            class="mr-2 w-8"
            src="https://tailwind-elements.com/img/logo.png"
            alt="TE Logo"
            draggable="false" />
        <span>WatsNext</span>
      </a>

      <ul
          class="relative m-0 list-none px-[0.2rem] pb-12"
          data-te-sidenav-menu-ref>
        <li class="relative" v-for="item in sidebarItems" :key="item.id">

        <span v-if="item.header"
            class="py-4 px-6 text-[0.6rem] font-bold uppercase text-gray-600 dark:text-gray-400"
        >{{item.header}}</span
        >
          <a
              class="flex cursor-pointer items-center truncate rounded-[5px] py-[0.45rem] px-6 text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
              data-te-sidenav-link-ref
              :href="item.url"
          >
          <span
              class="mr-4 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-5 w-5">
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </span>
            <span>{{item.label}}</span>
          </a>
        </li>
      </ul>
    </nav>
    <!-- Sidenav -->

    <!-- Toggler
    <button
        class="mt-10 inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
        data-te-sidenav-toggle-ref
        data-te-target="#sidenav-8"
        aria-controls="#sidenav-8"
        aria-haspopup="true">
    <span class="block [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-white">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-5 w-5">
        <path
            fill-rule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clip-rule="evenodd" />
      </svg>
    </span>
    </button>
   Toggler -->
  </section>
</template>



<style scoped>

</style>
