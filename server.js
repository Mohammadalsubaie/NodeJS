const express = require('express');
const app = express()

app.get('/Hello',(req,res)=>{
    res.send('Hello bassam & Mohammad ')
});


app.listen(1221,()=>{
    console.log('PORT:1221')
})