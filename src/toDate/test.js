import toDate from '.'

describe('toDate', () => {
  test('accepts a date', () => {
    expect(toDate(new Date(2018, 5, 20))).toEqual(new Date(2018, 5, 20))
  })

  test('accepts a string', () => {
    expect(toDate('2018-06-20')).toEqual(new Date(2018, 5, 20))
  })

  test('accepts a timestamp', () => {
    expect(toDate(1529424000000)).toEqual(new Date(2018, 5, 20))
  })

  describe('accepts a invalid argument', () => {
    test('returns Invalid Date if argument is non-date string', () => {
      expect(toDate('aa').toString()).toEqual('Invalid Date')
    })

    test('returns Invalid Date if argument is NaN', () => {
      expect(toDate(NaN).toString()).toEqual('Invalid Date')
    })

    test('returns Invalid Date if argument is invalid date', () => {
      expect(toDate(new Date(NaN)).toString()).toEqual('Invalid Date')
    })

    test('returns Invalid Date if argument is null', () => {
      expect(toDate(null).toString()).toEqual('Invalid Date')
    })

    test('returns Invalid Date if argument is undefined', () => {
      expect(toDate(undefined).toString()).toEqual('Invalid Date')
    })

    test('returns Invalid Date if argument is false', () => {
      expect(toDate(false).toString()).toEqual('Invalid Date')
    })

    test('returns Invalid Date if argument is true', () => {
      expect(toDate(true).toString()).toEqual('Invalid Date')
    })
  })

  test('throws TypeError exception if passed less than 1 argument', () => {
    expect(() => toDate()).toThrow(/1 argument required/)
  })
})
