<template>
  <span>
    <a
      :class="`${iconClass || ''} icon-${social?.social?.toLowerCase()} shrink-0 text-2xl text-dark dark:text-white leading-6 transition-300 w-9 h-9 rounded-lg  flex justify-center items-center hover:!text-orange-700 transition-300`"
      :href="social.link"
      :aria-label="`${social.social} link`"
      target="_blank"
    >
    </a>
  </span>
</template>

<script setup lang="ts">
interface Props {
  iconClass?: string
  social: {
    social: string
    link: string
  }
}

defineProps<Props>()
</script>
