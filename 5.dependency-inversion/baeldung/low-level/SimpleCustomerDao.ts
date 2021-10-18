import { CustomerDao } from "../abstraction/CustomerDao";
import { Customer } from "../entities/Customer";

export class SimpleCustomerDao implements CustomerDao {
  constructor(private customers: Customer[]) {}

  public findById(id: number): Customer {
    return this.customers[id];
  }

  public findAll(): Customer[] {
    return this.customers;
  }
}
