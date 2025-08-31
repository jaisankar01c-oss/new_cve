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
        <div class="row g-2 mb-3">
          <div class="col-12 col-md-6">
            <input v-model="query" type="text" class="form-control" placeholder="Search by FACE ID or Name" />
          </div>
          <div class="col-12 col-md-3">
            <select v-model="statusFilter" class="form-select">
              <option value="">All statuses</option>
              <option value="Accepted">Accepted</option>
              <option value="Pending">Pending</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
        </div>
        <div v-if="filteredUsers.length === 0" class="text-center text-muted py-4">
          <i class="bi bi-search display-6 d-block mb-2"></i>
          <div class="fw-semibold">No users found</div>
          <div class="small">Try a different search or clear filters</div>
        </div>
        <div v-else class="table-responsive">
          <table class="table table-hover table-sm align-middle mb-0">
            <thead>
              <tr>
                <th>FACE ID</th>
                <th>Name</th>
                <th>Mobile</th>
                <th>Gender</th>
                <th>Status</th>
                <th style="width: 112px;">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="u in filteredUsers" :key="u.faceId">
                <td>{{ u.faceId }}</td>
                <td>{{ u.name }}</td>
                <td>{{ u.mobile }}</td>
                <td>{{ u.gender }}</td>
                <td><span class="badge" :class="badgeClass(u.status)">{{ u.status }}</span></td>
                <td>
                  <button class="btn btn-outline-primary btn-sm" @click="openView(u)">View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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

const query = ref('');
const statusFilter = ref('');

onMounted(async () => { users.value = await getUsers(); });
const counts = computed(() => {
  const accepted = users.value.filter(u => u.status === 'Accepted').length;
  const pending = users.value.filter(u => u.status === 'Pending').length;
  const rejected = users.value.filter(u => u.status === 'Rejected').length;
  return { accepted, pending, rejected };
});

const filteredUsers = computed(() => {
  const q = query.value.trim().toLowerCase();
  return users.value.filter(u => {
    const matchesQ = !q || u.faceId.toLowerCase().includes(q) || u.name.toLowerCase().includes(q);
    const matchesStatus = !statusFilter.value || u.status === statusFilter.value;
    return matchesQ && matchesStatus;
  });
});

const badgeClass = (s) => s === 'Accepted' ? 'bg-success' : s === 'Rejected' ? 'bg-danger' : 'bg-secondary';

const openView = (u) => { selected.value = u; };
const openStatus = (u) => { statusTarget.value = u; };
const onStatusSaved = (updated) => {
  const idx = users.value.findIndex(x => x.faceId === updated.faceId);
  if (idx > -1) users.value[idx] = { ...updated };
  statusTarget.value = null;
};
</script>
