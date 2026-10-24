<script setup>
import Icon from './Icon.vue'
import { useTankhah, fmt } from '../composables/useTankhah'
import { iconOf } from '../data/categories'

const { invoices, total } = useTankhah()
</script>

<template>
  <div class="card card-shadow p-4 sm:p-5">
    <!-- تیتر -->
    <div class="mb-4 flex flex-wrap items-center justify-between gap-2">
      <h2 class="card-title">
        <span class="text-2xl"><Icon name="receipt" /></span>
        فاکتورها
      </h2>
      <span class="rounded-full border border-beige-500 px-3 py-0.5 text-xs text-beige-200">{{ fmt(total) }}</span>
    </div>
    <div class="beige-line mb-4"></div>

    <!-- لیست فاکتورها -->
    <ul class="space-y-3">
      <li
        v-for="inv in invoices"
        :key="inv.id"
        class="flex flex-col gap-3 rounded-2xl border bg-navy-800/90 p-3 transition sm:flex-row sm:items-center sm:justify-between sm:p-4"
        :class="inv.paid ? 'border-jade-500' : 'border-beige-500'">

        <!-- آیکون، عنوان و توضیحات -->
        <div class="flex min-w-0 items-center gap-3">
          <div class="icon-box h-11 w-11 text-2xl" :class="inv.paid ? 'bg-jade-500' : 'grad-beige'">
            <Icon :name="inv.paid ? 'check' : 'receipt'" />
          </div>
          <div class="min-w-0">
            <p class="truncate font-bold">{{ inv.title }}</p>
            <p v-if="inv.note" class="mt-1 inline-flex items-center gap-1 rounded-full border border-beige-500/60 px-2 py-0.5 text-xs text-beige-200">
              <Icon :name="iconOf(inv.note)" />
              {{ inv.note }}
            </p>
          </div>
        </div>

        <!-- مبلغ و وضعیت پرداخت -->
        <div class="flex shrink-0 items-center justify-between gap-2 sm:flex-col sm:items-end">
          <span class="font-bold text-beige-300">{{ fmt(inv.amount) }}</span>
          <button type="button" @click="inv.paid = !inv.paid" class="flex items-center gap-2" :aria-pressed="inv.paid">
            <span class="text-xs" :class="inv.paid ? 'text-jade-400' : 'text-beige-200/80'">{{ inv.paid ? 'پرداخت‌شده' : 'در انتظار' }}</span>
            <span class="relative h-6 w-11 rounded-full border-2 transition" :class="inv.paid ? 'border-jade-400 bg-jade-500' : 'border-beige-400 bg-navy-950'">
              <span class="absolute top-0.5 h-4 w-4 rounded-full transition-all" :class="inv.paid ? 'right-0.5 bg-navy-950' : 'right-[1.35rem] bg-beige-400'"></span>
            </span>
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>
