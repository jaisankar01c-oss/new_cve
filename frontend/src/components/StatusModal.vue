<template>
  <div class="modal-backdrop" @click.self="$emit('close')">
    <div class="modal-panel">
      <div class="modal-header">
        <h3 class="section-title modal-title">Update Status</h3>
        <button class="btn btn-ghost" @click="$emit('close')">Close</button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="save">
          <div class="form-row">
            <div class="col-6">
              <label class="label" for="status">Status</label>
              <select id="status" v-model="status" class="select-field" required>
                <option value="Accepted">Accept</option>
                <option value="Rejected">Reject</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
            <div class="col-12">
              <label class="label" for="remarks">Remarks</label>
              <textarea id="remarks" v-model="remarks" class="textarea-field" placeholder="Enter remarks"></textarea>
            </div>
          </div>
          <div class="form-actions">
            <button type="submit" class="btn btn-primary">Save</button>
            <button type="button" class="btn btn-ghost" @click="$emit('close')">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
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
