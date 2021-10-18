/** implement signature rule Method return Types*/

export class Calculate {
    calculateArea(width: GLfloat): GLfloat {
      const area = width * width;
      return area;
    }
  }
  
  export class CalculateReturnString extends Calculate {
    calculateArea(width: GLint): GLint {
      const area = width * width;
      return area;
    }
  }