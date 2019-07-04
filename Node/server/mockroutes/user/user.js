
import Token from './../../helpers/token' 
export default class UserController {


    static get(req, res) {
            res.status(200).json({data:Token.decode(req.headers['x-access-token']).user}) 
    }
}