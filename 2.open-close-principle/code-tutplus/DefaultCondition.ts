export class File {
  public length: number;
  public sent: number;

  constructor() {}
}

export class Progress {
  constructor(private file: File) {}

  getAsPercent() {
    return (this.file.sent * 100) / this.file.length;
  }
}

function testItCanGetTheProgressOfAFileAsAPercent() {
  const file = new File();
  file.length = 200;
  file.sent = 100;

  const progress = new Progress(file);

  if (progress.getAsPercent() === 50) {
    console.log("success");
  }
}

/** 
 * Every application that is expected to evolve in time will need new features.
 * One new feature for our application could be to allow streaming of music, instead of just downloading files.
 * File's length is represented in bytes, the music's duration in seconds.
 * We want to offer a nice progress bar to our listeners, but can we reuse the one we already have?
 * No, we can not. Our progress is bound to File.
 * It understands only files, even though it could be applied to music content also.
 * But in order to do that we have to modify it, we have to make Progress know about Music and File.
 * If our design would respect OCP, we would not need to touch File or Progress.
 * We could just simply reuse the existing Progress and apply it to Music.
 */
