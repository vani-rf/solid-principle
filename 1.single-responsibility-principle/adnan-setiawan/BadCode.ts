import fs from "fs";
import os from "os";

export class Customer {
  add() {
    try {
      // save data to database
    } catch (error) {
      fs.open("/log/error.txt", "a", 666, function(e, id) {
        fs.write(id, `${error} ${os.EOL}`, null, "utf8", function() {});
      });
    }
  }

  delete() {
    try {
      // delete data in database
    } catch (error) {
      fs.open("/log/error.txt", "a", 666, function(e, id) {
        fs.write(id, `${error} ${os.EOL}`, null, "utf8", function() {});
      });
    }
  }
}

/**
 * Pada class Customer method Add dan Deleta harusnya hanya menghandle satu high level abstraksi. 
 * Di dalam class tersebut juga terdapat duplikasi kode program penulisan log.
 * Penulisan log harusnya ditangani oleh class lain dalam hal ini class FileLogger. 
 * Sehingga jika ada perubahan pada proses penulisan log seperti path file yang diubah atau bahkan penulisan log dipindahkan ke database, 
 * kita bisa fokus hanya pada class FileLogger saja. Ingat! SRP bukan berarti satu class hanya boleh memiliki satu method saja, 
 * tapi hanya butuh satu alasan untuk memodifikasi class tersebut.
 */
