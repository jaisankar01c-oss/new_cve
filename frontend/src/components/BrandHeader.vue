<template>
  <header class="brand-header">
    <div class="brand-container">
      <h1 class="brand-title">CVE &amp; WD Portal</h1>
      <nav class="site-nav">
        <router-link class="nav-link" to="/dashboard">Users</router-link>
        <router-link class="nav-link" to="/trainee-form">Trainee Form</router-link>
        <button class="nav-button" @click="logout">Logout</button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const logout = () => { localStorage.removeItem('auth'); router.push('/login'); };
</script>

<style scoped>
.brand-header { height: 64px; background: linear-gradient(90deg, var(--brand-600), var(--brand-700)); color: #fff; display: flex; align-items: center; box-shadow: 0 2px 10px rgba(0,0,0,.06); }
.brand-container { max-width: 1200px; margin: 0 auto; width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 0 20px; }
.brand-title { font-size: 18px; letter-spacing: 1px; margin: 0; font-weight: 600; }
.site-nav { display: flex; gap: 12px; align-items: center; }
.nav-link { color: #fff; text-decoration: none; padding: 8px 10px; border-radius: 8px; }
.nav-link.router-link-exact-active { background: var(--brand-700); }
.nav-button { background: #fff; color: var(--brand-700); border: 0; padding: 8px 12px; border-radius: 10px; font-weight: 600; cursor: pointer; }
</style>
