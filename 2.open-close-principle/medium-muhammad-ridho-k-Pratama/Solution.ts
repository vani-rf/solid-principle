export interface ThesisApprovalOfficer {
  approveThesisProposal(id: String): void;
}

export class SecretaryOfDepartment implements ThesisApprovalOfficer {
  approveThesisProposal(id: String) {
    // doing approval
  }
}

export class HeadOfStudyProgram implements ThesisApprovalOfficer {
  approveThesisProposal(id: String) {
    // doing approval
  }
}

export class HeadOfDepartment {
  delegateTask(delegate: ThesisApprovalOfficer, thesisId: String) {
    delegate.approveThesisProposal(thesisId);
  }
}

/**
 * Kalau misalnya ada perubahan kebutuhan lagi, 
 * si kepala jurusan bisa mendelegasikan tugas kepada staf akademik untuk melakukan persetujuan proposal skripsi, 
 * maka selama si staf akademik menyepakati kontrak sebagai ThesisApprovalOfficer , 
 * maka class HeadOfDepartment tidak perlu diubah-ubah lagi, karena dependencynya sudah diabstraksi.
 */