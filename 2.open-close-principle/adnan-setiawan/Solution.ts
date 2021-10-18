export interface ICustomer {
  name(): string;
  getDiscount(TotalSales: number): number;
}

export interface ISpecialService {
  getSpecialService(): string[];
}

export class GoldCustomer implements ICustomer, ISpecialService {
  name(): string {
    return "gold";
  }

  getDiscount(totalSales: number): number {
    return totalSales - 100;
  }

  getSpecialService(): string[] {
    return ["free cashback"];
  }
}

export class SilverCustomer implements ICustomer {
  name(): string {
    return "gold";
  }

  getDiscount(totalSales: number): number {
    return totalSales - 50;
  }
}

export class DiscountService {
  private _totalSales: number;
  private _customer: ICustomer;

  constructor(TotalSales: number, customes: ICustomer) {
    this._totalSales = TotalSales;
    this._customer = customes;
  }

  public GetDiscount() {
    return this._customer.getDiscount(this._totalSales);
  }
}

export class SpecialService {
  constructor(private customer: ISpecialService) {}

  getServices() {
    this.customer.getSpecialService();
  }
}

const silverCustomer = new SilverCustomer();
const goldCustomer = new GoldCustomer();

const discountSilverService = new DiscountService(1000, silverCustomer);
const discountGoldService = new DiscountService(1000, silverCustomer);
const splecialService = new SpecialService(goldCustomer);
