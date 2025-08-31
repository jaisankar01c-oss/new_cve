<template>
  <div class="modal-backdrop" @click.self="$emit('close')">
    <div class="modal-panel">
      <div class="modal-header">
        <h3 class="section-title modal-title">Submission Successful</h3>
        <button class="btn btn-ghost" @click="$emit('close')">Close</button>
      </div>
      <div class="modal-body">
        <div class="success-wrap">
          <div class="success-icon" aria-hidden="true">✓</div>
          <h4 class="success-title">Thank you! Your form has been submitted.</h4>
          <p class="success-desc">We have captured your details. Our team will review and get back to you.</p>
          <div class="form-actions">
            <button class="btn btn-primary" @click="$emit('close')">Okay</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['close']);
</script>

<style scoped>
.success-wrap { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 8px; }
.success-icon { width: 64px; height: 64px; border-radius: 50%; background: var(--brand-50); color: var(--brand-700); display: flex; align-items: center; justify-content: center; font-size: 32px; border: 1px solid var(--border); }
.success-title { margin: 8px 0 0 0; }
.success-desc { margin: 0; color: #6b7280; }
</style>
