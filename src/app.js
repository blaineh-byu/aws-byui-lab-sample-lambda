'use strict';
var axios = require("axios")["default"];
exports.handler = function (event) {
    if (!event.queryStringParameters || !event.queryStringParameters.url) {
        var response = {
            statusCode: 200,
            headers: {
                "content-type": "text/plain; charset=utf-8"
            },
            body: "Please provide a url as a query string parameter"
        };
        return (Promise.resolve(response));
    }
    else {
        var url = event.queryStringParameters.url;
        return call(url);
    }
};
function call(url) {
    console.log("Getting:" + url);
    return axios
        .get(url)
        .then(function (response) {
        console.log("Got content for:" + url);
        return {
            statusCode: 200,
            headers: {
                "content-type": "text/plain; charset=utf-8"
            },
            body: response
        };
    })["catch"](function (error) {
        return {
            statusCode: 500,
            headers: {
                "content-type": "text/plain; charset=utf-8"
            },
            body: "Some error fetching the content"
        };
    });
}
