const {findFirstDup} = require("./findFirstDuplicate.js");


	let arrayNumbers =[2,3,3,4,5,6,6,7,8]
	let firstDuplicate = 3

test("Find first duplicate",()=> {
		let result = findFirstDup(arrayNumbers, firstDuplicate);
		let expected = 3
		expect(expected).toBe(result);
})




