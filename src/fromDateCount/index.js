import instance from '../utils/instance'
import rangeCount from '../rangeCount/index'

/**
 * @name fromDateCount
 * @summary Get weekday count from original date
 *
 * @description
 * Get weekday count from original date
 *
 * @param {Number} offset - the end date
 * @param {Date} origin - the original date
 * @returns {Number} the count
 *
 * @example
 * // For the weekday date:
 * var result = fromDateCount(10, new Date(2018, 5, 20))
 * //=> 8
 */

export default function fromDateCount (offset, origin = new Date()) {
  if (arguments.length > 2) {
    throw new TypeError('2 argument required, but only ' + arguments.length + ' present')
  }

  if (!(typeof offset === 'number' && origin instanceof Date)) {
    throw new TypeError(`(Number, Date) required, but got (${instance(offset)}, ${instance(origin)})`)
  }

  const endDate = new Date(origin.getTime())
  endDate.setDate(origin.getDate() + offset)

  return rangeCount(origin, endDate)
}
