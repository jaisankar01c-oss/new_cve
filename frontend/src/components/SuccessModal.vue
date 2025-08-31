<template>
  <div class="modal fade show d-block" tabindex="-1" @click.self="$emit('close')">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body text-center">
          <div class="display-5 text-primary">✓</div>
          <h4 class="mt-2 modal-title section-heading">Thank you! Your form has been submitted.</h4>
          <p class="text-muted mb-0">We have captured your details. Our team will review and get back to you.</p> <button class="btn btn-primary px-4" @click="$emit('close')">Okay</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal-backdrop fade show"></div>
</template>

<script setup>
const emit = defineEmits(['close']);
</script>
