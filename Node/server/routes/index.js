import Defines from './../config';
// import UserService from './../services/user'
// import User from './user';
// import Home from './home';
// import Cancellation from './cancellation';
// import Compare from './compare';
// import Customerexperience from './customerexperience';
// import Overallbusinessmetrics from './overallbusinessmetrics';
// import Pendency from './pendency';
// import Performanceforward from './performanceforward';
// import Rnps from './rnps';

import Chat from './chat';




export default (express, JWTMiddleware, passport) => {
    const router = new express.Router();
    // const jwtIgnorePaths = [
    //     'All',
    //     '/api/sso',
    //     '/api/sso/',
    //     '/api/sso/login',
    //     '/api/sso/logout'
    // ];
    // router.use(JWTMiddleware.createApiMiddleware({
    //     pathRegexp: /^\/api\/.+/,
    //     whiteList: jwtIgnorePaths
    // }));


    router.get('/', (req, res)=>{
        res.status(200).json({data:"running"})
    })

    router.get('/chat', Chat.chat.get)
    // router.get('/api/user', User.user.get)
    // router.get('/api/logout', (req, res) => {
    //     res.redirect("https://accounts.google.com/logout")
    // });
    // router.get('/api/sso/login',
    //     passport.authenticate('google', {
    //         failureRedirect: '/error',
    //         failureFlash: true,
    //         scope: ['email', 'profile']
    //     }),
    //     function (req, res) {
    //         res.redirect('/');
    //     }
    // );
    // router.get('/api/sso',
    //     passport.authenticate('google'), (req, res) => {
    //         if (req.user) {
    //             if (req.user._json.emailAddresses[0].value.indexOf("latentview") >= 0) {
    //                 UserService.user.login(req.user,req.connection.remoteAddress).then(result => {
    //                     res.redirect(Defines.REDIRECT_URL + '?token=' + result.token+'&isAuth='+result.isAuth)
    //                 })
    //             } else {
    //                 res.redirect("https://accounts.google.com/logout");
    //             }
    //         } else {
    //             res.redirect("https://accounts.google.com/logout");
    //         }
    //     });

    // router.get('/api/sso/logout', function (req, res) {
    //     res.redirect("https://accounts.google.com/logout");
    // });

    // router.post('/api/dashboard/widgets', Home.dashboard.getDashboardWidgets)
    // router.post('/api/dashboard/pie', Home.dashboard.getPIE)
    // router.post('/api/dashboard/AreaChart', Home.dashboard.getAreaChart)

    // //customerexperience routes
    // router.post('/api/dashboard/customerexperience/nps/widgets', Customerexperience.controller.getcustomerexperienceNPSWidgets)
    // router.post('/api/dashboard/customerexperience/nps/region', Customerexperience.controller.getcustomerexperienceNPSregion)
    // router.post('/api/dashboard/customerexperience/nps/regional', Customerexperience.controller.getcustomerexperienceNPSregional)
    // router.post('/api/dashboard/customerexperience/nps/logistics', Customerexperience.controller.getcustomerexperienceNPSlogistics)
    // router.post('/api/dashboard/customerexperience/nps/deliverystuff', Customerexperience.controller.getcustomerexperienceNPSdeliverystuff)
    // router.post('/api/dashboard/customerexperience/nps/speed', Customerexperience.controller.getcustomerexperienceNPSspeed)

    // //performance forward routes
    // //speed
    // router.post('/api/dashboard/performanceforward/speed/widgets', Performanceforward.speed.home.getperformanceforwardspeedWidgets)
    // router.post('/api/dashboard/performanceforward/speed/c2dtimeline', Performanceforward.speed.home.c2dtimeline)
    // router.post('/api/dashboard/performanceforward/speed/c2dbreakup', Performanceforward.speed.home.c2dBreakup)
    // router.post('/api/dashboard/performanceforward/speed/c2dbreakup1', Performanceforward.speed.home.c2dBreakup1)
    // router.post('/api/dashboard/performanceforward/speed/c2dbreakup2', Performanceforward.speed.home.c2dBreakup2)
    // router.post('/api/dashboard/performanceforward/speed/overallc2s', Performanceforward.speed.home.overallc2s)
    // router.post('/api/dashboard/performanceforward/speed/c2swhwise', Performanceforward.speed.home.c2swhwise)
    // router.post('/api/dashboard/performanceforward/speed/overallanalysis', Performanceforward.speed.home.speedoverallanalysis)
    // router.post('/api/dashboard/performanceforward/speed/overalls2d', Performanceforward.speed.home.overalls2d)
    // router.post('/api/dashboard/performanceforward/speed/s2dwhwise', Performanceforward.speed.home.s2dwhwise)
    // router.post('/api/dashboard/performanceforward/speed/s2dsnapshot', Performanceforward.speed.home.s2dsnapshot)
    // router.post('/api/dashboard/performanceforward/speed/s2d3ppartners', Performanceforward.speed.home.s2d3ppartners)
    // router.post('/api/dashboard/performanceforward/speed/s2dsnapshots2i_i2d', Performanceforward.speed.home.s2dsnapshots2i_i2d)
    // router.post('/api/dashboard/performanceforward/speed/s2dloaddistribution', Performanceforward.speed.home.s2dloaddistribution)
    // router.post('/api/dashboard/performanceforward/speed/s2dlanewise', Performanceforward.speed.home.s2dlanewise)
    // router.post('/api/dashboard/performanceforward/speed/s2dlanewisedropdown', Performanceforward.speed.home.s2dlanewisedropdown)
    

    // //speed-distribution
    // router.post('/api/dashboard/performanceforward/speed/deliverydistribution/forwardspeeddistribution', Performanceforward.speed.deliverydistribution.forwardspeeddistribution)
    // router.post('/api/dashboard/performanceforward/speed/deliverydistribution/trendforward', Performanceforward.speed.deliverydistribution.trendforward)
    // router.post('/api/dashboard/performanceforward/speed/deliverydistribution/Warehouse', Performanceforward.speed.deliverydistribution.Warehouse)
    // router.post('/api/dashboard/performanceforward/speed/deliverydistribution/Delayspreadanalysis', Performanceforward.speed.deliverydistribution.Delayspreadanalysis)
    // router.post('/api/dashboard/performanceforward/speed/deliverydistribution/forwarddistributiontable', Performanceforward.speed.deliverydistribution.forwarddistributiontable)
    // router.post('/api/dashboard/performanceforward/speed/deliverydistribution/widgets', Performanceforward.speed.deliverydistribution.forwardwidgets)
    // //breaches

    // router.post('/api/dashboard/performanceforward/breaches/widgets', Performanceforward.breaches.home.getwidgets)
    // router.post('/api/dashboard/performanceforward/breaches/cpdbreaches', Performanceforward.breaches.home.getcpdbreaches)
    // router.post('/api/dashboard/performanceforward/breaches/apdbreach', Performanceforward.breaches.home.getapdbreach)
    // router.post('/api/dashboard/performanceforward/breaches/getcpdinvimp', Performanceforward.breaches.home.getcpdinvimp)
    // router.post('/api/dashboard/performanceforward/breaches/apdml3p', Performanceforward.breaches.home.getapdml3p)
    // router.post('/api/dashboard/performanceforward/breaches/cpdageingview', Performanceforward.breaches.home.getcpdageingview)
    // router.post('/api/dashboard/performanceforward/breaches/apdageingview', Performanceforward.breaches.home.getapdageingview)
    // router.post('/api/dashboard/performanceforward/breaches/cpdregional', Performanceforward.breaches.home.getcpdregional)
    // router.post('/api/dashboard/performanceforward/breaches/cpdstage', Performanceforward.breaches.home.getcpdstage)
    // router.post('/api/dashboard/performanceforward/breaches/whlevelanalysis', Performanceforward.breaches.home.getwhlevelanalysis)
    // router.post('/api/dashboard/performanceforward/breaches/getapdregional', Performanceforward.breaches.home.getapdregional)
    // router.post('/api/dashboard/performanceforward/breaches/apdstagewise', Performanceforward.breaches.home.getapdstagewise)
    // router.post('/api/dashboard/performanceforward/breaches/apdbreachanlysis', Performanceforward.breaches.home.getapdbreachanlysis)
    // router.post('/api/dashboard/performanceforward/breaches/lanewiseanalysis', Performanceforward.breaches.home.getlanewiseanalysis)
    // router.post('/api/dashboard/performanceforward/breaches/cpdlanewiseanalysis', Performanceforward.breaches.home.cpdlanewise)
    // //breaches distribution
    // router.post('/api/dashboard/performanceforward/breaches/deliverydistribution/deliverymissanalysis', Performanceforward.breaches.deliverydistribution.getdeliverymissanalysis)
    // router.post('/api/dashboard/performanceforward/breaches/deliverydistribution/trendofdeliverymiss', Performanceforward.breaches.deliverydistribution.gettrendofdeliverymiss)
    // router.post('/api/dashboard/performanceforward/breaches/deliverydistribution/branchhistogram', Performanceforward.breaches.deliverydistribution.getbreachhistogram)
    // router.post('/api/dashboard/performanceforward/breaches/deliverydistribution/breacheepdive', Performanceforward.breaches.deliverydistribution.getbreacheepdive)
    // //RNPS
    // //RNPS Overview
    // router.post('/api/dashboard/rnps/overview/widgets', Rnps.overview.getRNPSWidgets);
    // router.post('/api/dashboard/rnps/overview/overview', Rnps.overview.getRNPSOverview);
    // router.post('/api/dashboard/rnps/overview/rnpsoverallsummary', Rnps.overview.getRnpsOverallsummary);
    // router.post('/api/dashboard/rnps/overview/rnpsregionaltrend', Rnps.overview.getRnpsRegionalTrend);
    // router.post('/api/dashboard/rnps/overview/rnpsgender', Rnps.overview.getRnpsByGender);
    // router.post('/api/dashboard/rnps/overview/rnpsage', Rnps.overview.getRnpsByAge);
    // router.post('/api/dashboard/rnps/overview/rnpsoverall', Rnps.overview.getRnpsOverall);
    // router.post('/api/dashboard/rnps/overview/rnpsregional', Rnps.overview.getRnpsRegional);
    // router.post('/api/dashboard/rnps/overview/rnpsnorthzone', Rnps.overview.getRnpsNorthZone);
    // router.post('/api/dashboard/rnps/overview/rnpssouthzone', Rnps.overview.getRnpsSouthZone);
    // router.post('/api/dashboard/rnps/overview/rnpseastzone', Rnps.overview.getRnpsEastZone);
    // router.post('/api/dashboard/rnps/overview/rnpswestzone', Rnps.overview.getRnpsWestZone);
    // router.post('/api/dashboard/rnps/overview/rnpsmale', Rnps.overview.getRnpsMale);
    // router.post('/api/dashboard/rnps/overview/rnpsfemale', Rnps.overview.getRnpsFemale);
    
    // //RNPS DeepDive
    // router.post('/api/dashboard/rnps/deepdive/widgets', Rnps.deepdive.getRNPSWidgets);
    // router.post('/api/dashboard/rnps/deepdive/cxpectrum',Rnps.deepdive.getcxpectrumsummary);
    // router.post('/api/dashboard/rnps/deepdive/level1drilldown',Rnps.deepdive.getlevel1drilldown);
    // router.post('/api/dashboard/rnps/deepdive/topparameters',Rnps.deepdive.getTopParams);
    // router.post('/api/dashboard/rnps/deepdive/socialmedia',Rnps.deepdive.getRNPSWidgets);
    // router.post('/api/dashboard/rnps/deepdive/brandparameters',Rnps.deepdive.getBrandParams);
    // router.post('/api/dashboard/rnps/deepdive/brandattribute',Rnps.deepdive.getbrandattribute);
    // router.post('/api/dashboard/rnps/deepdive/brandl1audience',Rnps.deepdive.getBrandL1Audience);
    // router.post('/api/dashboard/rnps/deepdive/brandl1overall',Rnps.deepdive.getBrandL1Overall);
    // router.post('/api/dashboard/rnps/deepdive/brandl1zonewise',Rnps.deepdive.getBrandL1Zonewise);
    // router.post('/api/dashboard/rnps/deepdive/primarybrandl1',Rnps.deepdive.getPrimaryBrandL1);
    // router.post('/api/dashboard/rnps/deepdive/trendofrnps',Rnps.deepdive.getRNPSWidgets);

    // //cancellation routes
    // router.post('/api/cancellation', Cancellation.controller.get)

    // //compare routes
    // router.post('/api/compare', Compare.controller.get)

    // //customerexperience routes
    // router.post('/api/customerexperience', Customerexperience.controller.get)

    // //overallbusinessmetrics routes
    // router.post('/api/overallbusinessmetrics', Overallbusinessmetrics.controller.get)

    // //pendency routes
    // router.post('/api/pendency', Pendency.controller.get)




    return router;
}