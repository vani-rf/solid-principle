import { CustomerDao } from "../abstraction/CustomerDao";
import { Customer } from "../entities/Customer";

export class CustomerService {
  private customerDao: CustomerDao;

  constructor(customerDao: CustomerDao) {
    this.customerDao = customerDao;
  }

  public findById(id: number): Customer {
    return this.customerDao.findById(id);
  }

  public findAll(): Customer[] {
    return this.customerDao.findAll();
  }
}
