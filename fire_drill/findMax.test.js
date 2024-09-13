const {findMax} = require("./findMax.js");

let arrayNumbers = [2, 13, 5, 8, 16, 7]
	let largestNum = 16;

test("Display largest number",()=> {
		let result = findMax(arrayNumbers, largestNum);
		let expected = 16
		expect(expected).toBe(result);
})

