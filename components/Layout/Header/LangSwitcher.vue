<template>
  <base-dropdown :head-class="`sm:px-4 py-3 flex items-center gap-2 text-sm font-medium leading-130 font-normal transition-300 cursor-pointer${isTransparent || store?.isExistImage
    ? 'text-white border-white/10 hover:bg-white/10'
    : 'text-dark border-gray-3 hover:bg-gray-3'
    } ${headClass}`" :show="showDropdown"
    body-class="card-body !w-[200px] rounded-[16px]  border md:right-0 md:left-auto" @toggle="handleDropdownToggle">

    <template #head>
      <div class="flex items-center text-white">
        <svg class="hidden sm:block" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
          viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
            color="currentColor">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12c0 6 4 10 4 10s4-4 4-10s-4-10-4-10s-4 4-4 10m13 3H3m18-6H3" />
          </g>
        </svg>
        <span class="hidden sm:inline-block ml-2 mr-1 text-sm font-semibold leading-normal cursor-pointer">{{
          currentLanguage?.name }}</span>
        <span class="inline-block sm:hidden ml-2 mr-1 text-sm font-semibold leading-normal cursor-pointer">{{
          currentLanguage?.name.includes("'")
            ? currentLanguage?.name?.slice(0, 3)
            : currentLanguage?.name?.slice(0, 2)
        }}</span>
      </div>
    </template>
    <template #body>
      <div v-for="(lang, index) in languagesList" :key="index"

        class="w-full group bg-white dark:bg-dark hover:bg-gray-3 transition-300 duration-200 hover:!bg-red/[6%]"
        @click="changeLocale(lang?.code)">
        <div
          class="group flex items-center justify-between gap-4 py-2.5 px-4 cursor-pointer transition-300 border-b border-b-gray-300 group-last:border-b-0">
         <div class="flex items-center gap-4">
           <img
               v-if="lang?.flag"
               :src="lang.flag"
               alt="flag"
           />
           <span class="text-[15px] font-normal leading-normal text-dark dark:text-white group-hover:text-red transition-300">
            {{ lang.name }}
          </span>
         </div>
          <transition name="fade">
            <svg v-if="lang?.code === currentLanguage?.code" class="text-orange" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 15.15l8.475-8.475q.3-.3.7-.3t.7.3t.3.713t-.3.712l-9.175 9.2q-.3.3-.7.3t-.7-.3L4.55 13q-.3-.3-.288-.712t.313-.713t.713-.3t.712.3z"/></svg>
          </transition>
        </div>
      </div>
    </template>
  </base-dropdown>
</template>

<script lang="ts" setup>

interface Props {
  variant: 'default' | 'transparent'
  isTransparent?: boolean
  headClass?: any
}

defineProps<Props>()

const { setLocale } = useI18n()
const { changeLocale, currentLanguage, languagesList } = useLanguageSwitcher()

const showDropdown = ref(false)

function handleDropdownToggle(val: boolean) {
  showDropdown.value = val
}

onMounted(async () => {
  if (useCookie('locale').value) {
    await setLocale(useCookie('locale').value || 'en')
  }
})
</script>

<style scoped>
.card-body {
  border-radius: 16px !important;
  box-shadow: 0 3.459px 2.214px 0 rgba(0, 0, 0, 0.01),
    0 8.313px 5.32px 0 rgba(0, 0, 0, 0.01),
    0 15.652px 10.017px 0 rgba(0, 0, 0, 0.01),
    0 27.92px 17.869px 0 rgba(0, 0, 0, 0.02),
    0 52.222px 33.422px 0 rgba(0, 0, 0, 0.02),
    0 125px 80px 0 rgba(0, 0, 0, 0.03), 0 1px 40.6px 0 rgba(131, 131, 131, 0.11);
}
</style>
