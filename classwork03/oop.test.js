const Calculator = require("./oop")

test('test that claculator can add', ()=>{
    
let myCalculator = new Calculator(8,9);
let result = myCalculator.add();
expect(result).toBe(17)
})
