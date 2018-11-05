
// get
var xhr = new XMLHttpRequest()
xhr.open('GET','http://jira.com?nane=h&age=2',true)
xhr.onload = function(){
    if((xhr.status >= 200 && xhr.status<300) || xhr.status == 304){
        console.log(xhr.responseText)
    }
    else{
        console.log('error')
    }
    xhr.onerror = function(){
        console.log('服务器异常')
    }
}
xhr.send()


//post

var xhr = new XMLHttpRequest()
xhr.open('post','/login',true)
xhr.onreadystatechange = function(){
    if(xhr.readyState ===4){
        if((xhr.status >= 200 && xhr.status < 300)||xhr.status == 304){
            console.log(xhr.responseText)
        }
        else{
            console.log('error')
        }
    }
    xhr.onerror = function(){
        console.log('服务器异常')
    }
}
xhr.send('name=h&age=2')

















function ajax(opts){
    var url = opts.url    
    var type = opts.type || 'GET'  
    var dataType = opts.dataType || 'json' 
    var onsuccess = opts.onsuccess || function(){}
    var onerror = opts.onerror || function(){}
    var data = opts.data || {}
    var dataStr = []
    for(var key in data){
        dataStr.push(key + '=' + data[key])
    }
    dataStr = dataStr.join('&')

    if(type === 'GET'){
        url += '?' + dataStr
    }
    var xhr = new XMLHttpRequest()
    xhr.open(type, url, true)
    xhr.onload = function(){
        if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
            //成功了
            if(dataType === 'json'){
                onsuccess( JSON.parse(xhr.responseText))
            }else{
                onsuccess( xhr.responseText)
            }
        } else {
            onerror()
        }
    }
    xhr.onerror = onerror
    if(type === 'POST'){
        xhr.send(dataStr)
    }else{
        xhr.send()
    }
}
ajax({
    url: 'http://api.jirengu.com/weather.php',
    data: {
        city: '北京'
    },
    onsuccess: function(ret){
        console.log(ret)
    },
    onerror: function(){
        console.log('服务器异常')
    }
})






function ajax(opts){
    var url = opts.url
    var type = opts.type ||'GET' 
    var dataType = opts.dataType || 'json'
    var async = opts.async || true
    
    var onsuccess = opts.onsuccess || function(){}
    var onerror = opts.onerror || function(){}
    var data = opts.data || {}

    var dataStr = []
    for(var key in data){
        dataStr.push(key + '=' + data[key])
    }
    dataStr  = dataStr.join('&')
    
    if(type === 'GET'){
        url += '?' + dataStr
    }

    var xhr = new XMLHttpRequest()
    xhr.open('GET','http://www.login.cn',true)
    xhr.onload = function(){
        if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
           if(dataType === 'json'){
               onsuccess(JSON.parse(xhr.responseText))
           }
           else{
               onsuccess(xhr.responseText)
           }
        }
        else{
            onerror()
        }
    }
    xhr.onerror = onerror
    if(type ==='POST'){
        xhr.send(dataStr)
    }
    else{
        xhr.send()
    }
}
ajax({
    url:'http://www.login.cn',
    data:{
        nane1:'value1',
        name2:'value2',
    },
    onsuccess:function(ret){
        console.log(ret)
    },
    onerror:function(){
        console.log('服务器异常')
    }
})

