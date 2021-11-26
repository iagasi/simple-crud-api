const router=require("./routes/personRoutes")
const http = require('http');

require('dotenv').config()


const port=process.env.PORT||5001

const server=http.createServer((req,res)=>{
router(req,res)

})

server.listen(port,(err)=>{
    if(err){"listen eror"+err}
    else{console.log("Server running on port "+port);}
})

   


// const User=require("./dto")
// const schema={
//     name:"a",
//     age:1,
//     hobbies:[]


// }
// const user =new User(schema)

// console.log(user);


