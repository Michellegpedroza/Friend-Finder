const path = require(`path`)

//Export the HTML routes
module.exports = (app) => {

  //Survey Page
  app.get(`/survey`, (req, res) => {
    res.sendFile(path.join(__dirname, `../public/survey.html`))
  })

  //Default - Home Page
  app.get(`/`, (req, res) => {
    res.sendFile(path.join(__dirname, `../public/home.html`))
  })

}