const {revArray} = require("./reverseArray.js");

	let arrayNumbers = [2,4,6,8]
	let reversed= [8,6,4,2];

test("Display reveresed array",()=> {
		let arrayNumbers = [2,4,6,8]
		let result = revArray(arrayNumbers);
		expect(result).toEqual([8,6,4,2]);
})

