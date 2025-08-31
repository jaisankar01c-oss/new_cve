<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <span class="navbar-brand fw-semibold">CVE &amp; WD Portal</span>
      <div class="ms-auto d-flex align-items-center gap-2">
        <router-link class="nav-link" to="/dashboard">Users</router-link>
        <router-link class="nav-link" to="/trainee-form">Trainee Form</router-link>
        <button class="btn btn-light btn-sm" @click="logout">Logout</button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const logout = () => { localStorage.removeItem('auth'); router.push('/login'); };
</script>
