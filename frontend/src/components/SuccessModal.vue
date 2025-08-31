<template>
  <div class="modal fade show d-block" tabindex="-1" @click.self="$emit('close')">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Submission Successful</h5>
          <button type="button" class="btn-close" @click="$emit('close')"></button>
        </div>
        <div class="modal-body text-center">
          <div class="display-5 text-primary">✓</div>
          <h4 class="mt-2">Thank you! Your form has been submitted.</h4>
          <p class="text-muted mb-0">We have captured your details. Our team will review and get back to you.</p>
        </div>
        <div class="modal-footer justify-content-center">
          <button class="btn btn-primary" @click="$emit('close')">Okay</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal-backdrop fade show"></div>
</template>

<script setup>
const emit = defineEmits(['close']);
</script>
