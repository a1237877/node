传统的MVC后端开发

MVVM
Model Page({data:{}})
view  Temlate wxml
VM {{}} wx:for

MVC Model 数据库
V View 静态页面
C Controller


Web HTTP服务器
端口？  3000  不同端口有不同的服务
Mysql 的端口号  3306
webServer 80 或8080 或 3000

用户 Request 通过IP+端口
Web Server Response 

http.createServer(function(request,respose){
    request N个用户
    response 
}).listen(8080)  创建WebServer服务