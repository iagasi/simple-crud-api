const getAllPersons=(req,res)=>{
 res.writeHead(200).write("All persons")
 res.end()

}


module.exports=getAllPersons