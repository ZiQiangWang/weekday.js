import instance from '../utils/instance'
/**
 * @name rangeCount
 * @summary Get weekday count between two dates
 *
 * @description
 * Get weekday count between two dates
 *
 * @param {Date} start - the end date
 * @param {Date} end - the end date
 * @returns {Number} the count between start and end
 *
 * @example
 * // For the weekday date:
 * var result = isWeekday(new Date(2018, 5, 20))
 * //=> true
 */

export default function rangeCount (start, end) {
  if (arguments.length !== 2) {
    throw new TypeError('2 argument required, but only ' + arguments.length + ' present')
  }

  if (!(start instanceof Date && end instanceof Date)) {
    throw new TypeError(`(Date, Date) required, but got (${instance(start)}, ${instance(end)})`)
  }

  if (start > end) {
    let tmp = start
    start = end
    end = tmp
  }

  let startWeek = start.getDay()
  let startOffset = startWeek === 0 ? 0 : startWeek - 1
  start.setDate(start.getDate() - startWeek)

  let endWeek = end.getDay()
  let endOffset = (endWeek === 0 || endWeek === 6) ? 0 : 5 - endWeek
  endWeek !== 0 && end.setDate(end.getDate() + (7 - endWeek))
  return Math.floor((end - start) / (1000 * 60 * 60 * 24 * 7) + 0.5) * 5 - startOffset - endOffset
}
