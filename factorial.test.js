const {factorize} = require("./factorial.js");

	let factorNum = 5
	let getFactorial = 120;

test("Display factorial",()=> {
		let result = factorize(factorNum, getFactorial);
		let expected = 120
		expect(expected).toBe(result);
})

