import instance from '../utils/instance'
import { isDefaultDate, isDefaultString, isNumber } from '../utils/type'
import isWeekday from '../isWeekday/index'
import { ONE_DAY } from '../constant'
import format from '../format'

/**
 * @name recentWeekdays
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
 * var result = recentWeekdays(new Date(2018, 5, 20))
 * //=> true
 */
export default function recentWeekdays (days, origin, fmt) {
  if (arguments.length > 3) {
    throw new TypeError('less than 3 argument required, but ' + arguments.length + ' present')
  }

  if (!(isNumber(days) && isDefaultDate(origin) && isDefaultString(fmt))) {
    throw new TypeError(`(Number, Date | Undefined, String | Undefined) required, but got (${instance(days)}, ${instance(origin)}, ${instance(fmt)})`)
  }

  origin = origin || new Date()
  let originDate = new Date(origin.getTime())

  const oneDay = days > 0 ? ONE_DAY : -ONE_DAY

  const weekdayList = []

  const offset = Math.abs(days)
  while (weekdayList.length < offset) {

    if (isWeekday(originDate)) {
      const date = fmt ? format(originDate, fmt) : originDate
      days >= 0 && weekdayList.push(date)
      days < 0 && weekdayList.unshift(date)
    }
    originDate = new Date(originDate.getTime() + oneDay)
  }
  return weekdayList
}
