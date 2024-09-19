let factorNumber = 5

function factorize(factorNumber) {
		let factorNum = 1;
    		let count = 1;

		for(count=1; count <= factorNumber; count++){
		factorNum = factorNum * count;
		}
	
		return factorNum;

}

module.exports =  {factorize};


