<script setup>
defineProps({ name: { type: String, required: true } })
</script>

<template>
  <svg class="ico"><use :href="'#i-' + name" /></svg>
</template>
