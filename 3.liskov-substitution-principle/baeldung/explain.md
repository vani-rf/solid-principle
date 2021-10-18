## Relate With Open Closed Principle

untuk memahami konsep liskov subtitute terlebih dahulu kita harus memahami prinsip open/close
tujuan dari prinsip open/close untuk mendorong kita mengembangkan desain software dengan menambah
fungsi pada class.

## The Liskov Substitution Principle

### definition

> Subtypes must be substitutable for their base types

Barbara Liskov, defining it in 1988, provided a more mathematical definition:

> If for each object o1 of type S there is an object o2 of type T such that for all programs P defined in terms of T, the behavior of P is unchanged when o1 is substituted for o2 then S is a subtype of T.

## rules

In their book Program Development in Java: Abstraction, Specification, and Object-Oriented Design, Barbara Liskov and John Guttag grouped these rules into three categories – the signature rule, the properties rule, and the methods rule.

### Signature Rule

- Method Argument Types
  Aturan ini menyatakan bahwa tipe argumen pada pada method di subtype yang diganti bisa identik atau lebih banyak dari tipe argumen pada metode basetype.
- Return Types
  return type pada subclass bisa diganti dengan type yang lebih sempit dari supertype, metode ini di sebut **covariance**. covariance menunjukkan bahwa subtype di terima sebagai pengganti supertype.
  contoh pada superclass return type double tapi pada subclass return type integer.

- Exception
  method pada subtype dapat mengembalikan exception yang lebih specific dari exception supertype, tapi tidak boleh lebih luas / mengganti exception pada supertype.

### Properties Rule

- class invariant
  Class invariant adalah pernyataan tentang properti objek yang harus benar untuk semua status objek yang valid.
  penambahan kode pada subtype tidak boleh merubah invarian, cotoh

  ```ts
  abstract class Car {
    protected limit: number;

    // invariant: speed < limit;
    protected speed: number;

    // postcondition: speed < limit
    protected abstract accelerate(): void;

    // Other methods...
  }
  ```

  > pada class Car ada aturan bahwa speed harus dibawah limit aturan ini harus diterapkan pada semua subclass

  subclass :

  ```ts
  class HybridCar extends Car {
    // invariant: charge >= 0;
    private charge: number;

    @Override
    // postcondition: speed < limit
    protected accelerate(): void {
      // Accelerate HybridCar ensuring speed < limit
    }

    // Other methods...
  }
  ```

  > invarian car pada fungsi **accelerate** tetap dipertahankan, dan HybridClass menetapkan invarian baru charge >=0. dan ini tidak masalah

- History Constraint
  bahwa semua state (attribut / method) yang sudah ditetapkan atau attribute hanya satu kali inisiasi pada supertype tidak boleh dirubah value / funsinya nya pada subtype. contoh, class Car menetapkan attribute jarak tempuh yang tidak boleh dirubah dan hanya sekali inisiasi pada contructor. maka pada class child, contoh ada class SportCar yang mengextends class Car, pada class SportCar batasan kecepatan tidak boleh dirubah nilainya

### Method rule

- Preconditions
  precondition merupakan persyaratan yang harus dipenuhi sebelum method dieksekusi.
  ketika method / function pada supertype di override oleh subtype maka prasyarat boleh dilemahkan / dikurang
  tapi tidak boleh di perkuat/ditambah.

- Postconditions
  postconditioan merupakan kondisi persyaratan yang harus terpenuhi setelah method dieksekusi.
  ketika method / function pada supertype di override pada subtype, maka poscondition boleh diperkuat / ditambah tapi tidak boleh deperlemah / dikurangi

## Code Smells

mendeteksi subtipe yang tidak bisa mengsubtiute supertype pada dunia nyata.

### A Subtype Throws an Exception for a Behavior It Can't Fulfill

subtipe tidak bisa mengimplementasikan fungsi dari supertype dan mengembalikan exception error UnsupprtOpration
lihat contoh pada case withdraw bank

### A Subtype Provides No Implementation for a Behavior It Can't Fulfill

subtipe tidak melakukan operasi apapun pada method yang di override dari supertipe dan hanya mengirimkan exception

### The Client Knows About Subtypes

ketika kode client menggunakan `instanceof` atau `downcasting`, karena jika code diterapkan maka kemungkinan akan melanggar prinsip open/clode dan liskov subtitute
example :

```ts
class FilePurgingJob {
  private fileSystem: FileSystem;

  constructor(fileSystem: FileSystem) {
    this.fileSystem = fileSystem;
  }

  public purgeOldestFile(path: string): void {
    if (!(fileSystem instanceof ReadOnlyFileSystem)) {
      // code to detect oldest file
      fileSystem.deleteFile(path);
    }
  }
}
```

### A Subtype Method Always Returns the Same Value

subtipe selalau mengembalikan nilai yang sama, ini merupakan pelanggaran yang sangat halus dan susah untuk dikenali.
constoh :

```ts
export class ToyCar extends Car {
  protected getRemainingFuel(): number {
    return 0;
  }
}
```

## ref article

[Liskov Substitution Principle in Java](https://www.baeldung.com/java-liskov-substitution-principle)
