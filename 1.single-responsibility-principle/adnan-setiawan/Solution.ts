import os from "os";
import fs from "fs";

export class Logger {
  writeLog(logMessage: string) {
    fs.open("/log/error.txt", "a", 666, function(e, id) {
      fs.write(id, `${logMessage} ${os.EOL}`, null, "utf8", function() {});
    });
  }
}

export class Customer {
  constructor(private loggger: Logger) {}

  add() {
    try {
      // save data to database
    } catch (error) {
      this.loggger.writeLog(error);
    }
  }

  delete() {
    try {
      // delete data in database
    } catch (error) {
      this.loggger.writeLog(error);
    }
  }
}
