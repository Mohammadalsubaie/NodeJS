const express = require('express');
const bodyParser = require('body-parser');
const { type } = require('express/lib/response');
const app = express()
app.use(bodyParser.json())

app.get('/test',(req,res)=>{
    res.send('Connected')
})

app.post('/names',(req,res)=>{
    let data = req.body

    data.forEach(element=> {
        console.log(element.name)
        if(element.name ==="M" || element.name ==="B"){
            return res.send('correct')
        }   
    });
    return res.status(202).send('false')
})

const port= process.env.PORT || 1110
app.listen(port, ()=> console.log(`listen to ${port}`));

