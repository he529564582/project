// var http = require('http')
// var fs = require('fs')
// var path = require('path')
// var url = require('url')

// function staticRoot(staticPath,req,res){
//     console.log(staticPath)
//     console.log(req.url)
//     var pathObj = url.parse(req.url,true)
//     pathObj.pathname += 'index.html'
// }
// var filePath = path.jion(staticPath,pathObj.pathname)

// fs.readfile(filePath,binary,function(err,fileContent){
//     if(err){
//         console.log('404')
//         res.writeHead('404','not found')
//         red.end('<h1>404 Not Found</h1>')
//     }
//     else{
//         console.log('ok')
//         res.writeHead(200,'Ok')
//         res.end()
//     }
// })


// console.log(path.jion(__dirname,'static'))
// var server = http.createServer(function(req,res){
//     staticRoot(path.jion(__dirname,'static'),req,res)
// })
// server.listen(8080)
// console.log('visit hhttp://localhost:8080')




var http = require("http")
var fs = require('fs')
var path = require('path')
var url = require('url')

function staticRoot(staticPath,req,res){
    console.log(staticPath)
    console.log(req.url)
    var pathObj = url.parse(req.url,true)
    console.log(pathObj)
    if(pathObj.pathname ==='/'){
        pathObj.pathname =+ index.html
    }
    var filePath = path.join(staticPath,pathObj.pathname)
    fs.readFile(filePath,'binary',function(err,fileContent){
        if(err){
            console.log('404')
            res.writeHead(404,'Not Found')
            res.end('<h1>404 not found</h1>')
        }
        else{
            console.log('ok')
            res.writeHead(200,'ok')
            res.write(fileContent,'binary')
            res.end()
        }
    })
}
console.log(path.join(_dirname,'static'))
var server = http.createServer(function(req,res){
    staticRoot(path.jion(_dirname,'static'),req,res)
})
server.listen(9090)
console.log('visit http://localhost:9090')