将 js 走向后端

没有DOM
有命令行 有服务器
文件系统

代码的书写顺序和执行完成的顺序不一样
如何确保顺序呢？
回调函数会带来回调地狱  可读性降低
Promise

拆分Promise 来理解
-解决耗时这一类问题，new Promise()
-问题解决后，控制权的转移得以控制，js 单线程   resolve => then   reject => catch
-resolve(data) 
代码的编写顺序和执行顺序是一致的。异步问题就同步了
callback 读取性低，
-reject I/O类等操作有可能发生问题
-多个文件确保执行顺序，then 链在每个Promise then 里返回一个 promise 就可以一直.then 下去
-如果我我们要让多个文件并发去执行  当所有文件都读取完，再执行？怎么做？