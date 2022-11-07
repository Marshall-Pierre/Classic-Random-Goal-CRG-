const express = require('express')
const app = express()

let score;

app.post('/match', function(req, res) {
    console.log(req.body)
    score = req.body
    res.sendStatus(200)
})

app.listen(1743, ()=>{
    console.log('en attente des requetes')
})
