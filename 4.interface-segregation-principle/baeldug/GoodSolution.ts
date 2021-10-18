/**
 * untuk solusi kalian bisa menggunakan bridge pattern
 */

export interface Payment {
  status(): object;
  getPayment(): Array<object>;
}

export interface IBankPayment extends Payment {
  initiatePayment(): void;
}

export interface ILoanPayment extends Payment {
  intiateLoanSettlement(): void;
  initiateRePayment(): void;
}

export class BankPayment implements IBankPayment {
  initiatePayment(): void {
    console.log("payment initiated");
  }
  status(): object {
    return {};
  }
  getPayment(): object[] {
    return [{}];
  }
}

export class LoanPayment implements ILoanPayment {
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
