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
    // Capture the user input object
    let userInput = req.body

    let userResponses = userInput.scores

    //Friend match
    let matchName = ''
    let matchImage = ''
    let totalDifference = 10000 

    // Review all existing friends in the list
    for (let i = 0; i < friends.length; i++) {

      // differences for each question
      let diff = 0
      for (let j = 0; j < userResponses.length; j++) {
        diff += Math.abs(friends[i].scores[j] - userResponses[j]);
      }

      // If lowest difference, record the friend match
      if (diff < totalDifference) {

        totalDifference = diff
        matchName = friends[i].name
        matchImage = friends[i].photo
      }
    }

    // Add new user
    friends.push(userInput)

    // Send appropriate response
    res.json({ status: 'OK', matchName: matchName, matchImage: matchImage })
  })

}
