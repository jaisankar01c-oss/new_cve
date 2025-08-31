<template>
  <div class="container-flow">
    <div class="card-surface card-padding">
      <div class="form-title-wrap">
        <div class="brand-mark" aria-hidden="true">CVE</div>
        <h2 class="section-title form-title">Trainee Data &amp; Screening Form</h2>
      </div>
      <form @submit.prevent="submit">
        <h4 class="section-title">Official Information</h4>
        <div class="form-row">
          <div class="col-3">
            <label class="label">FACE ID</label>
            <input v-model="form.faceId" class="input-field" type="text" placeholder="Enter FACE ID" />
          </div>
          <div class="col-3">
            <label class="label">Name of the OSA</label>
            <input v-model="form.osaName" class="input-field" type="text" placeholder="Enter OSA Name" />
          </div>
          <div class="col-3">
            <label class="label">CVE ID No</label>
            <input v-model="form.cveId" class="input-field" type="text" placeholder="Enter CVE ID No" />
          </div>
          <div class="col-3">
            <label class="label">Nature of Service</label>
            <input v-model="form.service" class="input-field" type="text" placeholder="Enter Nature of Service" />
          </div>
        </div>

        <h4 class="section-title" style="margin-top:10px">Personal Information</h4>
        <div class="form-row">
          <div class="col-4"><label class="label">Name</label><input v-model="form.name" class="input-field" type="text" placeholder="Enter Name" /></div>
          <div class="col-4"><label class="label">Gender</label>
            <select v-model="form.gender" class="select-field">
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Transgender</option>
            </select>
          </div>
          <div class="col-4"><label class="label">Aadhaar No</label><input v-model="form.aadhaar" class="input-field" type="text" placeholder="Enter Aadhaar Number" /></div>
        </div>
        <div class="form-row">
          <div class="col-4"><label class="label">Date of Birth</label><input v-model="form.dob" class="input-field" type="date" /></div>
          <div class="col-4"><label class="label">Marital Status</label>
            <select v-model="form.maritalStatus" class="select-field">
              <option value="">Select</option>
              <option>Married</option>
              <option>Single</option>
            </select>
          </div>
          <div class="col-4"><label class="label">Spouse Name</label><input v-model="form.spouseName" class="input-field" type="text" placeholder="Enter Spouse Name" /></div>
        </div>
        <div class="form-row">
          <div class="col-12"><label class="label">Educational Qualification</label>
            <select v-model="form.qualification" class="select-field">
              <option value="">Select Qualification</option>
              <option>School</option>
              <option>ITI</option>
              <option>Diploma</option>
              <option>Degree</option>
            </select>
          </div>
        </div>
        <div class="form-row">
          <div class="col-6"><label class="label">Father Name</label><input v-model="form.fatherName" class="input-field" type="text" placeholder="Enter Father Name" /></div>
          <div class="col-6"><label class="label">Mother Name</label><input v-model="form.motherName" class="input-field" type="text" placeholder="Enter Mother Name" /></div>
        </div>
        <div class="form-row">
          <div class="col-6"><label class="label">Religion</label>
            <select v-model="form.religion" class="select-field">
              <option value="">Select Religion</option>
              <option>Hindu</option>
              <option>Christian</option>
              <option>Muslim</option>
            </select>
          </div>
          <div class="col-6"><label class="label">Caste</label>
            <select v-model="form.caste" class="select-field">
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

        <h4 class="section-title" style="margin-top:10px">Contact Details</h4>
        <div class="form-row"><div class="col-12"><label class="label">Permanent Address</label><textarea v-model="form.permAddress" class="textarea-field" rows="2" placeholder="Enter Permanent Address"></textarea></div></div>
        <div class="form-row"><div class="col-12"><label class="label">Present Address</label><textarea v-model="form.presAddress" class="textarea-field" rows="2" placeholder="Enter Present Address"></textarea></div></div>
        <div class="form-row">
          <div class="col-6"><label class="label">Contact Telephone Number</label><input v-model="form.contactPhone" class="input-field" type="text" placeholder="Enter Phone Number" /></div>
          <div class="col-6"><label class="label">Emergency Contact (First Information Given to)</label><input v-model="form.emergencyContact" class="input-field" type="text" placeholder="Enter Emergency Contact Name" /></div>
        </div>

        <h4 class="section-title" style="margin-top:10px">Medical Details</h4>
        <div class="form-row">
          <div class="col-6"><label class="label">Personal Identification Marks</label><input v-model="form.identMark1" class="input-field" type="text" placeholder="Mark 1" /><input v-model="form.identMark2" class="input-field" type="text" placeholder="Mark 2" style="margin-top:8px" /></div>
          <div class="col-6"><label class="label">Blood Group</label><input v-model="form.bloodGroup" class="input-field" type="text" placeholder="Enter Blood Group" /></div>
        </div>

        <h4 class="section-title" style="margin-top:10px">Experience & Training</h4>
        <div class="form-row">
          <div class="col-12"><label class="label">Industrial Experience</label><input v-model="form.expCompany" class="input-field" type="text" placeholder="Company Name" /><input v-model="form.expPeriod" class="input-field" type="text" placeholder="Period" style="margin-top:8px" /><input v-model="form.expDesignation" class="input-field" type="text" placeholder="Designation" style="margin-top:8px" /><input v-model="form.expReason" class="input-field" type="text" placeholder="Reason for Leaving" style="margin-top:8px" /></div>
        </div>
        <div class="form-row">
          <div class="col-4"><label class="label">Reference By</label><input v-model="form.referenceBy" class="input-field" type="text" placeholder="Reference Name" /></div>
          <div class="col-4"><label class="label">Date of Joining</label><input v-model="form.dateOfJoining" class="input-field" type="date" /></div>
          <div class="col-4"><label class="label">Area of Training</label><input v-model="form.trainingArea" class="input-field" type="text" placeholder="Enter Training Area" /></div>
        </div>
        <div class="form-row">
          <div class="col-3"><label class="label">Batch No</label><input v-model="form.batchNo" class="input-field" type="text" placeholder="Batch No" /></div>
          <div class="col-3"><label class="label">Training Skill</label><input v-model="form.trainingSkill" class="input-field" type="text" placeholder="Skill" /></div>
          <div class="col-3"><label class="label">Training Period (From)</label><input v-model="form.trainingFrom" class="input-field" type="date" /></div>
          <div class="col-3"><label class="label">Training Period (To)</label><input v-model="form.trainingTo" class="input-field" type="date" /></div>
        </div>
        <div class="form-row">
          <div class="col-6"><label class="label">Date of Completion</label><input v-model="form.completionDate" class="input-field" type="date" /></div>
          <div class="col-6"><label class="label">No of Days Attended</label><input v-model.number="form.daysAttended" class="input-field" type="number" placeholder="Enter No. of Days" /></div>
        </div>

        <div style="display:flex; justify-content:center; margin-top:12px;">
          <button class="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
      <SuccessModal v-if="showSuccess" @close="showSuccess=false" />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import SuccessModal from '../components/SuccessModal.vue';
const form = reactive({
  faceId: '', osaName: '', cveId: '', service: '', name: '', gender: '', aadhaar: '', dob: '', maritalStatus: '', spouseName: '', qualification: '', fatherName: '', motherName: '', religion: '', caste: '', permAddress: '', presAddress: '', contactPhone: '', emergencyContact: '', identMark1: '', identMark2: '', bloodGroup: '', expCompany: '', expPeriod: '', expDesignation: '', expReason: '', referenceBy: '', dateOfJoining: '', trainingArea: '', batchNo: '', trainingSkill: '', trainingFrom: '', trainingTo: '', completionDate: '', daysAttended: null
});

const showSuccess = ref(false);
const submit = () => {
  console.log('Form submitted', JSON.parse(JSON.stringify(form)));
  showSuccess.value = true;
};
</script>

<style scoped>
.form-title-wrap { display: flex; flex-direction: column; align-items: center; gap: 6px; margin-bottom: 6px; }
.form-title { font-size: 20px; text-align: center; }
.brand-mark { width: 56px; height: 56px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; color: var(--brand-700); background: var(--brand-50); border: 1px solid var(--border); box-shadow: 0 2px 8px rgba(0,0,0,.04); }
</style>
