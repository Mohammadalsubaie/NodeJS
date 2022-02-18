const express = require('express');
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
const obj = [
   {id: 1 , nameOne : 'Mohammad'},
   {id: 2 , nameTwo : 'Bassam'}
]

app.get('/',(req,res)=>{
    res.send('go to hello path ')
})

app.get('/hello',(req,res)=>{
    console.log(res.send('Hello bassam & Mohammad '))
    res.send(obj)
});

// app.get('/hello/check/:id', (req,res)=>{
//     //res.send(req.params.name)
//     const objFind = obj.find(c => c.id === parseInt(req.params.name))
//     if(!objFind) res.status(404).send('Ooh somthing wrong')
//     res.send(objFind)
// })

app.post('/hello/check',(req,res)=>{
    console.log(req.body.per)
    res.send('Im a postman')
})

const port= process.env.PORT || 1221
app.listen(port, ()=> console.log(`listen to ${port}`));