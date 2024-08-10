const express = require("express");
const app = express();
app.use(express.json());

const port =8081;

const toDoList=["learn", "appply things", "succeed"];
// instead of https://localhost:8081/todos we use->
app.get("/todos",(req,res)=> {
    // instead of res.writehead(200) & res.write(toDoList) we write
    res.status(200).send(toDoList);
});
app.post("/todos", (req,res) =>{
    newToDoItem = req.body.name;
    toDoList.push(newToDoItem);
    res.status(201).send({message: "Item added successfully"});
})
app.delete('/todos',(req,res) =>{
    const deleteThisItem = req.body.name;
    toDoList.find((elem,index)=>{
        if(elem===deleteThisItem){
            toDoList.splice(index,1);
        }
        res.status(202).send({message: "Item deleted successfully"})
    })
})
app.listen(port, () =>{
    console.log(`Nodejs started working on port ${port}`);
})