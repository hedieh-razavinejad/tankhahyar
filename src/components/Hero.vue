<script setup>
import Icon from './Icon.vue'
</script>

<template>
  <section class="card-shadow relative overflow-hidden rounded-3xl border border-beige-500 bg-gradient-to-br from-navy-700 via-navy-900 to-navy-950 p-4 sm:p-10">
    <!-- دایره‌های تزئینی -->
    <div class="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full border-[28px] border-beige-300/10"></div>
    <div class="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-beige-300/10 blur-2xl"></div>
    <div class="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full border-[18px] border-beige-300/10"></div>

    <div class="relative flex flex-col-reverse items-center justify-between gap-6 sm:flex-row sm:gap-8">
      <!-- متن -->
      <div class="max-w-xl text-center sm:text-right">
        <span class="inline-flex items-center gap-2 rounded-full border border-beige-400 bg-navy-950/60 px-3 py-1 text-xs font-medium text-beige-300 sm:px-4">
          <span class="text-base"><Icon name="dash" /></span>
          داشبورد تنخواه‌یار
        </span>
        <h1 class="mt-3 text-2xl font-extrabold leading-tight text-beige-200 sm:mt-4 sm:text-4xl">سلام، هدیه رضوی‌نژاد</h1>
        <p class="mt-2 text-xs leading-6 text-beige-200/80 sm:mt-3 sm:text-base sm:leading-7">فاکتورهای تنخواه را ثبت کن، مصرف را از روی کارت دنبال کن و وضعیت پرداخت هر فاکتور را با یک لمس تغییر بده.</p>
        <a href="#receipt" class="btn-primary mt-5 px-5 py-2.5 text-sm sm:mt-6 sm:px-6 sm:py-3">
          <span class="text-xl"><Icon name="plus" /></span>
          ثبت فاکتور جدید
        </a>
      </div>

      <!-- آیکون کیف پول -->
      <div class="relative flex h-28 w-28 shrink-0 items-center justify-center sm:h-48 sm:w-48">
        <div class="absolute inset-0 rounded-full border-2 border-dashed border-beige-400/60"></div>
        <div class="absolute inset-3 rounded-full border border-beige-300/40 sm:inset-4"></div>
        <div class="icon-box glow h-20 w-20 rounded-3xl border border-beige-200 bg-gradient-to-br from-beige-200 to-beige-600 text-5xl sm:h-32 sm:w-32 sm:text-7xl">
          <Icon name="wallet" />
        </div>
      </div>
    </div>
  </section>
</template>
