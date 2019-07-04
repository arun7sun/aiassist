import fs from 'fs';
import path from 'path';
import blob from '../db/blob'
import Util from './../utils';
import moment from 'moment';

export default class Logger {
    static logging(body, req, res) {
        let blogdata = {
            containerName: "node-" + moment().format('MM-YYYY'),
            blobName: "node-" + moment().format('DD-MM-YYYY') + '.log',
            content: JSON.stringify({
                time: Util.dateFormater(Util.now(), "DD-MM-YYYY:HH:mm:ss").toString(),
                method: req.method,
                url: req.url,
                duration: Util.durationAsms(req.requestTime, Util.now()) + 'ms',
                remoteAddress: req.connection.remoteAddress,
                headers: req.headers,
                query: req.query,
                user: req.session,
                body: req.body,
                params: req.params
            })+",\n"
        }
        // console.log('ttttt',blogdata)
        blob(blogdata);
        // let fileName = path.dirname(require.main.filename).replace('Node\\server', 'Node\\log\\').replace('Node/server', 'Node/log/') + 'log-' + new Date().getDate() + "-" + (new Date().getMonth() + 1) + '-' + new Date().getFullYear() + '.log';
        //     fs.appendFile(fileName,
        //         Util.dateFormater(Util.now(), "DD-MM-YYYY:HH:mm:ss").toString()+'\t'+
        //         req.method+'\t'+
        //         req.url+'\t'+Util.durationAsms(req.requestStart,Util.now())+'ms\theaders==>\t'+
        //         JSON.stringify(req.headers)+'\tquery==>\t'+
        //         JSON.stringify(req.query)+'\tbody==>\t'+JSON.stringify(req.body)+'\tparams==>\t'+
        //         JSON.stringify(req.params)+'\tresponse==>\t'+JSON.stringify(body)+'\n', function (err) {
        //         if(err){
        //             console.log(err)
        //         }
        //         else{
        //             console.log('Saved!');
        //         }
        //     });
    }
}