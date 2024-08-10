const http = require("http");

const port = 8081;

// http.createServer((req, res)=>{
//     // call back func   
//     res.writeHead(200, {"Content-Type": "type/html"});
//     res.write("<h2>Server stared 123</h2>");
//     res.end();
// })

// HTTP methods
// Get :-Inorder to get data from server
// Post :- Sending data to server
// Delete :- deleting data from database
// patch :- updating certain fields
// put :- Full update

const toDoList = ["learn", "apply things", "succeed"];
http
.createServer((req, res) => {
const{method,url} = req;
if(url === "/todos"){
    if(method ==="GET"){
        res.writeHead(200, {"Content-Type": "type/html"});
        res.write(toDoList.toString());
    }else if(method==="POST"){
        let body=""
        req.on('error',(err)=>{
            console.log(err);
        }).on('data',(chunk)=>{
            body+=chunk;
            // console.log(chunk);
        }).on('end',()=>{
            body = JSON.parse(body);
            // console.log("data: ",body)
            let newTodo=toDoList;
            newTodo.push(body.item);
              console.log(newTodo);
        })
    }else if(method==="DELETE"){
        let body="";
        req
        .on("error", (err)=>{
            console.error(err);
        })
        .on("data", (chunk)=>{
            body += chunk;
        })
        .on("end", ()=>{
            body=JSON.parse(body);

            let deleteThisItem = body.item;
            for(let i=0;i<toDoList.length;i++){
                if(toDoList[i] === deleteThisItem){
                    toDoList.splice(i,1);
                    break;
                }else{
                    console.error("Errroorrrrrr!!!!!!");
                   
                }
            } 
        });
    }
    else{
        res.writeHead(501);
    }
}else{
    res.writeHead(404);
}
res.end()
})
.listen(port, ()=>{    
    // call back func
    console.log(`Nodejs server started running at port ${port}`);
});