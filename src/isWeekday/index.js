import { isDate } from '../utils/type'
import instance from '../utils/instance'

/**
 * @name isWeekday
 * @summary Does the given date fall on a weekday?
 *
 * @description
 * Does the given date fall on a weekday?
 *
 * @param {Date} date - the date to check
 * @returns {Boolean} the date is weekday
 *
 * @example
 * // For the weekday date:
 * var result = isWeekday(new Date(2018, 5, 20))
 * //=> true
 */
export default function isWeekday (date) {
  if (!isDate(date)) {
    throw new TypeError(`Date type require, but got ${instance(date)}`)
  }
  const day = date.getDay()
  return day > 0 && day < 6
}
