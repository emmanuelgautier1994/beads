export const canvasesAreTheSame = (a, b) => {
  const aKeys = Object.keys(a)
  const bKeys = Object.keys(b)

  if(aKeys.length !== bKeys.length) return false

  return aKeys.reduce((res, key, i) => (res &&
    a[key].H === b[bKeys[i]].H &&
    a[key].S === b[bKeys[i]].S &&
    a[key].L === b[bKeys[i]].L
  ), true)
}