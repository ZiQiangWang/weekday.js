/**
 * @name instance
 * @summary Get instance of value
 *
 * @description
 * Get instance of value
 *
 * @param {Date} param
 * @returns {String} Get instance of value
 *
 * @example
 * // For date type:
 * var result = instance(new Date())
 * //=> Date
 */
export default function instance(param) {
  const type =  Object.prototype.toString.call(param)
  const reg = /\[object (.*)\]/
  return reg.exec(type)[1]
}
