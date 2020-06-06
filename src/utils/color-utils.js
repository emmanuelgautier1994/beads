export const hexToHSV = (hex) => {
  const [r, g, b] = Object.values(hexToRGB(hex)).map(x => x / 255)

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const d = max - min

  const v = max

  const s = max === 0 ? 0 : d / max

  let h

  if (max === min) {
    h = 0;
  } else {
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
      default: h = 0;
    }

    h /= 6;
  }
  
  return {h, s, v}
}

export const HSVToHex = (h, s, v) => {
  let r, g, b

  const i = Math.floor(h * 6)
  const f = h * 6 - i
  const p = v * (1 - s)
  const q = v * (1 - f * s)
  const t = v * (1 - (1 - f) * s)

  switch (i % 6) {
    case 0: r = v; g = t; b = p; break;
    case 1: r = q; g = v; b = p; break;
    case 2: r = p; g = v; b = t; break;
    case 3: r = p; g = q; b = v; break;
    case 4: r = t; g = p; b = v; break;
    case 5: r = v; g = p; b = q; break;
    default: ;
  }

  return RGBToHex(Math.round(r*255), Math.round(g*255), Math.round(b*255))
}

export const CSSHSL = ({H, S, L}) => (
  `hsl(${H}, ${S}%, ${L}%)`
)

export const SatGradient = (H, L) => (
  `linear-gradient(to right, hsl(${H}, 0%, ${L}%), hsl(${H}, 100%, ${L}%))`
)

export const LightGradient = (H, S) => (
  `linear-gradient(to right, hsl(${H}, ${S}%, 0%), hsl(${H}, ${S}%, 50%), hsl(${H}, ${S}%, 100%))`
)



const hexToRGB = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if(!result) return null

  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  }
}

const base16 = (n) => {
  let b16 = Number(n).toString(16)
  if(b16.length < 2) b16 = '0' + b16
  return b16
}

const RGBToHex = (r, g, b) => {
  return '#' + base16(r) + base16(g) + base16(b)
}