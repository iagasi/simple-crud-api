function personRoutes(req, res) {
   // const getAllPersons = require("../controllers/getAllPersons")
   const persons=require("../controllers/Persons")
  
if(req.url=="/"){return res.end("goto persons")}
if(req.url=="/favicon.ico"){null}
if((/\/persons\/([a-z,A-Z,0-9])/).test(req.url ) ||req.url=="/persons"||req.url=="/persons/"){persons(req,res)}


  else{res.writeHead(404,)
res.end(JSON.stringify({meaagse:"this route not exists"}))
}

}

module.exports = personRoutes