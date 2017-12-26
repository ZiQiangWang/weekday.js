# weekday-tools
A convenient tool for weekday, you can get weekday list and format it easily.

## 1.Usage
### Node.js
    npm install --save weekday-tools

    var weekday = require('weekday-tools');  
    weekday.count(10);
    weekday.range(10);
    weekday.recent(10);


### Browser
    <script src="weekday.min.js"></script>

    <script>
        weekday.count(10);
        weekday.range(10);
        weekday.recent(10);
    </script>

## 2.Funtions
Three function are provided for different condition.

### 2.1 weekday.range
> `range` is used to get weekdays list in a range of time. Kinds of parameters are supported. If output format is not specified, list of Date will be returned.

**a. Number**   
Get weekdays in n days from today. Positive input means in future days, and negative input means in past days. Zero input means today, if today is not weekday, you will get empty list.

    weekday.range(10);
    weekday.range(-10);

**b. Date**  
Get weekdays between today and the given date. The parameter can be given as a date in the future or past.

    var to = new Date(2017,11,1);
    weekday.range(to);

**c. Date Number && Date Date**  
You can specify the original day for calculation.

    var origin = new Date(2017,11,1);
    var to = new Date(2017,11,10);
    weekday.range(origin, to);
    weekday.range(origin, 10);

**d. Date String && Number String**  
You can specify format of output, such as 'yyyy-MM-dd'.

    var to = new Date(2017,11,1);
    weekday.range(to, 'yyyy-MM-dd');
    weekday.range(10, 'yyyy-MM-dd');

**e. Date Date String && Date Number String**  
You can specify format of output and set the original date at same time.  

    var origin = new Date(2017,11,1);
    var to = new Date(2017,11,10);
    weekday.range(origin, to, 'yyyy-MM-dd');
    weekday.range(origin, 10, 'yyyy-MM-dd');

### 2.2 weekday.recent
> `recent` is used to get weekdays list with given number. Kinds of parameters are supported. If output format is not specified, list of Date will be returned.

**a. Number**  
Get n weekdays from today when the input is n.Positive input means in future days, and negative input means in past days.Zero input means today, if today is not weekday, you will get empty list.  

    weekday.recent(10);
    weekday.recent(-10);

**b. Date Number**  
You can specify the original day for calculation.

    var origin = new Date(2017,11,1);
    weekday.recent(origin,10);

**c. Number String && Date Number String**  
You can specify the output format.

    var origin = new Date(2017,11,1);
    weekday.recent(10,'yyyy-MM-dd');
    weekday.recent(origin,10,'yyyy-MM-dd');

### 2.3 weekday.count
> `count` is used to get number of weekday in a range of time. Kinds of parameters are supported.

**a. Date**  
Get number of weekday from today to the given day.

    var to = new Date(2017,11,1);   
    weekday.count(to);
**b. Number**  
Get number of weekday in the next few days or over the past few days.

    weekday.count(10);
**c. Date Date && Date Number**  
You can specify the original day for calculation.

    var origin = new Date(2017,11,1);
    var to = new Date(2017,11,11);
    weekday.count(origin,to);
    weekday.count(origin,10);

## 3.License
Copyright (c) 2017 ZiQiangWang [MIT](https://github.com/ZiQiangWang/weekday-tools/blob/master/LICENSE) Licensed.
