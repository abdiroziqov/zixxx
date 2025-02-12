<template>
  <footer
    class="bg-gray text-white pt-6 md:pt-10 border-[rgba(196,196,196,0.2)] border-t"
  >
    <div
      class="container mx-auto flex gap-10 pb-6 md:pb-10"
    >
      <div>
        <NuxtLink to="/">
          <img src="/images/logo.svg" alt="logo" />
        </NuxtLink>
        <p class="text-white font-normal leading-5 w-[235px]">
        {{ $t('footer_description') }}
        </p>

      </div>
      <div>
        <p class="text-xl font-semibold font-white mb-3">{{ $t('social_media')}}</p>
        <CommonSocials :socials="socialsData" />
      </div>

      <div>
        <h3 class="font-bold text-[20px] text-white inline-block pb-2">
          {{ $t('quick_links') }}
        </h3>
        <ul>
          <li
            v-for="(link, index) in quickLinks"
            :key="'quick-' + index"
            class="mb-2"
          >
            <NuxtLink
              :to="link?.links"
              class="hover:text-orange text-[#efefef] duration-300"
              >{{ link?.name }}</NuxtLink
            >
          </li>
        </ul>
      </div>

    </div>
    <div
      class="container space-x-2 flex justify-center border-[rgba(196,196,196,0.2)] border-t py-4 text-sm"
    >
      <p>
        © {{ currentYear }} <span class="font-bold">Zixxx</span> All
        rights reserved.
      </p>
      <span class="hidden md:block">|</span>
      <p>{{ $t('developed_and_designed_by') }} <span>Iceek</span></p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
const quickLinks = [
  {
    name: 'Home',
    links: '/',
  },
  {
    name: 'Products',
    links: '/products',
  },
  {
    name: 'About Us',
    links: '/about-us',
  },
  {
    name: 'Contact',
    links: '/contact',
  },
]

const socialsData = {
  instagram: 'https://www.instagram.com/tmc.uz/',
  facebook: 'https://www.facebook.com/tmc.uz/',
  telegram: 'https://t.me/tmc_uz',
  pinterest: 'https://www.pinterest.com/tmc.uz/',
}
</script>

<style scoped></style>
