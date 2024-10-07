const Person = require("./contructorfunc")

test('test for name attribute', ()=>{
    
let firstPerson = new Person("miracle", "female");
expect(firstPerson.name).toBe("miracle")
})

