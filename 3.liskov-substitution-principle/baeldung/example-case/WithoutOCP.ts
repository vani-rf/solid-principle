export class CurrentAccount {
  deposit(amount: number) {}

  withDraw(amount: number) {}
}

export class SavingAccount {
  deposit(amount: number) {}

  withDraw(amount: number) {}
}

export class BankingAppWithdrawalService {
  deposit(amount: number, account: any) {
    if (account instanceof CurrentAccount) {
      const cr = account;
      cr.deposit(amount);
    } else if (account instanceof SavingAccount) {
      const sa = account;
      sa.deposit(amount);
    }
  }

  withDraw(amount: number, account: any) {
    if (account instanceof CurrentAccount) {
      const cr = account;
      cr.withDraw(amount);
    } else if (account instanceof SavingAccount) {
      const sa = account;
      sa.withDraw(amount);
    }
  }
}
