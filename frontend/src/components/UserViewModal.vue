<template>
  <div class="modal fade show d-block" tabindex="-1" @click.self="$emit('close')">
    <div class="modal-dialog modal-xl modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Trainee Details</h5>
          <button type="button" class="btn-close" aria-label="Close" @click="$emit('close')"></button>
        </div>
        <div class="modal-body">
          <div class="card mb-3">
            <div class="card-body">
              <h4 class="section-heading text-secondary">Official Information</h4>
              <div class="row g-3">
                <div class="col-md-3 text-center">
                  <label class="form-label d-block">Photo</label>
                  <img v-if="user.photoUrl" :src="user.photoUrl" alt="Photo" class="avatar-lg rounded border" />
                  <span v-else class="text-muted small">No photo</span>
                </div>
                <div class="col-md-3"><label class="form-label">FACE ID</label><div class="border rounded p-2">{{ user.faceId }}</div></div>
                <div class="col-md-3"><label class="form-label">Name of the OSA</label><div class="border rounded p-2">{{ user.name }}</div></div>
                <div class="col-md-3"><label class="form-label">CVE ID No</label><div class="border rounded p-2">{{ user.cveId || '-' }}</div></div>
                <div class="col-md-3"><label class="form-label">Nature of Service</label><div class="border rounded p-2">{{ user.service || '-' }}</div></div>
              </div>
            </div>
          </div>

          <div class="card mb-3">
            <div class="card-body">
              <h4 class="section-heading text-secondary">Personal Information</h4>
              <div class="row g-3">
                <div class="col-md-4"><label class="form-label">Name</label><div class="border rounded p-2">{{ user.name }}</div></div>
                <div class="col-md-4"><label class="form-label">Gender</label><div class="border rounded p-2">{{ user.gender }}</div></div>
                <div class="col-md-4"><label class="form-label">Aadhaar No</label><div class="border rounded p-2">{{ user.aadhaar }}</div></div>
              </div>
              <div class="row g-3 mt-0">
                <div class="col-md-4"><label class="form-label">Date of Birth</label><div class="border rounded p-2">{{ user.dob }}</div></div>
                <div class="col-md-4"><label class="form-label">Marital Status</label><div class="border rounded p-2">{{ user.maritalStatus }}</div></div>
                <div class="col-md-4"><label class="form-label">Spouse Name</label><div class="border rounded p-2">{{ user.spouseName || '-' }}</div></div>
              </div>
              <div class="row g-3 mt-0">
                <div class="col-12"><label class="form-label">Educational Qualification</label><div class="border rounded p-2">{{ user.qualification }}</div></div>
              </div>
              <div class="row g-3 mt-0">
                <div class="col-md-6"><label class="form-label">Father Name</label><div class="border rounded p-2">{{ user.fatherName }}</div></div>
                <div class="col-md-6"><label class="form-label">Mother Name</label><div class="border rounded p-2">{{ user.motherName }}</div></div>
              </div>
              <div class="row g-3 mt-0">
                <div class="col-md-6"><label class="form-label">Religion</label><div class="border rounded p-2">{{ user.religion }}</div></div>
                <div class="col-md-6"><label class="form-label">Caste</label><div class="border rounded p-2">{{ user.caste }}</div></div>
              </div>
            </div>
          </div>

          <div class="card mb-3">
            <div class="card-body">
              <h4 class="section-heading text-secondary">Contact Details</h4>
              <div class="row g-3">
                <div class="col-12"><label class="form-label">Permanent Address</label><div class="border rounded p-2">{{ user.permAddress }}</div></div>
                <div class="col-12"><label class="form-label">Present Address</label><div class="border rounded p-2">{{ user.presAddress }}</div></div>
                <div class="col-md-6"><label class="form-label">Contact Telephone Number</label><div class="border rounded p-2">{{ user.contactPhone }}</div></div>
                <div class="col-md-6"><label class="form-label">Emergency Contact</label><div class="border rounded p-2">{{ user.emergencyContact }}</div></div>
              </div>
            </div>
          </div>

          <div class="card mb-3">
            <div class="card-body">
              <h4 class="section-heading text-secondary">Medical Details</h4>
              <div class="row g-3">
                <div class="col-md-6"><label class="form-label">Identification Marks</label><div class="border rounded p-2">{{ user.marks?.[0] }}</div></div>
                <div class="col-md-6"><label class="form-label">Blood Group</label><div class="border rounded p-2">{{ user.bloodGroup }}</div></div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <h4 class="section-heading text-secondary">Experience &amp; Training</h4>
              <div class="row g-3">
                <div class="col-md-4"><label class="form-label">Reference By</label><div class="border rounded p-2">{{ user.referenceBy }}</div></div>
                <div class="col-md-4"><label class="form-label">Date of Joining</label><div class="border rounded p-2">{{ user.dateOfJoining }}</div></div>
                <div class="col-md-4"><label class="form-label">Area of Training</label><div class="border rounded p-2">{{ user.trainingArea }}</div></div>
                <div class="col-md-3"><label class="form-label">Batch No</label><div class="border rounded p-2">{{ user.batchNo }}</div></div>
                <div class="col-md-3"><label class="form-label">Training Skill</label><div class="border rounded p-2">{{ user.trainingSkill }}</div></div>
                <div class="col-md-3"><label class="form-label">Training Period (From)</label><div class="border rounded p-2">{{ user.trainingFrom }}</div></div>
                <div class="col-md-3"><label class="form-label">Training Period (To)</label><div class="border rounded p-2">{{ user.trainingTo }}</div></div>
                <div class="col-md-6"><label class="form-label">Date of Completion</label><div class="border rounded p-2">{{ user.completionDate }}</div></div>
                <div class="col-md-6"><label class="form-label">No of Days Attended</label><div class="border rounded p-2">{{ user.daysAttended }}</div></div>
                <div class="col-md-6"><label class="form-label">Status</label><div class="border rounded p-2">{{ user.status }}</div></div>
                <div class="col-md-6"><label class="form-label">Remarks</label><div class="border rounded p-2">{{ user.remarks || '-' }}</div></div>
              </div>
            </div>
          </div>
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
defineProps({ user: { type: Object, required: true } });
</script>

<style scope>
.section-heading{
  font-size: 20px !important; 
}
</style>
