import { Customer } from "./entities/Customer";
import { CustomerService } from "./hight-level/CustomerService";
import { SimpleCustomerDao } from "./low-level/SimpleCustomerDao";

export class MainApp {
  main() {
    const customers: Customer[] = [];
    customers.push(new Customer("vani"));
    customers.push(new Customer("vira"));

    const customerService = new CustomerService(
      new SimpleCustomerDao(customers)
    );

    console.log(customerService.findById(1));
  }
}

const main = new MainApp();
main.main();