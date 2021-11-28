

const a = jest.mock('uuid', () => {


  const uuidv4 = () => { return "10" }
  return { v4: uuidv4 }

});


const User = require("../dto")


const person = {
  name: "Macbook",
  age: 10,
  hobbies: []
}

const customId = "aaa"
//jest.spyOn()
test("correct returning", () => {
  const user = new User(person, customId)
  expect(user).toEqual({ "age": 10, "hobbies": [], "id": "aaa", "name": "Macbook" })
})

test("correct returning", () => {


  const user = new User(person)
  expect(user).toEqual({ "age": 10, "hobbies": [], "id": "10", "name": "Macbook" })
})