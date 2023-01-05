const dotenv = require('dotenv')
const express = require('express')
const path = require('path')
const app = express()

dotenv.config({path:'./.env'})
const PORT = process.env.PORT || 4000

app.get('/home',(req,res)=>{
    return res.status(200).sendFile(path.join(__dirname + '/page/index.html'))
})
app.get('/about' , (req,res)=>{
    return res.status(200).sendFile(path.join(__dirname + '/page/about.html'))
})
app.get('/profile', (req,res)=>{
    return res.status(200).sendFile(path.join(__dirname + '/page/profile.html'))
})
app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})