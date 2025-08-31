<template>
  <div class="modal fade show d-block" tabindex="-1" @click.self="$emit('close')">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content p-3">
        <div class="modal-body text-center">
          <div class="display-5 text-primary">✓</div>
          <h4 class="modal-title section-heading mt-2">Thank you! Your form has been submitted.</h4>
          <p class="text-muted small mb-0 px-2">We have captured your details. Our team will review and get back to you.</p>
        </div>
        <div class="modal-footer justify-content-center border-top-0 pb-2">
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
