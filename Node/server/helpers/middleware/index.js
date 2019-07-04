import _ from 'lodash';
import moment from 'moment'
import Exception from './../exception';
import Token from './../token';
import Time from './../time';
import cron from 'node-cron'

let cacheData = {}

export default class Middleware {
    
    static createApiMiddleware(options) {
        const whiteList = options.whiteList;
        const pathRegexp = options.pathRegexp;
        const pathMatcher = (p) => {
            return pathRegexp.test(p)
        };

        return (req, res, next) => {

            try {
                req.requestTime = Date.now();
                req.session = {};
                if (whiteList.indexOf("All") > -1) {
                    return next();
                }
                const path = req.path;
                const shouldProcess = pathMatcher(path) && !_.find(whiteList, (p) => {
                    return path === p
                });

                if (!shouldProcess) {
                    return next();
                }

                const token = Token.getToken(req);

                if (token === undefined) {
                    return Exception.failWith(req, res, new Error(Exception.NO_TOKEN_EXCEPTION));
                }

                const decoded = Token.decode(token);
                if(req.connection.remoteAddress!==decoded.user.ip){
                    return Exception.failWith(req, res, new Error(Exception.INVALID_TOKEN_EXCEPTION));
                }
                // if (Time.isEarlierThanNow(decoded.exp)) {
                //     return Exception.failWith(req, res, new Error(Exception.EXPIRED_TOKEN_EXCEPTION));
                // }
                // else{
                req.session.user = decoded.user;
                if (cacheData[req.url + moment(_.get(req, 'body.date.from', "null")).format("YYYY/MM/DD") + moment(_.get(req, 'body.date.to', "null")).format("YYYY/MM/DD") + _.get(req, 'body.flag', "null")]) {
                    res.status(200).json(cacheData[req.url + moment(req.body.date.from).format("YYYY/MM/DD") + moment(req.body.date.to).format("YYYY/MM/DD") + req.body.flag])
                } else {
                    return next();
                }
                // }
            } catch (err) {
                return Exception.failWith(req, res, err);
            }

        };
    }


    static CacheDb(body, req, res) {
        if(moment().format("YYYY/MM/DD") === moment(_.get(req, 'body.date.to', "home")).format("YYYY/MM/DD")){
            if(res.statusCode===200){
                cacheData[req.url + moment(_.get(req, 'body.date.from', "home")).format("YYYY/MM/DD") + moment(_.get(req, 'body.date.to', "home")).format("YYYY/MM/DD") + _.get(req, 'body.flag', "home")] = body
            }
        }
    }


    static InitCron() {
        cron.schedule('0 0 * * *', () => {
            cacheData = {}
        });
    }
}