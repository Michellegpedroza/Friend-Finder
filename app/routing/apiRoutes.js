//Required Dependencies
const path = require(`path`)

//Require the list of friends from friends.js
const friends = require(`../data/friends.js`)

//Routes
module.exports = app => {

  //Display JSON for all possible friends
  app.get(`/api/friends`, (req, res) => {
    res.json(friends)
  })

  //Handling incoming survey results and compatibility Logic
  app.post(`/api/friends`, (req, res) => {
   
  })

}
