<script setup>
import Icon from './Icon.vue'
import { useTankhah, fmt, fa } from '../composables/useTankhah'

const { initial, balance, pct, setInitial } = useTankhah()
</script>

<template>
  <div class="relative z-10 w-full max-w-lg">
    <div class="relative flex min-h-[17rem] flex-col justify-between gap-3 overflow-hidden rounded-3xl border-2 border-white bg-gradient-to-br from-navy-700 via-navy-900 to-navy-950 p-4 shadow-[0_24px_50px_-10px_rgba(0,0,0,.8)] ring-1 ring-beige-500 sm:aspect-[1.586/1] sm:gap-4 sm:p-6">
      <div class="shine pointer-events-none absolute inset-0"></div>

      <!-- چیپ و نام -->
      <div class="relative flex items-start justify-between">
        <div class="grid h-8 w-11 grid-cols-2 gap-px overflow-hidden rounded-lg border border-beige-300 bg-beige-600 sm:h-9 sm:w-12">
          <span class="bg-gradient-to-br from-beige-200 to-beige-500"></span>
          <span class="bg-gradient-to-br from-beige-300 to-beige-600"></span>
          <span class="bg-gradient-to-br from-beige-300 to-beige-600"></span>
          <span class="bg-gradient-to-br from-beige-200 to-beige-500"></span>
        </div>
        <span class="flex items-center gap-2 text-base font-bold text-beige-300 sm:text-lg">
          <span class="text-2xl sm:text-3xl"><Icon name="wallet" /></span>
          تنخواه‌یار
        </span>
      </div>

      <!-- خط‌های کارت -->
      <div class="relative space-y-2 py-2 sm:py-3">
        <div v-for="n in 3" :key="n" class="h-1 w-full rounded-full bg-beige-400"></div>
      </div>

      <!-- موجودی و مبلغ اولیه -->
      <div class="relative grid grid-cols-2 gap-3 sm:gap-4">
        <div class="min-w-0">
          <p class="flex items-center gap-1 text-xs text-beige-200/80">
            <Icon name="coins" />
            موجودی
          </p>
          <p class="mt-1 text-sm font-bold min-[420px]:text-lg sm:text-xl" :class="balance < 0 ? 'text-rose-400' : 'text-beige-300'">{{ fmt(balance) }}</p>
        </div>
        <div class="min-w-0">
          <p class="flex items-center gap-1 text-xs text-beige-200/80">
            <Icon name="bank" />
            مبلغ اولیه
          </p>
          <input
            :value="fa(initial)"
            @change="setInitial($event.target.value)"
            inputmode="numeric"
            class="mt-1 w-full border-b-2 border-dashed border-beige-500/70 bg-transparent text-sm font-bold text-white outline-none transition focus:border-beige-300 min-[420px]:text-lg sm:text-xl">
        </div>
      </div>

      <!-- نوار درصد مصرف -->
      <div class="relative">
        <div class="mb-1.5 flex items-center justify-between text-xs">
          <span class="flex items-center gap-1 text-beige-200/80">
            <Icon name="gauge" />
            درصد مصرف
          </span>
          <span class="font-bold" :class="pct >= 90 ? 'text-rose-400' : 'text-beige-300'">{{ fa(Math.round(pct)) }}٪</span>
        </div>
        <div class="h-3 w-full overflow-hidden rounded-full border border-beige-500/70 bg-navy-950">
          <div class="h-full rounded-full transition-all duration-700" :class="pct >= 90 ? 'bg-gradient-to-l from-rose-400 to-rose-600' : 'bg-gradient-to-l from-beige-200 to-beige-500'" :style="{ width: Math.min(pct, 100) + '%' }"></div>
        </div>
        <div class="mt-1 flex justify-between text-[10px] text-beige-200/50">
          <span>۰٪</span>
          <span>۵۰٪</span>
          <span>۱۰۰٪</span>
        </div>
      </div>

      <div class="relative flex items-end justify-between">
        <span class="text-xs text-beige-200/80">هدیه رضوی‌نژاد</span>
        <span dir="ltr" class="font-mono text-sm font-bold tracking-widest text-white">CVV2</span>
      </div>
    </div>

    <!-- شکاف کارت -->
    <div class="slot relative z-20 mx-auto -mt-3 h-3 w-[88%] rounded-b-full bg-black"></div>
  </div>
</template>
