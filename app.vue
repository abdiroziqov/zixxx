<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import {useTheme} from "~/store/useTheme";


const storeTheme = useTheme()

storeTheme.initTheme()
</script>
