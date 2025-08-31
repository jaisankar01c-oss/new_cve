<template>
  <div>
    <section class="mb-3">
      <div class="row g-3">
        <div class="col-12 col-md-6 col-lg-3">
          <div class="card h-100">
            <div class="card-body text-center">
              <div class="text-muted fw-semibold">Total Users</div>
              <div class="fs-3 fw-bold text-primary">{{ users.length }}</div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="card h-100">
            <div class="card-body text-center">
              <div class="text-muted fw-semibold">Accepted</div>
              <div class="fs-3 fw-bold text-primary">{{ counts.accepted }}</div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="card h-100">
            <div class="card-body text-center">
              <div class="text-muted fw-semibold">Pending</div>
              <div class="fs-3 fw-bold text-primary">{{ counts.pending }}</div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="card h-100">
            <div class="card-body text-center">
              <div class="text-muted fw-semibold">Rejected</div>
              <div class="fs-3 fw-bold text-primary">{{ counts.rejected }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="card">
      <div class="card-body">
        <h3 class="section-heading subheading-large mb-3">Users</h3>
        <table class="table table-hover align-middle">
          <thead>
            <tr>
              <th>FACE ID</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Gender</th>
              <th style="width: 112px;">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="u in users" :key="u.faceId">
              <td>{{ u.faceId }}</td>
              <td>{{ u.name }}</td>
              <td>{{ u.mobile }}</td>
              <td>{{ u.gender }}</td>
              <td>
                <button class="btn btn-outline-primary btn-sm" @click="openView(u)">View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <UserViewModal v-if="selected" :user="selected" @close="selected=null" @open-status="openStatus" />
    <StatusModal v-if="statusTarget" :user="statusTarget" @close="statusTarget=null" @saved="onStatusSaved" />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { getUsers } from '../services/users.js';
import UserViewModal from '../components/UserViewModal.vue';
import StatusModal from '../components/StatusModal.vue';

const users = ref([]);
const selected = ref(null);
const statusTarget = ref(null);

onMounted(async () => { users.value = await getUsers(); });
const counts = computed(() => {
  const accepted = users.value.filter(u => u.status === 'Accepted').length;
  const pending = users.value.filter(u => u.status === 'Pending').length;
  const rejected = users.value.filter(u => u.status === 'Rejected').length;
  return { accepted, pending, rejected };
});
const openView = (u) => { selected.value = u; };
const openStatus = (u) => { statusTarget.value = u; };
const onStatusSaved = (updated) => {
  const idx = users.value.findIndex(x => x.faceId === updated.faceId);
  if (idx > -1) users.value[idx] = { ...updated };
  statusTarget.value = null;
};
</script>
