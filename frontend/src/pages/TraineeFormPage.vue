<template>
  <div>
    <img class="brand-logo" src="https://cdn.builder.io/api/v1/image/assets%2Fc98c532ea1554d2d9b237baf37efdf95%2F1bd2ceab768347d2a4c36137838a0f37?format=webp&width=800" alt="CVE & WD Logo" loading="lazy" />
    <h2 class="detail-title section-heading text-center text-primary mb-3">Trainee Data &amp; Screening Form</h2>
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
        <div class="row g-3 mt-0">
          <div class="col-md-3">
            <label class="form-label">Area</label>
            <input v-model="form.area" class="form-control" type="text" placeholder="Enter Area" />
          </div>
          <div class="col-md-3">
            <label class="form-label">OSA</label>
            <input v-model="form.osa" class="form-control" type="text" placeholder="Enter OSA" />
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
          <div class="col-md-4" v-if="form.maritalStatus==='Married'"><label class="form-label">Spouse Name</label><input v-model="form.spouseName" class="form-control" type="text" placeholder="Enter Spouse Name" /></div>
          <div class="col-md-4" v-else-if="form.maritalStatus==='Single'"><label class="form-label">Sibling Name</label><input v-model="form.siblingName" class="form-control" type="text" placeholder="Enter Sibling Name" /></div>
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
          <div class="col-12"><label class="form-label">Educational Status</label>
            <select v-model="form.educationalStatus" class="form-select">
              <option value="">Select Status</option>
              <option>Pass</option>
              <option>Fail</option>
              <option>Discontinue</option>
            </select>
          </div>
        </div>
        <div class="row g-3 mt-0">
          <div class="col-md-6"><label class="form-label">Father Name</label><input v-model="form.fatherName" class="form-control" type="text" placeholder="Enter Father Name" /></div>
          <div class="col-md-6"><label class="form-label">Mother Name</label><input v-model="form.motherName" class="form-control" type="text" placeholder="Enter Mother Name" /></div>
        </div>
        <div class="row g-3 mt-0">
          <div class="col-md-3"><label class="form-label">Father Occupation</label><input v-model="form.fatherOccupation" class="form-control" type="text" placeholder="Enter Father Occupation" /></div>
          <div class="col-md-3"><label class="form-label">Mother Occupation</label><input v-model="form.motherOccupation" class="form-control" type="text" placeholder="Enter Mother Occupation" /></div>
          <div class="col-md-3"><label class="form-label">Native Place</label><input v-model="form.nativePlace" class="form-control" type="text" placeholder="Enter Native Place" /></div>
          <div class="col-md-3"><label class="form-label">Other Sources of Income (if any)</label><input v-model="form.otherIncome" class="form-control" type="text" placeholder="Specify if any" /></div>
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
        <div class="row g-3 mt-0">
          <div class="col-12">
            <label class="form-label">List of Records Available</label>
            <div class="d-flex flex-wrap align-items-center gap-3">
              <div class="form-check form-check-inline me-3">
                <input class="form-check-input" type="checkbox" id="recVoter" value="Voter ID" v-model="form.recordsAvailable">
                <label class="form-check-label" for="recVoter">Voter ID</label>
              </div>
              <div class="form-check form-check-inline me-3">
                <input class="form-check-input" type="checkbox" id="recTC" value="School Transfer Certificate" v-model="form.recordsAvailable">
                <label class="form-check-label" for="recTC">School Transfer Certificate</label>
              </div>
              <div class="form-check form-check-inline me-3">
                <input class="form-check-input" type="checkbox" id="recPAN" value="PAN Card" v-model="form.recordsAvailable">
                <label class="form-check-label" for="recPAN">PAN Card</label>
              </div>
              <div class="form-check form-check-inline me-3">
                <input class="form-check-input" type="checkbox" id="recRation" value="Ration Card" v-model="form.recordsAvailable">
                <label class="form-check-label" for="recRation">Ration Card</label>
              </div>
              <div class="form-check form-check-inline me-3">
                <input class="form-check-input" type="checkbox" id="recDL" value="Driving License" v-model="form.recordsAvailable">
                <label class="form-check-label" for="recDL">Driving License</label>
              </div>
              <div class="form-check form-check-inline me-3">
                <input class="form-check-input" type="checkbox" id="recOther" value="Other" v-model="form.recordsAvailable">
                <label class="form-check-label" for="recOther">Other</label>
              </div>
              <div class="flex-grow-1" v-if="form.recordsAvailable.includes('Other')">
                <input v-model="form.recordsOther" class="form-control" type="text" placeholder="Please specify other record" />
              </div>
            </div>
          </div>
        </div>
        <div class="row g-3 mt-0">
          <div class="col-12">
            <label class="form-label">Languages Known</label>
            <div class="d-flex flex-wrap align-items-center gap-3">
              <div class="form-check form-check-inline me-3">
                <input class="form-check-input" type="checkbox" id="langTamil" value="Tamil" v-model="form.languagesKnown">
                <label class="form-check-label" for="langTamil">Tamil</label>
              </div>
              <div class="form-check form-check-inline me-3">
                <input class="form-check-input" type="checkbox" id="langEnglish" value="English" v-model="form.languagesKnown">
                <label class="form-check-label" for="langEnglish">English</label>
              </div>
              <div class="form-check form-check-inline me-3">
                <input class="form-check-input" type="checkbox" id="langTelugu" value="Telugu" v-model="form.languagesKnown">
                <label class="form-check-label" for="langTelugu">Telugu</label>
              </div>
              <div class="form-check form-check-inline me-3">
                <input class="form-check-input" type="checkbox" id="langKannada" value="Kannada" v-model="form.languagesKnown">
                <label class="form-check-label" for="langKannada">Kannada</label>
              </div>
              <div class="form-check form-check-inline me-3">
                <input class="form-check-input" type="checkbox" id="langOther" value="Other" v-model="form.languagesKnown">
                <label class="form-check-label" for="langOther">Other</label>
              </div>
              <div class="flex-grow-1" v-if="form.languagesKnown.includes('Other')">
                <input v-model="form.languagesOther" class="form-control" type="text" placeholder="Please specify other language" />
              </div>
            </div>
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

      <section class="section-divider">
        <h4 class="detail-title">Other Details</h4>
        <div class="row g-3">
          <div class="col-sm-6 col-lg-4 col-xl-3">
            <label class="form-label">Physical / Mental fitness</label>
            <div class="d-flex flex-wrap align-items-center gap-3">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" id="pmOk" name="pmFitness" value="OK" v-model="form.physicalFitness">
                <label class="form-check-label" for="pmOk">OK</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" id="pmNotOk" name="pmFitness" value="Not OK" v-model="form.physicalFitness">
                <label class="form-check-label" for="pmNotOk">Not OK</label>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-lg-4 col-xl-3">
            <label class="form-label">Eye Test Report Submitted</label>
            <div class="d-flex flex-wrap align-items-center gap-3">
              <div class="form-check form-check-inline"><input class="form-check-input" type="radio" id="eyeYes" name="eyeTest" value="Yes" v-model="form.eyeTestReport"><label class="form-check-label" for="eyeYes">Yes</label></div>
              <div class="form-check form-check-inline"><input class="form-check-input" type="radio" id="eyeNo" name="eyeTest" value="No" v-model="form.eyeTestReport"><label class="form-check-label" for="eyeNo">No</label></div>
              <div class="form-check form-check-inline"><input class="form-check-input" type="radio" id="eyeNA" name="eyeTest" value="NA" v-model="form.eyeTestReport"><label class="form-check-label" for="eyeNA">NA</label></div>
            </div>
          </div>

          <div class="col-sm-6 col-lg-4 col-xl-3">
            <label class="form-label">Age Proof Submitted</label>
            <div class="d-flex flex-wrap align-items-center gap-3">
              <div class="form-check form-check-inline"><input class="form-check-input" type="radio" id="ageYes" name="ageProof" value="Yes" v-model="form.ageProof"><label class="form-check-label" for="ageYes">Yes</label></div>
              <div class="form-check form-check-inline"><input class="form-check-input" type="radio" id="ageNo" name="ageProof" value="No" v-model="form.ageProof"><label class="form-check-label" for="ageNo">No</label></div>
              <div class="form-check form-check-inline"><input class="form-check-input" type="radio" id="ageNA" name="ageProof" value="NA" v-model="form.ageProof"><label class="form-check-label" for="ageNA">NA</label></div>
            </div>
          </div>

          <div class="col-sm-6 col-lg-4 col-xl-3">
            <label class="form-label">Medical Report Submitted</label>
            <div class="d-flex flex-wrap align-items-center gap-3">
              <div class="form-check form-check-inline"><input class="form-check-input" type="radio" id="medYes" name="medReport" value="Yes" v-model="form.medicalReport"><label class="form-check-label" for="medYes">Yes</label></div>
              <div class="form-check form-check-inline"><input class="form-check-input" type="radio" id="medNo" name="medReport" value="No" v-model="form.medicalReport"><label class="form-check-label" for="medNo">No</label></div>
              <div class="form-check form-check-inline"><input class="form-check-input" type="radio" id="medNA" name="medReport" value="NA" v-model="form.medicalReport"><label class="form-check-label" for="medNA">NA</label></div>
            </div>
          </div>

          <div class="col-12">
            <label class="form-label">Driving License availability</label>
            <div class="d-flex flex-wrap align-items-center gap-3">
              <div class="form-check form-check-inline"><input class="form-check-input" type="radio" id="dlYes" name="dlAvail" value="Yes" v-model="form.drivingLicense"><label class="form-check-label" for="dlYes">Yes</label></div>
              <div class="form-check form-check-inline"><input class="form-check-input" type="radio" id="dlNo" name="dlAvail" value="No" v-model="form.drivingLicense"><label class="form-check-label" for="dlNo">No</label></div>
              <div class="form-check form-check-inline"><input class="form-check-input" type="radio" id="dlNA" name="dlAvail" value="NA" v-model="form.drivingLicense"><label class="form-check-label" for="dlNA">NA</label></div>
            </div>
          </div>

          <div class="col-12">
            <label class="form-label">Knowledge of work</label>
            <div class="d-flex flex-wrap align-items-center gap-3">
              <div class="form-check form-check-inline"><input class="form-check-input" type="radio" id="kowAgree" name="kow" value="Agreed" v-model="form.knowledgeOfWork"><label class="form-check-label" for="kowAgree">Agreed</label></div>
              <div class="form-check form-check-inline"><input class="form-check-input" type="radio" id="kowDisagree" name="kow" value="Disagreed" v-model="form.knowledgeOfWork"><label class="form-check-label" for="kowDisagree">Disagreed</label></div>
            </div>
          </div>

          <div class="col-12">
            <label class="form-label">Salary Details</label>
            <div class="d-flex flex-wrap align-items-center gap-3">
              <div class="form-check form-check-inline"><input class="form-check-input" type="radio" id="salAgree" name="salary" value="Agreed" v-model="form.salaryDetailsAgreement"><label class="form-check-label" for="salAgree">Agreed</label></div>
              <div class="form-check form-check-inline"><input class="form-check-input" type="radio" id="salDisagree" name="salary" value="Disagreed" v-model="form.salaryDetailsAgreement"><label class="form-check-label" for="salDisagree">Disagreed</label></div>
            </div>
          </div>

          <div class="col-12">
            <label class="form-label">Orientation about the respective OSSP</label>
            <div class="d-flex flex-wrap align-items-center gap-3">
              <div class="form-check form-check-inline"><input class="form-check-input" type="radio" id="osspYes" name="ossp" value="Yes" v-model="form.orientationOSSP"><label class="form-check-label" for="osspYes">Yes</label></div>
              <div class="form-check form-check-inline"><input class="form-check-input" type="radio" id="osspNo" name="ossp" value="No" v-model="form.orientationOSSP"><label class="form-check-label" for="osspNo">No</label></div>
            </div>
          </div>

          <div class="col-12">
            <label class="form-label">Briefing on benefits</label>
            <div class="d-flex flex-wrap align-items-center gap-3 mb-1">
              <div class="form-check form-check-inline"><input class="form-check-input" type="radio" id="benefYes" name="benefBrief" value="Yes" v-model="form.benefitsBriefing"><label class="form-check-label" for="benefYes">Yes</label></div>
              <div class="form-check form-check-inline"><input class="form-check-input" type="radio" id="benefNo" name="benefBrief" value="No" v-model="form.benefitsBriefing"><label class="form-check-label" for="benefNo">No</label></div>
            </div>
            <div class="ps-2">
              <div class="small mb-1">a. Briefing on statutory benefits</div>
              <div class="d-flex flex-wrap align-items-center gap-3">
                <div class="form-check form-check-inline"><input class="form-check-input" type="radio" id="benStatYes" name="benStat" value="Yes" v-model="form.benefitsStatutory"><label class="form-check-label" for="benStatYes">Yes</label></div>
                <div class="form-check form-check-inline"><input class="form-check-input" type="radio" id="benStatNo" name="benStat" value="No" v-model="form.benefitsStatutory"><label class="form-check-label" for="benStatNo">No</label></div>
              </div>
              <div class="small mb-1 mt-2">b. Briefing on PPE</div>
              <div class="d-flex flex-wrap align-items-center gap-3">
                <div class="form-check form-check-inline"><input class="form-check-input" type="radio" id="benPpeYes" name="benPpe" value="Yes" v-model="form.benefitsPPE"><label class="form-check-label" for="benPpeYes">Yes</label></div>
                <div class="form-check form-check-inline"><input class="form-check-input" type="radio" id="benPpeNo" name="benPpe" value="No" v-model="form.benefitsPPE"><label class="form-check-label" for="benPpeNo">No</label></div>
              </div>
              <div class="small mb-1 mt-2">c. Briefing on ESI/PF</div>
              <div class="d-flex flex-wrap align-items-center gap-3">
                <div class="form-check form-check-inline"><input class="form-check-input" type="radio" id="benEsiYes" name="benEsi" value="Yes" v-model="form.benefitsESIPF"><label class="form-check-label" for="benEsiYes">Yes</label></div>
                <div class="form-check form-check-inline"><input class="form-check-input" type="radio" id="benEsiNo" name="benEsi" value="No" v-model="form.benefitsESIPF"><label class="form-check-label" for="benEsiNo">No</label></div>
              </div>
              <div class="small mb-1 mt-2">d. Briefing on rewards/suggestions</div>
              <div class="d-flex flex-wrap align-items-center gap-3">
                <div class="form-check form-check-inline"><input class="form-check-input" type="radio" id="benRewYes" name="benRew" value="Yes" v-model="form.benefitsRewards"><label class="form-check-label" for="benRewYes">Yes</label></div>
                <div class="form-check form-check-inline"><input class="form-check-input" type="radio" id="benRewNo" name="benRew" value="No" v-model="form.benefitsRewards"><label class="form-check-label" for="benRewNo">No</label></div>
              </div>
            </div>
          </div>

          <div class="col-12">
            <label class="form-label">Briefing on the Nature of job</label>
            <div class="d-flex flex-wrap align-items-center gap-3">
              <div class="form-check form-check-inline"><input class="form-check-input" type="radio" id="jobBriefYes" name="jobBrief" value="Yes" v-model="form.natureOfJobBriefing"><label class="form-check-label" for="jobBriefYes">Yes</label></div>
              <div class="form-check form-check-inline"><input class="form-check-input" type="radio" id="jobBriefNo" name="jobBrief" value="No" v-model="form.natureOfJobBriefing"><label class="form-check-label" for="jobBriefNo">No</label></div>
            </div>
          </div>

          <div class="col-12">
            <div class="d-flex flex-wrap align-items-center gap-4">
              <div class="form-check">
                <input class="form-check-input" type="radio" id="decisionTaken" name="trainingDecision" value="Taken for Training" v-model="form.trainingDecision">
                <label class="form-check-label" for="decisionTaken">Taken for Training</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" id="decisionRejected" name="trainingDecision" value="Rejected" v-model="form.trainingDecision">
                <label class="form-check-label" for="decisionRejected">Rejected</label>
              </div>
            </div>
          </div>

          <div class="col-12"><label class="form-label">Comments</label><textarea v-model="form.comments" class="form-control" rows="2" placeholder="Enter comments"></textarea></div>
          <div class="col-md-6"><label class="form-label">Filled by</label><input v-model="form.filledBy" class="form-control" type="text" placeholder="Enter name" /></div>
          <div class="col-md-6"><label class="form-label">OSA Signature</label><input v-model="form.osaSignature" class="form-control" type="text" placeholder="Enter signature name" /></div>
        </div>
      </section>

      <div class="d-flex justify-content-center my-4 pt-3">
        <button class="btn btn-primary px-5" type="submit">Submit</button>
      </div>
    </form>
    <SuccessModal v-if="showSuccess" @close="showSuccess=false" />
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import SuccessModal from '../components/SuccessModal.vue';
const form = reactive({
  faceId: '', osaName: '', cveId: '', service: '', area: '', osa: '', name: '', gender: '', aadhaar: '', dob: '', maritalStatus: '', spouseName: '', siblingName: '', qualification: '', educationalStatus: '', fatherName: '', motherName: '', fatherOccupation: '', motherOccupation: '', nativePlace: '', otherIncome: '', religion: '', caste: '', permAddress: '', presAddress: '', contactPhone: '', emergencyContact: '', identMark1: '', identMark2: '', bloodGroup: '', expCompany: '', expPeriod: '', expDesignation: '', expReason: '', referenceBy: '', dateOfJoining: '', trainingArea: '', batchNo: '', trainingSkill: '', trainingFrom: '', trainingTo: '', completionDate: '', daysAttended: null, photoUrl: '', recordsAvailable: [], recordsOther: '', languagesKnown: [], languagesOther: '',
  physicalFitness: '', eyeTestReport: '', ageProof: '', medicalReport: '', drivingLicense: '', knowledgeOfWork: '', salaryDetailsAgreement: '', orientationOSSP: '', benefitsBriefing: '', benefitsStatutory: '', benefitsPPE: '', benefitsESIPF: '', benefitsRewards: '', natureOfJobBriefing: '', trainingDecision: '', comments: '', filledBy: '', osaSignature: ''
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
.detail-title { font-weight: var(--font-weight-semibold); color: var(--color-dark); margin-bottom: .5rem;margin-top: 1.5rem; }
/*.section-divider { padding-top: .5rem; margin-top: 1rem; border-top: 1px solid var(--color-border); }*/
.avatar-fallback { background: var(--color-light); }
</style>
