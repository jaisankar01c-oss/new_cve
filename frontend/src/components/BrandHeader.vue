<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom">
    <div class="container">
      <span class="navbar-brand fw-semibold text-primary">CVE &amp; WD Portal</span>
      <div class="ms-auto d-flex align-items-center gap-2">
        <button class="btn btn-primary btn-sm" @click="logout">Logout</button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const logout = () => { localStorage.removeItem('auth'); router.push('/login'); };
</script>
