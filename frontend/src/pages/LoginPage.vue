<template>
  <div class="container-flow">
    <div class="login-wrap">
      <div class="card-surface card-padding auth-card">
        <div class="form-title-wrap">
          <div class="brand-mark" aria-hidden="true">CVE</div>
          <h2 class="section-title form-title">Login</h2>
          <p class="auth-subtitle">Please provide login to access users.</p>
        </div>
        <form @submit.prevent="onSubmit" class="form-grid">
          <div>
            <label class="label" for="username">User name</label>
            <input id="username" v-model="username" class="input-field" type="text" autocomplete="username" required />
          </div>
          <div>
            <label class="label" for="password">Password</label>
            <input id="password" v-model="password" class="input-field" type="password" autocomplete="current-password" required />
          </div>
          <button class="btn btn-primary login-btn" type="submit">Login</button>
          <p class="auth-footnote">© All rights reserved.</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const router = useRouter();

const onSubmit = () => {
  if (username.value && password.value) {
    localStorage.setItem('auth', 'true');
    router.push('/dashboard');
  }
};
</script>

<style scoped>
.login-wrap { display: grid; place-items: center; min-height: 100vh; }
.auth-card { width: min(420px, 92vw); }
.form-grid { display: grid; gap: 12px; }
.form-title-wrap { display: flex; flex-direction: column; align-items: center; gap: 6px; margin-bottom: 6px; }
.form-title { font-size: 20px; text-align: center; margin: 0; }
.auth-subtitle { margin: 0 0 8px 0; color: #6b7280; text-align: center; }
.login-btn { padding: 14px 16px; }
.auth-footnote { margin: 4px 0 0 0; text-align: center; color: #9ca3af; font-size: 12px; }
.brand-mark { width: 56px; height: 56px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; color: var(--brand-700); background: var(--brand-50); border: 1px solid var(--border); box-shadow: 0 2px 8px rgba(0,0,0,.04); }
</style>
