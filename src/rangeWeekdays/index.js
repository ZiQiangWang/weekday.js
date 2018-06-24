import format from '../format/index'
import { ONE_DAY } from '../constant'
import instance from '../utils/instance'
import { isDate, isDefaultString } from '../utils/type'
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
 * var result = rangeWeekdays(new Date(2018, 5, 20), new Date(2018, 5, 25))
 * //=> [
 *        new Date(2018, 5, 20),
          new Date(2018, 5, 21),
          new Date(2018, 5, 22),
          new Date(2018, 5, 25),
        ]
 */
export default function rangeWeekdays (start, end, fmt) {
  if (arguments.length !== 2 && arguments.length !== 3) {
    throw new TypeError('2 or 3 argument required, but only ' + arguments.length + ' present')
  }

  if (!(isDate(start) && isDate(end) && isDefaultString(fmt))) {
    throw new TypeError(`(Date, Date, String | Undefined) required, but got (${instance(start)}, ${instance(end)}, ${instance(fmt)})`)
  }

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
