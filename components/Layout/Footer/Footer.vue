<template>
  <footer
    class="bg-white dark:bg-gray  dark:text-white text-dark pt-6 md:pt-10 border-[rgba(196,196,196,0.2)] border-t">
    <div class="container justify-between grid md:flex gap-5 md:gap-10 pb-6 md:pb-10">
      <div>
        <a href="/">
          <img class="hidden dark:block" src="/logo.svg" alt="logo" />
          <img class="dark:hidden" src="/logo1.svg" alt="logo" />

        </a>
        <p class="dark:text-white text-dark font-normal leading-140 w-[209px]">
          {{ $t('footer_description') }}
        </p>

      </div>
      <div class="md:flex grid  gap-4 md:gap-8">
        <div>
          <p class="text-xl font-semibold font-white mb-3">{{ $t('social_media') }}</p>
          <CommonSocials :socials="socialsData" />
        </div>

        <div>
          <h3 class="font-bold text-[20px] dark:text-white  text-dark inline-block pb-2">
            {{ $t('quick_links') }}
          </h3>
          <ul>
            <li v-for="(link, index) in quickLinks" :key="'quick-' + index" class="mb-2">
              <NuxtLink :to="link?.links"
                class="hover:text-orange dark:text-[#efefef] text-dark duration-300 tracking-[0.2px] opacity-80">{{
                link?.name }}</NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="font-bold text-[20px] dark:text-white text-dark inline-block pb-2">
            {{ $t('contact_us') }}
          </h3>
          <ul>
            <li v-for="(contact, index) in contactInfo" :key="'contact-' + index" class="mb-2">
              <template v-if="contact.type === 'phone'">
                <div>

                  <a :href="`tel:${contact.value}`"
                    class="hover:!text-orange dark:text-[#efefef] text-dark duration-300 flex gap-2 items-center">
                    <i class="icon-phone text-2xl" />
                    {{ contact.value }}
                  </a>
                </div>
              </template>
              <template v-else-if="contact.type === 'email'">
                <a :href="`mailto:${contact.value}`"
                  class="hover:!text-orange dark:text-[#efefef] text-dark duration-300 flex gap-2 items-center">
                  <i class="icon-letter text-2xl" />
                  {{ contact.value }}
                </a>
              </template>
              <template v-else>
                <a target="_blank" href="https://yandex.uz/maps/geo/5403718816/?ll=69.265099%2C41.319533&z=19.86"
                  class="hover:!text-orange dark:text-[#efefef] text-dark duration-300 flex gap-2 items-center">
                  <i class="icon-location text-2xl" />
                  {{ contact.value }}
                </a>
              </template>
            </li>
          </ul>
        </div>
      </div>

    </div>
    <div
      class="container space-x-2 flex justify-center border-[rgba(196,196,196,0.2)] border-t py-4 text-sm items-center">
      <p>
        © {{ currentYear }} <span class="font-bold">{{ $t('OOO') }} "RAZATA" </span> {{ $t('all_rights_reserved') }}
      </p>
      <span class="hidden md:block">|</span>
      <p>{{ $t('developed_and_designed_by') }} <a target="_blank" href="https://t.me/ilkhomab"
          class="font-bold text-base">Iceek</a></p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { t } = useI18n()
const currentYear = new Date().getFullYear()
const quickLinks = [
  {
    name: t('home'),
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
  instagram: 'https://www.instagram.com/zixx.uz/',
  facebook: 'https://www.facebook.com/zixx.uz/',
  telegram: 'https://t.me/gips_mel',
  whatsapp: 'https://wa.me/998977079345',
  youtube: 'https://www.youtube.com/@zixx.uzbekistan',
  link: 'http://bio.link/zixx'
}
const contactInfo = [
  { type: 'phone', value: '+998 90-935-05-00' },
  { type: 'email', value: 'zixxuzbekistan@gmail.com' },
  { type: 'address', value: t('location_footer') },
];
</script>

<style scoped></style>
