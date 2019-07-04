import _ from 'lodash';
import moment from 'moment';

export default class Util {
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
    static marksBuilder(min, max, split, labelFormat){
        let avg = (max - min) / (split)
        let obj = {}
        let item = min
        for (let i = 0; i <= split; i++) {
            obj[item] = moment(item).format(labelFormat)
            item = item + avg
        }
        return obj;
    }
}