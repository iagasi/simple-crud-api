function personRoutes(req, res) {
   // const getAllPersons = require("../controllers/getAllPersons")
   const persons=require("../controllers/Persons")
  
if(req.url=="/"){  res.writeHead(404,);return res.end("goto persons/       >>  /  <<    after persons is important")}
if(req.url=="/favicon.ico"){null}
if(req.url=="/persons"){res.writeHead(404,);return res.end(JSON.stringify({meaagse:"GO-TO          persons/      "}))}
if((/\/persons\/([a-z,A-Z,0-9])/).test(req.url ) ||req.url=="/persons/"){persons(req,res)}


  else{res.writeHead(404,)
res.end(JSON.stringify({meaagse:"this route not exists"}))
}

}

module.exports = personRoutes