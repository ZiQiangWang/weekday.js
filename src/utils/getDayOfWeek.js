/**
 * @name getDayOfWeek
 * @summary 1 (for Monday) through 7 (for Sunday)
 *
 * @description
 * 1 (for Monday) through 7 (for Sunday)
 *
 * @param {Date} date
 * @returns {Number} Get instance of value
 *
 * @example
 * // Get day of week of 2018-06-24
 * var result = getDayOfWeek(new Date(2018, 6, 24))
 * //=> 7
 */
export default function getDayOfWeek(date) {
  const day = date.getDay()
  if (day === 0) {
    return 7
  }
  return day
}
