import distanceWeekdays from '.'

describe('distanceWeekdays', () => {
  test('offset is Positive', function () {
    expect(distanceWeekdays(5, new Date(2018, 5, 20))).toEqual([
      new Date(2018, 5, 20),
      new Date(2018, 5, 21),
      new Date(2018, 5, 22),
      new Date(2018, 5, 25),
    ])
  })

  test('offset is negative', function () {
    expect(distanceWeekdays(-5, new Date(2018, 5, 20))).toEqual([
      new Date(2018, 5, 15),
      new Date(2018, 5, 18),
      new Date(2018, 5, 19),
      new Date(2018, 5, 20),
    ])
  })

  test('offset is zero', function () {
    expect(distanceWeekdays(0, new Date(2018, 5, 20))).toEqual([
      new Date(2018, 5, 20),
    ])
  })

  test('use default date', () => {
    expect(distanceWeekdays(5).length).toBeGreaterThan(0)
  })

  test('Format weekdays between given dates', function () {
    expect(distanceWeekdays(5, new Date(2018, 5, 20), 'yyyy/mm/dd')).toEqual([
      '2018/06/20',
      '2018/06/21',
      '2018/06/22',
      '2018/06/25'
    ])
  })

  test('throws TypeError exception if passed error type params', () => {
    expect(() => distanceWeekdays(10, 10)).toThrow(/\(Number, Date | Undefined, String | Undefined\) required/)
  })

  test('throws TypeError exception if passed more than 3 argument', () => {
    expect(() => distanceWeekdays(10, new Date(2018, 5, 20), 10, 10)).toThrow(/3 argument required/)
  })
})
