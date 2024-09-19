const {sumNumInTwos} = require("./addNumArray");

    test("Display sum of numbers in twos",()=> {
		let arrayNumbers = [2,3,4,5,6,7]
		let result = sumNumInTwos(arrayNumbers);
		expect(result).toEqual([5,9,13]);
})



