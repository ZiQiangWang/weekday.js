(function() {
    'use strict';
    var weekday = {};

    /**
      * 最近的n个工作日列表，有以下几种解析参数方式
      * 1、一个参数为Number，最近n天内的工作日列表
      * 2、一个Date，一个Number，以date为原点n天内的工作日列表
      * 3、一个Number，一个String，参考1，返回格式化后的工作日列表
      * 4、一个Date，一个Number，一个String，参考2，返回格式化后的工作日列表
     * @Author   wangziqiang
     * @DateTime 2017-12-18
     * @param    {[Date,Number]}    start  开始时间
     * @param    {[Date,String]}    end    结束时间
     * @param    {String}  format 返回的日期格式
     * @return   {Array}           日期列表
     */
     function range(start, end, format) {
         var args = arguments.length;
         var oneDay =  1000 * 60 * 60 * 24;

         var now = new Date();
         var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
         if (args === 1 || (args === 2 && isString(end))) {
             format = end
             end = today;
             if (isDate(start)) {

             } else if(isNum(start)) {
                 start = new Date(today.getTime() + oneDay * start);
             }

         } else if ((args === 2 && isDate(start)) || (args === 3 && isString(format))){
             if (isDate(end)) {

             } else if(isNum(end)) {
                 end = new Date(start.getTime() + oneDay * end);
             }
        } else {
            throw new Error('range参数类型错误');
        }

        if (start - end > 0) {
            var tmp = start;
            start = end;
            end = tmp;
        }

        var weekday_list = [];
        while (start <= end) {
            var week = start.getDay();
            if (week > 0 && week < 6) {
                weekday_list.push(start);
            }
            start = new Date(start.getTime() + oneDay);
        }
        return format_weekdays(weekday_list, format);
    }

    /**
     * 最近的n个工作日列表，有以下几种解析参数方式
     * 1、一个参数为Number，以今天为原点，最近n个工作日列表
     * 2、一个Date，一个Number，以date为原点n个工作日列表
     * 3、一个Number，一个String，参考1，返回格式化后的工作日列表
     * 4、一个Date，一个Number，一个String，参考2，返回格式化后的工作日列表
     * @Author   wangziqiang
     * @DateTime 2017-12-18
     * @param    {[Number,Date]}    days   天数，可以为正数或负数
     * @param    {[Number,String]}  origin   输出的日期格式
     * @param    {String}           format 起始日期
     * @return   {Array}            返回的日期列表
     */
     function recent(origin, days, format) {
        var args = arguments.length;
        var now = new Date();
        var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        if (args === 1) {
            if (isNum(origin)) {
                days = origin;
                origin = today;
                format = undefined;
            } else {
                throw new Error('recent参数格式错误, 期待的格式为Number');
            }
        } else if (args === 2) {
            if (isNum(origin) && isString(days)) {
                format = days;
                days = origin;
                origin = today;
            } else if (isDate(origin) && isNum(days)) {
                format = undefined;
            } else {
                throw new Error('recent参数格式错误, 期待的格式为Number,String 或 Date,Number');
            }
        } else if (args === 3){
            if (isDate(origin) && isNum(days) && isString(format)) {

            } else {
                throw new Error('recent参数格式错误，期待的格式为Date,Number,String');
            }
        }

        var oneDay =  1000 * 60 * 60 * 24;
        if (days < 0) {
            oneDay = -oneDay;
        }
        var weekday_list = [];

        var offset = Math.abs(days);
        while (weekday_list.length < offset) {
            var week = origin.getDay();
            if (week > 0 && week < 6) {
                days >= 0 && weekday_list.push(origin);
                days < 0 && weekday_list.unshift(origin);
            }
            origin = new Date(origin.getTime() + oneDay);
        }

        return format_weekdays(weekday_list, format);
    }

    /**
     * 统计一个时间段内的工作日的数量
     * 一共有四种输入方式：
     * 1、只有一个Date输入，返回当前时间与该日期之间的工作日数目
     * 2、两个Date输入，返回两个日期之间的工作日数目
     * 3、只有一个Number输入，返回当前时间为起点，n天内的工作日数目，n为正数，则是未来n天，n为负数，则是过去n天
     * 4、第一个为Number第二个为Date，返回以该日期为起点，n天内的工作日数目
     * @Author   wangziqiang
     * @DateTime 2017-12-21
     * @param    {[Date, Number]}       start   开始时间或者多少天以内
     * @param    {Date}                 end     结束时间或者作为天数范围的原点
     * @return   {Number}
     */
    function count(start, end) {

        var startDate, endDate;
        if (isDate(start)) {
            var startDate = start;
            if (end === undefined) {
                endDate = new Date();
            } else if (isDate(end)){
                endDate = end;
            } else if (isNum(end)) {
                endDate = new Date(start);
                endDate.setDate(endDate.getDate() + end);
            }
        } else if (isNum(start)) {
            if (end === undefined) {
                startDate = new Date();
                endDate = new Date();
                endDate.setDate(endDate.getDate() + start);
            }
        } else {
            throw new Error('count 函数的第一个参数为Date或Number');
        }

        return range_count(startDate, endDate);
    }

    /**
     * 计算两个日期之间的工作日个数
     * @Author   wangziqiang
     * @DateTime 2017-12-20
     * @param    {Date}    start 起始时间
     * @param    {Date}    end   结束时间
     * @return   {Number}        工作日个数
     */
     function range_count(start, end) {
        if (!isDate(start) || !isDate(end)) {
            throw new Error('range_count参数必须为Date类型');
        }

        if (start > end) {
            var tmp = start;
            start = end;
            end = tmp;
        }

        var days = 0;
        var startWeek = start.getDay();
        var startOffset = startWeek === 0 ? 0 : startWeek - 1;
        start.setDate(start.getDate() - startWeek);

        var endWeek = end.getDay();
        var endOffset = (endWeek === 0 || endWeek === 6) ? 0 : 5 - endWeek;
        endWeek !== 0 && end.setDate(end.getDate() + (7 - endWeek));
        return Math.floor((end - start) / (1000 * 60 * 60 * 24 * 7) + 0.5) * 5 - startOffset - endOffset;

    }
    /**
     * 工作日列表格式化
     * @Author   wangziqiang
     * @DateTime 2017-12-19
     * @param    {[type]}    weekday_list [description]
     * @param    {[type]}    format       [description]
     * @return   {[type]}                 [description]
     */
     function format_weekdays(weekday_list, format) {
        if (format === undefined) {
            return weekday_list;
        } else {
            return weekday_list.map(function(item){
                return formatDate(item, format);
            });
        }
    }

    /**
     * 日期格式化
     * @Author   wangziqiang
     * @DateTime 2017-12-19
     * @param    {Date}    mydate [description]
     * @param    {String}    format [description]
     * @return   {String}           [description]
     */
     function formatDate(mydate,format) {
        var weeks = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
        var o = {
            "M+": mydate.getMonth() + 1, //月份
            "d+": mydate.getDate(), //日
            "h+": mydate.getHours(), //小时
            "m+": mydate.getMinutes(), //分
            "s+": mydate.getSeconds(), //秒
            "w+": weeks[mydate.getDay()], //周
            "q+": Math.floor((mydate.getMonth() + 3) / 3), //季度
            "S": mydate.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (mydate.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
        if (new RegExp("(" + k + ")").test(format)) format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return format;
    }

    function isDate(date) {
        return date instanceof Date;
    }

    function isNum(num) {
        return typeof num === 'number';
    }

    function isString(str) {
        return typeof str === 'string';
    }

    module.exports = {
        range: range,
        recent: recent,
        count: count
    }
})();
