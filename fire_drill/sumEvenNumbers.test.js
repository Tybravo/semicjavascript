const {sumEvenNumbers} = require("./sumEvenNumbers.js");


	let arrayNumbers = [2,3,4,5,6,7,8]
	let sumEven = 20;

test("Sum even numbers",()=> {
		let result = sumEvenNumbers(arrayNumbers, sumEven);
		let expected = 20
		expect(expected).toBe(result);
})



