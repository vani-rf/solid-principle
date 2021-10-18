export class Rectangle {
  protected width: number;
  protected height: number;

  public setHeight(height: number) {
    this.height = height;
  }

  public getHeight() {
    return this.height;
  }

  public setWidth(width: number) {
    this.width = width;
  }

  public getWidth() {
    return this.width;
  }

  area() {
    return this.width * this.height;
  }
}

export class Square extends Rectangle {
  public setHeight(value: number) {
    this.width = value;
    this.height = value;
  }

  public setWidth(value: number) {
    this.width = value;
    this.height = value;
  }
}

class Client {
  areaVerifier(r: Rectangle) {
    r.setWidth(5);
    r.setHeight(4);
    if (r.area() != 20) {
      console.log("area :", r.area());
      throw new Error("Bad area!");
    } else {
      console.log("area is 20");
    }

    return true;
  }
}

function testRectangleArea() {
  console.log("Test rectangle area");
  const r = new Rectangle();
  const c = new Client();
  c.areaVerifier(r);
  console.log("-----------");
}

function testSquareArea() {
  // note:di contoh ini karena class square mewarisi class rectangle
  // maka class square is reclangle tapi class rectangle is not square
  console.log("Test square area");
  const s = new Square();
  const c = new Client();
  c.areaVerifier(s);
}

testRectangleArea();
testSquareArea();

/**
 * pada contoh ini class square tidak bisa mengganti semua fungsi pada class rectangle
 * hasil test memperlihatkan hasil yang berbeda
 */
