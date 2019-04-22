// live-server

const http = require('http'); 
//     require  引入这个模块进来
        // COMMONJS 模块化方案
const https = require('https');
let i = 0;

http.createServer(function(request,response){
    i++;
    response.end(`hello world ${i}`);
}).listen(3000);

// Web 服务  在软件上理解是一个HTTP访问的服务
