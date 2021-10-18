export interface Payment {
  initiatePayment(): void;
  status(): object;
  getPayment(): Array<object>;
}

export class BankPayment implements Payment {
    initiatePayment(): void {
        console.log('payment initiated');
        
    }
    status(): object {
        return {}
    }
    getPayment(): object[] {
        return [{}]
    }
}

// example case, karena telah maju maka aplikasi membutuhkan fitur tambahan yaitu pembayaran pinjaman.
// pembayaran pinjaman menerapkan beberapa fitur tambahan pada class nya, jadi interface payment harus di update

