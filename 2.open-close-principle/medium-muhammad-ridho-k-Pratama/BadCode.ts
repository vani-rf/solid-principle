export class SecretaryOfDepartment {
  approveThesisProposal(id: String) {
    // doing approval
  }
}

export class HeadOfStudyProgram {
  approveThesisProposal(id: String) {
    // doing approval
  }
}

export class HeadOfDepartment {
  delegateTask(delegate: any, thesisId: String) {
    if (delegate instanceof SecretaryOfDepartment) {
      delegate.approveThesisProposal(thesisId);
    } else if (delegate instanceof HeadOfStudyProgram) {
      delegate.approveThesisProposal(thesisId);
    }
  }
}


/** Problem
 * Nah, ketika ada perubahan kebutuhan seperti diatas, 
 * class HeadOfDepartment ikut berubah gara-gara si kepala prodi bisa ditugasi untuk melakukan persetuan proposal skripsi.
 * Ini jelas melanggar konsep Open/Closed Principle, yang mana tidak boleh ada modifikasi suatu entitas software, 
 * baik class, function, modul, atau lainnya. Selain itu pula, 
 * class HeadOfDepartment juga memiliki coupling yang tinggi terhadap class lain, 
 * sehingga ketika kita akan melakukan unit test, kita akan kesulitan untuk membongkar pasang dependencynya, 
 * dalam hal ini si delegate yang bisa saja sebagai sekretaris jurusan maupun ketua prodi.
 */