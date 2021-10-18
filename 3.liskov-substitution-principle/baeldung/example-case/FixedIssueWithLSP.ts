/**
 * karena class FixedTermDepositAccount tidak bisa mengsubtitute class account,
 * maka kita perlu mereconstruksi skema
 * pada kasusu kita dapat menggunakan bridge pattern
 * doc bridge pattern : https://refactoring.guru/design-patterns/bridge
 */

interface Account {
  deposit(amount: number): void;
}

// gunakan bridge untuk memisahkan account dengan withdraw dan yang tidak
interface WithdrawableAccount extends Account {
  withdraw(amount: number): void;
}

interface TermDepositAccount extends Account {}

// implement akun yang WithdrawableAccount
export class CurrentAccount implements WithdrawableAccount {
  deposit(amount: number): void {}
  withdraw(amount: number) {
    console.log("draw with amount :", amount);
  }
}

/** implement signature rule */
export class BalanceAccount extends CurrentAccount {
  // example signature rule
  withdraw(amount: number): void;
  withdraw(amount: number, type: string): void;
  withdraw(amount: any, type?: any) {
    super.withdraw(amount);
    if (type && type === "unlimited") {
      console.log("your balance is unlimited");
    } else if (type && type === "balance") {
      console.log("your balance need to check");
    }
  }
}

const currentAccount = new CurrentAccount();
currentAccount.withdraw(1000);

const balanceAccount = new BalanceAccount();
balanceAccount.withdraw(1000, "balance");

export class SavingAccount implements WithdrawableAccount {
  deposit(amount: number): void {}
  withdraw(amount: number): void {}
}

// implementasi akun yang FixedTermDepositAccount
export class FixedTermDepositAccount implements TermDepositAccount {
  deposit(amount: number): void {}
}

// update banking withdraw account
export class BankingAppWithdrawalService {
  private account: WithdrawableAccount;

  public constructor(account: WithdrawableAccount) {
    this.account = account;
  }

  public withdraw(amount: number) {
    this.account.withdraw(amount);
  }
}
