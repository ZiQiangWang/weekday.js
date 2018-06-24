import rangeWeekdays from '../rangeWeekdays'
import instance from '../utils/instance'
import { isDefaultDate, isDefaultString, isNumber } from '../utils/type'
/**
 * @name distanceWeekdays
 * @summary Get weekdays count from original date
 *
 * @description
 * Get weekdays count from original date
 *
 * @param {Date} offset - the distance
 * @param {Date} origin - the origin date
 * @param {String} fmt - result format
 * @returns {Array} weekday list
 *
 * @example
 * var result = distanceWeekdays(5, new Date(2018, 5, 25))
 * //=> [
 *        new Date(2018, 5, 20),
          new Date(2018, 5, 21),
          new Date(2018, 5, 22),
          new Date(2018, 5, 25),
        ]
 */
export default function distanceWeekdays (offset, origin, fmt) {
  if (arguments.length > 3) {
    throw new TypeError('less than 3 argument required, but ' + arguments.length + ' present')
  }

  if (!(isNumber(offset) && isDefaultDate(origin) && isDefaultString(fmt))) {
    throw new TypeError(`(Number, Date | Undefined, String | Undefined) required, but got (${instance(offset)}, ${instance(origin)}, ${instance(fmt)})`)
  }

  origin = origin || new Date()
  const endDate = new Date(origin.getTime())
  endDate.setDate(origin.getDate() + offset)
  return rangeWeekdays(origin, endDate, fmt)
}
