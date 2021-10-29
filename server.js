const PORT = 8000
const express = require('express')
const app = express()

app.get('/data', (req, res)=>{
    res.send("helllllllllllooooooooooooooooooooo")
})

app.post('/post', (req, res)=>{
    res.send(req.body.name)
})

app.listen(PORT, ()=>{
    console.log(`Server Started at port ${PORT}`)
})