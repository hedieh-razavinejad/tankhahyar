<script setup>
import { ref } from 'vue'
import Icon from './components/Icon.vue'
import SvgSprite from './components/SvgSprite.vue'
import AppSidebar from './components/AppSidebar.vue'
import Hero from './components/Hero.vue'
import StatCards from './components/StatCards.vue'
import BankCard from './components/BankCard.vue'
import ReceiptForm from './components/ReceiptForm.vue'
import InvoiceList from './components/InvoiceList.vue'

// در دسکتاپ منو باز است، در موبایل بسته
const open = ref(window.innerWidth >= 1024)
</script>

<template>
  <SvgSprite />

  <div class="relative min-h-screen overflow-x-hidden">
    <!-- پس‌زمینه -->
    <div class="fixed inset-0 -z-10 overflow-hidden bg-navy-950">
      <div class="absolute -top-32 -right-24 h-72 w-72 rounded-full bg-beige-500/60 sm:h-[26rem] sm:w-[26rem]"></div>
      <div class="absolute top-1/3 -left-40 h-80 w-80 rounded-full bg-navy-700 sm:h-[30rem] sm:w-[30rem]"></div>
      <div class="absolute -bottom-40 right-1/4 h-72 w-72 rounded-full bg-beige-600/40 sm:h-[26rem] sm:w-[26rem]"></div>
      <div class="absolute inset-0 bg-navy-950/40 backdrop-blur-3xl"></div>
    </div>

    <AppSidebar :open="open" @close="open = false" />

    <div class="transition-all duration-300" :class="open ? 'lg:mr-72' : 'lg:mr-0'">
      <!-- هدر -->
      <header class="sticky top-0 z-20 flex items-center justify-between border-b border-beige-500 bg-navy-950/70 px-4 py-3 backdrop-blur-xl sm:px-5">
        <button type="button" @click="open = !open" class="btn-primary p-2 text-2xl" aria-label="منو">
          <Icon name="menu" />
        </button>
        <div class="flex items-center gap-2 text-base font-bold text-beige-300 sm:text-lg">
          <span class="text-2xl"><Icon name="dash" /></span>
          داشبورد
        </div>
      </header>

      <main @click="open = false" class="mx-auto max-w-6xl space-y-6 p-3 sm:space-y-8 sm:p-5 lg:p-8">
        <Hero />

        <div class="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <section id="receipt" class="flex scroll-mt-24 flex-col items-center">
            <BankCard />
            <ReceiptForm />
          </section>
          <section class="space-y-5 sm:space-y-6">
            <StatCards />
            <InvoiceList />
          </section>
        </div>
      </main>
    </div>
  </div>
</template>
