export default class Exception {

    static SERVER_ERROR_EXCEPTION = 'serverErrorException';

    static INVALID_TOKEN_EXCEPTION = 'invalidTokenException';
    static EXPIRED_TOKEN_EXCEPTION = 'expiredTokenException';
    static NO_TOKEN_EXCEPTION = 'noTokenException';

    static PARAMETER_MISSING_EXCEPTION = 'parameterMissing';

    static DUPLICATE_ENTRIES_EXCEPTION = 'duplicateEntries'

    static NO_ENTRIES_EXCEPTION = 'noEntries'

    static INVALID_CREDENTIALS = 'invalidCredentials'

    static handleMessage(err) {
        switch (err.message) {
            case "parameterMissing":
            return {
                status: 404,
                type: "parameter missing",
                message: 'parameter missing',
            };
            case Exception.INVALID_TOKEN_EXCEPTION:
            return {
                status: 401,
                type: this.INVALID_TOKEN_EXCEPTION,
                message: 'Invalid Token',
            };

        case Exception.EXPIRED_TOKEN_EXCEPTION:
            return {
                status: 401,
                type: this.EXPIRED_TOKEN_EXCEPTION,
                message: 'Token Expired',
            };

        case Exception.NO_TOKEN_EXCEPTION:
            return {
                status: 401,
                type: this.NO_TOKEN_EXCEPTION,
                message: 'No Token',
            };
            case "duplicateEntries":
            return {
                status: 404,
                type: "duplicate entries",
                message: 'duplicate entries',
            };

            case "noEntries":
            return {
                status: 404,
                type: "no entries",
                message: 'no entries',
            };

            case "invalidCredentials":
            return {
                status: 400,
                type: "invalid credentials",
                message: 'invalid credentials',
            };

            case "serverErrorException":
                return {
                    status: 500,
                    type: "serverErrorException",
                    message: 'db time out Error',
                };

            default:
                return {
                    status: 500,
                    type: "serverErrorException",
                    message: 'Internal Server Error',
                };
        }
    }

    static handleCode(err) {

        switch (err.code) {

        }
    }

    static failWith(req,res, err) {
        console.log(err);
        const result = Exception.handleCode(err) || Exception.handleMessage(err);
        const data = {
            error: {
                type: result.type,
                message: result.message
            }
        };
        return res
            .status(result.status)
            .json(data);

    }
}