let arrayNumbers = [2,3,4,5,6,7,8]

	function sumEvenNumbers(arrayNumbers) {
		let sumEvenNum = arrayNumbers[0];
    
		for (let index = 1; index < arrayNumbers.length; index++) {
			if(arrayNumbers[index] % 2 == 0){
				sumEvenNum = sumEvenNum + arrayNumbers[index];
				}
			}
			return sumEvenNum;

}

module.exports = {sumEvenNumbers};

//let result = sumEvenNumbers(arrayNumbers)
//console.log(result);



		












