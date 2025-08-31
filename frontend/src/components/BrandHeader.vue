<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom py-2">
    <div class="container">
      <span class="navbar-brand fw-semibold text-primary">CVE &amp; WD Portal</span>
      <div class="ms-auto d-flex align-items-center gap-3">
        <div class="d-flex align-items-center gap-2 text-primary">
          <i class="bi bi-person-circle fs-5"></i>
          <span class="fw-medium small">{{ adminName }}</span>
        </div>
        <button class="btn p-0 border-0 bg-transparent text-primary" @click="logout" aria-label="Logout">
          <i class="bi bi-box-arrow-right fs-5"></i>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const logout = () => { localStorage.removeItem('auth'); router.push('/login'); };
const adminName = computed(() => localStorage.getItem('adminName') || 'Admin');
</script>
