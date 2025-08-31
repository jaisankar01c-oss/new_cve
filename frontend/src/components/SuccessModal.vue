<template>
  <div class="modal fade show d-block" tabindex="-1" @click.self="$emit('close')">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content success-card">
        <div class="modal-body text-center py-4 px-3 vstack gap-3">
          <div class="success-icon mx-auto"><i class="bi bi-check-lg"></i></div>
          <h3 class="success-title m-0">Thank you! Your form has been submitted.</h3>
          <p class="success-text m-0">We have captured your details. Our team will review and get back to you.</p>
          <div class="pt-2">
            <button class="btn btn-primary px-4" @click="$emit('close')">Okay</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal-backdrop fade show"></div>
</template>

<script setup>
const emit = defineEmits(['close']);
</script>

<style scoped>
.success-card { border: 1px solid var(--color-border); border-radius: var(--border-radius-md); box-shadow: var(--shadow-md); }
.success-icon { width: 72px; height: 72px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: linear-gradient(90deg, var(--color-primary), var(--color-primary-dark)); color: var(--color-white); font-size: 32px; box-shadow: var(--shadow-sm); }
.success-title { color: var(--color-primary); font-weight: var(--font-weight-semibold); font-size: var(--font-size-xl); }
.success-text { color: var(--color-muted); font-size: var(--font-size-base); }
</style>
