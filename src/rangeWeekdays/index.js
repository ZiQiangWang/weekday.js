import format from '../format/index'
import { ONE_DAY } from '../constant'

/**
 * @name rangeWeekdays
 * @summary Get weekdays between given dates
 *
 * @description
 * Get weekdays between given dates
 *
 * @param {Date} start - the start date
 * @param {Date} end - the end date
 * @param {String} fmt - result format
 * @returns {Array} weekday list between given dates
 *
 * @example
 * // For the weekday date:
 * var result = isWeekday(new Date(2018, 5, 20))
 * //=> true
 */
export default function rangeWeekdays (start, end, fmt) {

  let startDate = new Date(start.getTime())
  let endDate = new Date(end.getTime())

  if (startDate > endDate) {
    let tmp = startDate
    startDate = endDate
    endDate = tmp
  }

  const weekday_list = []
  while (startDate <= endDate) {
    const week = startDate.getDay()
    if (week > 0 && week < 6) {
      const date = fmt ? format(startDate, fmt) : startDate
      weekday_list.push(date)
    }
    startDate = new Date(startDate.getTime() + ONE_DAY)
  }

  return weekday_list
}
