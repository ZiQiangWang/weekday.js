import rangeWeekdays from '.'


describe('rangeWeekdays', () => {
  test('Weekdays between given dates', function () {
    expect(rangeWeekdays(new Date(2018, 5, 20), new Date(2018, 5, 25))).toEqual([
      new Date(2018, 5, 20),
      new Date(2018, 5, 21),
      new Date(2018, 5, 22),
      new Date(2018, 5, 25),
    ])
  })

  test('Weekdays between given dates', function () {
    expect(rangeWeekdays(new Date(2018, 5, 25), new Date(2018, 5, 20))).toEqual([
      new Date(2018, 5, 20),
      new Date(2018, 5, 21),
      new Date(2018, 5, 22),
      new Date(2018, 5, 25),
    ])
  })

  test('Same weekday', function () {
    expect(rangeWeekdays(new Date(2018, 5, 20), new Date(2018, 5, 20))).toEqual([
      new Date(2018, 5, 20),
    ])
  })

  test('Same weekend', function () {
    expect(rangeWeekdays(new Date(2018, 5, 23), new Date(2018, 5, 23))).toEqual([])
  })

  test('Format weekdays between given dates', function () {
    expect(rangeWeekdays(new Date(2018, 5, 20), new Date(2018, 5, 25), 'yyyy/mm/dd')).toEqual([
      '2018/06/20',
      '2018/06/21',
      '2018/06/22',
      '2018/06/25'
    ])
  })

  test('throws TypeError exception if passed error argument', () => {
    expect(() => rangeWeekdays(new Date(2018, 5, 20))).toThrow(/2 or 3 argument required/)
  })

  test('throws TypeError exception if passed error argument', () => {
    expect(() => rangeWeekdays(new Date(2018, 5, 20), 1, new Date())).toThrow(/\(Date, Date, String \| Undefined\) required/)
  })
})
