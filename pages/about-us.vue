<template>
 <main class="main__about">
   <div class="container md:py-20 py-10">
   <div class="md:w-[640px]">
     <h3 class="text-3xl leading-130">{{ $t('company_razata') }}</h3>
     <p class="text-base md:text-lg mt-6"> {{ $t('company_rzata_text') }}</p>
   </div>
   </div>
 </main>
</template>


<style>
.main__about {
  background-image: url('/public/images/about.png');
  background-size: cover;
  background-repeat: no-repeat;
}

@media (max-width: 768px) {
  .main__about {
    background-image: none;
  }
}
</style>
<script setup lang="ts">
</script>