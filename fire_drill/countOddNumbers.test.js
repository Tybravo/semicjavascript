const {countOddNumbers} = require("./countOddNumbers.js");

	let arrayNumbers = [2, 11, 6, 7, 16, 13, 14]
	let totalCount = 3;

test("Display count odd number",()=> {
		let result = countOddNumbers(arrayNumbers, totalCount);
		let expected = 3
		expect(expected).toBe(result);
})

