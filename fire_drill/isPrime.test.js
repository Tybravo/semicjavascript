const {isPrimeNum} = require("./isPrime.js");

	let number = 10
	let isPrime = true;

test("Display true or false when check for prime",()=> {
		let result = isPrimeNum(number, isPrime);
		let expected = true
		expect(expected).toBe(result);
})

