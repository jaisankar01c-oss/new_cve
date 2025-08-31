<template>
  <div class="modal fade show d-block nested" tabindex="-1" @click.self="$emit('close')">
    <div class="modal-dialog modal-md modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title section-heading m-0">Update Status</h5>
          <button type="button" class="btn-close" @click="$emit('close')"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="save" class="row g-3">
            <div class="col-12">
              <label class="form-label" for="status">Status</label>
              <select id="status" v-model="status" class="form-select" required>
                <option value="Accepted">Accept</option>
                <option value="Rejected">Reject</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
            <div class="col-12">
              <label class="form-label" for="remarks">Remarks</label>
              <textarea id="remarks" v-model="remarks" class="form-control" placeholder="Enter remarks"></textarea>
            </div>
            <div class="modal-footer border-top-0 text-center">
              <button type="submit" class="btn btn-primary px-3">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="modal-backdrop fade show nested"></div>
</template>

<script setup>
import { ref } from 'vue';
import { updateUserStatus } from '../services/users.js';

const props = defineProps({ user: { type: Object, required: true } });
const emit = defineEmits(['close', 'saved']);

const status = ref(props.user.status || 'Pending');
const remarks = ref(props.user.remarks || '');

const save = async () => {
  const updated = await updateUserStatus(props.user.faceId, status.value, remarks.value);
  emit('saved', updated);
};
</script>
