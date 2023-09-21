const express = require ('express');
const app = express();

app.get('/random', (req, res) => {
    const min = 1;
    const max = 100;
    const randomNumber = Math.floor(Math.random() * (max-min+1))+min;
    res.json({randomNumber});
})

app.listen(3040, ()=> {
    console.log("server is runing at 3040...");
})