
export const SatGradient = (H, L) => (
  `linear-gradient(to right, hsl(${H}, 0%, ${L}%), hsl(${H}, 100%, ${L}%))`
)

export const LightGradient = (H, S) => (
  `linear-gradient(to right, hsl(${H}, ${S}%, 0%), hsl(${H}, ${S}%, 50%), hsl(${H}, ${S}%, 100%))`
)

export class Color {
  constructor(H, S, L) {
    this.H = H
    this.S = S
    this.L = L
  }

  get CSS () {
    return `hsl(${this.H}, ${this.S}%, ${this.L}%)`
  }

  slide = (param, newValue) => {
    switch(param){
      case 'H': return new Color(newValue, this.S, this.L)
      case 'S': return new Color(this.H, newValue, this.L)
      case 'L': return new Color(this.H, this.S, newValue)
      default: return null
    }
  }

  equals = (otherColor) => (this.H === otherColor.H && this.S === otherColor.S && this.L === otherColor.L)
}