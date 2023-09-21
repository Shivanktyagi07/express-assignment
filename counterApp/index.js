const express = require('express');
const app = express();

let counter= 0;

app.use(express.json());

app.get('/', (req, res) =>{
    res.json({counter})
})

app.post('/increment',(req,res)=>{
    counter+=1;
    res.json({counter})
})

app.post('/decrement', (req,res)=>{
    counter-=1;
    res.json({counter});
})

app.listen(3000,()=>{
    console.log("server is running at 3000 port...");
})