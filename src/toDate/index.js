import { REGEX_PARSE } from '../constant';

/**
 * @name toDate
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If an argument is a string, the function tries to parse it.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * @param {*} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert string '2016-10-01' to date,
 * var result = toDate('2016-10-01')
 * //=> 2016-10-01T00:00:00.000Z
 */
export default function toDate (dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  if (dirtyDate === null) return new Date(NaN)
  if (dirtyDate instanceof Date) return new Date(dirtyDate);
  if (typeof dirtyDate === 'number') return new Date(dirtyDate);

  let reg
  if (typeof dirtyDate === 'string'
    && (/.*[^Z]$/i.test(dirtyDate)) // looking for a better way
    && (reg = dirtyDate.match(REGEX_PARSE))) {
      return new Date(
        reg[1], reg[2] - 1, reg[3] || 1,
        reg[5] || 0, reg[6] || 0, reg[7] || 0, reg[8] || 0
      )
  }

  return new Date(NaN);
}
