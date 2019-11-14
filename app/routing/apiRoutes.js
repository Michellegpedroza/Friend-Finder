//Required Dependencies
const path = require (`path`)

//Routes
module.exports = app => {

  //Display JSON fo all possible friends
  app.get(`/api/friends`, (req, res) => {
    res.json(friends)
  })

  //Handling incoming survey results and compatibility Logic
  app.post(`api/friends`, (req, res) = >{
    

  } )

}
