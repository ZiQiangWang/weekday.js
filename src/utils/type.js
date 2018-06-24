export function isDate(date) {
  return date instanceof Date
}

export function isDefaultDate(date) {
  return date === undefined || isDate(date)
}

export function isString(val) {
  return typeof val === 'string'
}

export function isDefaultString(val) {
  return val === undefined || isString(val)
}

export function isNumber(val) {
  return typeof val === 'number'
}
