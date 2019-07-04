import Exception from './../../helpers/exception';

import UserService from './../../services/user';

export default class UserController {


    static get(req, res) {
        UserService.user.get(req.headers['x-access-token']).then(result => {
            res.status(200).json({
                data: result
            })
        }).catch(err => {
            Exception.failWith(req, res, err);
        });
    }
}