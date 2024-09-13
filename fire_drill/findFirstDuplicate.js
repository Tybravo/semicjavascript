let arrayNumbers = [2,3,3,4,5,6,6,7,8]
//let arrayNumbers = [2,3,4,5,6,7,8]
//let arrayNumbers = [1,2,1,2]

function findFirstDup(arrayNumbers) {
		let duplicateNum = 0;
		let noDuplicate = -1;
    
		
	//for (let index = 0; index < arrayNumbers.length; index++) {
		 for (let index = arrayNumbers.length - 2; index > 0; index = index - 1) {
			for(let count = index + 1; count < arrayNumbers.length; count++){

			if(arrayNumbers[index] == arrayNumbers[count]){
				duplicateNum = arrayNumbers[index]
				
				}
			}
		}
			return duplicateNum;	

			

}
		
			
			

module.exports = {findFirstDup};

