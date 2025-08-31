const mockUsers = [
  {
    faceId: 'F0001', name: 'Anita Kumar', mobile: '9876543210', gender: 'Female', dob: '1996-07-12', aadhaar: '1234 5678 9012', maritalStatus: 'Single', spouseName: '', qualification: 'Degree', fatherName: 'Kumar', motherName: 'Latha', religion: 'Hindu', caste: 'BC', permAddress: 'Chennai', presAddress: 'Chennai', contactPhone: '9876543210', emergencyContact: 'Ravi', marks: ['Mole on left cheek', 'Scar on knee'], bloodGroup: 'B+', experience: [{ company: 'ABC', period: '2020-2022', designation: 'Operator', reason: 'Relocation' }], referenceBy: 'Suresh', dateOfJoining: '2023-01-15', trainingArea: 'Welding', batchNo: 'B12', trainingSkill: 'Welding', trainingFrom: '2023-02-01', trainingTo: '2023-05-30', completionDate: '2023-06-01', daysAttended: 80, status: 'Pending', remarks: ''
  },
  { faceId: 'F0002', name: 'Bala Murugan', mobile: '9876501234', gender: 'Male', dob: '1994-10-02', aadhaar: '2345 6789 0123', maritalStatus: 'Married', spouseName: 'Meena', qualification: 'Diploma', fatherName: 'Raman', motherName: 'Lakshmi', religion: 'Hindu', caste: 'MBC', permAddress: 'Madurai', presAddress: 'Madurai', contactPhone: '9876501234', emergencyContact: 'Arun', marks: ['Tattoo on right arm'], bloodGroup: 'O+', experience: [], referenceBy: 'Karthik', dateOfJoining: '2022-11-05', trainingArea: 'CNC', batchNo: 'B09', trainingSkill: 'CNC', trainingFrom: '2022-12-01', trainingTo: '2023-02-28', completionDate: '2023-03-02', daysAttended: 72, status: 'Accepted', remarks: 'Good' },
  { faceId: 'F0003', name: 'Chitra Devi', mobile: '9003112233', gender: 'Female', dob: '1998-03-21', aadhaar: '3456 7890 1234', maritalStatus: 'Single', spouseName: '', qualification: 'Degree', fatherName: 'Velu', motherName: 'Mala', religion: 'Hindu', caste: 'BC', permAddress: 'Coimbatore', presAddress: 'Coimbatore', contactPhone: '9003112233', emergencyContact: 'Priya', marks: [], bloodGroup: 'A+', experience: [], referenceBy: 'Raja', dateOfJoining: '2023-04-10', trainingArea: 'Assembly', batchNo: 'B14', trainingSkill: 'Assembly', trainingFrom: '2023-04-15', trainingTo: '2023-07-31', completionDate: '2023-08-01', daysAttended: 76, status: 'Rejected', remarks: 'Incomplete docs' },
  { faceId: 'F0004', name: 'Dinesh', mobile: '9012345678', gender: 'Male', dob: '1995-01-05', aadhaar: '4567 8901 2345', maritalStatus: 'Single', spouseName: '', qualification: 'ITI', fatherName: 'Siva', motherName: 'Kala', religion: 'Hindu', caste: 'BC', permAddress: 'Trichy', presAddress: 'Trichy', contactPhone: '9012345678', emergencyContact: 'Babu', marks: [], bloodGroup: 'B-', experience: [], referenceBy: 'Selvam', dateOfJoining: '2022-06-01', trainingArea: 'Painting', batchNo: 'B07', trainingSkill: 'Painting', trainingFrom: '2022-06-05', trainingTo: '2022-09-20', completionDate: '2022-09-25', daysAttended: 68, status: 'Pending', remarks: '' }
];

export function getUsers() {
  return Promise.resolve(mockUsers.map(u => ({ ...u })));
}

export function updateUserStatus(faceId, status, remarks) {
  const u = mockUsers.find(x => x.faceId === faceId);
  if (u) { u.status = status; u.remarks = remarks; }
  return Promise.resolve(u ? { ...u } : null);
}
