<template>
  <div class="container-flow">
    <section class="card-surface card-padding" style="margin-bottom:14px;">
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-label">Total Users</div>
          <div class="stat-value">{{ users.length }}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Accepted</div>
          <div class="stat-value">{{ counts.accepted }}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Pending</div>
          <div class="stat-value">{{ counts.pending }}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Rejected</div>
          <div class="stat-value">{{ counts.rejected }}</div>
        </div>
      </div>
    </section>

    <section class="card-surface card-padding">
      <h3 class="section-title">Users</h3>
      <table class="table">
        <thead>
          <tr>
            <th>FACE ID</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Gender</th>
            <th style="width: 96px;">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="u in users" :key="u.faceId">
            <td>{{ u.faceId }}</td>
            <td>{{ u.name }}</td>
            <td>{{ u.mobile }}</td>
            <td>{{ u.gender }}</td>
            <td>
              <button class="btn btn-ghost" @click="openView(u)">View</button>
            </td>
          </tr>
        </tbody>
      </table>
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

<style scoped>
.stats-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px; }
.stat-card { background: var(--brand-50); border: 1px solid var(--border); border-radius: 14px; padding: 16px; }
.stat-label { color: #6b7280; font-weight: 600; }
.stat-value { font-size: 28px; font-weight: 700; color: var(--brand-700); }
@media (max-width: 900px){ .stats-grid { grid-template-columns: 1fr; } }
</style>
