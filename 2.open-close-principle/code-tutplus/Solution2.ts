// use template method pattern

abstract class AbstractMeasure {
  
  getAsPercent() {
    (this.getSent() * 100) / this.getLength();
  }

  abstract getLength(): number;

  abstract getSent(): number;

  abstract setLength(value: number): void;

  abstract setSent(value: number): void;
}

export class File extends AbstractMeasure {
  private length: number;
  private sent: number;

  getLength(): number {
    return this.length;
  }

  getSent(): number {
    return this.sent;
  }

  setLength(value: number): void {
    this.length = value;
  }

  setSent(value: number): void {
    this.sent = value;
  }
}

export class Music extends AbstractMeasure {
  private length: number;
  private sent: number;

  public artist: string;
  public album: string;
  public releaseDate: Date;

  getLength(): number {
    return this.length;
  }

  getSent(): number {
    return this.sent;
  }

  setLength(value: number): void {
    this.length = value;
  }

  setSent(value: number): void {
    this.sent = value;
  }

  getAlbumCoverFile() {
    return "Images/Covers/" + this.artist + "/" + this.album + ".png";
  }
}

export class Progress {
  private measurableContent: AbstractMeasure;

  constructor(measurableContent: AbstractMeasure) {
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
  file.setLength(200);
  file.setSent(100);

  const progress = new Progress(file);

  if (progress.getAsPercent() === 50) {
    console.log(`success sent file in ${50} ms`);
  }
}

function testItCanGetTheProgressOfAMusicStreamAsAPercent() {
  const music = new Music();
  music.setLength(200);
  music.setSent(100);

  const progress = new Progress(music);

  if (progress.getAsPercent() === 50) {
    console.log(`success sent music in ${50} ms`);
  }
}

testItCanGetTheProgressOfAFileAsAPercent();
testItCanGetTheProgressOfAMusicStreamAsAPercent();
