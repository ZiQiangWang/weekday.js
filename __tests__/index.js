const Weekday = require('../src/index');
const weekday = new Weekday();

describe('Test case of weekday tools', () => {
    describe('1.Weekday check', () => {
        test('Check true', () => {
            var sunday = new Date(2017,11,17);
            expect(weekday.check(sunday)).toEqual(false);
        });
        test('Check true', () => {
            var monday = new Date(2017,11,18);
            expect(weekday.check(monday)).toEqual(true);
        });
    });
    describe('2.Weekday range', () => {
        test('Range default', () => {
            var start = new Date(2017,11,1);
            var end = new Date(2017,11,10);
            var result = [
                new Date(2017,11,1),
                new Date(2017,11,4),
                new Date(2017,11,5),
                new Date(2017,11,6),
                new Date(2017,11,7),
                new Date(2017,11,8),
            ]
            expect(weekday.range(start, end)).toEqual(result);
        });
        test('Range equal', () => {
            var start = new Date(2017,11,1);
            var end = new Date(2017,11,1);
            var result = [
                new Date(2017,11,1),
            ]
            expect(weekday.range(start, end)).toEqual(result);
        });
        test('Range reverse', () => {
            var start = new Date(2017,11,10);
            var end = new Date(2017,11,1);
            var result = [
                new Date(2017,11,1),
                new Date(2017,11,4),
                new Date(2017,11,5),
                new Date(2017,11,6),
                new Date(2017,11,7),
                new Date(2017,11,8),
            ];
            expect(weekday.range(start, end)).toEqual(result);
        });
        test('Range format', () => {
            var start = new Date(2017,11,10);
            var end = new Date(2017,11,1);
            var result = [
                "2017-12-01",
                "2017-12-04",
                "2017-12-05",
                "2017-12-06",
                "2017-12-07",
                "2017-12-08",
            ];
            expect(weekday.range(start, end, 'yyyy-MM-dd')).toEqual(result);
        });
    });
    describe('3.Weekday in', () => {
        test('In with origin of future', () => {
            var origin = new Date(2017,11,1);
            var result = [
                new Date(2017,11,1),
                new Date(2017,11,4),
                new Date(2017,11,5),
                new Date(2017,11,6),
                new Date(2017,11,7),
                new Date(2017,11,8),
                new Date(2017,11,11),
            ]
            expect(weekday.in(10, origin)).toEqual(result);
        });
        test('In with origin of past', () => {
            var origin = new Date(2017,11,1);
            var result = [
                new Date(2017,10,21),
                new Date(2017,10,22),
                new Date(2017,10,23),
                new Date(2017,10,24),
                new Date(2017,10,27),
                new Date(2017,10,28),
                new Date(2017,10,29),
                new Date(2017,10,30),
                new Date(2017,11,1),
            ]
            expect(weekday.in(-10, origin)).toEqual(result);
        });
        test('In with format', () => {
            var origin = new Date(2017,11,1);
            var result = [
                "2017-12-01",
                "2017-12-04",
                "2017-12-05",
                "2017-12-06",
                "2017-12-07",
                "2017-12-08",
                "2017-12-11",
            ]
            expect(weekday.in(10, "yyyy-MM-dd", origin)).toEqual(result);
        });
    });
    describe("4.Weekday recent", () => {
        test('Recent with origin of future', () => {
            var origin = new Date(2017,11,1);
            var result = [
                new Date(2017,11,1),
                new Date(2017,11,4),
                new Date(2017,11,5),
                new Date(2017,11,6),
                new Date(2017,11,7),
            ]
            expect(weekday.recent(5, origin)).toEqual(result);
        });
        test('Recent with origin of past', () => {
            var origin = new Date(2017,11,1);
            var result = [
                new Date(2017,10,27),
                new Date(2017,10,28),
                new Date(2017,10,29),
                new Date(2017,10,30),
                new Date(2017,11,1),
            ]
            expect(weekday.recent(-5, origin)).toEqual(result);
        });
        test('Recent with format', () => {
            var origin = new Date(2017,11,1);
            var result = [
                "2017-12-01",
                "2017-12-04",
                "2017-12-05",
                "2017-12-06",
                "2017-12-07",
            ]
            expect(weekday.recent(5, "yyyy-MM-dd", origin)).toEqual(result);
        });
    });
    describe('Weekday format', () => {
        test('format default', () => {
            var day = new Date(2017,11,1);
            expect(weekday.format(day, "yyyyMMdd")).toEqual("20171201");
        });
        test('format weekday', () => {
            var day = new Date(2017,11,1);
            expect(weekday.format(day, "yyyyMMdd w")).toEqual("20171201 星期五");
        });
    });
});
