/** implement signature rule Method Argument Types*/

export class CurrentAccount {
  deposit(amount: number): void {}
  withdraw(amount: number) {
    console.log("draw with amount :", amount);
  }
}

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
