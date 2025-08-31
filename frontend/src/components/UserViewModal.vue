<template>
  <div class="modal fade show d-block" tabindex="-1" @click.self="$emit('close')">
    <div class="modal-dialog modal-xl modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title section-heading m-0">Trainee Details</h5>
          <button type="button" class="btn-close" aria-label="Close" @click="$emit('close')"></button>
        </div>
        <div class="modal-body">
          <!-- Profile summary -->
          <div class="profile-summary d-flex align-items-center gap-3 mb-4">
            <template v-if="user.photoUrl">
              <img :src="user.photoUrl" alt="Photo" class="avatar-lg rounded border" />
            </template>
            <div v-else class="avatar-lg rounded-circle border d-flex align-items-center justify-content-center avatar-fallback">
              <i class="bi bi-person fs-2 text-muted"></i>
            </div>
            <div class="flex-grow-1">
              <div class="fs-5 fw-semibold text-primary">{{ user.name }}</div>
              <div class="small text-muted">FACE ID: {{ user.faceId }} <span class="mx-2">|</span> CVE ID: {{ user.cveId || '-' }}</div>
            </div>
            <div :class="statusAlertClass(user.status)" class="py-1 px-2 mb-0 small d-inline">{{ user.status }}</div>
          </div>

          <!-- Official Information -->
          <section class="mb-4">
            <h6 class="detail-title">Official Information</h6>
            <div class="row g-3">
              <div class="col-md-3"><span class="detail-label">Nature of Service</span><div class="detail-value">{{ user.service || '-' }}</div></div>
              <div class="col-md-3"><span class="detail-label">CVE ID No</span><div class="detail-value">{{ user.cveId || '-' }}</div></div>
              <div class="col-md-3"><span class="detail-label">Reference By</span><div class="detail-value">{{ user.referenceBy }}</div></div>
              <div class="col-md-3"><span class="detail-label">Area of Training</span><div class="detail-value">{{ user.trainingArea }}</div></div>
            </div>
          </section>

          <!-- Personal Information -->
          <section class="mb-4">
            <h6 class="detail-title">Personal Information</h6>
            <div class="row g-3">
              <div class="col-md-4"><span class="detail-label">Name</span><div class="detail-value">{{ user.name }}</div></div>
              <div class="col-md-4"><span class="detail-label">Gender</span><div class="detail-value">{{ user.gender }}</div></div>
              <div class="col-md-4"><span class="detail-label">Aadhaar No</span><div class="detail-value">{{ user.aadhaar }}</div></div>
              <div class="col-md-4"><span class="detail-label">Date of Birth</span><div class="detail-value">{{ user.dob }}</div></div>
              <div class="col-md-4"><span class="detail-label">Marital Status</span><div class="detail-value">{{ user.maritalStatus }}</div></div>
              <div class="col-md-4"><span class="detail-label">Spouse Name</span><div class="detail-value">{{ user.spouseName || '-' }}</div></div>
              <div class="col-12"><span class="detail-label">Educational Qualification</span><div class="detail-value">{{ user.qualification }}</div></div>
              <div class="col-md-6"><span class="detail-label">Father Name</span><div class="detail-value">{{ user.fatherName }}</div></div>
              <div class="col-md-6"><span class="detail-label">Mother Name</span><div class="detail-value">{{ user.motherName }}</div></div>
              <div class="col-md-6"><span class="detail-label">Religion</span><div class="detail-value">{{ user.religion }}</div></div>
              <div class="col-md-6"><span class="detail-label">Caste</span><div class="detail-value">{{ user.caste }}</div></div>
            </div>
          </section>

          <!-- Contact Details -->
          <section class="mb-4">
            <h6 class="detail-title">Contact Details</h6>
            <div class="row g-3">
              <div class="col-12"><span class="detail-label">Permanent Address</span><div class="detail-value">{{ user.permAddress }}</div></div>
              <div class="col-12"><span class="detail-label">Present Address</span><div class="detail-value">{{ user.presAddress }}</div></div>
              <div class="col-md-6"><span class="detail-label">Contact Telephone Number</span><div class="detail-value">{{ user.contactPhone }}</div></div>
              <div class="col-md-6"><span class="detail-label">Emergency Contact</span><div class="detail-value">{{ user.emergencyContact }}</div></div>
            </div>
          </section>

          <!-- Medical Details -->
          <section class="mb-4">
            <h6 class="detail-title">Medical Details</h6>
            <div class="row g-3">
              <div class="col-md-6"><span class="detail-label">Identification Marks</span><div class="detail-value">{{ user.marks?.[0] }}</div></div>
              <div class="col-md-6"><span class="detail-label">Blood Group</span><div class="detail-value">{{ user.bloodGroup }}</div></div>
            </div>
          </section>

          <!-- Experience & Training -->
          <section>
            <h6 class="detail-title">Experience &amp; Training</h6>
            <div class="row g-3">
              <div class="col-md-3"><span class="detail-label">Batch No</span><div class="detail-value">{{ user.batchNo }}</div></div>
              <div class="col-md-3"><span class="detail-label">Training Skill</span><div class="detail-value">{{ user.trainingSkill }}</div></div>
              <div class="col-md-3"><span class="detail-label">Training Period (From)</span><div class="detail-value">{{ user.trainingFrom }}</div></div>
              <div class="col-md-3"><span class="detail-label">Training Period (To)</span><div class="detail-value">{{ user.trainingTo }}</div></div>
              <div class="col-md-6"><span class="detail-label">Date of Joining</span><div class="detail-value">{{ user.dateOfJoining }}</div></div>
              <div class="col-md-6"><span class="detail-label">Date of Completion</span><div class="detail-value">{{ user.completionDate }}</div></div>
              <div class="col-md-6"><span class="detail-label">No of Days Attended</span><div class="detail-value">{{ user.daysAttended }}</div></div>
              <div class="col-md-6"><span class="detail-label">Remarks</span><div class="detail-value">{{ user.remarks || '-' }}</div></div>
            </div>
          </section>
        </div>
        <div class="modal-footer d-flex justify-content-center border-top-0">
          <button class="btn btn-primary" @click="$emit('open-status', user)">Update Status</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal-backdrop fade show"></div>
</template>

<script setup>
const statusAlertClass = (s) => s === 'Accepted' ? 'alert alert-success' : s === 'Rejected' ? 'alert alert-danger' : 'alert alert-warning';

defineProps({ user: { type: Object, required: true } });
</script>

<style scoped>
.detail-title { font-weight: var(--font-weight-semibold); color: var(--color-dark); margin-bottom: .5rem; }
.detail-label { display:block; color: var(--color-dark); font-weight: var(--font-weight-medium); font-size: var(--font-size-sm); margin-bottom: .25rem; }
.detail-value { border: 1px solid var(--color-border); border-radius: var(--border-radius-md); padding: .5rem .75rem; background: var(--color-white); font-size: var(--font-size-sm); }
.profile-summary { border: 1px solid var(--color-border); border-radius: var(--border-radius-md); padding: .75rem; background: var(--color-white); }
.avatar-fallback { background: var(--color-light); }
.section-heading { font-size: 20px !important; }
</style>
