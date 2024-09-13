let arrayNumbers =  [2, 13, 5, 8, 16, 7]

	function findMax(arrayNumbers) {
		let maximum = arrayNumbers[0];

		for (let index = 1; index < arrayNumbers.length; index++) {
		if (arrayNumbers[index] > maximum) {
		maximum = arrayNumbers[index];
		}
			}
	return maximum;
}

let value = findMax([1,2,3,4,5,6,7,8,9]);
console.log(value);

module.exports = {findMax};




    
