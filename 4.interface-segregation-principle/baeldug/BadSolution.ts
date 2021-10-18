export interface Payment {
  initiatePayment(): void;
  status(): object;
  getPayment(): Array<object>;
  intiateLoanSettlement(): void;
  initiateRePayment(): void;
}

export class BankPayment implements Payment {
  initiatePayment(): void {
    console.log("payment initiated");
  }
  status(): object {
    return {};
  }
  getPayment(): object[] {
    return [{}];
  }

  intiateLoanSettlement(): void {
    throw new Error("Unsupport Loan Payment.");
  }
  initiateRePayment(): void {
    throw new Error("Unsupport Loan Payment.");
  }
}

export class LoanPayment implements Payment {
  initiatePayment(): void {
    throw new Error("Upsupport Payment not bank payment.");
  }
  status(): object {
    return {};
  }
  getPayment(): object[] {
    return [{}];
  }
  intiateLoanSettlement(): void {
    console.log("loan settlement initiated");
  }
  initiateRePayment(): void {
    console.log("payment reinitiated");
  }
}

// problem : pada saat ini interface payment di update dan akhirnya semua class yang mengimplementasikan interface payment harus di ubah.
// pada peubahan yang terjadi karena interface payment terlalu lengkap, maka yang terjadi adalah
// class BankPayment terpaksa meimplementasikan fungsi-fungsi yang ada pada LoanPayment, begitu pula sebaliknya
// hal ini tentu saja melanggar prinsip interface segregation dan liskov subtitute
