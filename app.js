const express = require('express')
const cookieParser = require("cookie-parser");
require('dotenv').config()

const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
 
app.set('views','./src/views')
app.set('view engine', 'ejs')

/*app.post('/cookies', async (req, res) =>{
  const 
})*/
app.post('/login', async (req,res) => {
    
    res.render('index')
})

module.exports = app;