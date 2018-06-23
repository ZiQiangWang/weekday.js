// regex
export const REGEX_PARSE = /^(\d{4})-?(\d{1,2})-?(\d{0,2})(.*?(\d{1,2}):(\d{1,2}):(\d{1,2}))?.?(\d{1,3})?$/
export const REGEX_FORMAT = /d{1,2}|m{1,4}|yy(?:yy)?|([HhMsTtW])\1?|[LlSZ]|"[^"]*"|'[^']*'/g
// 一天的时间
export const ONE_DAY = 1000 * 60 * 60 * 24

// 一周的时间
export const ONE_WEEK = ONE_DAY * 7
