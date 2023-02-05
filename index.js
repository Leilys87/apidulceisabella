const express = require('express')
const app = express()
require('dotenv').config({ path: './.env' })
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', function(req,res){
    res.send(`Dulce isabella's server is ONLINE!`)
})

app.listen(PORT, console.log(`Server running on port ${PORT}`))