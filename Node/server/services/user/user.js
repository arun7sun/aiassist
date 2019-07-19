import Token from './../../helpers/token';



export default class UserService {

    static get(token) {
        return Promise.resolve().then(() => {
            return Token.decode(token).user
        })
    }

    static login(user) {
        let userdata = {
            id: user._json.names[0].metadata.source.id,
            displayName: user._json.names[0].displayName,
            familyName: user._json.names[0].familyName,
            givenName: user._json.names[0].givenName,
            image: user._json.photos[0].url,
            email: user._json.emailAddresses[0].value
        }
return Promise.resolve().then(()=>{


        // return UserModel.user.findOne({
        //     id: userdata.id
        // }).then(data => {
        //     if (data) {
                return {
                    token: Token.renew(userdata).token
                }
            // } else {
            //     return UserModel.user(userdata).save().then(result => {
            //             return {
            //                 token: Token.renew(userdata).token
            //             }
            //         }) 
            // }
        // })
    })
    }
}