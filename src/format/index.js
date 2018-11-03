import padZero from '../utils/padZero'
import { REGEX_FORMAT } from '../constant'
/**
 * @name format
 * @summary Format date to given mask
 *
 * @description
 * Format date to given mask
 *
 * @param {Date} date - the date to format
 * @param {String} mask - format mask
 * @param {String} utc - use utc or not
 * @returns {String} formated date
 *
 * @example
 * // For the weekday date:
 * var result = format(new Date(2018, 5, 20), 'yyyy/mm/dd')
 * //=> 2018/06/20
 */
export default function format (date, mask, utc) {
  const _ = utc ? 'getUTC' : 'get'

  const d = date[_ + 'Date']()
  const D = date[_ + 'Day']()
  const m = date[_ + 'Month']()
  const y = date[_ + 'FullYear']()
  const H = date[_ + 'Hours']()
  const M = date[_ + 'Minutes']()
  const s = date[_ + 'Seconds']()
  const L = date[_ + 'Milliseconds']()
  const W = D === 0 ? 7 : D
  const flags = {
    d:    d,
    dd:   padZero(d),
    m:    m + 1,
    mm:   padZero(m + 1),
    mmm:  format.i18n.monthNames[m],
    mmmm: format.i18n.monthNames[m + 12],
    yy:   String(y).slice(2),
    yyyy: y,
    h:    H % 12 || 12,
    hh:   padZero(H % 12 || 12),
    H:    H,
    HH:   padZero(H),
    M:    M,
    MM:   padZero(M),
    s:    s,
    ss:   padZero(s),
    l:    padZero(L, 3),
    L:    padZero(Math.round(L / 10)),
    t:    H < 12 ? format.i18n.timeNames[0] : format.i18n.timeNames[1],
    tt:   H < 12 ? format.i18n.timeNames[2] : format.i18n.timeNames[3],
    T:    H < 12 ? format.i18n.timeNames[4] : format.i18n.timeNames[5],
    TT:   H < 12 ? format.i18n.timeNames[6] : format.i18n.timeNames[7],
    W:    format.i18n.dayNames[W],
    WW:   format.i18n.dayNames[W + 7],
  }

  return mask.replace(REGEX_FORMAT, function (match) {
    if (match in flags) {
      return flags[match]
    }
    return match.slice(1, match.length - 1)
  })
}

format.i18n = {
  dayNames: [
    'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ],
  monthNames: [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ],
  timeNames: [
    'a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'
  ]
}
