var http = require('http')
var fs = require('fs')
var path = require('path')
var url = require('url')

http.createServer(function(res,req){
    var pathObj = url.parse(req.url,true)
    switch (pathObj.pathname){
        case '/getWeather' :
        res.setEncoding(JSON.stringify({biejing:'sunny'}))
        break;
        default:
        fs.readFile(parse.join(__dirname,pathObj.pathname),function(e,data){
            if(e){
                res.writehead(404,'not found')
                res.end('<h1>404 not found</h1>')
            }else{
                res.end(data)
            }
        })
    }
}).listen(8080)