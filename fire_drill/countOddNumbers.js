let arrayNumbers =  [2, 11, 6, 7, 16, 13, 14]

function countOddNumbers(arrayNumbers) {
		let countOddNum = 0;
    
		for (let index = 1; index < arrayNumbers.length; index++) {
			if(arrayNumbers[index] % 2 != 0){
				countOddNum += 1;
				}
			}
			return countOddNum;

}

module.exports =  {countOddNumbers};


