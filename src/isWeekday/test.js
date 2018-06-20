import isWeekday from '.'

describe('isWeekend', () => {
  test('returns true if the given date is in a weekday', function () {
    expect(isWeekday(new Date(2018, 5 /* Jun */, 20))).toEqual(true)
  })

  test('returns false if the given date is not in a weekday', function () {
    expect(isWeekday(new Date(2018, 5 /* Jun */, 23))).toEqual(false)
  })

  test('accepts a string', () => {
    expect(isWeekday('2018-06-20')).toEqual(true)
  })

  test('accepts a timestamp', () => {
    expect(isWeekday(new Date(2018, 5 /* Jun */, 20).getTime())).toEqual(true)
  })

  test('returns false if the given date is could not be converted to Date', function () {
    expect(isWeekday(new Date('a'))).toEqual(false)
  })
})
