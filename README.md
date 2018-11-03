# weekday.js
A convenient tool for weekday, you can get weekday list and format it easily.
# weekdayjs
[![NPM version][npm-badge]][npm-url]
[![Build Status][travis-badge]][travis-url]
[![NPM downloads][npm-downloads]][npm-url]
[![Coverage Status][coveralls-badge]][coveralls-url]
[![gzip](http://img.badgesize.io/https://unpkg.com/weekdayjs/lib/weekdayjs.min.js?compression=gzip)][unpkg-url]


[npm-badge]: https://img.shields.io/npm/v/weekdayjs.svg
[npm-url]: https://www.npmjs.com/package/weekdayjs
[npm-downloads]: https://img.shields.io/npm/dm/weekdayjs.svg
[travis-badge]: https://www.travis-ci.org/ZiQiangWang/weekdayjs.svg?branch=master
[travis-url]: https://www.travis-ci.org/ZiQiangWang/weekdayjs
[unpkg-url]: https://unpkg.com/weekdayjs/lib/weekdayjs.min.js
[coveralls-badge]: https://coveralls.io/repos/ZiQiangWang/weekdayjs/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/ZiQiangWang/weekdayjs

<!-- [![NPM version](https://img.shields.io/npm/v/weekdayjs.svg?style=flat)](https://www.npmjs.com/package/weekdayjs) [![NPM monthly downloads](https://img.shields.io/npm/dm/weekdayjs.svg?style=flat)](https://npmjs.org/package/weekdayjs) -->
Cache data based on localstorage in browser, expire property is provided.

## Install

```
npm i weekdayjs
```

## Usage

Import the whole library, ~4kb bundle size.

```Js
import { rangeCount } from 'weekdayjs';
```

or use the function as you need,

```js
import rangeCount from 'weekdayjs/lib/rangeCount';
```

## API

### [isWeekday](src/isWeekday/index.js)

Check if the given date fall on a weekday.

**Params**

- `date` **{Date}**: The date to be checked.
- return **{Boolean}** The date is weekday

**Example**

```js
isWeekday(new Date(2018, 5, 20))   
// => true
```

### [rangeCount](src/rangeCount/index.js)

Get weekday count between two dates.

**Params**

- `start` **{Date}**: The start date.
- `end` **{Date}**: The end date.
- return **{Number}** The count between start and end

**Example**

```js
rangeCount(new Date(2018, 5, 20), new Date(2018, 5, 30))     
// => 8
```

### [rangeWeekdays](src/rangeWeekdays/index.js)

Get weekday list between given dates.

**Params**

- `start` **{Date}**: The start date.
- `end` **{Date}**: The end date.
- `fmt` **{String}**: Result format, return **Date** type if `fmt` is not defined.
- return **{Array}** Weekday list between given dates

**Example**

```js
rangeWeekdays(new Date(2018, 5, 20), new Date(2018, 5, 25))
// => [
//        new Date(2018, 5, 20),
//        new Date(2018, 5, 21),
//        new Date(2018, 5, 22),
//        new Date(2018, 5, 25),
//    ]
```

### [recentWeekdays](src/recentWeekdays/index.js)

Get recent weekday list from the given date

**Params**

- `days` **{Number}**:  Weekday count.
- `origin` **{Date}**: The original date, default today.
- `fmt` **{String}**: Result format, return **Date** type if `fmt` is not defined.
- return **{Array}** Recent weekday list

**Example**

```js
recentWeekdays(3, new Date(2018, 5, 20))
// => [
//        new Date(2018, 5, 20),
//        new Date(2018, 5, 21),
//        new Date(2018, 5, 22),
//    ]
```

### [distanceCount](src/distanceCount/index.js)

Get weekday count from original date.

**Params**

- `offset` **{Number}**:  Days from original date.
- `origin` **{Date}**: The original date, default today.
- return **{Number}** The cound

**Example**

```js
distanceCount(10, new Date(2018, 5, 20))
// => 8
```

### [distanceWeekdays](src/distanceWeekdays/index.js)

Get weekday list from original date.

**Params**

- `offset` **{Number}**:  Days from original date.
- `origin` **{Date}**: The original date, default today.
- `fmt` **{String}**: Result format, return **Date** type if `fmt` is not defined.
- return **{Number}** The cound

**Example**

```js
distanceWeekdays(5, new Date(2018, 5, 25))
// => [
//       new Date(2018, 5, 20),
//       new Date(2018, 5, 21),
//       new Date(2018, 5, 22),
//       new Date(2018, 5, 25),
//    ]
```

### [format](src/format/index.js)

Format date to given mask.

**Params**

- `date` **{Date}**:  Date to format.
- `maks` **{String}**: Format mask.
- `utc` **{Boolean}**: Use utc or not.
- return **{String}** Formated date.

**Example**

```js
format(new Date(2018, 5, 20), 'yyyy/mm/dd')
// => 2018/06/20
```

### License

Copyright © 2018, [ZiQiangWang](https://github.com/ZiQiangWang).
Released under the [MIT License](LICENSE).
