import { Customer } from "../entities/Customer";

export interface CustomerDao {
   findById(id: number): Customer;

   findAll(): Customer[];
}