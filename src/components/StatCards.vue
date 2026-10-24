<script setup>
import { computed } from 'vue'
import Icon from './Icon.vue'
import { useTankhah, fmt, fa } from '../composables/useTankhah'

const { invoices, paidCount, pendingCount, balance } = useTankhah()

// چهار کارت آمار (با v-for نمایش داده می‌شوند)
const stats = computed(() => [
  {
    label: 'موجودی',
    value: fmt(balance.value),
    icon: 'coins',
    box: 'grad-beige',
    color: balance.value < 0 ? 'text-rose-400' : 'text-beige-300'
  },
  {
    label: 'تعداد فاکتورهای ثبت‌شده',
    value: fa(invoices.value.length),
    icon: 'receipt',
    box: 'grad-beige',
    color: 'text-white'
  },
  {
    label: 'پرداخت‌شده',
    value: fa(paidCount.value),
    icon: 'check',
    box: 'bg-jade-500',
    color: 'text-jade-400'
  },
  {
    label: 'در انتظار',
    value: fa(pendingCount.value),
    icon: 'clock',
    box: 'bg-beige-400',
    color: 'text-beige-300'
  }
])
</script>

<template>
  <div class="card p-3 sm:p-4">
    <h2 class="card-title mb-3 px-1">
      <span class="text-2xl"><Icon name="chart" /></span>
      خلاصه وضعیت
    </h2>

    <div class="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-beige-500/50 bg-beige-500/50 sm:grid-cols-4">
      <div v-for="item in stats" :key="item.label" class="min-w-0 bg-navy-900 p-3 sm:p-4">
        <div class="icon-box h-9 w-9 text-xl sm:h-10 sm:w-10 sm:text-2xl" :class="item.box">
          <Icon :name="item.icon" />
        </div>
        <p class="mt-2 text-xs text-beige-200/80">{{ item.label }}</p>
        <p class="break-words text-xs font-bold sm:text-sm" :class="item.color">{{ item.value }}</p>
      </div>
    </div>
  </div>
</template>
