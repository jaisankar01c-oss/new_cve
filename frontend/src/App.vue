<template>
  <div class="app-shell">
    <BrandHeader v-if="!$route.meta.hideHeader" />
    <main class="app-main" :class="{ 'no-header': $route.meta.hideHeader }">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import BrandHeader from './components/BrandHeader.vue';
</script>

<style scoped>
.app-main { min-height: calc(100vh - 64px); padding: 24px; background: var(--bg); }
.app-main.no-header { min-height: 100vh; }
@media (max-width: 900px) { .app-main { padding: 12px; } }
</style>
