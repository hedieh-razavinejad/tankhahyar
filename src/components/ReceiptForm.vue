<script setup>
import { ref } from 'vue'
import Icon from './Icon.vue'
import { useTankhah, useForm, toNum, fmt } from '../composables/useTankhah'
import { categories, iconOf } from '../data/categories'

const { invoices, addInvoice } = useTankhah()
const { form, reset } = useForm()

// با عوض شدن این عدد، فرم دوباره ساخته می‌شود و انیمیشن رسید تکرار می‌شود
const printKey = ref(0)

// خط‌های بارکد پایین رسید
const bars = Array.from({ length: 48 }, (_, i) => [1, 2, 1, 3, 1, 2, 4, 1][i % 8])

// باز و بسته بودن منوی توضیحات
const openSelect = ref(false)

// فقط عدد (فارسی، عربی یا انگلیسی) در مبلغ قبول می‌شود
const onlyDigits = e => {
  form.amount = e.target.value.replace(/[^0-9۰-۹٠-٩]/g, '')
  e.target.value = form.amount
}

// انتخاب یک گزینه از منوی توضیحات و بستن منو
const chooseNote = label => {
  form.note = label
  openSelect.value = false
}

const submit = () => {
  addInvoice(form)
  reset()
  openSelect.value = false
  printKey.value++
}
</script>

<template>
  <form
    :key="printKey"
    @submit.prevent="submit"
    class="feed relative z-0 -mt-2 w-[90%] max-w-sm bg-zinc-50 px-4 pt-8 text-navy-900 shadow-2xl sm:w-[82%] sm:px-6"
    style="font-family: ui-monospace, Menlo, monospace">

    <!-- بالای رسید -->
    <div class="icon-box mx-auto h-14 w-14 border border-beige-500 bg-navy-900 text-3xl text-beige-300">
      <Icon name="wallet" />
    </div>
    <p class="mt-3 text-center font-sans text-sm font-bold">ثبت فاکتور تنخواه</p>

    <div class="my-5 border-t-2 border-dashed border-zinc-300"></div>

    <!-- عنوان فاکتور -->
    <label class="field-label">
      <span class="text-base text-beige-600"><Icon name="file" /></span>
      عنوان فاکتور
    </label>
    <input v-model="form.title" required placeholder="مثلاً خرید لوازم اداری" class="field-input font-sans" />

    <!-- مبلغ -->
    <label class="field-label mt-4">
      <span class="text-base text-beige-600"><Icon name="banknote" /></span>
      مبلغ (تومان)
    </label>
    <input :value="form.amount" @input="onlyDigits" required inputmode="numeric" placeholder="۰" class="field-input text-lg font-bold" />

    <!-- توضیحات (سلکتور) -->
    <label class="field-label mt-4">
      <span class="text-base text-beige-600"><Icon name="pencil" /></span>
      توضیحات
      <span class="text-zinc-400">(اختیاری)</span>
    </label>
    <div class="relative">
      <button type="button" class="select-btn" :class="{ 'border-navy-900': openSelect }" @click="openSelect = !openSelect" :aria-expanded="openSelect">
        <span class="flex items-center gap-2" :class="form.note ? 'font-bold' : 'text-zinc-400'">
          <span class="text-base text-beige-600"><Icon :name="iconOf(form.note)" /></span>
          {{ form.note || 'انتخاب کنید' }}
        </span>
        <span class="text-base text-zinc-500 transition" :class="{ 'rotate-180': openSelect }"><Icon name="chevron" /></span>
      </button>

      <ul v-show="openSelect" class="select-list">
        <li>
          <button type="button" class="select-item text-zinc-400" @click="chooseNote('')">بدون توضیحات</button>
        </li>
        <li v-for="item in categories" :key="item.label">
          <button type="button" class="select-item" :class="{ 'bg-beige-300 font-bold': form.note === item.label }" @click="chooseNote(item.label)">
            <span class="text-base text-beige-600"><Icon :name="item.icon" /></span>
            {{ item.label }}
          </button>
        </li>
      </ul>
    </div>

    <div class="my-5 border-t-2 border-dashed border-zinc-300"></div>

    <!-- جمع کل -->
    <div class="flex items-center justify-between gap-2">
      <span class="font-sans text-sm font-bold">جمع کل</span>
      <span class="text-lg font-bold sm:text-xl">{{ fmt(toNum(form.amount)) }}</span>
    </div>

    <button type="submit" class="btn-primary mt-5 w-full py-3 font-sans text-sm">
      <span class="text-xl"><Icon name="plus" /></span>
      ثبت فاکتور
    </button>

    <!-- بارکد -->
    <div class="mt-6 flex h-12 items-stretch justify-center gap-[2px]">
      <span v-for="(w, i) in bars" :key="i" class="bg-navy-900" :style="{ width: w + 'px' }"></span>
    </div>
    <p class="mb-6 mt-1 text-center text-[10px] tracking-widest text-zinc-400">ORD {{ invoices.length + 2048 }}</p>
    <div class="zigzag -mx-4 sm:-mx-6"></div>
  </form>
</template>
