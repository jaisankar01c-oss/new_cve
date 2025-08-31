<template>
  <div>
    <img class="brand-logo" src="https://cdn.builder.io/api/v1/image/assets%2Fc98c532ea1554d2d9b237baf37efdf95%2F1bd2ceab768347d2a4c36137838a0f37?format=webp&width=800" alt="CVE & WD Logo" loading="lazy" />
    <h2 class="display-6 text-center text-primary mb-3">Trainee Data &amp; Screening Form</h2>
    <form @submit.prevent="submit">
      <section class="section-divider">
        <h4 class="detail-title">Official Information</h4>
        <div class="row g-3">
          <div class="col-md-3">
            <label class="form-label">FACE ID</label>
            <input v-model="form.faceId" class="form-control" type="text" placeholder="Enter FACE ID" />
          </div>
          <div class="col-md-3">
            <label class="form-label">Name of the OSA</label>
            <input v-model="form.osaName" class="form-control" type="text" placeholder="Enter OSA Name" />
          </div>
          <div class="col-md-3">
            <label class="form-label">CVE ID No</label>
            <input v-model="form.cveId" class="form-control" type="text" placeholder="Enter CVE ID No" />
          </div>
          <div class="col-md-3">
            <label class="form-label">Nature of Service</label>
            <input v-model="form.service" class="form-control" type="text" placeholder="Enter Nature of Service" />
          </div>
        </div>
      </section>

      <section class="section-divider">
        <h4 class="detail-title">Personal Information</h4>
        <div class="row g-3">
          <div class="col-md-4"><label class="form-label">Name</label><input v-model="form.name" class="form-control" type="text" placeholder="Enter Name" /></div>
          <div class="col-md-4"><label class="form-label">Gender</label>
            <select v-model="form.gender" class="form-select">
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Transgender</option>
            </select>
          </div>
          <div class="col-md-4"><label class="form-label">Aadhaar No</label><input v-model="form.aadhaar" class="form-control" type="text" placeholder="Enter Aadhaar Number" /></div>
        </div>
        <div class="row g-3 mt-0">
          <div class="col-md-4"><label class="form-label">Date of Birth</label><input v-model="form.dob" class="form-control" type="date" /></div>
          <div class="col-md-4"><label class="form-label">Marital Status</label>
            <select v-model="form.maritalStatus" class="form-select">
              <option value="">Select</option>
              <option>Married</option>
              <option>Single</option>
            </select>
          </div>
          <div class="col-md-4"><label class="form-label">Spouse Name</label><input v-model="form.spouseName" class="form-control" type="text" placeholder="Enter Spouse Name" /></div>
        </div>
        <div class="row g-3 mt-0">
          <div class="col-12"><label class="form-label">Educational Qualification</label>
            <select v-model="form.qualification" class="form-select">
              <option value="">Select Qualification</option>
              <option>School</option>
              <option>ITI</option>
              <option>Diploma</option>
              <option>Degree</option>
            </select>
          </div>
        </div>
        <div class="row g-3 mt-0">
          <div class="col-md-6"><label class="form-label">Father Name</label><input v-model="form.fatherName" class="form-control" type="text" placeholder="Enter Father Name" /></div>
          <div class="col-md-6"><label class="form-label">Mother Name</label><input v-model="form.motherName" class="form-control" type="text" placeholder="Enter Mother Name" /></div>
        </div>
        <div class="row g-3 mt-0 align-items-end">
          <div class="col-md-4">
            <label class="form-label">Photo</label>
            <input class="form-control" type="file" accept="image/*" @change="onPhotoChange" />
            <div class="mt-2 d-flex align-items-center gap-2">
              <template v-if="form.photoUrl">
                <img :src="form.photoUrl" alt="Preview" class="avatar-lg rounded border" />
              </template>
              <div v-else class="avatar-lg rounded-circle border d-flex align-items-center justify-content-center avatar-fallback">
                <i class="bi bi-person fs-2 text-muted"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="row g-3 mt-0">
          <div class="col-md-6"><label class="form-label">Religion</label>
            <select v-model="form.religion" class="form-select">
              <option value="">Select Religion</option>
              <option>Hindu</option>
              <option>Christian</option>
              <option>Muslim</option>
            </select>
          </div>
          <div class="col-md-6"><label class="form-label">Caste</label>
            <select v-model="form.caste" class="form-select">
              <option value="">Select Caste</option>
              <option>SC</option>
              <option>ST</option>
              <option>MBC</option>
              <option>BC</option>
              <option>OBC</option>
              <option>FC</option>
              <option>General</option>
            </select>
          </div>
        </div>
      </section>

      <section class="section-divider">
        <h4 class="detail-title">Contact Details</h4>
        <div class="row g-3">
          <div class="col-12"><label class="form-label">Permanent Address</label><textarea v-model="form.permAddress" class="form-control" rows="2" placeholder="Enter Permanent Address"></textarea></div>
          <div class="col-12"><label class="form-label">Present Address</label><textarea v-model="form.presAddress" class="form-control" rows="2" placeholder="Enter Present Address"></textarea></div>
          <div class="col-md-6"><label class="form-label">Contact Telephone Number</label><input v-model="form.contactPhone" class="form-control" type="text" placeholder="Enter Phone Number" /></div>
          <div class="col-md-6"><label class="form-label">Emergency Contact (First Information Given to)</label><input v-model="form.emergencyContact" class="form-control" type="text" placeholder="Enter Emergency Contact Name" /></div>
        </div>
      </section>

      <section class="section-divider">
        <h4 class="detail-title">Medical Details</h4>
        <div class="row g-3">
          <div class="col-md-6"><label class="form-label">Personal Identification Marks</label><input v-model="form.identMark1" class="form-control" type="text" placeholder="Mark 1" /><input v-model="form.identMark2" class="form-control mt-2" type="text" placeholder="Mark 2" /></div>
          <div class="col-md-6"><label class="form-label">Blood Group</label><input v-model="form.bloodGroup" class="form-control" type="text" placeholder="Enter Blood Group" /></div>
        </div>
      </section>

      <section class="section-divider">
        <h4 class="detail-title">Experience &amp; Training</h4>
        <div class="row g-3">
          <div class="col-12"><label class="form-label">Industrial Experience</label><input v-model="form.expCompany" class="form-control" type="text" placeholder="Company Name" /><input v-model="form.expPeriod" class="form-control mt-2" type="text" placeholder="Period" /><input v-model="form.expDesignation" class="form-control mt-2" type="text" placeholder="Designation" /><input v-model="form.expReason" class="form-control mt-2" type="text" placeholder="Reason for Leaving" /></div>
        </div>
        <div class="row g-3 mt-0">
          <div class="col-md-4"><label class="form-label">Reference By</label><input v-model="form.referenceBy" class="form-control" type="text" placeholder="Reference Name" /></div>
          <div class="col-md-4"><label class="form-label">Date of Joining</label><input v-model="form.dateOfJoining" class="form-control" type="date" /></div>
          <div class="col-md-4"><label class="form-label">Area of Training</label><input v-model="form.trainingArea" class="form-control" type="text" placeholder="Enter Training Area" /></div>
        </div>
        <div class="row g-3 mt-0">
          <div class="col-md-3"><label class="form-label">Batch No</label><input v-model="form.batchNo" class="form-control" type="text" placeholder="Batch No" /></div>
          <div class="col-md-3"><label class="form-label">Training Skill</label><input v-model="form.trainingSkill" class="form-control" type="text" placeholder="Skill" /></div>
          <div class="col-md-3"><label class="form-label">Training Period (From)</label><input v-model="form.trainingFrom" class="form-control" type="date" /></div>
          <div class="col-md-3"><label class="form-label">Training Period (To)</label><input v-model="form.trainingTo" class="form-control" type="date" /></div>
        </div>
        <div class="row g-3 mt-0">
          <div class="col-md-6"><label class="form-label">Date of Completion</label><input v-model="form.completionDate" class="form-control" type="date" /></div>
          <div class="col-md-6"><label class="form-label">No of Days Attended</label><input v-model.number="form.daysAttended" class="form-control" type="number" placeholder="Enter No. of Days" /></div>
        </div>
      </section>

      <div class="d-flex justify-content-center mt-3">
        <button class="btn btn-primary" type="submit">Submit</button>
      </div>
    </form>
    <SuccessModal v-if="showSuccess" @close="showSuccess=false" />
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import SuccessModal from '../components/SuccessModal.vue';
const form = reactive({
  faceId: '', osaName: '', cveId: '', service: '', name: '', gender: '', aadhaar: '', dob: '', maritalStatus: '', spouseName: '', qualification: '', fatherName: '', motherName: '', religion: '', caste: '', permAddress: '', presAddress: '', contactPhone: '', emergencyContact: '', identMark1: '', identMark2: '', bloodGroup: '', expCompany: '', expPeriod: '', expDesignation: '', expReason: '', referenceBy: '', dateOfJoining: '', trainingArea: '', batchNo: '', trainingSkill: '', trainingFrom: '', trainingTo: '', completionDate: '', daysAttended: null, photoUrl: ''
});

const onPhotoChange = (e) => {
  const file = e.target.files && e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => { form.photoUrl = String(reader.result || ''); };
  reader.readAsDataURL(file);
};

const showSuccess = ref(false);
const submit = () => {
  console.log('Form submitted', JSON.parse(JSON.stringify(form)));
  showSuccess.value = true;
};
</script>

<style scoped>
.detail-title { font-weight: var(--font-weight-semibold); color: var(--color-dark); margin-bottom: .5rem; }
.section-divider { padding-top: .5rem; margin-top: 1rem; border-top: 1px solid var(--color-border); }
.avatar-fallback { background: var(--color-light); }
</style>
