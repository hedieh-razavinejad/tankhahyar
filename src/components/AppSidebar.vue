<script setup>
import Icon from './Icon.vue'
import DisabledLink from './DisabledLink.vue'

defineProps({ open: Boolean })
const emit = defineEmits(['close'])

const links = [
  { label: 'تنخواه', icon: 'wallet' },
  { label: 'فاکتورها', icon: 'receipt' },
  { label: 'گزارش‌ها', icon: 'chart' }
]

// در موبایل بعد از کلیک، منو بسته می‌شود
const closeOnMobile = () => {
  if (window.innerWidth < 1024) emit('close')
}
</script>

<template>
  <!-- پرده تیره پشت منو (فقط موبایل) -->
  <transition name="fade">
    <div v-show="open" @click="emit('close')" class="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm lg:hidden"></div>
  </transition>

  <aside
    class="fixed inset-y-0 right-0 z-40 flex w-72 max-w-[85vw] flex-col border-l border-beige-500 bg-navy-950 shadow-2xl transition-transform duration-300"
    :class="open ? 'translate-x-0' : 'translate-x-full'">

    <!-- لوگو -->
    <div class="flex items-center justify-between p-4 sm:p-5">
      <div class="flex items-center gap-3">
        <div class="icon-box grad-beige glow h-11 w-11 rounded-2xl border border-beige-300 text-3xl sm:h-12 sm:w-12">
          <Icon name="wallet" />
        </div>
        <span class="text-lg font-bold text-beige-300 sm:text-xl">تنخواه‌یار</span>
      </div>
      <button type="button" @click="emit('close')" class="rounded-xl border border-navy-700 p-2 text-xl text-beige-300 transition hover:border-beige-500 hover:bg-navy-800 lg:hidden" aria-label="بستن">
        <Icon name="close" />
      </button>
    </div>

    <!-- لینک‌ها -->
    <nav class="flex-1 space-y-2 overflow-y-auto px-4">
      <a href="#" @click.prevent="closeOnMobile" class="glow flex items-center gap-3 rounded-2xl border border-beige-300 bg-gradient-to-l from-beige-500 to-beige-400 px-4 py-3 font-bold text-navy-950">
        <span class="text-2xl"><Icon name="dash" /></span>
        داشبورد
      </a>

      <div class="beige-line my-5"></div>

      <p class="px-2 pb-1 text-xs font-medium text-beige-300/70">لینک‌ها</p>
      <DisabledLink v-for="item in links" :key="item.label" :label="item.label" :icon="item.icon" />

      <div class="beige-line my-5"></div>

      <DisabledLink label="ورود" icon="login" />
    </nav>

    <!-- کارت کاربر -->
    <div class="m-4 flex items-center gap-3 rounded-2xl border border-beige-500 bg-navy-800 p-3">
      <div class="icon-box grad-beige h-12 w-12 rounded-full border border-beige-300 text-2xl">
        <Icon name="user" />
      </div>
      <div>
        <p class="text-sm font-bold">هدیه رضوی‌نژاد</p>
        <p class="text-xs text-beige-300">کاربر</p>
      </div>
    </div>
  </aside>
</template>
