<template>
  <div>
    <BrandHeader v-if="!$route.meta.hideHeader" />
    <main class="container py-3 py-md-4">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import BrandHeader from './components/BrandHeader.vue';
</script>
