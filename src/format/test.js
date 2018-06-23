import format from '.'


describe('format', () => {
  test('format normal', function () {
    expect(format(new Date(2018, 5, 20), 'yyyy/mm/dd')).toBe('2018/06/20')
  })

  test('format different', function () {
    expect(format(new Date(2018, 5, 20), 'yyyy-mm-dd HH:MM:ss')).toBe('2018-06-20 00:00:00')
  })

  test('format with week', function () {
    expect(format(new Date(2018, 5, 20), 'yyyy/mm/dd WW')).toBe('2018/06/20 Wednesday')
  })

  test('format with named month', function () {
    expect(format(new Date(2018, 5, 20), 'yyyy/mmmm/dd')).toBe('2018/June/20')
  })

  test('format random order', function () {
    expect(format(new Date(2018, 5, 20), 'mmmm dd yyyy')).toBe('June 20 2018')
  })
})
