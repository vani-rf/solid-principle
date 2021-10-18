export abstract class Account {
  abstract deposit(amount: number): void;

  /**
   * Reduces the balance of the account by the specified amount
   * provided given amount > 0 and account meets minimum available
   * balance criteria.
   */
  abstract withdraw(amount: number): void;
}

export class CurrentAccount extends Account {
  deposit(amount: number): void {}
  withdraw(amount: number): void {}
}

export class SavingAccount extends Account {
  deposit(amount: number): void {}
  withdraw(amount: number): void {}
}

/**
 * case : pada LSP subclass harus mengganti object dari parent tanpa harus merusak fungsinya
 * contoh implemantasi pada class FixedTermDepositAccount pada fungsi withdraw merusak funsgi asli pada parent
 * karena withdraw tidak di dukung di fungsi ini. maka prilaku parent berubah pada child class
 */
export class FixedTermDepositAccount extends Account {
  deposit(amount: number): void {}
  withdraw(amount: number): void {
    throw new Error(
      "Withdrawals are not supported by FixedTermDepositAccount!!"
    );
  }
}

export class BankingAppWithdrawalService {
  private account: Account;

  public constructor(account: Account) {
    this.account = account;
  }

  public withdraw(amount: number) {
    this.account.withdraw(amount);
  }
}
