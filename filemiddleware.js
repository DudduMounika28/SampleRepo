var connect = require('connect'),
    util = require('util');
    var interceptorfunction =function (request,response,next){
        console.log(util.format('Request for %s with method %s',request.url,request.method));
        next();
    };
    var server=connect()
    .use(interceptorfunction)
    .use(function onRequest(request,response)
    {
        response.end('Hello from connect!');
    }).listen(3000);