import distanceCount from '.'

describe('distanceCount', () => {

  test('offset is Positive', function () {
    expect(distanceCount(10, new Date(2018, 5, 20))).toBe(8)
  })

  test('offset is negative', function () {
    expect(distanceCount(-10, new Date(2018, 5, 20))).toBe(8)
  })

  test('offset is zero', function () {
    expect(distanceCount(0, new Date(2018, 5, 20))).toBe(1)
  })

  test('use default date', () => {
    expect(distanceCount(10)).toBeGreaterThan(0)
  })

  test('throws TypeError exception if passed error type params', () => {
    expect(() => distanceCount(10, 10)).toThrow(/\(Number, Date\) required/)
  })

  test('throws TypeError exception if passed more than 2 argument', () => {
    expect(() => distanceCount(10, new Date(2018, 5, 20), 10)).toThrow(/2 argument required/)
  })

})
