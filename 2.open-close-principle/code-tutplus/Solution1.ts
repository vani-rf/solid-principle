interface Measurable {
  getLength(): number;
  getSent(): number;
}

export class File implements Measurable {
  public length: number;
  public sent: number;

  constructor() {}

  getLength(): number {
    return this.length;
  }

  getSent(): number {
    return this.sent;
  }
}

class Music implements Measurable {
  public length: number;
  public sent: number;

  public artist: string;
  public album: string;
  public releaseDate: Date;

  getLength(): number {
    return this.length;
  }

  getSent(): number {
    return this.sent;
  }

  getAlbumCoverFile() {
    return "Images/Covers/" + this.artist + "/" + this.album + ".png";
  }
}

export class Progress {
  private measurableContent: Measurable;

  constructor(measurableContent: Measurable) {
    this.measurableContent = measurableContent;
  }

  getAsPercent() {
    return (
      (this.measurableContent.getSent() * 100) /
      this.measurableContent.getLength()
    );
  }
}

function testItCanGetTheProgressOfAFileAsAPercent() {
  const file = new File();
  file.length = 200;
  file.sent = 100;

  const progress = new Progress(file);

  if (progress.getAsPercent() === 50) {
    console.log(`success sent music in ${50} ms`);
  }
}

function testItCanGetTheProgressOfAMusicStreamAsAPercent() {
  const music = new Music();
  music.length = 200;
  music.sent = 100;

  const progress = new Progress(music);

  if (progress.getAsPercent() === 50) {
    console.log(`success sent music in ${50} ms`);
  }
}

testItCanGetTheProgressOfAFileAsAPercent();
testItCanGetTheProgressOfAMusicStreamAsAPercent();
