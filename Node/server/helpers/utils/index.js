import moment from 'moment';

export default class Util {

    static monthDiffCalculator(time, month) {
        return {
            to: time.unix() * 1000,
            from: time.subtract(month, 'months').startOf('month').unix() * 1000
        }
    }

    static now() {
        return moment().utc();
    }

    static epoch(time) {
        return moment(time).unix() * 1000;
    }

    static dateFormater(date, format) {
        return moment(date).utc().format(format);
    }
    static durationAsms(start,end) {
        return moment.duration(end.diff(start)).asMilliseconds();
    }
   

    static monthName(month) {
        return moment(month, 'MM').format('MMMM');
    }

    static getUnixFromMonthAndYear(month,year) {
        return moment().set({'year': year, 'month': month-1}).utc().startOf('month').unix() * 1000
    }

    static subtractMonthNow(num) {
        return moment().utc().subtract(num, 'months').endOf('month');
    }

    static unixMillisConvertor(time, format) {
        return moment(time, format).utc().unix() * 1000
    }

    static intervalSecBuilder(time, points) {
        let sec = ((moment(time.to, "YYYY-MM-DD").utc().unix() * 1000) - (moment(time.from, "YYYY-MM-DD").utc().unix() * 1000)) / points;
        return sec + 'ms';
    }

    static subtractYear(num) {
        return moment().utc().subtract(num, 'year').format("YYYY");
    }

    static subtractMonth(num) {
        return moment().utc().subtract(num, 'month').format("MM");
    }


    static numStandard(number, decPlaces) {
        if (number < 1000000) {
            decPlaces = 0
        }
        decPlaces = Math.pow(10, decPlaces);
        var abbrev = ["K", "M", "B", "T"];
        for (var i = abbrev.length - 1; i >= 0; i--) {
            var size = Math.pow(10, (i + 1) * 3);
            if (size <= number) {
                number = Math.round(number * decPlaces / size) / decPlaces;
                number += abbrev[i];
                break;
            }
        }
        return number;
    }

}