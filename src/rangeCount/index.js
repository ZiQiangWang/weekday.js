import instance from '../utils/instance'
import { ONE_WEEK } from '../constant'
import { isDate } from '../utils/type'
/**
 * @name rangeCount
 * @summary Get weekday count between two dates
 *
 * @description
 * Get weekday count between two dates
 *
 * @param {Date} start - the start date
 * @param {Date} end - the end date
 * @returns {Number} the count between start and end
 *
 * @example
 * // How many weekdays between 2018-06-20 and 2018-06-30:
 * var result = rangeCount(new Date(2018, 5, 20), new Date(2018, 5, 30))
 * //=> 8
 */

export default function rangeCount (start, end) {
  if (arguments.length !== 2) {
    throw new TypeError('2 argument required, but only ' + arguments.length + ' present')
  }

  if (!(isDate(start) && isDate(end))) {
    throw new TypeError(`(Date, Date) required, but got (${instance(start)}, ${instance(end)})`)
  }

  let startDate = new Date(start.getTime())
  let endDate = new Date(end.getTime())
  if (startDate > endDate) {
    let tmp = startDate
    startDate = endDate
    endDate = tmp
  }

  let startWeek = startDate.getDay()
  let startOffset = startWeek === 0 ? 0 : startWeek - 1
  startDate.setDate(startDate.getDate() - startWeek)

  let endWeek = endDate.getDay()
  let endOffset = (endWeek === 0 || endWeek === 6) ? 0 : 5 - endWeek
  endWeek !== 0 && endDate.setDate(endDate.getDate() + (7 - endWeek))
  return Math.floor((endDate - startDate) / ONE_WEEK + 0.5) * 5 - startOffset - endOffset
}
