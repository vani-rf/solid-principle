### definition
> Child classes should never break the parent class' type definitions.
> Subtypes must be substitutable for their base types.

subclass harus mengganti metode di kelas induk tanpa harus merusak fungsionalitas dari sisi client.

dari contoh dapat dilihat bahawa LSP dan OCP memiliki hubungan yang sangat kuat
faktanya pelanggran pada LSP juga merupakan pelanggran pada OCP, penggunaan template method patter
merupakan salah satu implementasi LSP dengan menghormati pronsop OCP

### ref article 
[SOLID: Part 3 - Liskov Substitution & Interface Segregation Principles](https://code.tutsplus.com/tutorials/solid-part-3-liskov-substitution-interface-segregation-principles--net-36710)