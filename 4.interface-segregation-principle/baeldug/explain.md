## definition

> “Clients should not be forced to depend upon interfaces that they do not use“ - Robert C. Martin

client tidak boleh bergantung kepada interface yang tidak mereka gunakan.
tujuan dari prinsip ini adalah mengurangi efek samping dari penggunaan interface yang terlalu besar dengan
memecah iterface menjadi lebih kecil. prinsip ini mirip dengan `single reponsibility principle` dimana class / interface melayani satu tujuan.
desain aplikasi yang tepat dan abstraksi yang benar adalah kunci di balik prinsip ini, meskipun membutuhkan lebih banyak waktu dan tenaga dalam fase desain aplikasi dan mungkin meningkatkan kompleksifitas kode, pada akhirnya kita mendapatkan kode yang lebih flexible.

## ref article

[Interface Segregation Principle in Java](https://www.baeldung.com/java-interface-segregation)
