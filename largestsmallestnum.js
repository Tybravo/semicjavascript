let numbers = [2, 1, 6, 9, 8];

	function largestSmallest(numbers) {
		let smallest = numbers[0];
		let largest = numbers[0];
    
	for (let index = 1; index < numbers.length; index++) {
		if (numbers[index] > largest) {
		largest = numbers[index];
		}
		if (numbers[index] < smallest) {
		smallest = numbers[index];
		}
	}
	return {largest, smallest};
}

let result = largestSmallest(numbers);

let getArray = [result.largest, result.smallest];
console.log(getArray);



