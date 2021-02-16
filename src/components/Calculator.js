function add(a, b) {
  return a + b
}

function sub(a, b) {
  return a - b
}

function multi(a, b) {
  return a * b
}

function div(a, b) {
  let d = a / b
  d = d.toFixed(3)
  return d
}

export default add

export { add, sub, multi, div }
