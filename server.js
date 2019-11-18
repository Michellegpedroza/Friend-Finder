//Required Dependencies
const express = require(`express`)
const path = require(`path`)

//Create server
const app = express()

//Middleware
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Add the application routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app)
require(path.join(__dirname, './app/routing/htmlRoutes'))(app)


//Listen on a port
app.listen(3000)