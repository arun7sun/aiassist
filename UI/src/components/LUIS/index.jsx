// import request from 'request';
// import querystring from 'querystring';

class Luis extends Component {
     getLuisIntent = (utterance) => {

        // endpoint URL
        var endpoint = "https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/";
    
        // Set the LUIS_APP_ID environment variable 
        // to df67dcdb-c37d-46af-88e1-8b97951ca1c2, which is the ID
        // of a public sample application.    
        var luisAppId = '4c88341c-00f0-4cfd-a072-29f559962efa';
    
        // Read LUIS key from environment file ".env"
        // You can use the authoring key instead of the endpoint key. 
        // The authoring key allows 1000 endpoint queries a month.
        var endpointKey = 'e6ec2f793c9e4b0f87e04e75f0891c75';
    
        // Create query string 
        var queryParams = {
            "verbose":  true,
            "q": utterance,
            "subscription-key": endpointKey
        }
    
        // append query string to endpoint URL
        var luisRequest = endpoint + luisAppId + '?' + querystring.stringify(queryParams);
    
        // HTTP Request
        request(luisRequest,
            function (err,response, body) {
    
                // HTTP Response
                if (err)
                    console.log(err);
                else {
                    var data = JSON.parse(body);
    
                    console.log(`Query: ${data.query}`);
                    console.log(`Top Intent: ${data.topScoringIntent.intent}`);
                    console.log('Intents:');
                    console.log(JSON.stringify(data.intents));
                }
            });
    }
    render = () => {
        return (
            <div className="luis">
                {this.getLuisIntent('hc for region 20')}
            </div>
        )
    }
}

export default Luis;

