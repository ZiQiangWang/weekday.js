import isWeekday from '.'

describe('isWeekend', () => {
  test('returns true if the given date is in a weekday', function () {
    expect(isWeekday(new Date(2018, 5 /* Jun */, 20))).toEqual(true)
  })

  test('returns false if the given date is not in a weekday', function () {
    expect(isWeekday(new Date(2018, 5 /* Jun */, 23))).toEqual(false)
  })

  test('param is not date type', () => {
    expect(() => isWeekday('aaa')).toThrow(/Date type require/)
  })
})
