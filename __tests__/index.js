const weekday = require('../src/index');
// const weekday = new Weekday();

describe('Test case of weekday tools', () => {

    describe('1.Weekday range', () => {
        describe('a. 1 argument', () => {
            test('Date', () => {
                var start = new Date(2017,11,20);
                var result = [
                    new Date(2017,11,20),
                    new Date(2017,11,21),
                    new Date(2017,11,22),
                ]
                expect(weekday.range(start)).toEqual(result);
            });
            test('Number', () => {
                var result = [
                    new Date(2017,11,25),
                    new Date(2017,11,26),
                    new Date(2017,11,27),
                    new Date(2017,11,28),
                    new Date(2017,11,29),
                    new Date(2018,0,1),
                    new Date(2018,0,2),
                    new Date(2018,0,3),
                ]
                expect(weekday.range(10)).toEqual(result);
            });
        });
        describe('b. 2 arguments', () => {
            test('Date Date', () => {
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

            test('Date String', () => {
                var start = new Date(2017,11,1);
                var result = [
                    '2017-12-20',
                    '2017-12-21',
                    '2017-12-22',
                ]
                expect(weekday.range(new Date(2017,11,20), 'yyyy-MM-dd')).toEqual(result);
            });
            test('Date Number', () => {
                var start = new Date(2017,11,10);
                var result = [
                    new Date(2017,11,11),
                    new Date(2017,11,12),
                    new Date(2017,11,13),
                    new Date(2017,11,14),
                    new Date(2017,11,15),
                    new Date(2017,11,18),
                    new Date(2017,11,19),
                    new Date(2017,11,20),
                ]
                expect(weekday.range(start, 10)).toEqual(result);
            });
            test('Number String', () => {
                var result = [
                    '2017-12-25',
                    '2017-12-26',
                    '2017-12-27',
                    '2017-12-28',
                    '2017-12-29',
                ]
                expect(weekday.range(5, 'yyyy-MM-dd')).toEqual(result);
            });
        });
        describe('c. 3 arguments', () => {
            test('Date Date String', () => {
                var start = new Date(2017,11,1);
                var end = new Date(2017,11,10);
                var result = [
                    '2017-12-01',
                    '2017-12-04',
                    '2017-12-05',
                    '2017-12-06',
                    '2017-12-07',
                    '2017-12-08',
                ]
                expect(weekday.range(start, end, 'yyyy-MM-dd')).toEqual(result);
            });
            test('Date Number String', () => {
                var start = new Date(2017,11,1);
                var result = [
                    '2017-12-01',
                    '2017-12-04',
                    '2017-12-05',
                    '2017-12-06',
                ]
                expect(weekday.range(start, 5, 'yyyy-MM-dd')).toEqual(result);
            });
        });
    });
    describe("2.Weekday recent", () => {
        test('Recent with origin of future', () => {
            var origin = new Date(2017,11,1);
            var result = [
                new Date(2017,11,1),
                new Date(2017,11,4),
                new Date(2017,11,5),
                new Date(2017,11,6),
                new Date(2017,11,7),
            ]
            expect(weekday.recent(origin, 5 )).toEqual(result);
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
            expect(weekday.recent(origin, -5)).toEqual(result);
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
            expect(weekday.recent(origin, 5, "yyyy-MM-dd")).toEqual(result);
        });
        test('Recent with number', () => {
            var origin = new Date(2017,11,1);
            var result = [
                new Date(2017,11,25),
                new Date(2017,11,26),
                new Date(2017,11,27),
                new Date(2017,11,28),
                new Date(2017,11,29),
                new Date(2018,0,1),
            ]
            expect(weekday.recent(6)).toEqual(result);
        });
        test('Recent with number format', () => {
            var origin = new Date(2017,11,1);
            var result = [
                "2017-12-25",
                "2017-12-26",
                "2017-12-27",
                "2017-12-28",
                "2017-12-29",
                "2018-01-01",
            ]
            expect(weekday.recent(6,'yyyy-MM-dd')).toEqual(result);
        });
    });
    describe('3.Weekday count', () => {
        test('a.Date input', () => {
            expect(weekday.count(new Date(2017,11,1))).toEqual(16);
        });
        test('b.Two date input', () => {
            expect(weekday.count(new Date(2017,11,2), new Date(2017,11,23))).toEqual(15);
        });
        test('c.same day', () => {
            expect(weekday.count(new Date(2017,11,1), new Date(2017,11,1))).toEqual(1);
        });
        test('d.same sunday', () => {
            expect(weekday.count(new Date(2017,11,2), new Date(2017,11,2))).toEqual(0);
        });
        test('e.reverse date', () => {
            expect(weekday.count(new Date(2017,11,23), new Date(2017,11,2))).toEqual(15);
        });
        test('f.Number input', () => {
            expect(weekday.count(10)).toEqual(8);
        });
        test('g.Number minus input', () => {
            expect(weekday.count(-10)).toEqual(7);
        });
        test('h.Number date input', () => {
            expect(weekday.count(10, new Date(2017,11,1))).toEqual(7);
        });
    });
});
