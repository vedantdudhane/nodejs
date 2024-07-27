const http = require("http");

const port = 8081;

http.createServer((req, res)=>{
    // call back func   
    res.writeHead(200, {"Content-Type": "type/html"});
    res.write("<h2>Server stared 123</h2>");
    res.end();
})
.listen(port, ()=>{    
    // call back func
    console.log(`Nodejs server started running at port ${port}`);
});