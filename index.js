
const router = require("./routes/personRoutes")
const http = require('http');

require('dotenv').config()



const port = process.env.PORT || 5001


const server = http.createServer((req, res) => {

  try { router(req, res) }
  catch (error) {
    res.writeHead(500)
    res.end("unhandled error" + error.message)
  }


})



server.listen(port, (err) => {
  if (err) { "listen eror" + err }
  else { console.log("Server running on port " + port); }
})
















