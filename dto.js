const { v4: uuidv4 } = require('uuid');

Object.prototype.typeString=function(objectPropertyName,requiredType){
    if(this.valueOf() ===""){ throw new Error(`The >>    ${objectPropertyName}     << must not be empty `)}
     if(typeof this.valueOf() !==requiredType){ throw new Error(`the type of>>   ${ objectPropertyName}   <<must be ${requiredType}`)}
    else return this.valueOf()
    
   }  


class User{
constructor(schema,idFromUrl){

if(!schema.name){throw new Error("name not provided")}
if(!schema.age){throw new Error("Age not provided")}
if(!Array.isArray(schema.hobbies)){throw new Error("Hobbies must be array")}
this.name=schema.name.typeString("name","string")
this.age=schema.age.typeString("age","number")
this.hobbies=schema.hobbies




return{
id:idFromUrl?idFromUrl: uuidv4(),
name:this.name,
age:this.age,
hobbies: this.hobbies




   


}

    
}





}
module.exports=User
