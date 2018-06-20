/**
 * @name isWeekday
 * @summary Does the given date fall on a weekday?
 *
 * @description
 * Does the given date fall on a weekday?
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is weekday
 *
 * @example
 * // For the weekday date:
 * var result = isWeekday(new Date(2018, 5, 20))
 * //=> true
 */
export default function isWeekday (dirtyDate) {

  const date = new Date(dirtyDate)
  const day = date.getDay()
  return day > 0 && day < 6
}
