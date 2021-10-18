export class DiscountService {
  private GOLD: number = 1;
  private SILVER: number = 2;
  private _totalSales: number;
  private _custType: number;

  constructor(TotalSales: number) {
    this._totalSales = TotalSales;
  }

  get custType() {
    return this.custType;
  }

  set custType(value: number) {
    this._custType = value;
  }

  public GetDiscount() {
    if (this._custType == this.GOLD) {
      return this._totalSales - 100;
    } else if (this._custType == this.SILVER) {
      return this._totalSales - 50;
    }
    return this._totalSales;
  }
}

/**
 * Masalah timbul ketika kita akan menambahkan beberapa tipe customer lain, 
 * maka akan sangat banyak kondisi “IF” di dalam kode program. 
 * Menambahkan kondisi “IF” baru artinya kita mengubah class CustomerService 
 * dan itu melanggar prinsip Close for modification.
 */
