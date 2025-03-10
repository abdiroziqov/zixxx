<template>
  <footer
    class="bg-gray text-white pt-6 md:pt-10 border-[rgba(196,196,196,0.2)] border-t"
  >
    <div
      class="container justify-between grid md:flex gap-5 md:gap-10 pb-6 md:pb-10"
    >
      <div>
        <a href="/">
          <img src="/images/logo.svg" alt="logo" />
        </a>
        <p class="text-white font-normal leading-5 w-[235px]">
        {{ $t('footer_description') }}
        </p>

      </div>
  <div class="md:flex grid  gap-4 md:gap-8">
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
    <div>
      <h3 class="font-bold text-[20px] text-white inline-block pb-2">
        {{ $t('contact_us') }}
      </h3>
      <ul>
        <li
            v-for="(contact, index) in contactInfo"
            :key="'contact-' + index"
            class="mb-2"
        >
          <template v-if="contact.type === 'phone'">
          <div>

            <a :href="`tel:${contact.value}`" class="hover:text-orange text-[#efefef] duration-300 flex gap-2 items-center">
              <i class="icon-phone  text-2xl"/>
              {{ contact.value }}
            </a>
          </div>
          </template>
          <template v-else-if="contact.type === 'email'">
            <a :href="`mailto:${contact.value}`" class="hover:text-orange text-[#efefef] duration-300 flex gap-2 items-center">
              <i class="icon-letter text-2xl"/>
              {{ contact.value }}
            </a>
          </template>
          <template v-else>
            <a href="`https://www.google.com/maps/place/Navoiy+shoh+ko'chasi+3,+%D0%A2%D0%BEshkent,+Toshkent,+O%CA%BBzbekiston/@41.3188579,69.2497681,2589m/data=!3m1!1e3!4m6!3m5!1s0x38ae8b3e143157c9:0x171b726dc4662e3!8m2!3d41.3196532!4d69.2650979!16s%2Fg%2F11vjls0jjv?entry=ttu&g_ep=EgoyMDI1MDIyMy4xIKXMDSoASAFQAw%3D%3D`" class="hover:text-orange text-[#efefef] duration-300 flex gap-2 items-center">
              <i class="icon-location text-2xl"/>
              {{ contact.value }}
            </a>
          </template>
        </li>
      </ul>
    </div>
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
      <p>{{ $t('developed_and_designed_by') }} <a target="_blank" href="https://t.me/ilkhomab" class="font-bold text-base">Iceek</a></p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { t } = useI18n()
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
  facebook: 'https://www.facebook.com/zixx.uz/',
  telegram: 'https://t.me/tmc_uz',
}
const contactInfo = [
  { type: 'phone', value: '+99890 9350500' },
  { type: 'email', value: 'ZiXX@mail.com' },
  { type: 'address', value: t('location_footer') },
];
</script>

<style scoped></style>
