import express from 'express';
import mung from 'express-mung';
import bodyParser from 'body-parser';
import compression from 'compression';
import Morgan from 'morgan';
import http from 'http';
import cors from 'cors';
import nocache from 'nocache';
import passport from 'passport'
import {Strategy} from 'passport-google-oauth20'


import config from './config';
import Router from './routes';
import MockRouter from './mockroutes';
import Middleware from './helpers/middleware'
import Logger from './helpers/Logger'

// let SamlStrategy = new Strategy({
//     clientID: config.CLIENT_ID,
//     clientSecret: config.CLIENT_SECRET,
//     callbackURL: '/api/sso',
//     userProfileURL:'https://people.googleapis.com/v1/people/me?personFields=emailAddresses,names,photos'
// },
// (accessToken, refreshToken, profile, done)=> {
//     return done(null, profile);
// })

const Routes = Router(express, Middleware, passport);
const MockRoutes = MockRouter(express, Middleware, passport);
const app = express();
const server = http.Server(app);
const port = config.APP_PORT;

Middleware.InitCron()

app.use(nocache());
app.use(compression());
app.use(Morgan(':date> :method :url - {:referrer} => :status (:response-time ms)'));

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json({
    limit: 1024 * 1024 * 5,
    type: 'application/json'
}));
app.use(bodyParser.urlencoded({
    extended: true,
    limit: 1024 * 1024 * 5,
    type: 'application/x-www-form-urlencoding'
}));
app.use(cors());
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(SamlStrategy);

// if (config.USE_CACHE === "true" || config.USE_CACHE === true || config.LOG_ENABLED === "true" || config.LOG_ENABLED === true ) {
//     app.use(mung.json(
//         function transform(body, req, res) {
//             if (config.USE_CACHE === "true" || config.USE_CACHE === true ) {
//             Middleware.CacheDb(body, req, res)
//             }
//             if (config.LOG_ENABLED === "true" || config.LOG_ENABLED === true ) {
//                 Logger.logging(body, req, res)
//             }
//         }, {
//             mungError: true
//         }
//     ));
// }

if (config.DEPLOYMENT_TYPE === "DEV") {

    app.use('/', MockRoutes);

} else {

    app.use('/', Routes);

}

// passport.serializeUser(function (user, done) {
//     done(null, user);
// });

// passport.deserializeUser(function (user, done) {
//     done(null, user);
// });

server.listen(config.APP_PORT, () => {
    console.log('Server started on port %d', port)
});

exports.server = server;