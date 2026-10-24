<script setup>
import Icon from './Icon.vue'

// یک آیتم غیرفعال در منو
defineProps({
  label: String,
  icon: String
})
</script>

<template>
  <div class="flex cursor-not-allowed items-center justify-between gap-2 rounded-2xl border border-dashed border-navy-700 px-4 py-3 text-zinc-500" aria-disabled="true">
    <span class="flex items-center gap-3">
      <span class="text-2xl"><Icon :name="icon" /></span>
      {{ label }}
    </span>
    <span class="soon-badge">
      <Icon name="lock" />
      در دسترس نیست
    </span>
  </div>
</template>
