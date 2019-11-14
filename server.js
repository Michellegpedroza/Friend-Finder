//Required Dependencies
const express = require(`express`)
const path = require(`path`)

//Create server
const app = express()

//Middleware
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



//Listen on a port
app.listen(3000)