/// <reference types="cypress" />

describe('JSON objects', () => {
    it('JSON objects', () => {
        cy.openHomePage()
        const simpleObject = { "key": "value", "key2": "value2" }

        const simpleArrayofValue = ["one", "two"]

        const arrayOfObjects = [{ "key": "value" }, { "key2": "value2" }, { "key3": "value3" }]

        const typesOfdate = { "string": "this is a string", "number": "10" }

        const mix = {
            "FirstName": "Oksana",
            "LastName": "Kucher",
            "Age": 35,
            "Studens": [
                {
                    "firstName": "Sara",
                    "lastName": "Kucherenko"
                },
                {
                    "firstName": "John",
                    "lastName": "Smith"
                }
            ]
        }

        console.log(simpleObject.key2)
        console.log(simpleObject["key2"])
        console.log(simpleArrayofValue[1])
        console.log(arrayOfObjects[2].key3)
        console.log(mix.Studens[0].firstName)
    })
})