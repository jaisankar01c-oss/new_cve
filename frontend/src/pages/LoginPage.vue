<template>
  <div class="container">
    <div class="row min-vh-100 align-items-center justify-content-center">
      <div class="col-12 col-sm-10 col-md-6 col-lg-4">
        <div class="card shadow-sm">
          <div class="card-body">
            <img class="brand-logo" src="https://cdn.builder.io/api/v1/image/assets%2Fc98c532ea1554d2d9b237baf37efdf95%2F1bd2ceab768347d2a4c36137838a0f37?format=webp&width=800" alt="CVE & WD Logo" loading="lazy" />
            <h3 class="text-center text-primary py-2 mb-1">Admin Login</h3>
            <p class="text-center subheading-muted mb-3">Please provide login to access trainees.</p>
            <div v-if="errorMsg" class="alert small alert-danger py-2 mb-3" role="alert">{{ errorMsg }}</div>
            <form @submit.prevent="onSubmit" class="vstack gap-3">
              <div>
                <label class="form-label" for="username">User name</label>
                <input id="username" v-model.trim="username" class="form-control" type="text" autocomplete="username" required />
              </div>
              <div>
                <label class="form-label" for="password">Password</label>
                <input id="password" v-model="password" class="form-control" type="password" autocomplete="current-password" required />
              </div>
              <button class="btn btn-primary w-100" type="submit">Login</button>
              <p class="text-center text-muted small m-0">© All rights reserved.</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const errorMsg = ref('');
const router = useRouter();

const onSubmit = () => {
  errorMsg.value = '';
  const validUser = username.value === 'Admin';
  const validPass = password.value === 'Admin@123';
  if (!validUser || !validPass) {
    errorMsg.value = 'Invalid credentials. Please use User name: Admin and Password: Admin@123.';
    return;
  }
  localStorage.setItem('auth', 'true');
  localStorage.setItem('adminName', 'Admin');
  router.push('/dashboard');
};
</script>
