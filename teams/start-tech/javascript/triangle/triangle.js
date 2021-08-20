//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(sideA, sideB, sideC) {
    this.sideA = sideA
    this.sideB = sideB
    this.sideC = sideC
  }

  get isEquilateral() {
    if (this.sideA == this.sideB && 
        this.sideA == this.sideC && 
        this.sideA > 0) {
      return true;
    } else {
      return false;
    }
  }

  
  get isIsosceles() {
    if (this.sideA == this.sideB || 
        this.sideA == this.sideC || 
        this.sideB == this.sideC) {
      if (this.sideA + this.sideB < this.sideC || 
          this.sideB + this.sideC < this.sideA || 
          this.sideA + this.sideC < this.sideB) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  get isScalene() {
    if (this.sideA !== this.sideB && 
        this.sideA !== this.sideC && 
        this.sideB !== this.sideC) {
      if (this.sideA + this.sideB < this.sideC || 
          this.sideB + this.sideC < this.sideA || 
          this.sideA + this.sideC < this.sideB) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
}