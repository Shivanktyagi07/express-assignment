const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send("Iam homePage")
})

app.get('/about', (req, res) =>{
    res.send("I am About Page")
})

app.get('/contact', (req,res)=>{
    res.send("<h1>support@pwskills.com</h1>")
})

app.listen(5000, ()=>{
    console.log("server is running at 5000 localhost");
})