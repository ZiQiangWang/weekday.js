import recentWeekdays from '.'

describe('recentWeekdays', () => {
  test('only one param', function () {
    expect(recentWeekdays(5).length).toBe(5)
  })

  test('offset is positive', function () {
    expect(recentWeekdays(5, new Date(2018, 5, 20))).toEqual([
      new Date(2018, 5, 20),
      new Date(2018, 5, 21),
      new Date(2018, 5, 22),
      new Date(2018, 5, 25),
      new Date(2018, 5, 26),
    ])
  })

  test('offset is negative', function () {
    expect(recentWeekdays(-5, new Date(2018, 5, 20))).toEqual([
      new Date(2018, 5, 14),
      new Date(2018, 5, 15),
      new Date(2018, 5, 18),
      new Date(2018, 5, 19),
      new Date(2018, 5, 20),
    ])
  })

  test('offset is zero', function () {
    expect(recentWeekdays(0, new Date(2018, 5, 20))).toEqual([])
  })

  test('offset is zero', function () {
    expect(recentWeekdays(0, new Date(2018, 5, 23))).toEqual([])
  })

  test('format result', function () {
    expect(recentWeekdays(5, new Date(2018, 5, 20), 'yyyy/mm/dd')).toEqual([
      '2018/06/20',
      '2018/06/21',
      '2018/06/22',
      '2018/06/25',
      '2018/06/26',
    ])
  })
  test('throws TypeError exception if passed error type params', () => {
    expect(() => recentWeekdays(10, 10)).toThrow(/\(Number, Date | Undefined, String | Undefined\) required/)
  })

  test('throws TypeError exception if passed more than 3 argument', () => {
    expect(() => recentWeekdays(10, new Date(2018, 5, 20), 'yyyymmdd', 10)).toThrow(/3 argument required/)
  })
})
