export function isDate(date) {
  return date instanceof Date
}

export function isString(val) {
  return typeof val === 'string'
}

export function isDefaultString(val) {
  return val === undefined || isString(val)
}
