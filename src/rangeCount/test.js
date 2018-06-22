import rangeCount from '.'

describe('rangeCount', () => {

  test('start is earlier then end', function () {
    expect(rangeCount(new Date(2018, 5, 24), new Date(2018, 5, 30))).toEqual(5)
  })

  test('start is later then end', function () {
    expect(rangeCount(new Date(2018, 5, 30), new Date(2018, 5, 20))).toEqual(8)
  })

  test('returns 1 if the start date and end date are same day', function () {
    expect(rangeCount(new Date(2018, 5, 20), new Date(2018, 5, 20))).toEqual(1)
  })

  test('throws TypeError exception if passed error type params', () => {
    expect(() => rangeCount(12, new Date(2018, 5, 20))).toThrow(/\(Date, Date\) required/)
  })

  test('throws TypeError exception if passed less than 2 argument', () => {
    expect(() => rangeCount(new Date(2018, 5, 20))).toThrow(/2 argument required/)
  })

  test('throws TypeError exception if passed more than 2 argument', () => {
    expect(() => rangeCount(new Date(2018, 5, 20), new Date(2018, 5, 20), new Date(2018, 5, 20))).toThrow(/2 argument required/)
  })

})
