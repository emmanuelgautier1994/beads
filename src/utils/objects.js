export const canvasesAreTheSame = (a, b) => {
  const aKeys = Object.keys(a)
  const bKeys = Object.keys(b)

  if(aKeys.length !== bKeys.length) return false

  return aKeys.reduce((res, key, i) => (res &&
    a[key] === b[bKeys[i]]
  ), true)
}