const Dto = require("../dto");

let arrayOfPersons = [];

function makeurl(dirtyurl) {
    const url = dirtyurl.split("/");
    return url[2];
}


function testUuidu(url, res) {
    if (!/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(url)) {
        res.writeHead(400);
        res.end("Not valid UUID");
        return false
    }
    else { return true }
}




const persons = (req, res) => {
    const url = makeurl(req.url);

    if (url === "") {
        if (req.method == "GET") {
            res.writeHead(201);
            return res.end(JSON.stringify(arrayOfPersons));
        }
    }


    if (req.method == "GET") {
        
        const valid = testUuidu(url, res)
        if (valid) {
            const person = arrayOfPersons.find((element) => element.id === url);
            if (person) { res.end(JSON.stringify(person)) }
            else { res.writeHead(404); res.end("th Use with Such Id not found") }
        }
    }

    if (req.method == "POST") {

        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        });
        req.on("end", () => {
            try {

                body = JSON.parse(body);
                const person = new Dto(body);
                arrayOfPersons.push(person);
                res.writeHead(201)
                res.end(JSON.stringify(person));
            }

            catch (err) {
                res.writeHead(400)
                res.end(err.message)
            }
        })






    }

    if (req.method == "PUT") {
        const valid = testUuidu(url, res)
        if (!valid) { return }
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        });
        req.on("end", () => {

            try {
                body = JSON.parse(body);
                const person = new Dto(body, url);
                if (arrayOfPersons === undefined || arrayOfPersons.length == 0) { throw new Error("The persons list is empty--create new persond thee you cat update it") }
                arrayOfPersons.forEach((element, i) => { if (element.id === url) { arrayOfPersons[i] = person; } else { throw new Error("Cannot find person with such id for uodating") } })

                res.writeHead(200)
                res.end( JSON.stringify(person));
            }
            catch (err) {
                res.writeHead(400)
                res.end(JSON.stringify(err.message))
            }
        });








    }




    if (req.method == "DELETE") {
        
        const valid = testUuidu(url, res)
        if (!valid) { return }
        arrayOfPersons.forEach((element,i)=>{
     if(url==element.id){
       arrayOfPersons.splice(i,1)
             res.writeHead(204)
           return  res.end()     
            

     }
    

                 else{
      res.writeHead(404)
            res.end("Id not found for deleting")
            }



        })
     
      

      

 

    
       

        
        

        

    }


}




module.exports = persons;
