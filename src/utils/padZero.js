/**
 * @name padZero
 * @summary pads the string with '0'
 *
 * @description
 * pads the current string with '0' so that the resulting string reaches the given length
 *
 * @param {String} val - value to be handled
 * @param {Number} len - the final length of result
 * @returns {String}
 *
 * @example
 * var result = padZero('1', 3)
 * //=> '001'
 */
export default function padZero(val, len = 2) {
  val = String(val)
  while (val.length < len) {
    val = '0' + val
  }

  return val
}
