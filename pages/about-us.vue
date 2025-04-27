<template>
 <main class="md:pb-10 pb-10">
 <div class="main__about py-10">
   <div class="container ">
     <div class="md:w-[640px]">
       <h3 class="text-3xl leading-130">{{ $t('company_razata') }}</h3>
       <p class="text-base md:text-lg mt-6"> {{ $t('company_rzata_text') }}</p>
     </div>
   </div>
 </div>
   <div class="container my-4">
     <CommonFaq clas="py-6" :faq="faq" />
   </div>
 </main>
</template>



<script setup lang="ts">
const faq = [
  {
    id: 1,
    question: 'What is the difference between the two types of registration?',
    answer:
        'There are two types of registration: free and paid. The free registration is for those who want to register for the event without paying any fees. The paid registration is for those who want to register for the event and pay a fee for it.',
  },
  {
    id: 2,
    question: 'What is the deadline for registration?',
    answer:
        'The registration deadline is the date when the registration period ends. The registration period is the period during which you can register for the event.',
  },
]
</script>

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