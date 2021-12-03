const customHttp = require("./httpmaker")
require('dotenv').config()
let id = ""



test("TEST gell all persons must be array ", async () => {
    const url = {
        hostname: 'localhost',
        port: process.env.PORT,
        path: '/persons/',
        method: 'GET',
    }


    const response = await customHttp.request(url, {})
    expect(typeof response.body).toBe("object")
    expect(response.body).toBeDefined()

})




test("Creates new Person", async () => {

    const url = {
        hostname: 'localhost',
        port: process.env.PORT,
        path: '/persons/',
        method: 'POST',
    }
    const person = {
        name: "Person",
        age: 22,
        hobbies: ["not have hobies"]
    }

    const response = await customHttp.request(url, person)

    expect(response.body.id).toBeDefined()
    expect(response.body.name).toBe("Person")
    expect(response.body.age).toBe(22)
    expect(response.body.hobbies).toBeDefined()
    id = response.body.id
})



test("get person by id", async () => {
    const url = {
        hostname: 'localhost',
        port: process.env.PORT,
        path: `/persons/${id}`,
        method: 'GET',
    }

    const response = await customHttp.request(url, {})
    expect(response.body.id).toBe(id)
    expect(response.body.name).toBe("Person")
})



test("Modifies Person ,id remains same", async () => {
    const url = {
        hostname: 'localhost',
        port: process.env.PORT,
        path: `/persons/${id}`,
        method: 'PUT',
    }


    const person = {
        name: "Modified",
        age: 22,
        hobbies: ["hghgh"]
    }



    const response = await customHttp.request(url, person)
    expect(response.body.id).toBe(id)
    expect(response.body.name).toBe("Modified")
})


test("Deletes Person", async () => {
    const url = {
        hostname: 'localhost',
        port: process.env.PORT,
        path: `/persons/${id}`,
        method: 'DELETE',
    }




    const response = await customHttp.request(url, {})

    expect(response.statusCode).toBe(204)

})




test("TEST gell all persons must be array ", async () => {
    const url = {
        hostname: 'localhost',
        port: process.env.PORT,
        path: '/persons/',
        method: 'GET',
    }


    const response = await customHttp.request(url, {})
    expect(typeof response.body).toBe("object")
    expect(response.body).toBeDefined()
})
