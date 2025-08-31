<template>
  <div class="modal-backdrop" @click.self="$emit('close')">
    <div class="modal-panel">
      <div class="modal-header">
        <h3 class="section-title modal-title">Trainee Details</h3>
        <div class="modal-actions">
          <button class="btn btn-primary" @click="$emit('open-status', user)">Update Status</button>
          <button class="btn btn-ghost" @click="$emit('close')">Close</button>
        </div>
      </div>
      <div class="modal-body">
        <div class="card-surface card-padding section-spacing">
          <h4 class="section-title">Official Information</h4>
          <div class="form-row">
            <div class="col-3">
              <label class="label">FACE ID</label>
              <div class="input-field" tabindex="-1">{{ user.faceId }}</div>
            </div>
            <div class="col-3">
              <label class="label">Name of the OSA</label>
              <div class="input-field" tabindex="-1">{{ user.name }}</div>
            </div>
            <div class="col-3">
              <label class="label">CVE ID No</label>
              <div class="input-field" tabindex="-1">{{ user.cveId || '-' }}</div>
            </div>
            <div class="col-3">
              <label class="label">Nature of Service</label>
              <div class="input-field" tabindex="-1">{{ user.service || '-' }}</div>
            </div>
          </div>
        </div>

        <div class="card-surface card-padding section-spacing">
          <h4 class="section-title">Personal Information</h4>
          <div class="form-row">
            <div class="col-4"><label class="label">Name</label><div class="input-field">{{ user.name }}</div></div>
            <div class="col-4"><label class="label">Gender</label><div class="input-field">{{ user.gender }}</div></div>
            <div class="col-4"><label class="label">Aadhaar No</label><div class="input-field">{{ user.aadhaar }}</div></div>
          </div>
          <div class="form-row">
            <div class="col-4"><label class="label">Date of Birth</label><div class="input-field">{{ user.dob }}</div></div>
            <div class="col-4"><label class="label">Marital Status</label><div class="input-field">{{ user.maritalStatus }}</div></div>
            <div class="col-4"><label class="label">Spouse Name</label><div class="input-field">{{ user.spouseName || '-' }}</div></div>
          </div>
          <div class="form-row">
            <div class="col-12"><label class="label">Educational Qualification</label><div class="input-field">{{ user.qualification }}</div></div>
          </div>
          <div class="form-row">
            <div class="col-6"><label class="label">Father Name</label><div class="input-field">{{ user.fatherName }}</div></div>
            <div class="col-6"><label class="label">Mother Name</label><div class="input-field">{{ user.motherName }}</div></div>
          </div>
          <div class="form-row">
            <div class="col-6"><label class="label">Religion</label><div class="input-field">{{ user.religion }}</div></div>
            <div class="col-6"><label class="label">Caste</label><div class="input-field">{{ user.caste }}</div></div>
          </div>
        </div>

        <div class="card-surface card-padding section-spacing">
          <h4 class="section-title">Contact Details</h4>
          <div class="form-row">
            <div class="col-12"><label class="label">Permanent Address</label><div class="input-field">{{ user.permAddress }}</div></div>
            <div class="col-12"><label class="label">Present Address</label><div class="input-field">{{ user.presAddress }}</div></div>
          </div>
          <div class="form-row">
            <div class="col-6"><label class="label">Contact Telephone Number</label><div class="input-field">{{ user.contactPhone }}</div></div>
            <div class="col-6"><label class="label">Emergency Contact</label><div class="input-field">{{ user.emergencyContact }}</div></div>
          </div>
        </div>

        <div class="card-surface card-padding section-spacing">
          <h4 class="section-title">Medical Details</h4>
          <div class="form-row">
            <div class="col-6"><label class="label">Identification Marks</label><div class="input-field">{{ user.marks?.[0] }}</div></div>
            <div class="col-6"><label class="label">Blood Group</label><div class="input-field">{{ user.bloodGroup }}</div></div>
          </div>
        </div>

        <div class="card-surface card-padding">
          <h4 class="section-title">Experience & Training</h4>
          <div class="form-row">
            <div class="col-4"><label class="label">Reference By</label><div class="input-field">{{ user.referenceBy }}</div></div>
            <div class="col-4"><label class="label">Date of Joining</label><div class="input-field">{{ user.dateOfJoining }}</div></div>
            <div class="col-4"><label class="label">Area of Training</label><div class="input-field">{{ user.trainingArea }}</div></div>
          </div>
          <div class="form-row">
            <div class="col-3"><label class="label">Batch No</label><div class="input-field">{{ user.batchNo }}</div></div>
            <div class="col-3"><label class="label">Training Skill</label><div class="input-field">{{ user.trainingSkill }}</div></div>
            <div class="col-3"><label class="label">Training Period (From)</label><div class="input-field">{{ user.trainingFrom }}</div></div>
            <div class="col-3"><label class="label">Training Period (To)</label><div class="input-field">{{ user.trainingTo }}</div></div>
          </div>
          <div class="form-row">
            <div class="col-6"><label class="label">Date of Completion</label><div class="input-field">{{ user.completionDate }}</div></div>
            <div class="col-6"><label class="label">No of Days Attended</label><div class="input-field">{{ user.daysAttended }}</div></div>
          </div>
          <div class="form-row form-row-spaced">
            <div class="col-6"><label class="label">Status</label><div class="input-field">{{ user.status }}</div></div>
            <div class="col-6"><label class="label">Remarks</label><div class="input-field">{{ user.remarks || '-' }}</div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ user: { type: Object, required: true } });
</script>
