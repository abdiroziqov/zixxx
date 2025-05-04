<script lang="ts" setup>
const props = defineProps<{
  iconClass?: string
  bgClass?: string
  socials: {
    instagram?: string
    youtube?: string
    telegram?: string
    facebook?: string
    pinterest?: string
    linkedin?: string
  }
}>()

const socials = computed(() => [
  {
    social: 'insta',
    link: props.socials?.instagram ?? '',
  },
  {
    social: 'Telegram',
    link: props.socials?.telegram ?? '',
  },
  {
    social: 'Linkedin',
    link: props.socials?.linkedin ?? '',
  },
  {
    social: 'Facebook',
    link: props.socials?.facebook ?? '',
  },
  {
    social: 'Pinterest',
    link: props.socials?.pinterest ?? '',
  },
])
</script>

<template>
  <div class="flex-y-center gap-3 md:gap-4">
    <ul class="flex gap-4">
      you tube
      bio link
      whatsapp
      <template v-for="i in socials" :key="i.social">
        <li
          v-if="i?.link"
          :data-key="i.social"
          :class="[bgClass]"
          class="icon_class"
        >
          <CommonSocialLink :social="i" :icon-class="iconClass" />
        </li>
      </template>
    </ul>
  </div>
</template>

<style scoped>
.icon_class ul li:first-child {
  font-size: 30px;
}
</style>
