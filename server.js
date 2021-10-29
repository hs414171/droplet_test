const PORT = 8000
const express = require('express')
const app = express()

app.use(express.json())

app.get('/data', (req, res)=>{
    res.send("helllllllllllooooooooooooooooooooo")
})

app.post('/post', (req, res)=>{
    console.log(req.body)
    res.send(req.body.name)
})

app.listen(PORT, ()=>{
    console.log(`Server Started at port ${PORT}`)
})