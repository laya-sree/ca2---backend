const express = require('express');
const app = express();
const port = 3000;

const users =[
    {username:"alice",age:25,email:"alice@example.com"},
    {username:"bob",age:30,email:"bob@example.com"},
    {username:"charlie",age:28,email:"charlie@exampile"},
];

app.get("/", (req,res) => {
    res.send("EXpresss server is running")
})

app.get("/user", (req,res)=>{
    const userQuery = req.query.user;

    if (!userQuery || userQuery.trim() === ""){
        return res.status(400).json({message: "User parameter cannot be empty"})
    }

    const user = users.find(u => u.username.toLowerCase() === userQuery.toLowerCase());
if (user) {
    return res.json({message:"user found",data:user})
}else{
    return res.status(404).json({message: "User not found"})
}
})




app.listen(port, () => {
    console.log('server is running on http://localhost:${port}')
})  